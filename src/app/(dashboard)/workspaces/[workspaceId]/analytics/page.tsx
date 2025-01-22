import Analytics from "@/features/analytics/components/dashboard";
import { Filters } from "@/components/anaytics/filters";


export default function DashboardPage() {

  
  return (
    <div className="h-full ">
        <Filters  />
      <Analytics />
    </div>
  );  
};