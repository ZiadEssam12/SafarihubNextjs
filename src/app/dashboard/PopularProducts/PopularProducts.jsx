import React from "react";

const residentialUnits = [
  {
    id: "1",
    title: "شقة فاخرة في حي العليا",
    city: "جدة",
    price: "1,200,000 ريال",
  },
  {
    id: "2",
    title: "فيلا مميزة في حي النخيل",
    city: "الرياض",
    price: "3,500,000 ريال",
  },
  {
    id: "3",
    title: "شقة مفروشة في حي الرمال",
    city: "مكة",
    price: "750,000 ريال",
  },
  {
    id: "4",
    title: "فيلا حديثة في حي الغدير",
    city: "المدينة  ",
    price: "2,800,000 ريال",
  },
  {
    id: "5",
    title: "شقة 3 غرف نوم في حي المونسية",
    city: "الرياض",
    price: "1,500,000 ريال",
  },
];

export default function PopularProducts() {
  return (
    <div className="lg:px-8 border-[0.1px] border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-xl h-[400px] px-3 pt-4 pb-6 flex flex-col justify-between">
      <div className="h-[10%]">
        <h3 className={`font-bold text-xl text-black dark:text-white`}>
          أشهر المنتجات
        </h3>
      </div>

      <div className="flex-1 py-3 px-1 h-full w-full overflow-hidden mt-1 text-black dark:text-white flex flex-col gap-y-4">
        {residentialUnits.map((unit, index) => {
          return (
            <div
              key={`${index}-${unit.id}`}
              className="flex items-center justify-between gap-x-3"
            >
              <div className="flex items-center gap-x-3">
                <span className="w-9 h-10 dark:bg-gray-50 bg-gray-100 text-black rounded-lg flex items-center justify-center font-medium ">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <h4 className="">{unit.title}</h4>
                  <h5 className="font-medium text-gray-600 dark:text-gray-300">
                    الموقع: {unit.city}
                  </h5>
                </div>
              </div>

              <div>
                <p className="">{unit.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
