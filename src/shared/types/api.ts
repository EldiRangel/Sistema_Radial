export interface AppInfo {
  version: string
  platform: string
  isPackaged: boolean
}

export interface RadioFlowApi {
  app: {
    getInfo: () => Promise<AppInfo>
  }
}
