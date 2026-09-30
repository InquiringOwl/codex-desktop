const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('codexDesktop', {
  platform: process.platform,
  onUpdate: cb => ipcRenderer.on('update:status', (_e, s) => cb(s)),
  checkForUpdates: () => ipcRenderer.invoke('update:check'),
  installUpdate: () => ipcRenderer.invoke('update:install'),
  revealUpdate: () => ipcRenderer.invoke('update:reveal'),
  version: () => ipcRenderer.invoke('app:version')
});
