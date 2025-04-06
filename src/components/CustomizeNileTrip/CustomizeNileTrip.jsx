import Link from "next/link";
import React from "react";

export default function CustomizeNileTrip() {
  return (
    <div className="container w-[90%] my-8">
      <div
        className="w-full h-[170px] bg-darkBlue flex flex-col lg:flex-row items-center justify-center lg:justify-between  rounded-2xl px-8"
        style={{
          backgroundImage: "url('/customize-trip.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="font-bold text-2xl">
          Customize Your Nile River Cruises 2025
        </p>
        <Link
          href="/make-trip"
          className="text-black bg-white rounded-full px-3 py-2"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
}
