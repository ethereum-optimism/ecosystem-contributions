'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
      // for MixPanel implementation

  }, [pathname])

  return <>
  </>;
}