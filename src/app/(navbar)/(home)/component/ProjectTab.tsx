import React from 'react'
import { Pagination } from 'react-headless-pagination'
import ListCard from './ListCard'
import GridCard from './GridCard'
import CheckBoxFilter from './CheckBoxFilter'
import { CheckBoxStateType, MarkDownData, TabStateType } from './Home'
import Input from '@/src/app/component/Input'
import SearchIcon from '@/public/icon/SearchIcon'
import SettingIcon from '@/public/icon/SettingsIcon'
import SortDropDown from './SortDropdown'
import GridIcon from '@/public/icon/GridIcon'
import ListIcon from '@/public/icon/ListIcon'
import { newFilter } from '../Text'
import { Tooltip as ReactTooltip } from 'react-tooltip'

interface ProjectTabProps {
  state: TabStateType
  setState: React.Dispatch<React.SetStateAction<TabStateType>>
  checkBox: CheckBoxStateType
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
  currentPage: number
  currentItems: Omit<MarkDownData, 'contentHtml'>[]
  pageCount: number
  handlePageClick: (page: number) => void
  handleClearFilter: () => void
  search: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function ProjectTab({
  state,
  setState,
  checkBox,
  handleChangeCheckBox,
  currentItems,
  handlePageClick,
  pageCount,
  currentPage,
  handleClearFilter,
  handleSearchChange,
  search,
}: ProjectTabProps) {
  return (
    <div className="animate-slideleft overflow-x-hidden">
      {/* 
                ▀█▀ ░█▄─░█ ░█▀▀█ ░█─░█ ▀▀█▀▀ 　 ░█▀▀▀█ ░█▀▀▀ ─█▀▀█ ░█▀▀█ ░█▀▀█ ░█─░█ 　 ░█▀▀▀█ ░█▀▀▀█ ░█▀▀█ ▀▀█▀▀ 　 ░█─── ─█▀▀█ ░█──░█ ░█▀▀▀█ ░█─░█ ▀▀█▀▀ 
                ░█─ ░█░█░█ ░█▄▄█ ░█─░█ ─░█── 　 ─▀▀▀▄▄ ░█▀▀▀ ░█▄▄█ ░█▄▄▀ ░█─── ░█▀▀█ 　 ─▀▀▀▄▄ ░█──░█ ░█▄▄▀ ─░█── 　 ░█─── ░█▄▄█ ░█▄▄▄█ ░█──░█ ░█─░█ ─░█── 
                ▄█▄ ░█──▀█ ░█─── ─▀▄▄▀ ─░█── 　 ░█▄▄▄█ ░█▄▄▄ ░█─░█ ░█─░█ ░█▄▄█ ░█─░█ 　 ░█▄▄▄█ ░█▄▄▄█ ░█─░█ ─░█── 　 ░█▄▄█ ░█─░█ ──░█── ░█▄▄▄█ ─▀▄▄▀ ─░█──
             */}
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center gap-3 lg:grid lg:grid-cols-2 lg:gap-4 mt-4">
          <div className="w-full">
            <Input
              Icon={<SearchIcon />}
              value={search}
              onChange={handleSearchChange}
              className="border placeholder-slate-500 bg-white text-slate-500 focus:ring w-full px-1 py-1.5 rounded-full min-h-[40px]"
              placeholder="Search Project"
            />
          </div>

          {/* Small Icon When On Mobile Device (use to open drawer filter) */}
          <div
            onClick={() => setState((prev) => ({ ...prev, drawer: true }))}
            className={`lg:hidden flex min-w-[44px] min-h-[40px] max-w-[44px] max-h-[40px] items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${
              state.drawer && 'bg-gray-50'
            }`}
          >
            <SettingIcon className="" />
          </div>

          {/*             
                        ░█▀▀▀█ ░█▀▀▀█ ░█▀▀█ ▀▀█▀▀ 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                        ─▀▀▀▄▄ ░█──░█ ░█▄▄▀ ─░█── 　 ░█▀▀▄ ─░█── ░█░█░█ 
                        ░█▄▄▄█ ░█▄▄▄█ ░█─░█ ─░█── 　 ░█▄▄█ ─░█── ░█──▀█
                */}

          <div className="hidden lg:flex justify-end items-center gap-3 flex-wrap">
            <SortDropDown state={state} setState={setState} />

            {/* active #161616 ::: inactive #94A3B8 */}
            <div className="hidden lg:flex gap-2 border p-1.5  rounded-full h-10">
              <div
                className={`px-1 ${
                  state.view === 'g' &&
                  'bg-gray-100 rounded-tl-xl rounded-bl-xl rounded-br-sm rounded-tr-sm'
                }`}
                onClick={() => setState((prev) => ({ ...prev, view: 'g' }))}
              >
                <GridIcon
                  fill={state.view === 'g' ? '#161616' : '#94A3B8'}
                  className="cursor-pointer block"
                />
              </div>

              <div className="border w-[0.0625rem] border-gray-200"></div>

              <div
                className={`px-1 ${
                  state.view === 'l' &&
                  'bg-gray-100 rounded-tl-sm rounded-bl-sm rounded-br-xl rounded-tr-xl'
                }`}
                onClick={() => setState((prev) => ({ ...prev, view: 'l' }))}
              >
                <ListIcon
                  fill={state.view === 'l' ? '#161616' : '#94A3B8'}
                  className="cursor-pointer block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
                    ░█▀▀▀ ▀█▀ ░█─── ▀▀█▀▀ ░█▀▀▀ ░█▀▀█ 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                    ░█▀▀▀ ░█─ ░█─── ─░█── ░█▀▀▀ ░█▄▄▀ 　 ░█▀▀▄ ─░█── ░█░█░█ 
                    ░█─── ▄█▄ ░█▄▄█ ─░█── ░█▄▄▄ ░█─░█ 　 ░█▄▄█ ─░█── ░█──▀█
            */}
      {/* overflow-x-auto scrollbar-small scrollbar-thumb pb-2 */}
      <div className="hidden lg:flex gap-2 items-center flex-wrap mt-4">
        <div
          onClick={() => {
            state.view === 'g'
              ? setState((prev) => ({ ...prev, filter: !prev.filter }))
              : setState((prev) => ({ ...prev, dialog: true, filter: false }))
          }}
          className={`flex h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${
            state.filter && 'bg-gray-50'
          }`}
        >
          <SettingIcon className="" />
          <h6 className="text-base font-normal text-gray-600">Filter</h6>
        </div>

        <div className="border w-[0.0625rem] h-[1.625rem] border-gray-200"></div>

        <div
          className={` 
                    h-10
                    hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                    border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                    ${
                      Object.keys(checkBox).every(
                        (key) =>
                          checkBox[key as keyof CheckBoxStateType].length === 0
                      )
                        ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                        : 'text-slate-900 border'
                    }
                    `}
          onClick={handleClearFilter}
        >
          <p className="text-sm font-normal ">All</p>
        </div>

        {/* 
                                
                ░█▀▀█ ─█▀▀█ ░█▀▀▄ ░█▀▀█ ░█▀▀▀ 
                ░█▀▀▄ ░█▄▄█ ░█─░█ ░█─▄▄ ░█▀▀▀ 
                ░█▄▄█ ░█─░█ ░█▄▄▀ ░█▄▄█ ░█▄▄▄

                */}
        {newFilter['category'].map((item, i) => (
          <div
            data-tooltip-id={item.id}
            key={i}
            className={`
                    lg:block h-10 group relative ctn-category shadow-
                    hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                    border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                    ${
                      checkBox['Category'].some(
                        (elem) =>
                          elem ===
                          newFilter.category.find((elem) => elem.id === item.id)
                            ?.id
                      )
                        ? 'bg-secondaryRed text-primaryRed border-secondaryRed'
                        : 'text-slate-900 border'
                    }
                    `}
            onClick={() => {
              handleChangeCheckBox(
                'Category' as keyof CheckBoxStateType,
                item.id
              )
            }}
          >
            <p className=" text-sm font-normal ">{item.name}</p>

            {/* Tool tip */}
            <ReactTooltip
              opacity={100}
              id={item.id}
              place="top"
              variant="error"
              style={{ zIndex: 99 }}
              className="text-sm font-light"
              content={item.description}
            />
          </div>
        ))}
      </div>

      {/* 
                ░█─── ─█▀▀█ ░█──░█ ░█▀▀▀█ ░█─░█ ▀▀█▀▀ 
                ░█─── ░█▄▄█ ░█▄▄▄█ ░█──░█ ░█─░█ ─░█── 
                ░█▄▄█ ░█─░█ ──░█── ░█▄▄▄█ ─▀▄▄▀ ─░█──
            */}
      <div className="mt-[2.5rem] relative animate-slideup">
        {state.view === 'g' ? (
          <div className="animate-slideleft flex gap-6">
            {/*  
                            ░█▀▀█ ░█─░█ ░█▀▀▀ ░█▀▀█ ░█─▄▀ ░█▀▀█ ░█▀▀▀█ ▀▄░▄▀ 
                            ░█─── ░█▀▀█ ░█▀▀▀ ░█─── ░█▀▄─ ░█▀▀▄ ░█──░█ ─░█── 
                            ░█▄▄█ ░█─░█ ░█▄▄▄ ░█▄▄█ ░█─░█ ░█▄▄█ ░█▄▄▄█ ▄▀░▀▄
                        */}

            {state.filter && (
              <CheckBoxFilter
                checkBox={checkBox}
                handleChangeCheckBox={handleChangeCheckBox}
                handleClearFilter={handleClearFilter}
              />
            )}

            <div
              className={`w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 h-fit`}
            >
              {currentItems.length !== 0 ? (
                currentItems.map((item, i) => {
                  // console.log(item)
                  if (item['contributions']['execution-status'] == '') {
                    item['contributions']['execution-status'] = 'Not Started'
                  }
                  return (
                    <div className="" key={i}>
                      <GridCard data={item} />
                    </div>
                  )
                })
              ) : (
                <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-xl font-medium text-gray-500 text-center w-full">
                  0 Ideas Found
                </h6>
              )}
            </div>
          </div>
        ) : (
          <div className="animate-slideright">
            <div className="hidden md:block">
              <ListCard currentItems={currentItems} />
            </div>
            <div className="flex md:hidden flex-col gap-4">
              {currentItems.map((item, i) => (
                <React.Fragment key={i}>
                  <GridCard data={item} />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* 
                    ░█▀▀█ ─█▀▀█ ░█▀▀█ ▀█▀ ░█▄─░█ ▀▀█▀▀ ▀█▀ ░█▀▀▀█ ░█▄─░█ 
                    ░█▄▄█ ░█▄▄█ ░█─▄▄ ░█─ ░█░█░█ ─░█── ░█─ ░█──░█ ░█░█░█ 
                    ░█─── ░█─░█ ░█▄▄█ ▄█▄ ░█──▀█ ─░█── ▄█▄ ░█▄▄▄█ ░█──▀█
                */}
        {currentItems.length !== 0 && (
          <div className="mt-12 text-sm font-medium text-gray-500">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={handlePageClick}
              className="flex flex-wrap justify-end"
              truncableText="..."
              truncableClassName="border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50"
              edgePageCount={2}
              middlePagesSiblingCount={1}
              totalPages={pageCount}
            >
              <Pagination.PrevButton className="px-2 border min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Previous
              </Pagination.PrevButton>

              <div className="flex justify-center">
                <div className="flex flex-wrap lg:items-center justify-start lg:justify-center list-none">
                  <Pagination.PageButton
                    as={<div />}
                    activeClassName="bg-gray-100 cursor-pointer hover:bg-gray-50 list-none"
                    inactiveClassName="list-none"
                    className=" border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] flex items-center justify-center cursor-pointer hover:bg-gray-50 list-none"
                    dataTestIdInactive="list-none"
                  />
                </div>
              </div>

              <Pagination.NextButton className="px-2 border  min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Next
              </Pagination.NextButton>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  )
}
