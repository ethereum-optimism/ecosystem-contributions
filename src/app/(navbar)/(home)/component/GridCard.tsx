import EffortIcon from '@/public/icon/EffortIcon'
import { MarkDownData } from './Home'
import Link from 'next/link'
import { categoryKeyAndValue, newFilter } from '../Text'
import StatusCheck from '@/public/icon/StatusCheck'
import StatusNotStart from '@/public/icon/StatusNotStart'
import StatusInDiscussion from '@/public/icon/StatusInDiscussion'
import StatusInProgressClose from '@/public/icon/StatusInProgressClose'
import StatusInProgressOpen from '@/public/icon/StatusInProgressOpen'
import StatusAbandoned from '@/public/icon/StatusAbandoned'
import { Tooltip as ReactTooltip } from 'react-tooltip'

export function handleStatus(status: string) {
  switch (status) {
    case 'Not Started':
      return (
        <>
          <StatusNotStart />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {status}
            </h6>
          </div>
        </>
      )
    case 'In Discussion':
      return (
        <>
          <StatusInDiscussion />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {status}
            </h6>
          </div>
        </>
      )
    case 'In Progress - Open':
      return (
        <>
          <StatusInProgressOpen />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {status}
            </h6>
          </div>
        </>
      )
    case 'In Progress - Closed':
      return (
        <>
          <StatusInProgressClose />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {status}
            </h6>
          </div>
        </>
      )
    case 'Completed':
      return (
        <>
          <StatusCheck />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {status}
            </h6>
          </div>
        </>
      )
    case 'Abandoned':
      return (
        <>
          <StatusAbandoned />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {status}
            </h6>
          </div>
        </>
      )

    default:
      return (
        <div className="flex gap-1 items-center">
          <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
            {status}
          </h6>
        </div>
      )
  }
}

export default function GridCard({
  data,
}: {
  data: Omit<MarkDownData, 'contentHtml'>
}) {
  // {data.contribution["execution-status"]}

  return (
    <div className="flex flex-col gap-4 border rounded-md p-3 h-full">
      <div className="flex justify-between items-center">
        <div
          data-tooltip-id={data.contributions['execution-status']}
          className="flex gap-1 items-center py-1 px-2 border rounded-full border-gray-200 cursor-pointer hover:bg-gray-100 bg-gray-50"
        >
          {handleStatus(data.contributions['execution-status'])}

          <ReactTooltip
            opacity={100}
            id={data.contributions['execution-status']}
            place="top"
            variant="error"
            style={{ zIndex: 99 }}
            className="text-sm font-light"
            content={
              newFilter['execution-status'].find(
                (elem) => elem.name === data.contributions['execution-status']
              )?.description
            }
          />
        </div>
      </div>

      <div>
        <Link
          className="text-base font-semibold text-gray-900 mb-2 line-clamp-1 hover:underline"
          href={`/issue/${data.id}`}
        >
          {data.title}
        </Link>
        <p className="text-xs text-slate-500 font-normal line-clamp-2">
          {data.description}
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="inline-flex px-2 py-1 rounded-full bg-secondaryRed hover:bg-red-100/80 hover:shadow-sm grow-0 text-primaryRed cursor-pointer w-fit">
          <p className="text-xs font-normal line-clamp-1 break-all">
            {categoryKeyAndValue[data.category]
              ? categoryKeyAndValue[data.category]
              : data.category.replace('-', '')}
          </p>
        </div>
        <div className="inline-flex px-2 py-1 rounded-full bg-slate-50 hover:bg-slate-100/90 hover:shadow-sm cursor-pointer w-fit">
          <h6 className="text-xs font-normal text-gray-600 line-clamp-2 break-all">
            {data.type}
          </h6>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <EffortIcon />
          <div className="flex gap-1 items-center">
            <h6 className="text-xs font-medium text-gray-900 line-clamp-1">
              {data.effort}
            </h6>
            <h6 className="text-xs font-medium text-gray-500">Effort</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
