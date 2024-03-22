'use client'
import { useRef } from 'react'
import { MarkDownData } from '../../(home)/component/Home'
import OverViewSection from './_component/OverViewSection'
import ScrollSpy from './_component/ScrollSpy'
import SpecificationSection from './_component/SpecificationSection'

export default function Cpage({ content }: { content: MarkDownData }) {
  const overViewRef = useRef<HTMLElement | null>(null)
  const specificationRef = useRef<HTMLElement | null>(null)

  return (
    <>


      <div className="sticky top-24 h-fit min-h-[calc(100vh-72px-6rem-3.5rem)]">
        <ScrollSpy
          overViewRef={overViewRef}
          specificationRef={specificationRef}
        />
      </div>

      <div className="w-full lg:w-3/4 flex flex-col lg:gap-8 lg:mx-10">
        <OverViewSection content={content} overViewRef={overViewRef} />
        {/* <div className="lg:hidden bg-white p-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:my-6">
            <hr className="mx-4 border-t border-gray-300" />
          </div> */}

        {/* <ProjectSummarySection
          content={content}
          /> */}

        <div className="lg:hidden bg-white mx-4 lg:rounded-md lg:shadow-md items-center w-auto lg:mx-10 lg:my-6">
          <hr className="lg:mx-4 border-t border-gray-300" />
        </div>

        <SpecificationSection
          content={content}
          specificationRef={specificationRef}
        />
      </div>
    </>
  )
}
