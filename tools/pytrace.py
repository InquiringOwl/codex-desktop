#!/usr/bin/env python3
"""Records real Python execution traces for Computer Science labs.

Lab programs live in web/cs-src/<topic-id>.py, one or more blocks:
    # @program swap            starts a program (name: letters, digits, -)
    # @input 7                 one line of stdin (repeatable; input() echoes it like a terminal)
    # @file scores.txt         a file the program can open (then its lines as  # | text ); runs in a temp folder
    # @heap                    draw ints, floats and strs as objects too (names → objects arrows), for rebinding lessons
    a = 1
    ...
Each block runs in real CPython with sys.settrace, so every step a lab shows is what Python actually does.
Output: web/traces/<topic-id>.js  →  CSTraces["<id>/<name>"] = {code, steps, out, error}
  step = {l: line about to run (1-based in the block), ev: "line"|"call"|"return"|"exc"|"end" (last step: program finished, l = 0),
          f: [{fn, l, vars: {name: val}}] outermost frame first, h: {ref: obj}, o: stdout length so far, r?: returned val}
  val  = ["v", repr] immutable value · ["r", ref] reference to a heap object · ["fn", name] · ["cls", name]
  obj  = {t: "val" (only with @heap: c = type, v = repr)|"list"|"tuple"|"dict"|"set"|"obj", v: [...] (dict: [[k, v], …]; obj: [[attr, v], …]), c?: class name}
Ids starting with _ (e.g. _demo-kit, the kit's test fixture) write tests/fixtures/<id>.js instead, so they never ship.
Run:  python3 tools/pytrace.py [ids]      (all ids when none given)
      python3 tools/pytrace.py --check    exit 1 if a trace was recorded from older program source (used by checks/_lib/cs.py)
Record traces on Python 3.10 (Devon's Mac; CI is pinned to it) so error messages match the pages.
"""
import sys, os, io, re, json, builtins, types, tempfile, shutil, hashlib
PYV = '%d.%d' % sys.version_info[:2]

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC, OUT = os.path.join(ROOT, 'web', 'cs-src'), os.path.join(ROOT, 'web', 'traces')
FIX = os.path.join(ROOT, 'tests', 'fixtures')   # ids starting with _ are kit test fixtures, kept out of the app
MAX_STEPS = 600
PRIM = (int, float, complex, str, bool, type(None), bytes, range)


def parse_blocks(text):
    blocks, cur = [], None
    for line in text.split('\n'):
        m = re.match(r'#\s*@program\s+([A-Za-z0-9-]+)\s*$', line)
        if m:
            cur = {'name': m.group(1), 'input': [], 'files': {}, 'heap': False, 'lines': []}; blocks.append(cur); fname = None; continue
        if cur is None:
            continue
        m = re.match(r'#\s*@input\s?(.*)$', line)
        if m and not cur['lines']:
            cur['input'].append(m.group(1)); continue
        if re.match(r'#\s*@heap\s*$', line) and not cur['lines']:
            cur['heap'] = True; continue
        m = re.match(r'#\s*@file\s+(\S+)\s*$', line)
        if m and not cur['lines']:
            fname = m.group(1); cur['files'][fname] = []; continue
        m = re.match(r'#\s*\|\s?(.*)$', line)
        if m and fname and not cur['lines']:
            cur['files'][fname].append(m.group(1)); continue
        cur['lines'].append(line)
    for b in blocks:
        while b['lines'] and not b['lines'][-1].strip():
            b['lines'].pop()
        b['code'] = '\n'.join(b['lines']) + '\n'
    return blocks


