'use client'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'

import CloseIcon from '@/public/icon/CloseIcon'
import './Navbar.css'
import Link from 'next/link'

export default function DrawerNav({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [open2, setOpen2] = useState(false)

  const menu = [
    { name: 'RetroPGF', link: 'https://app.optimism.io/retropgf-signup' },
    { name: 'Bridge', link: 'https://app.optimism.io/bridge/deposit' },
    { name: 'Airdrop', link: 'https://app.optimism.io/airdrops' },
    { name: 'Builder', link: '/' },
  ]

  const dropdownMenu = [
    {
      title: 'OPTIMISM',
      items: [
        { name: 'About Optimism', link: 'https://www.optimism.io/about' },
        { name: 'Superchain', link: 'https://app.optimism.io/superchain' },
      ],
    },
    {
      title: 'GOVERNANCE',
      items: [
        { name: 'Optimist NFT', link: 'https://app.optimism.io/optimist-nft' },
        { name: 'OP Collective', link: 'https://app.optimism.io/announcement' },
        { name: 'About RetroPGF', link: 'https://app.optimism.io/retropgf' },
        { name: 'Delegates', link: 'https://vote.optimism.io' },
        { name: 'Forum', link: 'https://gov.optimism.io/' },
      ],
    },
    {
      title: 'ECOSYSTEM',
      items: [
        { name: 'Apps', link: 'https://www.optimism.io/apps/all' },
        { name: 'Quests', link: 'https://app.optimism.io/quests' },
      ],
    },
    {
      title: 'DEVELOPERS',
      items: [
        { name: 'Superchain Faucet', link: 'https://app.optimism.io/faucet' },
        { name: 'Documentation', link: 'https://docs.optimism.io/' },
        { name: 'Github', link: 'https://github.com/ethereum-optimism/' },
        { name: 'Bug bounty', link: 'https://immunefi.com/bounty/optimism/' },
      ],
    },
  ]
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        open={open}
        as="div"
        className="flex lg:hidden relative z-40"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/25" />

        <div className="fixed inset-0 overflow-y-auto h-full w-screen">
          <div className="flex h-full  items-center justify-center text-center ">
            <Transition.Child
              as={Fragment}
              enter="duration-500"
              enterFrom="- opacity-0"
              enterTo=" opacity-100"
              leave="ease-out duration-500"
              leaveFrom=""
              leaveTo=""
            >
              <Dialog.Panel className="w-full h-full transform overflow-hidden bg-white  text-left align-middle shadow-xl transition-all  overflow-y-auto">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center px-6 h-16 mr-4"
                >
                  <Link
                    className="text-custom-red font-rubik !font-semibold "
                    href="https://optimism.io/join"
                  >
                    OPTIMISM
                  </Link>
                  <div
                    className="cursor-pointer Hamburger flex"
                    onClick={onClose}
                  >
                    <CloseIcon />
                  </div>
                </Dialog.Title>
                <ul className="Drawer">
                  {menu.map((item, index) => (
                    <li key={index} className="DrawerNavBox">
                      <a href={item.link} className="DrawerNav">
                        {item.name}
                      </a>
                    </li>
                  ))}
                  {/* <li className="DrawerNavBox" onClick={() => setOpen2(true)}>
                    <a href="#" className="DrawerNav">
                      More
                      <svg
                        className="ml-1 mt-1.5"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="#404454"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          width="20px"
                          height="16px"
                          d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                          fill="#0F0F0F"
                        />
                      </svg>
                    </a>
                  </li> */}
                  <hr className="my-3 border-gray-200 m-0  w-full" />
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        <Transition appear show={open2} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setOpen2}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25 z-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto z-50">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  {/* <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h2"
                      className="textTitle flex justify-between"
                    >
                      More
                      <div
                        className="cursor-pointer"
                        onClick={() => setOpen2(false)}
                      >
                        <CloseIcon />
                      </div>
                    </Dialog.Title>

                    {dropdownMenu.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <span className="DrawerTitle">{section.title}</span>
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="DrawerContent">
                            <a
                              className="DrawerLink"
                              href={item.link}
                              target="_blank"
                            >
                              <span>{item.name}</span>
                            </a>
                          </li>
                        ))}
                        <hr className="Line" />
                      </div>
                    ))}
                  </Dialog.Panel> */}
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </Dialog>
    </Transition>
  )
}
