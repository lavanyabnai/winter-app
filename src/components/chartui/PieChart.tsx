/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { LabelList, Pie, PieChart } from "recharts"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig
const kpi = {
 
  status: 'Above Target',
  
}
export default function BarChartCard() {
  // const emptyStyles = { background: '#ef4444' };
  // const progressStyles = { background: '#22c55e' };

  return (
            <Card >
              <div className="relative rounded-lg">
                <span
                  className={`absolute inset-x-0 top-0 h-1 rounded-lg ${
                    kpi.status === 'Above Target'
                      ? `bg-green-500`
                      : kpi.status === 'Below Target'
                        ? `bg-red-500`
                        : ''
                  }`}
                ></span>
              </div>
        
              <CardHeader className="px-4 py-2">
                  
                <div className="my-2 flex items-baseline gap-2 ">
                  
                  <div>
                    <h2 className="text-base font-medium text-gray-900">
                     Total Inventory
                    </h2>
                    <h1 className="text-4xl font-bold text-black">
                      $100,000
                    </h1>
                  </div>
                 
                  {/* <div className="ml-auto  overflow-x-hidden px-2 text-center text-sm font-medium text-gray-700"> 
                  
                    <Progress value={kpi.TargetAch}  indicatorColor={`${ kpi.TargetAch > 50? "bg-green-400" : "bg-red-400"}`}  className="ml-auto h-2 w-[50%]" />
                   </div> */}
                </div>
              </CardHeader >
      <CardContent className="px-4 py-2">
   
         <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" >
              <LabelList
                position="top"
                offset={8}
                className="fill-white"
                fontSize={8}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
              <CardFooter className="flex divide-x divide-gray-200 bg-gray-50 border-t p-0 ">
                 
                  <div className="flex w-0 flex-1">
                    <Link
                      href='' // Fixed here
                      className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white rounded-bl-lg"
                    >
                      <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                        <WrenchScrewdriverIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        Analyze
                      </span>
                    </Link>
                  </div>

                  <div className="-ml-px flex flex-1">
                    <Link
                      href='' // Fixed here
                      className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                    >
                      <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                        <CircleStackIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        Explore Data
                      </span>
                    </Link>
                  </div>

                  <div className="-ml-px flex flex-1">
                    <Link
                      href='' // Fixed here
                      className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white rounded-br-lg"
                    >
                      <span className="py-4 inline-flex flex-1 items-center justify-center gap-x-3 text-sm font-semibold hover:text-white">
                        <LightBulbIcon className="h-5 w-5" aria-hidden="true" />
                        Insights
                      </span>
                    </Link>
                  </div>
               
              </CardFooter>
            </Card>
  );
}
