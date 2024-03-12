"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { TabStateType } from './Home'
import SortIcon from '@/public/icon/SortIcon'
import CorrectIcon from '@/public/icon/CorrectIcon'

export default function SortDropdown({
  state,
  setState
}: {
  state: TabStateType;
  setState: React.Dispatch<React.SetStateAction<TabStateType>>
}) {

  function handleChangeSort(char: "a" | "le" | "he" | "n") {
    setState(prev => ({...prev, sort: char}))
  }
  
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">

        <div>
          <Menu.Button className="">
            <div
              className={` h-10
            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
            border rounded-full px-3 py-2 cursor-pointer transition-colors 
            text-slate-900 flex gap-2 self-center shrink-0}
            `}
            >
              <SortIcon />
              <p className=" text-sm font-normal self-center">Name</p>
            </div>
          </Menu.Button>
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
          <Menu.Items className="absolute p-4 z-20 right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">

            <h6 className="text-sm font-bold text-center text-gray-900">
              Sort By
            </h6>

            <div className="mt-4">

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${state.sort === "a" ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group w-full items-center rounded-md px-2 py-2 text-sm flex justify-between hover:bg-gray-50`}
                      onClick={() => handleChangeSort("a")}
                  >
                    <h6>Alphabet (A-Z)</h6>
                    {state.sort === "a" && 
                    <CorrectIcon
                    />
                    }
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${state.sort === "le" ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm font-normal hover:bg-gray-50`}
                      onClick={() => handleChangeSort("le")}
                  >
                    <h6>Low to High Effort</h6>
                    {state.sort === "le" && 
                    <CorrectIcon
                    />
                    }
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${state.sort === "he" ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm font-normal hover:bg-gray-50`}
                      onClick={() => handleChangeSort("he")}
                  >
                    <h6>High to Low Effort</h6>
                    {state.sort === "he" && 
                    <CorrectIcon
                    />
                    }
                  </button>
                )}
              </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
