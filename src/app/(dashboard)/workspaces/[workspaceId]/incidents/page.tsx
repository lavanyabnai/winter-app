'use client';

import { usePathname } from 'next/navigation'
import { DataTable } from '@/components/data-table';
import taskData from '@/app/data/columndata/tasks.json';

import { columns } from '@/app/(dashboard)/workspaces/[workspaceId]/incidents/columns';

export default function IncidentPage() {
    const pathname = usePathname()

  return (
    <div className="max-w-screen-6xl mx-auto w-full">
     
      <div className="px-4">
        <DataTable
          filterKey="sku"
          columns={columns}
          data={taskData}
          onDelete={() => { }}
         
          placeHolder={'groupId'}
        />
      </div>
    </div>
  );
}
