import { TablerUsers } from "@/icons/Icons";
import Link from "next/link";
import React from "react";

export default function TourPackages() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Tour Packages</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-md border-[1px] border-gray-200 flex flex-col justify-between">
          {/* head */}
          <div>
            <h3 className="font-semibold text-2xl">Luxury Nile Exploration</h3>
            <p className="text-black/70 text-sm">7-day premium experience</p>
          </div>

          {/* body */}
          <div className="my-4 flex items-start  gap-2">
            <span>
              <TablerUsers width={24} height={24} />
            </span>

            <p>
              Private Egyptologist guide, luxury Nile cruise, exclusive temple
              access
            </p>
          </div>

          {/* footer */}
          <div className="pt-4 border-t-[1px]">
            <p className="font-medium">From $4,200/person</p>
            <button className="bg-black hover:bg-black/90 transition-colors duration-150 w-full h-[40px] text-white mt-2 rounded-md">
              Book Now
            </button>
          </div>
        </div>
        <div className="p-6 rounded-md border-[1px] border-gray-200 flex flex-col justify-between">
          {/* head */}
          <div>
            <h3 className="font-semibold text-2xl">Family Pharaoh Adventure</h3>
            <p className="text-black/70 text-sm">5-day family-friendly tour</p>
          </div>

          {/* body */}
          <div className="my-4 flex items-start  gap-2">
            <span>
              <TablerUsers width={24} height={24} />
            </span>

            <p>
              Child-friendly guides, interactive workshops, camel rides,
              cultural visits
            </p>
          </div>

          {/* footer */}
          <div className="pt-4 border-t-[1px] ">
            <p className="font-medium">Custom quotes available</p>
            <button className="bg-black hover:bg-black/90 transition-colors duration-150 w-full h-[40px] text-white mt-2 rounded-md">
              Inquire Now
            </button>
          </div>
        </div>
        <div className="p-6 rounded-md border-[1px] border-gray-200 flex flex-col justify-between">
          {/* head */}
          <div>
            <h3 className="font-semibold text-2xl">
              Photographer&apos;s Egypt Expedition
            </h3>
            <p className="text-black/70 text-sm">10-day photography tour</p>
          </div>

          {/* body */}
          <div className="my-4 flex items-start  gap-2">
            <span>
              <TablerUsers width={24} height={24} />
            </span>

            <p>
              Expert photo guides, golden hour access, editing workshops, drone
              opportunities
            </p>
          </div>

          {/* footer */}
          <div className="pt-4 border-t-[1px]">
            <p className="font-medium">From $4,200/person</p>
            <button className="bg-black hover:bg-black/90 transition-colors duration-150 w-full h-[40px] text-white mt-2 rounded-md">
              Reserve Spot
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/make-trip"
          className="border-[1px] border-gray-200 py-2 px-4 rounded-md hover:bg-primary hover:bg-gray-100 transition-all duration-150"
        >
          Design Your Dream Egyptian Journey →
        </Link>
      </div>
    </section>
  );
}
