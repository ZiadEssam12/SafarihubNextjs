import Link from "next/link";
import React from "react";

export default function CustomizeNileTrip() {
  return (
    <div className="container mx-auto w-[90%] my-8">
      <div
        className="w-full h-[170px] bg-darkBlue flex items-center justify-between  rounded-2xl px-8"
        style={{
          backgroundImage: "url('/customize-trip.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h5 className="font-bold text-2xl">
          Customize Your Nile River Cruises 2025
        </h5>
        <Link
          href="/makeATrip"
          className="text-black bg-white rounded-full px-3 py-2"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}
