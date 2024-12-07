"use client";

import ColumnChart from "./charts/ColumnChart";

export default function ChartThree() {
  return (
    <>
      {/* third chart */}
      <div className=" h-full  bg-inherit border-[0.1px] bg-white dark:bg-gray-700 rounded-xl border-gray-200 dark:border-gray-600  lg:px-8 px-3 pt-4 pb-6 flex flex-col justify-between">
        <div className="h-[10%]">
          <h3 className={`font-bold text-xl text-black dark:text-white`}>
            المصروفات والايرادات
          </h3>
        </div>
        <div className="flex-1 py-3 h-full w-full overflow-hidden flex items-center bg">
          <ColumnChart />
        </div>
        <div className="h-[10%]">
          {/* <DateTooltip LinkTo={"/dashboard"} linkName={"تقرير المنتجات"} /> */}
        </div>
      </div>
      {/* end third chart */}
    </>
  );
}
