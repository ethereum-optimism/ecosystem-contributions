'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import sendToMixpanel from '../lib/sendToMixpanel';

export function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
      // for MixPanel implementation
      console.log("route change to: ", pathname);
      sendToMixpanel("page_view")

  }, [pathname])

  return <>
  </>;
}