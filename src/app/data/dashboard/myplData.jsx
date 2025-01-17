import WrapperGrid from '~/kendo/grid/WrapperGrid'
import {carData} from "~/data/dashboard/carData.js";

import WrapperMultiLineChart from '~/kendo/charts/line/WrapperLineChart';
import WrapperMultiAreaChart from '~/kendo/charts/area/WrapperAreaChart';
import WrapperMultiColumnChart from '~/kendo/charts/column/WrapperColumnChart';
import WrapperMultiStackColChart from '~/kendo/charts/stackcol/WrapperStackColChart';
import WrapperWaterfallChart from '~/kendo/charts/waterfall/WrapperWaterfallChart'

import {reveCategories_m,reveSeries_m,costCategories_m,costSeries_m,grossCategories_m,grossSeries_m,opexCategories_m,opexSeries_m,ebitdaCategories_m,ebitdaSeries_m,netSeries_m,payCategories_m,paySeries_m} from '~/kendo/rawData/dashboard/myplDashboard'


export const reviewTabs = [
  { name: 'Month', href: '#', current: true },
  { name: 'Quarter', href: '#', current: false },
  { name: 'Year', href: '#', current: false },
]

export const meetingTabs = [
  { name: 'Daily', href: '#', current: true },
  { name: 'Weekly', href: '#', current: false },
]

export const kpiService_m = [
  {
    Name: 'Revenue',
    Value: '181.31M',
    Trend: 'up',
    TargetAch: 75,
    container: <WrapperMultiStackColChart category={reveCategories_m} series={reveSeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Cost of Revenue',
    Value: '1.14',
    Trend: 'up',
    TargetAch: 90,
    container: <WrapperMultiStackColChart category={costCategories_m} series={costSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Gross Margin %',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperMultiAreaChart category={grossCategories_m} series={grossSeries_m}/> ,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name:'OPEX',
    Value: '0.01',
    Trend: 'down',
    TargetAch: 50,
    container: <WrapperMultiColumnChart category={opexCategories_m} series={opexSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'EBITDA',
    Value: '-$648.06K',
    Trend: 'up',
    TargetAch: 90,
    container:<WrapperMultiLineChart category={ebitdaCategories_m} series={ebitdaSeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Net Income',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperWaterfallChart data={netSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Payroll Cost PL',
    Value: '0.10',
    Trend: 'up',
    TargetAch: 77,
    container: <WrapperMultiColumnChart category={payCategories_m} series={paySeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Return on Assets %',
    Value: '0.07',
    Trend: 'up',
    TargetAch: 95,
    container: <WrapperMultiAreaChart category={payCategories_m} series={paySeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  }
]

export const kpiService_q = [
  {
    Name: 'Revenue',
    Value: '181.31M',
    Trend: 'up',
    TargetAch: 75,
    container: <WrapperMultiStackColChart category={reveCategories_m} series={reveSeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Cost of Revenue',
    Value: '1.14',
    Trend: 'up',
    TargetAch: 90,
    container: <WrapperMultiStackColChart category={costCategories_m} series={costSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Gross Margin %',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperMultiAreaChart category={grossCategories_m} series={grossSeries_m}/> ,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name:'OPEX',
    Value: '0.01',
    Trend: 'down',
    TargetAch: 50,
    container: <WrapperMultiColumnChart category={opexCategories_m} series={opexSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  }
]

export const kpiService_y = [
  {
    Name: 'Revenue',
    Value: '181.31M',
    Trend: 'up',
    TargetAch: 75,
    container: <WrapperMultiStackColChart category={reveCategories_m} series={reveSeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Cost of Revenue',
    Value: '1.14',
    Trend: 'up',
    TargetAch: 90,
    container: <WrapperMultiStackColChart category={costCategories_m} series={costSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Gross Margin %',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperMultiAreaChart category={grossCategories_m} series={grossSeries_m}/> ,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name:'OPEX',
    Value: '0.01',
    Trend: 'down',
    TargetAch: 50,
    container: <WrapperMultiColumnChart category={opexCategories_m} series={opexSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  }
]

export const kpiCost_m = [
  {
    Name: 'EBITDA',
    Value: '-$648.06K',
    Trend: 'up',
    TargetAch: 90,
    container:<WrapperMultiLineChart category={ebitdaCategories_m} series={ebitdaSeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Net Income',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperWaterfallChart data={netSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Payroll Cost PL',
    Value: '0.10',
    Trend: 'up',
    TargetAch: 77,
    container: <WrapperMultiColumnChart category={payCategories_m} series={paySeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Return on Assets %',
    Value: '0.07',
    Trend: 'up',
    TargetAch: 95,
    container: <WrapperMultiAreaChart category={payCategories_m} series={paySeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  }
]

export const kpiCost_q = [
  {
    Name: 'EBITDA',
    Value: '-$648.06K',
    Trend: 'up',
    TargetAch: 90,
    container:<WrapperMultiLineChart category={ebitdaCategories_m} series={ebitdaSeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Net Income',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperWaterfallChart data={netSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Payroll Cost PL',
    Value: '0.10',
    Trend: 'up',
    TargetAch: 77,
    container: <WrapperMultiColumnChart category={payCategories_m} series={paySeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Return on Assets %',
    Value: '0.07',
    Trend: 'up',
    TargetAch: 95,
    container: <WrapperMultiAreaChart category={payCategories_m} series={paySeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  }
]

export const kpiCost_y = [
  {
    Name: 'EBITDA',
    Value: '-$648.06K',
    Trend: 'up',
    TargetAch: 90,
    container:<WrapperMultiLineChart category={ebitdaCategories_m} series={ebitdaSeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Net Income',
    Value: '0.00',
    Trend: 'down',
    TargetAch: 90,
    container: <WrapperWaterfallChart data={netSeries_m}/>,
    status: "Below Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Payroll Cost PL',
    Value: '0.10',
    Trend: 'up',
    TargetAch: 77,
    container: <WrapperMultiColumnChart category={payCategories_m} series={paySeries_m}/>,
    status: "On Track",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  },
  {
    Name: 'Return on Assets %',
    Value: '0.07',
    Trend: 'up',
    TargetAch: 95,
    container: <WrapperMultiAreaChart category={payCategories_m} series={paySeries_m}/>,
    status: "Above Target",
    Explore:<WrapperGrid rowData={carData}/>,
    Analyze:"demandAnalysis"
  }
]