'use client';

import CardLayout from '@/components/CardLayout';
import { kpiService_m } from './inventoryData';



export default function Analytics() {
  return (
    <>
      <div>
        <div className="w-100 flex justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            DC Dashboard
          </h2>

          <div className="flex items-center justify-end"></div>
        </div>

        <div>
          <CardLayout kpiData={kpiService_m} />
        </div>
      </div>
    </>
  );
}
