'use client'
import { newFilter } from '../../../(home)/Text'
import { handleStatus } from '../../../(home)/component/GridCard'
import { MarkDownData } from '../../../(home)/component/Home'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import NavigateIcon from '@/public/icon/NavigateIcon'
import Link from 'next/link'
import Home from '@/public/icon/HomeIcon'

export default function OverViewSection({
  content,
  overViewRef,
}: {
  content: MarkDownData
  overViewRef: React.MutableRefObject<HTMLElement | null>
}) {
  return (
    <section
      ref={overViewRef}
      id="Overview"
      className="border-0 bg-white p-5 sm:p-6 md:p-10 lg:rounded-md lg:border items-center w-auto  lg:mb-6"
    >
      <Link href="/#project" className="flex gap-2 items-center ">
        <Home width="16" height="16" />
        <h6 className="text-sm font-medium text-gray-700 hover:underline">
          Home
        </h6>
      </Link>

      <div
        data-tooltip-id={content.contributions['execution-status']}
        className="flex gap-1 items-center py-0.5 px-1 border rounded-full border-gray-200 cursor-pointer hover:bg-gray-100 bg-gray-50 w-fit"
      >
        {handleStatus(content.contributions['execution-status'])}
        <ReactTooltip
          opacity={100}
          id={content.contributions['execution-status']}
          place="top"
          variant="error"
          style={{ zIndex: 99 }}
          className="text-sm font-light"
          content={
            newFilter['execution-status'].find(
              (elem) => elem.name === content.contributions['execution-status']
            )?.description
          }
        />
      </div>

      <h6 className="text-3xl font-bold my-4 ">{content.title}</h6>
      <hr className="hidden lg:block my-6  border-t border-gray-300" />
      <p className=" text-gray-500 text-base font-normal">
        {content.description}
      </p>

      <div className="flex flex-col  my-4 flex-wrap gap-2">
        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Category:</p>
          <h6 className="text-base font-medium text-gray-600">
            {content.category}
          </h6>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Type:</p>
          <h6 className="text-base font-medium text-gray-600">
            {content.type}
          </h6>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Effort:</p>
          <h6 className="text-base font-medium text-gray-600">
            {content.effort}
          </h6>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Skillsets:</p>
          {content['skill-sets'].map((item, i) => (
            <h6 className="text-base font-medium text-gray-600 " key={i}>
              {i !== content['skill-sets'].length - 1 ? item + ',' : item}
            </h6>
          ))}
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Authors:</p>
          <div className="flex flex-wrap gap-1">
            {content.authors.map((item, i) => (
              <h6 className="text-base font-medium text-gray-600" key={i}>
                {i !== content.contributions.contributors.length - 1
                  ? item + ','
                  : item}
              </h6>
            ))}
          </div>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Contributors:</p>
          <div className="flex flex-wrap gap-1">
            {content.contributions.contributors.length === 1 ? (
              <h6 className="text-base font-medium text-gray-600">-</h6>
            ) : (
              content.contributions.contributors.map((item, i) => (
                <h6 className="text-base font-medium text-gray-600" key={i}>
                  {i !== content.contributions.contributors.length - 1
                    ? item + ','
                    : item}
                </h6>
              ))
            )}
          </div>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Execution:</p>
          <h6 className="text-base font-medium text-gray-600">
            {content.contributions['execution-status'] || '-'}
          </h6>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <p className="text-base font-normal text-gray-400">Labels:</p>
          <div className="flex flex-wrap gap-1">
            {content.labels.map((item, i) => (
              <h6 className="text-base font-medium text-gray-600" key={i}>
                {i !== content.labels.length - 1 ? item + ',' : item}
              </h6>
            ))}
          </div>
        </div>

        <p className="text-base font-normal text-gray-400 mt-2">
          Reference Links:
        </p>
        <div className="flex flex-col gap-y-1">
          {content.contributions.links.length === 1 ? (
            <h6 className="text-base font-medium text-gray-600">-</h6>
          ) : (
            content.contributions.links.map((item, i) => (
              <h6 className="text-base font-medium text-gray-600" key={i}>
                {i !== content.contributions.links.length - 1
                  ? item + ','
                  : item}
              </h6>
            ))
          )}
        </div>
        <a
          className="w-fit mt-4 border px-8 py-3 bg-[#ff0420] text-white rounded-3xl hover:bg-white hover:text-[#ff0420] hover:border-[#ff0420] transition ease-linear duration-300 shadow-md"
          href={content.contributions['discussion-link']}
        >
          <h6 className="text-center font-semibold">Join Discussion -&gt;</h6>
        </a>
      </div>
    </section>
  )
}
