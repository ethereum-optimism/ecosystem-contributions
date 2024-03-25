'use client'
import React, { useState, useEffect } from 'react'
export default function ScrollSpy({
  overViewRef,
  specificationRef,
}: {
  specificationRef: React.MutableRefObject<HTMLElement | null>
  overViewRef: React.MutableRefObject<HTMLElement | null>
}) {
  const [currentContent, setCurrentContent] = useState<string>('Overview')

  useEffect(() => {
    const handleScroll = () => {
      if (overViewRef.current && specificationRef.current) {
        const { clientHeight: overviewHeight } = overViewRef.current
        // const { clientHeight: specificationHeight } = specificationRef.current;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop < overviewHeight) {
          setCurrentContent('Overview')
        } else {
          setCurrentContent('Specification')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [overViewRef, specificationRef])

  return (
    <div className="hidden border lg:block bg-white p-4 rounded-md  w-56 ">
      <div className="mx-4 my-4 font-medium text-gray-500 flex flex-col items-start gap-4">
        <div className="text-sm text-gray-900 font-bold">ON THIS PAGE</div>
        <ul className="flex flex-col text-sm items-start gap-4">
          <li className="list-none">
            <a
              id="Anchor"
              className={`active flex cursor-pointer hover:text-primaryRed ${
                currentContent === 'Overview'
                  ? 'pl-2 text-red-600 border-l-[3px] border-primaryRed'
                  : ''
              }`}
              onClick={() => {
                if (overViewRef && overViewRef.current) {
                  overViewRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'start',
                  })
                }
              }}
              // href="#Overview"
            >
              Overview
            </a>
          </li>
          {/* <li>
            <a
              id="Anchor"
              className={`active flex ${
                currentContent === "ProjectSummary" ? "pl-2 text-red-600 border-l-[3px] border-primaryRed" : ""
              }`}
              href="#ProjectSummary"
            >
              Project Summary
            </a>
          </li> */}
          <li className="list-none">
            <a
              id="Anchor"
              className={`active flex cursor-pointer hover:text-primaryRed ${
                currentContent === 'Specification'
                  ? 'pl-2 text-red-600 border-l-[3px] border-primaryRed'
                  : ''
              }`}
              onClick={() => {
                if (specificationRef && specificationRef.current) {
                  window.scrollTo({
                    top: specificationRef.current.offsetTop - 72,
                    behavior: 'smooth',
                  })
                  // specificationRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"  });
                }
              }}
              // href="#Specification"
            >
              Specification
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
