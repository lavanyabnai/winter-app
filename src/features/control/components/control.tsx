'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import taskData from '@/features/control/components/tasks.json';
import { columns } from '@/features/control/components/columns-inci';
import { columnsdemand } from '@/features/control/components/columns-inci-demand';
import { columnslogistics } from '@/features/control/components/columns-inci-logis';
import { columnsinventory } from '@/features/control/components/columns-inci-inventory';
import { DataTable } from '@/components/data-table'

const demandData = taskData.filter(
  (task) => task.label === 'Demand Planning' && task.severity === 'High'
);

  const invData = taskData.filter(
    (task) => task.label === 'Inventory' && task.severity === 'High'
  );

 const distributionData = taskData.filter(
   (task) =>
     (task.label.includes('Logistics') || task.label.includes('Warehousing')) &&
     task.severity === 'High'
 );


const supplyData = taskData.filter((task) => task.label === 'Sourcing');




function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex items-center justify-center [&>div]:w-full',
        className
      )}
      {...props}
    />
  );
}

export function ControlTower() {
  return (
    <DemoContainer>
      <div className="m-2">
        <div className="flex items-center  justify-between">
          <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            List of Events
          </h2>
        </div>

        <Tabs defaultValue="logistics" className="m-2">
          <TabsList className="">
            <TabsTrigger value="logistics">Logistics & Warehousing</TabsTrigger>
              <TabsTrigger value="labour">Lobour</TabsTrigger>
            <TabsTrigger value="demand" className="relative">
              Demand
            </TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>

            <TabsTrigger value="supply">Supply</TabsTrigger>
          </TabsList>
          <TabsContent value="demand">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={demandData} columns={columnsdemand}  />
            </div>
          </TabsContent>
          <TabsContent value="labour">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={invData} columns={columns} />
            </div>
          </TabsContent>
          <TabsContent value="inventory">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={invData} columns={columnsinventory} />
            </div>
          </TabsContent>
          <TabsContent value="logistics">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={distributionData} columns={columnslogistics} />
            </div>
          </TabsContent>
          <TabsContent value="supply">
            {' '}
            <div className=" bg-white rounded-lg">
              <DataTable data={supplyData} columns={columns}  />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DemoContainer>
  );
}
