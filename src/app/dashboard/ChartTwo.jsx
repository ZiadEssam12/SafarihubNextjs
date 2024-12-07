"use client";

import DonutChart from "./charts/DonutChart";
// import DateTooltip from "./charts/DateTooltip";

export default function ChartTwo() {
  return (
    <>
      {/* first chart */}
      <div className="bg-inherit  text-black dark:text-white bg-white dark:bg-gray-700 rounded-xl  lg:px-8 border-[0.1px] border-gray-200 dark:border-gray-600 h-full px-3 pt-4 pb-6 flex flex-col justify-between">
        <div className="h-[10%]">
          <h3 className={`font-bold text-xl `}> الزيارات </h3>
        </div>
        <div className="flex-1 py-3 h-full w-full overflow-hidden flex items-center ">
          <DonutChart />
        </div>
        <div className="h-[10%]">
          {/* <DateTooltip LinkTo={"/dashboard"} linkName={"تقرير المنتجات"} /> */}
        </div>
      </div>
      {/* end first chart */}
    </>
  );
}
