import LinkIcon from '@/public/icon/LinkIcon'
import { MarkDownData } from './Home'
import Link from 'next/link'
import { handleStatus } from './GridCard'
import { newFilter } from '../Text'
import { Tooltip as ReactTooltip } from 'react-tooltip'

export default function ListCard({
  currentItems,
}: {
  currentItems: Omit<MarkDownData, 'contentHtml'>[]
}) {
  return (
    <>
      {currentItems.length !== 0 ? (
        <div className="relative overflow-x-hidden">
          <table className="w-full text-sm text-left rtl:text-right table-fixed ">
            <thead className="text-gray-700 text-base font-semibold ">
              <tr>
                <th scope="col" className="py-4 px-3 w-[40%] 2xl:w-5/12">
                  <h6 className="text-base/semibold text-gray-700">Project</h6>
                </th>
                <th scope="col" className="py-4 px-3 w-[40%] 2xl:w-5/12">
                  <h6 className="text-base/semibold text-gray-700">Category</h6>
                </th>
                <th scope="col" className="py-4 px-3 w-[20%] 2xl:w-2/12 flex">
                  <h6 className="text-base/semibold text-gray-700 shrink-0">
                    Estimate Effort
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, i) => {
                return (
                  <tr className="border" key={i}>
                    <th className="p-5 flex flex-col">
                      <div
                        data-tooltip-id={item.contributions['execution-status']}
                        className="flex gap-1 items-center py-0.5 px-1 border rounded-full border-gray-200 cursor-pointer hover:bg-gray-100 bg-gray-50 w-fit mb-2"
                      >
                        {handleStatus(item.contributions['execution-status'])}
                        <ReactTooltip
                          opacity={100}
                          id={item.contributions['execution-status']}
                          place="top"
                          variant="error"
                          style={{ zIndex: 99 }}
                          className="text-sm font-light"
                          content={
                            newFilter['execution-status'].find(
                              (elem) =>
                                elem.name ===
                                item.contributions['execution-status']
                            )?.description
                          }
                        />
                      </div>

                      <Link
                        href={`/issue/${item.id}`}
                        className="flex gap-1 pb-2  items-center cursor-pointer "
                      >
                        <h6 className="hover:underline text-sm font-bold text-gray-900">
                          {item.title}
                        </h6>
                        <LinkIcon />
                      </Link>
                      <p className="text-sm font-normal text-gray-500 line-clamp-2 ">
                        {item.description}
                      </p>
                    </th>

                    <td className="py-4 px-3 ">
                      <div className="flex flex-wrap gap-2">
                        <div className="px-2 py-1 rounded-full bg-secondaryRed grow-0 text-primaryRed cursor-pointer w-fit">
                          <p className="text-xs font-normal break-all line-clamp-1">
                            {item.category}
                          </p>
                        </div>
                        <div className="inline-flex px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200/75 cursor-pointer w-fit">
                          <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">
                            {item.type}
                          </h6>
                        </div>
                        {item.labels.map((subItem, i) => (
                          <div
                            key={i}
                            className="inline-flex px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200/75 cursor-pointer w-fit"
                          >
                            <h6 className="text-xs font-normal text-gray-600 line-clamp-1 break-all">
                              {subItem}
                            </h6>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-3">
                      <h6 className="text-sm font-normal text-gray-500">
                        {item.effort}
                      </h6>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-xl font-medium text-gray-500 text-center w-full">
          0 Items Found
        </h6>
      )}
    </>
  )
}