def run(code, stdin_lines, files=None, all_heap=False):
    out = io.StringIO()
    feed = list(stdin_lines)
    steps, heap_ids = [], {}

    def ref(o):
        return heap_ids.setdefault(id(o), 'o%d' % (len(heap_ids) + 1))

    def enc(v, heap, depth=0):
        if all_heap and isinstance(v, (int, float, str)) and not isinstance(v, bool):
            r = ref(v)
            heap[r] = {'t': 'val', 'c': type(v).__name__, 'v': repr(v)}
            return ['r', r]
        if isinstance(v, bool) or v is None or isinstance(v, PRIM):
            return ['v', repr(v)]
        if isinstance(v, types.FunctionType):
            return ['fn', v.__name__]
        if isinstance(v, type):
            return ['cls', v.__name__]
        if isinstance(v, (types.ModuleType, types.BuiltinFunctionType)):
            return None
        if isinstance(v, io.IOBase):
            return ['v', "<file %r%s>" % (getattr(v, 'name', '?'), ' closed' if v.closed else '')]
        r = ref(v)
        if r not in heap and depth < 8:
            heap[r] = None
            if isinstance(v, (list, tuple, set, frozenset)):
                items = sorted(v, key=repr) if isinstance(v, (set, frozenset)) else v
                heap[r] = {'t': type(v).__name__ if not isinstance(v, frozenset) else 'set', 'v': [enc(x, heap, depth + 1) for x in items]}
            elif isinstance(v, dict):
                heap[r] = {'t': 'dict', 'v': [[enc(a, heap, depth + 1), enc(b, heap, depth + 1)] for a, b in v.items()]}
            else:
                attrs = getattr(v, '__dict__', {})
                heap[r] = {'t': 'obj', 'c': type(v).__name__, 'v': [[a, enc(b, heap, depth + 1)] for a, b in attrs.items() if not a.startswith('__')]}
        return ['r', r]

    def snapshot(frame, ev, ret=None):
        chain = []
        f = frame
        while f is not None and f.f_code.co_filename == '<lab>':
            chain.append(f); f = f.f_back
        chain.reverse()
        heap, frames = {}, []
        for f in chain:
            vs = {}
            for k, v in f.f_locals.items():
                if k.startswith('__') or v is lab_input:
                    continue
                e = enc(v, heap)
                if e is not None:
                    vs[k] = e
            frames.append({'fn': f.f_code.co_name if f.f_code.co_name != '<module>' else 'global', 'l': f.f_lineno, 'vars': vs})
        s = {'l': frame.f_lineno, 'ev': ev, 'f': frames, 'h': heap, 'o': len(out.getvalue())}
        if ev == 'return':
            s['r'] = enc(ret, heap) or ['v', repr(ret)]
        steps.append(s)

    def tracer(frame, ev, arg):
        if frame.f_code.co_filename != '<lab>':
            return None
        if len(steps) >= MAX_STEPS:
            raise RuntimeError('trace longer than %d steps; shorten the program' % MAX_STEPS)
        if ev in ('line', 'call', 'return'):
            snapshot(frame, ev, arg)
        elif ev == 'exception':
            snapshot(frame, 'exc')
        return tracer

    def lab_input(prompt=''):
        out.write(str(prompt))
        if not feed:
            raise EOFError('the program asked for more input than its # @input lines give')
        v = feed.pop(0); out.write(v + '\n'); return v

    g = {'__name__': '__main__', '__builtins__': builtins, 'input': lab_input}
    error = None
    old, cwd = sys.stdout, os.getcwd()
    tmp = tempfile.mkdtemp(prefix='pytrace-')
    for name, lines in (files or {}).items():
        with open(os.path.join(tmp, name), 'w', encoding='utf-8') as fh:
            fh.write('\n'.join(lines) + '\n')
    os.chdir(tmp)
    sys.stdout = out
    try:
        comp = compile(code, '<lab>', 'exec')
        sys.settrace(tracer)
        exec(comp, g)
    except Exception as e:  # programs may end in an error on purpose (exceptions topic)
        error = '%s: %s' % (type(e).__name__, e)
    finally:
        sys.settrace(None); sys.stdout = old; os.chdir(cwd); shutil.rmtree(tmp, ignore_errors=True)
    # drop the module-level "call" step and its final "return" (a lab shows lines, not the module frame entering)
    steps = [s for i, s in enumerate(steps) if not (s['ev'] in ('call', 'return') and len(s['f']) == 1)]
    heap = {}
    vs = {k: e for k, v in g.items() if not k.startswith('__') and v is not lab_input for e in [enc(v, heap)] if e is not None}
    steps.append({'l': 0, 'ev': 'end', 'f': [{'fn': 'global', 'l': 0, 'vars': vs}], 'h': heap, 'o': len(out.getvalue())})
    return {'code': code, 'input': stdin_lines, 'files': files or {}, 'steps': steps, 'out': out.getvalue(), 'error': error}


def src_hash(tid):
    with open(os.path.join(SRC, tid + '.py'), 'rb') as fh:
        return hashlib.sha1(fh.read()).hexdigest()[:12]


def build(tid):
    with open(os.path.join(SRC, tid + '.py'), encoding='utf-8') as fh:
        blocks = parse_blocks(fh.read())
    if not blocks:
        raise SystemExit('%s: no "# @program name" blocks' % tid)
    parts = ['/* generated by tools/pytrace.py from web/cs-src/%s.py — do not edit · source %s · Python %s */' % (tid, src_hash(tid), PYV),
             'window.CSTraces = window.CSTraces || {};']
    for b in blocks:
        t = run(b['code'], b['input'], b['files'], b['heap'])
        parts.append('CSTraces[%s] = %s;' % (json.dumps(tid + '/' + b['name']), json.dumps(t, ensure_ascii=False, separators=(',', ':'))))
    return '\n'.join(parts) + '\n'


def ids():
    return sorted(f[:-3] for f in os.listdir(SRC) if f.endswith('.py')) if os.path.isdir(SRC) else []


def main(argv):
    check = '--check' in argv
    want = [a for a in argv[1:] if not a.startswith('--')] or ids()
    stale = []
    for tid in want:
        path = os.path.join(FIX if tid.startswith('_') else OUT, tid + '.js')
        if check:
            # Stale = the program source changed since the trace was recorded. Version-independent on purpose:
            # traces are recorded once (on the Python named in the header) and must not be re-derived by CI's Python.
            head = open(path, encoding='utf-8').readline() if os.path.exists(path) else ''
            if ('source %s ' % src_hash(tid)) not in head:
                stale.append(tid)
        else:
            js = build(tid)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w', encoding='utf-8') as fh:
                fh.write(js)
            print('traced %s (%d KB)' % (tid, len(js) // 1024))
    if check and stale:
        print('stale traces: ' + ', '.join(stale) + ' (run python3 tools/pytrace.py ' + ' '.join(stale) + ')'); return 1
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
