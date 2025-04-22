"use client";
import { CiArrowRightSm } from "@/icons/Icons";
import Link from "next/link";
export const SearchResults = ({
  value,
  toggle,
  searchResultsList,
  loading,
}) => {
  return (
    <>
      <p className="font-bold text-sm px-4 capitalize">
        {!value ? "Recent Added trips" : "Recent Search results"}
      </p>
      <div className="py-4">
        {!loading &&
          searchResultsList.map((item) => (
            <Link
              key={item.id}
              className="group p-4 border-b-[1px] border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
              href={`/tours/${item.slug}`}
              onClick={toggle}
            >
              <h3 className="font-semibold flex-1">{item.title}</h3>
              {/* <p className="text-sm text-gray-500 flex-1 hidden md:block">
                {item.destinations[0]?.destination?.name}
              </p> */}
              <p className="text-sm text-gray-500 flex items-center gap-x-1 fill:darkBlue stroke-darkBlue">
                See details
                <span className="group-hover:translate-x-1 transition-all duration-200 ">
                  <CiArrowRightSm />
                </span>
              </p>
            </Link>
          ))}
      </div>
      <div>
        {(loading || !searchResultsList.length) && (
          <div className="flex flex-col justify-center items-center py-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="animate-pulse bg-gray-200 w-full h-10 rounded-md mb-2"
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
