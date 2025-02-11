import { Link } from '@remix-run/react'
import {
  reviewTabs,
  meetingTabs,
  kpiService_m,
  kpiCost_m,
  kpiService_q,
  kpiCost_q,
  kpiService_y,
  kpiCost_y,
} from '@/app/data/analysis/spendData'
import { Fragment, useState } from 'react'
import {
  Disclosure,
  Menu,
  Transition,
  Dialog,
  Popover,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChatBubbleBottomCenterTextIcon,
  PaperClipIcon,
  PencilIcon,
  TrashIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  // { name: "Sales Pipeline", href: "#", current: false },
  // { name: "Lead Conversion", href: "#", current: true },
  // { name: "Win Loss Analysis", href: "#", current: false },
  // { name: "Activity Rate ", href: "#", current: false },
  // { name: "Quote Analysis ", href: "#", current: false },
  // { name: "Campaign Analysis ", href: "#", current: false },
  // { name: "Lead to Cash ", href: "#", current: false },
  {
    name: 'Spend Analysis',
    href: '/snop/dashboard/analysis/spendAnalysis',
    current: true,
  },
  {
    name: 'Off-Contract Spend',
    href: '/snop/dashboard/analysis/offContractAnalysis',
    current: false,
  },
  {
    name: 'Expense Analysis',
    href: '/snop/dashboard/analysis/expenseAnalysis',
    current: false,
  },
  {
    name: 'Payable Analysis',
    href: '/snop/dashboard/analysis/apAnalysis',
    current: false,
  },
  {
    name: 'Category Analysis',
    href: '/snop/dashboard/analysis/categoryAnalysis',
    current: false,
  },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]
const filters = [
  {
    id: 'year',
    name: 'Year',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'all', label: 'All', checked: true },
    ],
  },
  {
    id: 'quarter',
    name: 'Quarter',
    options: [
      { value: 'all', label: 'All', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
    ],
  },
  {
    id: 'region',
    name: 'Region',
    options: [
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
    ],
  },
  {
    id: 'country',
    name: 'Country',
    options: [
      { value: 'all', label: 'All', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
    ],
  },
]

const stats = [
  { name: 'Spend', stat: '$128M' },
  { name: 'Addressable', stat: '$105M' },
  { name: 'Supplier Count', stat: '55' },
  { name: 'Contract', stat: '$82M' },
]

const activeFilters = [{ value: 'objects', label: 'Objects' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SpendAnalysisRoute() {
  const [open, setOpen] = useState(false)

  const emptyStyles = { background: '#ef4444' }
  const progressStyles = { background: '#22c55e' }

  return (
    <>
      <div
        className="flex flex-col"
        style={{
          minHeight: `calc(100vh - 4rem)`,
        }}
      >
        {/* ///////////// */}
        {/* Filters */}

        <div className="bg-white">
          {/* Mobile filter dialog */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 sm:hidden"
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.name}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    <ChevronDownIcon
                                      className={classNames(
                                        open ? '-rotate-180' : 'rotate-0',
                                        'h-5 w-5 transform'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Filters */}

          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>

            <div className="border-b border-gray-200 bg-white py-2">
              <div className="mr-64 flex items-center  px-4 sm:px-4 lg:px-4">
                <Menu as="div" className="relative inline-block text-left">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                  onClick={() => setOpen(true)}
                >
                  Filters
                </button>

                <div className="hidden sm:block">
                  <div className="flow-root">
                    <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                      {filters.map((section, sectionIdx) => (
                        <Popover
                          key={section.name}
                          className="relative inline-block px-4 text-left"
                        >
                          <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <span>{section.name}</span>
                            {sectionIdx === 0 ? (
                              <span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
                                1
                              </span>
                            ) : null}
                            <ChevronDownIcon
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <form className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </form>
                            </Popover.Panel>
                          </Transition>
                        </Popover>
                      ))}
                    </Popover.Group>
                  </div>
                </div>

                {/* Active filters */}

                <div className="ml-16  flex px-4 sm:flex sm:items-center sm:px-4 lg:px-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Filters
                    <span className="sr-only">, active</span>
                  </h3>

                  <div
                    aria-hidden="true"
                    className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
                  />

                  <div className="mt-2 sm:ml-4 sm:mt-0">
                    <div className="-m-1 flex flex-wrap items-center">
                      {activeFilters.map((activeFilter) => (
                        <span
                          key={activeFilter.value}
                          className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                        >
                          <span>{activeFilter.label}</span>
                          <button
                            type="button"
                            className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                          >
                            <span className="sr-only">
                              Remove filter for {activeFilter.label}
                            </span>
                            <svg
                              className="h-2 w-2"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 8 8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="M1 1l6 6m0-6L1 7"
                              />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* stats */}

        <div>
          <dl className="mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
              >
                <dt className="truncate text-center text-lg font-medium text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="mx-4 w-full border-t border-gray-200" />
            </div>
          </div>
        </div>

        {/* charts */}

        <ul
          role="list"
          className="mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2"
        >
          {/* grid-row-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 */}
          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-md mt-6 font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                    <h1 className="font-display text-d-h3 mb-3 text-4xl font-bold text-black">
                      {kpi.Value}
                    </h1>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
              <div></div>
            </li>
          ))}
        </ul>

        {/* icons with border */}
        <footer className="mt-auto">
          <Disclosure as="nav" className="bg-white h-16 border-t">
            {({ open }) => (
              <>
                <div className="w-full px-2 py-2 sm:px-2 lg:px-2">
                  <div className="flex h-12 items-center justify-">
                    <h2 className="text-md font-bold text-gray-500 mr-2">
                      Spend Analysis
                    </h2>
                    <ChevronDoubleRightIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 items-center"
                      aria-hidden="true"
                    />
                    <div className="flex items-center">
                      <div className="hidden md:block">
                        {/* <div className="flex items-baseline space-x-4"> */}
                        <div className="flex items-baseline">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-blue-500 text-white'
                                  : 'text-black hover:bg-blue-500 hover:text-white',
                                'text-md rounded-md px-5 py-2 mx-2 font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </footer>
      </div>
    </>
  )
}
