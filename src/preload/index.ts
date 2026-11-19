import { contextBridge, ipcRenderer } from 'electron'
import { IPC_CHANNELS } from '../shared/constants'
import type { AppInfo, RadioFlowApi } from '../shared/types/api'

const api: RadioFlowApi = {
  app: {
    getInfo: () => ipcRenderer.invoke(IPC_CHANNELS.app.getInfo) as Promise<AppInfo>
  }
}

contextBridge.exposeInMainWorld('radioflow', api)
