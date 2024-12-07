"use client";

import DataSeriesChart from "./charts/LineChart";

export default function ChartOne() {
  return (
    <div className="bg-inherit p-3 lg:px-8 lg:pt-8 border-[0.1px] bg-white dark:bg-gray-700  border-gray-200 dark:border-gray-600 rounded-xl ">
      <div>
        <h3 className={`font-bold text-3xl text-black dark:text-white`}>
          المبيعات الشهرية
        </h3>
      </div>
      <div className="mt-3 min-h-[250px]xl:min-h-[400px]">
        <DataSeriesChart />
      </div>
      <div>
        {/* <DateTooltip LinkTo={"/dashboard"} linkName={"تقرير المنتجات"} /> */}
      </div>
    </div>
  );
}
