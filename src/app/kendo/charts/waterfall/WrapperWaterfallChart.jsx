import WaterfallChartContainer from '../waterfall/kendoWaterfallChart.client'


const Fallback = () => {
    return <div>
          <svg width={24} height={24} fill="none">
        <path
          d="M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06"
          stroke="currentColor"
          strokeWidth={0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>;
  };

export default function WrapperWaterfallChart({data, field, category, summary, format="C0", position="insideEnd"}){
    return typeof document !== "undefined" ? <WaterfallChartContainer data={data}/> : <Fallback />
}

