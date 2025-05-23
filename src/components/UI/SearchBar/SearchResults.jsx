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
              key={item.slug}
              className="group p-4 border-b-[1px] border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
              href={`/tours/${item.slug}`}
              onClick={toggle}
            >
              <h3 className="font-semibold flex-1">{item.title}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-x-1 fill:darkBlue stroke-darkBlue">
                See details
                <span className="group-hover:translate-x-1 transition-all duration-200 ">
                  <CiArrowRightSm />
                </span>
              </p>
            </Link>
          ))}

        {/* Show message if not loading and no results */}
        {!loading && searchResultsList.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No results found.
          </div>
        )}
      </div>
      <div>
        {loading && (
          <>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="group p-4 border-b-[1px] border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
              >
                {/* Title skeleton */}
                <div className="h-5 flex-1 bg-gray-200 rounded animate-pulse"></div>
                {/* "See details" skeleton */}
                <div className="h-4 w-24 bg-gray-100 rounded ml-4 animate-pulse"></div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
