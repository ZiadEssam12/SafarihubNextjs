"use client";
import { SolarStarLinear } from "@/icons/Icons";
import React from "react";

export default function ReviewCard({ name, content, date, rating }) {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <SolarStarLinear className="fill-yellow-300" />
            <SolarStarLinear className="fill-yellow-300" />
            <SolarStarLinear className="fill-yellow-300" />
            <SolarStarLinear className="fill-yellow-300" />
            <SolarStarLinear className="fill-yellow-300" />
          </div>

          <div>
            <p className="text-yellow-300 font-semibold">{rating}/5</p>
          </div>
        </div>

        <div>
          <p className="text-sm my-2">{content}</p>
        </div>

        <div className="flex">
          <div>
            <p className="text-sm">{name}</p>
          </div>
          <p className="mx-1">-</p>
          <div>
            <p className="text-sm">{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
