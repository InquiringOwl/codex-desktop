"""Helpers for Computer Science check files:  from cs import *
Pages are checked by RUNNING their code in real Python, not by recomputing answers by hand.

    run(code, inputs=[])           → stdout as a string (input() reads from inputs and echoes like a terminal)
    run_err(code, inputs=[])       → (stdout, "ErrorType: message" or None)
    value(expr, setup="")          → repr of an expression after running setup
    traces_current(topic_id)       → True when web/traces/<id>.js matches web/cs-src/<id>.py (re-run tools/pytrace.py if not)
    dedent(s)                      strips the common indent of a code block typed in a check file
Compare with text(label, run(...), "text from the page") in the check file (exact match; same() is for maths).
"""
import io, os, sys, builtins, textwrap, contextlib, subprocess

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
dedent = lambda s: textwrap.dedent(s).strip('\n') + '\n'


def run_err(code, inputs=()):
    feed, out = list(inputs), io.StringIO()

    def fake_input(prompt=''):
        out.write(str(prompt)); v = feed.pop(0); out.write(v + '\n'); return v
    g = {'__name__': '__main__', '__builtins__': builtins, 'input': fake_input}
    err = None
    with contextlib.redirect_stdout(out):
        try:
            exec(compile(dedent(code), '<page>', 'exec'), g)
        except Exception as e:
            err = '%s: %s' % (type(e).__name__, e)
    return out.getvalue(), err


def run(code, inputs=()):
    out, err = run_err(code, inputs)
    if err:
        raise AssertionError('program raised ' + err + ' (use run_err if the error is the point)')
    return out


def value(expr, setup=''):
    g = {}
    exec(dedent(setup) if setup else '', g)
    return repr(eval(expr, g))


def traces_current(tid):
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'pytrace.py'), '--check', tid], capture_output=True, text=True)
    return r.returncode == 0
