import { PieChartContainer} from '@/app/kendo/charts/pie/kendoPieChart';
import { MultiBarChartContainer } from '@/app/kendo/charts/bar/kendoBarChart';
import { MultiLineChartContainer } from '@/app/kendo/charts/line/kendoLineChart';
import { MultiAreaChartContainer } from '@/app/kendo/charts/area/kendoAreaChart';
import {
  handbalance_m,
  avgInventoryCategories_m,
  avgInventorySeries_m,
  mapeCategories_m,
  mapeSeries_m,
  unitCategories_m,
  unitSeries_m,
  resourceCategories_m,
  resourceSeries_m,
  overheadCategories_m,
  overheadSeries_m,
  materialCategories_m,
  materialSeries_m,
  turnsCategories_m,
  turnsSeries_m,
} from "./inventoryDashboard";



export const kpiService_m = [
  {
    Name: 'Total Warehouse Cost',
    Value: '$8.46M',
    Trend: 'up',
    TargetAch: 83,
    container: <PieChartContainer series={handbalance_m} />,
    status: 'Above Target',
    Analyze: ''
  },
  {
    Name: 'Avg Inventory Valuation',
    Value: '$233.57M',
    Trend: 'up',
    TargetAch: 80,
    container: (
      <MultiBarChartContainer
        categories={avgInventoryCategories_m}
        series={avgInventorySeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: ''
  },
  {
    Name: ' Space Utilization',
    Value: '24%',
    Trend: 'down',
    TargetAch: 0,
    container: (
      <MultiLineChartContainer
        categories={mapeCategories_m}
        series={mapeSeries_m}
      />
    ),
    status: 'On Track',
    Analyze: ''
  },
  {
    Name: 'Equipment Cost',
    Value: '$52.37K',
    Trend: 'down',
    TargetAch: 10,
    container: (
      <MultiLineChartContainer
        category={unitCategories_m}
        series={unitSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: ''
  },
  {
    Name: 'Labor Cost',
    Value: '$3.5M',
    Trend: 'up',
    TargetAch: 90,
    container: (
      <MultiAreaChartContainer
        category={resourceCategories_m}
        series={resourceSeries_m}
      />
    ),
    status: 'Above Target',
    Analyze: ''
  },
  {
    Name: 'Picking Efficiency',
    Value: '80%',
    Trend: 'down',
    TargetAch: 90,
    container: (
      <MultiLineChartContainer
        category={overheadCategories_m}
        series={overheadSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: ''
  },
  {
    Name: 'Order Summary',
    Value: '$4.17M',
    Trend: 'up',
    TargetAch: 77,
    container: (
      <MultiBarChartContainer
        category={materialCategories_m}
        series={materialSeries_m}
      />
    ),
    status: 'Below Target',
    Analyze: ''
  },
  {
    Name: 'Other Cost',
    Value: '$1.23M',
    Trend: 'up',
    TargetAch: 95,
    container: (
      <MultiBarChartContainer
        category={turnsCategories_m}
        series={turnsSeries_m}
      />
    ),
    status: 'Above Target',
    Analyze: ''
  }
];