'use client'
import { newFilter } from '../../../(home)/Text'
import { handleStatus } from '../../../(home)/component/GridCard'
import { MarkDownData } from '../../../(home)/component/Home'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { categoryKeyAndValue } from '../../../(home)/Text'
import NavigateIcon from '@/public/icon/NavigateIcon'
import Link from 'next/link'
import Home from '@/public/icon/HomeIcon'
import GitHubIcon from '@/public/icon/github-mark'

function handleExecuteStatus(status: string) {
  switch (status) {
    case 'not-started':
      return (
        <>
          <div>Not Started</div>
        </>
      )
    case 'in-discussion':
      return (
        <>
          <div>In Discussion</div>
        </>
      )
    case 'in-progress-open':
      return (
        <>
          <div>In Progress Open</div>
        </>
      )
    case 'in-progress-closed':
      return (
        <>
          <div>In Progress - Closed</div>
        </>
      )
    case 'completed':
      return (
        <>
          <div>Completed</div>
        </>
      )
    case 'abandoned':
      return (
        <>
          <div>Abandoned</div>
        </>
      )

    default:
      return (
        <>
          <div>Not Started</div>
        </>
      )
  }
}

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
      <Link
        href="/#project"
        className="flex gap-2 items-center ml-1 mb-6 lg:hidden"
      >
        <Home width="16" height="16" />
        <h6 className="text-sm font-medium text-gray-700 hover:underline">
          Home
        </h6>
      </Link>

      <div
        data-tooltip-id={content.contributions['execution-status']}
        className="flex gap-1 items-center py-1 px-2 border rounded-full border-gray-200 cursor-pointer hover:bg-gray-100 bg-gray-50 w-fit"
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
              (elem) => elem.id === content.contributions['execution-status']
            )?.description
          }
        />
      </div>

      <h6 className="flex flex-row flex-wrap text-3xl font-bold my-4 ">
        <div className="flex">{content.title}</div>
      </h6>
      <hr className="hidden lg:block my-6  border-t border-gray-300" />
      <p className=" text-gray-500 text-base font-normal">
        {content.description}
      </p>

      <div className="flex flex-col  my-4 flex-wrap gap-2">
        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-base font-normal text-gray-400">Category:</p>
          <h6 className="text-base font-medium text-gray-600">
            {/* {content.category} */}
            {categoryKeyAndValue[content.category]
              ? categoryKeyAndValue[content.category]
              : content.category.replace('-', '')}
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
            {handleExecuteStatus(content.contributions['execution-status']) ||
              '-'}
          </h6>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <p className="text-base font-normal text-gray-400">Labels:</p>
          <div className="flex flex-wrap gap-1">
            {content.labels.length == 1 ? (
              <h6 className="text-base font-medium text-gray-600">-</h6>
            ) : (
              content.labels.map((item, i) => (
                <h6 className="text-base font-medium text-gray-600" key={i}>
                  {i !== content.labels.length - 1 ? item + ',' : item}
                </h6>
              ))
            )}
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
        <div className="flex flex-row flex-wrap items-center gap-3 mt-4">
          <Link
            className="w-fit border px-8 py-3 bg-[#ff0420] text-white rounded-3xl hover:bg-white hover:text-[#ff0420] hover:border-[#ff0420] transition ease-linear duration-300 shadow-md"
            href={
              content.contributions['discussion-link'] != ''
                ? content.contributions['discussion-link']
                : 'https://discord.com/invite/optimism/'
            }
            target="_blank"
          >
            <button className="flex flex-row justify-center font-semibold">
              <div className="mr-2">Join Discussion</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3C6.5 3 2 6.58 2 11a7.218 7.218 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6m5-5v-2h-2v2zm-4 0v-2h-2v2zm-4 0v-2H7v2z"
                />
              </svg>
            </button>
          </Link>

          <Link
            className="w-fit border px-8 py-3 bg-black text-white rounded-3xl hover:invert transition ease-linear duration-300 shadow-md"
            href={`https://github.com/ethereum-optimism/ecosystem-contributions/blob/main/docs/claim-an-idea.md`}
            target="_blank"
            // href={{
            //   pathname: '/docs/claim-an-idea.md',
            //   query: { id: content.id },
            // }}
          >
            <button className="flex flex-row justify-center font-semibold">
              <div className="mr-2">Claim Idea</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.55em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                />
              </svg>
            </button>
          </Link>
          <div className="flex-grow"></div>
          <div>
            <Link
              href={`https://github.com/ethereum-optimism/ecosystem-contributions/blob/main/contributions/${content.id}.md`}
              target="_blank"
              className="flex flex-row justify-center items-center mr-4 text-slate-700 hover:underline transition ease-linear duration-300"
            >
              {/* <div className="mr-1.5">View</div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </Link>
          </div>
          {/* <Link
            className="w-fit mt-4 px-8 py-3 text-black rounded-3xl transition ease-linear duration-300 "
            href={{
              pathname: '/docs/claim-an-idea.md',
              query: { id: content.id },
            }}
            target="_blank"
          >
            <button className="text-center font-semibold text-xs">
              How to claim?
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  )
}
