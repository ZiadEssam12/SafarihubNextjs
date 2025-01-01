"use client";

import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React from "react";
import Logo from "../Logo/Logo";
export default function ClientNavbar() {
  const { mode } = useThemeMode();

  return (
    <>
      <div className="w-full">
        <div className=" border-b-[0.5px] border-gray-300 dark:bg-gray-900">
          <div className="container px-12 flex items-center  h-20 py-4 justify-between ">
            <div className="flex gap-x-3  items-center">
              <figure className="flex items-center">
                <Logo />
              </figure>
              <h5 className="text-3xl font-bold text-black dark:text-white">
                Safari Hub
              </h5>
            </div>
            <div className="border-[1px] border-gray-300 rounded-lg">
              <Tooltip
                content={`change mode to  ${mode == "dark" ? "light" : "dark"}`}
                placement="bottom"
              >
                <DarkThemeToggle />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
