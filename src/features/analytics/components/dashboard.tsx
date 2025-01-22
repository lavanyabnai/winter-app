'use client';

import AreaChart from '@/components/chartui/AreaChart';
import ColumnChart from '@/components/chartui/ColumnChart';
import BarChartCard from '@/components/chartui/BarChart';
import PieChart from '@/components/chartui/PieChart';
import LineChartCard from '@/components/chartui/LineChart';
import RadialChartCard from '@/components/chartui/RadialChart';
import DonutChartCard from '@/components/chartui/DonutChart';
import AreaInter from '@/components/chartui/AreaInter';
import ColumnInter from '@/components/chartui/ColumnInter';
import PieInter from '@/components/chartui/PieInter';
export default function Analytics() {
  return (
    <>
      <div>
        <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
            DC Dashboard
          </h2>

          <div className="flex items-center justify-end">

          </div>
        </div>

        <ul className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <AreaChart />
          <ColumnChart />
          <BarChartCard />
          <PieChart />
          <LineChartCard />
          <RadialChartCard />
          <DonutChartCard />
          <AreaInter />
          <ColumnInter />
          <PieInter />
        </ul>
        
      </div>
    </>
  );
}
