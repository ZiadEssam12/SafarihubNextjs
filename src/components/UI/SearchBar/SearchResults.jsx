import { CiArrowRightSm } from "@/icons/Icons";
import Link from "next/link";
import React from "react";

const demoSearchResults = [
  {
    id: 1,
    title: "Serengeti Safari Adventure",
    slug: "serengeti-safari-adventure",
    location: "Tanzania, Africa",
    category: "safari",
  },
  {
    id: 2,
    title: "Maasai Mara Wildlife Tour",
    slug: "maasai-mara-wildlife-tour",
    location: "Kenya, Africa",
    category: "safari",
  },
  {
    id: 3,
    title: "Kruger National Park Expedition",
    slug: "kruger-national-park-expedition",
    location: "South Africa",
    category: "safari",
  },
  {
    id: 4,
    title: "Okavango Delta Adventure",
    slug: "okavango-delta-adventure",
    location: "Botswana, Africa",
    category: "safari",
  },
  {
    id: 5,
    title: "Etosha National Park Tour",
    slug: "etosha-national-park-tour",
    location: "Namibia, Africa",
    category: "safari",
  },
];

export const SearchResults = ({ value, toggle, searchResultsList }) => {
  return (
    <>
      {!value ? (
        <>
          <p className="font-bold text-sm px-4 capitalize">
            Recent Added trips
          </p>
          <div className="py-4">
            {demoSearchResults
              .filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
              )
              .map((item) => (
                <Link
                  key={item.id}
                  className="group p-4 border-b-[1px] border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
                  href={`/tours/${item.slug}`}
                  onClick={toggle}
                >
                  <h3 className="font-semibold flex-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 flex-1 hidden md:block">
                    {item.location}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-x-1 fill:darkBlue stroke-darkBlue">
                    See details
                    <span className="group-hover:translate-x-1 transition-all duration-200 ">
                      <CiArrowRightSm />
                    </span>
                  </p>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <>
          <p className="font-bold text-sm px-4 capitalize">
            Recent Search results
          </p>
          <div className="py-4">
            {searchResultsList
              .filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
              )
              .map((item) => (
                <Link
                  key={item.id}
                  className="group p-4 border-b-[1px] border-gray-200 flex justify-between items-center hover:bg-gray-100 transition-all duration-200"
                  href={`/tours/${item.slug}`}
                  onClick={toggle}
                >
                  <h3 className="font-semibold flex-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 flex-1 hidden md:block">
                    {item.location}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-x-1 fill:darkBlue stroke-darkBlue">
                    See details{" "}
                    <span className="group-hover:translate-x-1 transition-all duration-200 ">
                      <CiArrowRightSm />
                    </span>
                  </p>
                </Link>
              ))}
          </div>
        </>
      )}
    </>
  );
};
