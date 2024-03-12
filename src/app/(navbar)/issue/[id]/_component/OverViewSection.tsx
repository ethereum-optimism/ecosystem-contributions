'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { newFilter } from '../../../(home)/Text'
import { handleStatus } from '../../../(home)/component/GridCard'
import { MarkDownData } from '../../../(home)/component/Home'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import NavigateIcon from '@/public/icon/NavigateIcon'

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
      className=" bg-white p-5 sm:p-6 md:p-10 lg:rounded-md lg:shadow-md items-center w-auto  lg:mb-6"
    >
      <div
        data-tooltip-id={content.contribution['execution-status']}
        className="flex gap-1 items-center py-0.5 px-1 border rounded-full border-gray-200 cursor-pointer hover:bg-gray-100 bg-gray-50 w-fit"
      >
        {handleStatus(content.contribution['execution-status'])}
        <ReactTooltip
          opacity={100}
          id={content.contribution['execution-status']}
          place="top"
          variant="error"
          style={{ zIndex: 99 }}
          className="text-sm font-light"
          content={
            newFilter['execution-status'].find(
              (elem) => elem.name === content.contribution['execution-status']
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
          {content.skillsets.map((item, i) => (
            <h6 className="text-base font-medium text-gray-600 " key={i}>
              {i !== content.skillsets.length - 1 ? item + ',' : item}
            </h6>
          ))}
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Authors:</p>
          <div className="flex flex-wrap gap-1">
            {content.authors.map((item, i) => (
              <h6 className="text-base font-medium text-gray-600" key={i}>
                {i !== content.contribution.contributors.length - 1
                  ? item + ','
                  : item}
              </h6>
            ))}
          </div>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Contributors:</p>
          <div className="flex flex-wrap gap-1">
            {content.contribution.contributors.map((item, i) => (
              <h6 className="text-base font-medium text-gray-600" key={i}>
                {i !== content.contribution.contributors.length - 1
                  ? item + ','
                  : item}
              </h6>
            ))}
          </div>
        </div>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Execution:</p>
          <h6 className="text-base font-medium text-gray-600">
            {content.contribution['execution-status']}
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

        {/* <Menu as="div" className="relative inline-block">
                    <div className="flex w-fit mt-8 border bg-primaryRed text-white rounded-md hover:bg-primaryRed/90 shadow-md ">
                        <Menu.Button
                            className=" p-2 flex items-center justify-center"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 10L12 15L17 10"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Menu.Button>
                        <hr className="border-r-[1px] border-white  h-auto my-1" />
                        <a
                            className="py-2 px-4"
                            href={content.contribution["discussion-link"]}
                        >
                            <h6 className="text-gray-100 text-center text-md font-medium">Discussion Link</h6>
                        </a>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >

                        <Menu.Items
                            className="absolute z-20 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <h6 className="text-sm font-bold text-center text-gray-900 bg-gray-50 p-2 border-b ">
                                Refference Link
                            </h6>
                            {content.contribution.links.map((item, i) => (
                                <Menu.Item
                                    key={i}
                                >
                                    {({ active }) => (
                                        <button
                                            className={` p-2
                                            group flex justify-between w-full items-center rounded-md px-2 py-2  hover:bg-gray-50/65`}
                                        >
                                            <h6
                                            className="text-gray-900 text-sm font-normal"
                                            >
                                                {item}
                                            </h6>
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}

                        </Menu.Items>
                    </Transition>
                </Menu> */}

        <p className="text-base font-normal text-gray-400 mt-2">
          Reference Links:
        </p>
        <div className="flex flex-col gap-y-1">
          {content.contribution.links.map((item, i) => (
            <a
              key={i}
              href={item}
              className={`
                    flex shrink-0 gap-1 lg:gap-2 w-full items-center rounded-md hover:underline cursor-pointer`}
            >
              <div className="min-w-4">
                <NavigateIcon />
              </div>
              <h6 className="text-gray-500 text-sm font-normal line-clamp-1">
                {item}
              </h6>
            </a>
          ))}
        </div>
        <a
          className="w-fit mt-4 border px-8 py-3 bg-[#ff0420] text-white rounded-3xl hover:opacity-90 transition ease-linear duration-300 shadow-md"
          href={content.contribution['discussion-link']}
        >
          <h6 className="text-center font-semibold">Discussion &rarr;</h6>
        </a>
      </div>
    </section>
  )
}
