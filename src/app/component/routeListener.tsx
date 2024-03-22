'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ReactGA from "react-ga4";

export function RouteChangeListener() {
  const pathname = usePathname();
  if(typeof(process.env.GOOGLE_ANALYTICS_ID) === "string"){
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID as string);
  }

  useEffect(() => {
      if(pathname.includes("issue")){
        let temp = pathname.split("/")
        ReactGA.send({ hitType: "pageview", page: `/issue/${temp[1]}`, title: `Issue ${temp[1]}` });
      }
      else {
        ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
      }

  }, [pathname])

  return <>
  </>;
}