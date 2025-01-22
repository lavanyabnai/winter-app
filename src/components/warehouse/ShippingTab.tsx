'use client';

import StatsArea from '@/components/warehouse/StatsArea';
import StatsBar from '@/components/warehouse/StatsBar';
import StatsColumn from '@/components/warehouse/StatsColumn';
import StatsDonut from '@/components/warehouse/StatsDonut';
import AreaInter from '@/components/chartui/AreaInter';
import ColumnInter from '@/components/chartui/ColumnInter';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"




export default function ShippingTab() {
    return (
        <>
            <div>
                <Tabs defaultValue="daily">
                    <div className="mt-2 w-100 flex justify-between p-4 rounded-lg border bg-white">
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
                            Receiving Metrics
                        </h2>

                        <div className="flex items-center justify-end">
                        <TabsList className="w-full">
                        <TabsTrigger value="daily">Daily</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                     
                    </TabsList>
                        </div>
                    </div>
                     <TabsContent value="daily">
                       <div className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                            <StatsArea />
                            <StatsBar />
                            <StatsColumn />
                            <StatsDonut />

                        </div>
                        <AreaInter />
                    </TabsContent>
                    <TabsContent value="weekly">


                        <ul className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                            <StatsArea />
                        </ul>
                        <ColumnInter />
                    </TabsContent>
                    <TabsContent value="monthly">
                        <ul className="py-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                            <StatsArea />
                        </ul>
                        <ColumnInter />
                    </TabsContent>
               
                </Tabs>
            </div>

        </>
    );
}