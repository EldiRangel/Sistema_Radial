import type { RadioFlowApi } from '../shared/types/api'

declare global {
  interface Window {
    radioflow: RadioFlowApi
  }
}

export {}
