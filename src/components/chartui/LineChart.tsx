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

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186, mobile: 80,tv:140 },
  { month: "February", desktop: 305, mobile: 200,tv:400 },
  { month: "March", desktop: 237, mobile: 120,tv:180 },
  { month: "April", desktop: 73, mobile: 190,tv:200 },
  { month: "May", desktop: 209, mobile: 130,tv:340 },
  { month: "June", desktop: 214, mobile: 140,tv:280 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
    },
  tv: {
    label: "TV",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig
const kpi = {
  status: 'Above Target',
}
export default function LineChartCard() {
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
          className=" max-h-[250px] pb-0 "
        >
             <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
           <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{fill: "var(--color-desktop)"}}
              activeDot={{r: 6}}
            >
              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={8}
              />
            </Line>
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={{fill: "var(--color-mobile)"}}
              activeDot={{r: 6}}
            >
              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={8}
              />
            </Line>
            <Line
              dataKey="tv"
              type="monotone"
              stroke="var(--color-tv)"
              strokeWidth={2}
              dot={{fill: "var(--color-tv)"}}
              activeDot={{r: 6}}>

              <LabelList
                position="top"
                offset={8}
                className="fill-foreground"
                fontSize={8}
              />
              </Line>    
          </LineChart>
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
