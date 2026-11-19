import { useEffect, useState } from 'react'
import type { AppInfo } from '@shared/types/api'

export function useAppInfo(): AppInfo | null {
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null)

  useEffect(() => {
    let isMounted = true
    const api = window.radioflow

    if (!api) {
      return () => {
        isMounted = false
      }
    }

    api.app
      .getInfo()
      .then((info) => {
        if (isMounted) {
          setAppInfo(info)
        }
      })
      .catch(() => {
        if (isMounted) {
          setAppInfo(null)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return appInfo
}
