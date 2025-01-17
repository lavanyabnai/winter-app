import { ColumnDef, Row } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/datatable/data-table-column-header'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  DotsHorizontalIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'
// import { Link } from '@remix-run/react'

import Link from 'next/link'

export interface Task {
  Name: string
  Type: string
  Location: string
  InclusionType: string
  AdditionalParameters: string
}

export const dot = [
  {
    value: 'Wholesale',
    label: 'Wholesale',
    icon: QuestionMarkCircledIcon,
    fill: 'fill-green-500',
    color: 'bg-green-100',
    textClr: 'text-rose-800',
  },

  {
    value: 'Retail',
    label: 'Retail',
    icon: CircleIcon,
    fill: 'fill-yellow-500',
    color: 'bg-yellow-500',
    textClr: 'text-rose-800',
  },
  {
    value: 'High',
    label: 'High',
    icon: CheckCircledIcon,
    fill: 'fill-red-500',
    color: 'bg-rose-100',
    textClr: 'text-rose-800',
  },
]

export const labels = [
  {
    value: 'Full',
    label: 'Full',
    color: 'bg-fuchsia-100',
    textClr: 'text-fuchsia-700',
  },
  {
    value: 'Partial',
    label: 'Partial',
    color: 'bg-indigo-100',
    textClr: 'text-indigo-700',
  },
 
]



export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
]

export const DemandcolumnData: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'customer',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    cell: ({ row }) => <div>{row.getValue('customer')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'product',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => <div>{row.getValue('product')}</div>,
  },
  {
    accessorKey: 'demandType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Demand Type" />
    ),
    cell: ({ row }) => <div>{row.getValue('demandType')}</div>,
  },
  {
    accessorKey: 'orderInterval',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Interval" />
    ),
    cell: ({ row }) => <div>{row.getValue('orderInterval')}</div>,
  },
 
  // {
  //   accessorKey: 'Type',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Type" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = dot.find((status) => status.value === row.getValue('Type'))

  //     if (!status) {
  //       return null
  //     }

  //     return (
  //       <div className="flex w-[80px] items-center">
  //         {status && (
  //           <svg
  //             className={`${status.fill} mr-2 h-2 w-2`}
  //             viewBox="0 0 6 6"
  //             aria-hidden="true"
  //           >
  //             <circle cx={3} cy={3} r={3} />
  //           </svg>
  //         )}
  //         {status && status.label ? <span>{status.label}</span> : null}
  //       </div>
  //     )
  //   },
  // },
  
  // {
  //   accessorKey: 'InclusionType',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Inclusion Type" />
  //   ),
  //   cell: ({ row }) => {
  //     const label = labels.find(
  //       (label) => label.value === row.original.InclusionType
  //     )

  //     return (
  //       <div className="flex space-x-2 w-[130px]">
  //         {label ? (
  //           <Badge
  //             className={`rounded-md ${label.color} ${label.textClr}`}
  //             variant="outline"
  //           >
  //             {label.label}
  //           </Badge>
  //         ) : null}
  //       </div>
  //     )
  //   },
  // },

  {
    accessorKey: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Options" />
    ),
    cell: () => {
      // console.log(row.original)
      return (
        <Link
          href="/snop/demand/1"
          // to={`/snop/incidents/${row.original.id}/${row.original.label}`}
          className="flex space-x-2 "
        >
          <Button className="bg-yellow-50 border border-yellow-300 text-yellow-700 hover:bg-yellow-100">
            Open Event
          </Button>
        </Link>
      )
    },
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[140px]">
          <DropdownMenuItem>Edit</DropdownMenuItem>

          <DropdownMenuItem asChild>
            <button
              type="submit"
              name="intent"
              value="delete"
              className="w-full"
            >
              Delete
            </button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
