import { LineMdLoadingLoop } from "@/icons/Icons";
import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <LineMdLoadingLoop
          width={50}
          height={50}
          className="fill-indigo-600 animate-spin"
        />
        {/* <p className="mt-4 text-lg text-gray-700">Loading...</p> */}
      </div>
    </div>
  );
}
