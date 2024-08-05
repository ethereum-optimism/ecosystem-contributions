'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import sendToMixpanel from '../lib/sendToMixpanel'
import {
  PAGE_VIEW,
  PROJECTNAME_PROPERTY,
} from '@/public/static/mixpanel/event-name'

export function RouteChangeListener() {
  let pathname = usePathname()
  const hasRun = useRef<{ [key: string]: boolean }>({})
  useEffect(() => {
    sendToMixpanel(PAGE_VIEW)
    return () => {
      pathname = ''
    }
  }, [pathname])

  return <></>
}
