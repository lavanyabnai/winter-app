import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { labels, statuses, dot } from '@/features/control/components/data'
import { Task } from '@/features/control/components/schema'

import Link from 'next/link'

export const columnslogistics: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    accessorKey: 'label',
    header: "Function",
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2 w-[130px]">
          {label ? (
            <Badge
              className={`rounded-md ${label.color} ${label.textClr}`}
              variant="outline"
            >
              {label.label}
            </Badge>
          ) : null}
        </div>
      )
    },
  },
  {
    accessorKey: 'sku',
    header: "SKU",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium ">
            {row.getValue('sku')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'dc',
    header:"DC",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">{row.getValue('dc')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'store',
    header:"Store",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('store')}
          </span>
        </div>
      )
    },
  },

  {
    accessorKey: 'status',
    header: "Status",
    cell: ({ row }) => {
      // console.log(row.getValue('status'))
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      )
      if (!status) {
        return null
      }

      return (
        <div className={`flex w-[150px] items-center ${status.textClr}`}>
          {status.icon ? (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          ) : null}
          <span className="text-base font-semibold">{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'title',
    header:"Title" ,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'severity',
    header: "Severity" ,
    cell: ({ row }) => {
      const status = dot.find(
        (status) => status.value === row.getValue('severity')
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[80px] items-center">
          {status && (
            <svg
              className={`${status.fill} mr-2 h-2 w-2`}
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
          )}
          {status && status.label ? <span>{status.label}</span> : null}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'actions',
    header: "Options" ,
    cell: ({ row }) => {
      // console.log(row.original)
      return (
        <Link
          href={`/open/logi`}
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
    accessorKey: 'action',
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('action')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'owner',
    header:"Owner" ,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('owner')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'sop',
    header:"S&OP" ,
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate  ">
            {row.getValue('sop')}
          </span>
        </div>
      )
    },
  },
]
