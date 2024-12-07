"use client";

import dynamic from "next/dynamic";

const ChartOne = dynamic(() => import("./ChartOne"));
const ChartTwo = dynamic(() => import("./ChartTwo"));
const ChartThree = dynamic(() => import("./ChartThree"));
const PopularProducts = dynamic(() =>
  import("./PopularProducts/PopularProducts")
);

export default function DashboardPage() {
  return (
    <>
      <div id="dashboard">
        {/* dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-2 lg:gap-x-4 gap-y-4 pb-10">
          <div className="h-32  col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 flex gap-x-12">
            <div className="flex-1 bg-white dark:bg-gray-800 border-[1px] border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
              s
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 border-[1px] border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
              s
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 border-[1px] border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
              s
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 border-[1px] border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
              s
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
            <ChartOne />
          </div>

          <div className="col-span-1 h-[400px] ">
            <ChartTwo />
          </div>

          <div className="col-span-1 h-[400px] ">
            <ChartThree />
          </div>

          <div className="col-span-1 h-[400px] ">
            <PopularProducts />
          </div>
        </div>
        {/* end dashboard content */}
      </div>
    </>
  );
}
