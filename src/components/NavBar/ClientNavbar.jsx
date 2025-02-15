"use client";

import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React from "react";
import Logo from "../Logo/Logo";
import { IconamoonSearchThin, MdiCartOutline } from "@/icons/Icons";
import Link from "next/link";
export default function ClientNavbar() {
  const { mode } = useThemeMode();

  return (
    <>
      <div className="w-full">
        <div className=" border-b-[0.5px] border-gray-300 dark:bg-gray-900">
          <div className=" container px-12 flex items-center  h-20 py-4 justify-between ">
            <Link href="/" className="flex gap-x-3 items-center">
              <figure className="flex items-center">
                <Logo width={40} height={40} />
              </figure>
              <p className="text-sm lg:text-3xl font-bold text-black dark:text-white">
                Safari Hub
              </p>
            </Link>
            <div className="flex gap-x-1 items-center justify-end">
              <div className="relative hidden lg:block">
                {/* search bar */}
                <input
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="py-2 pl-4 pr-8 border-[1px] border-darkBlue/30 rounded-full text-darkBlue text-sm font-normal"
                />
                {/* end of search bar */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 stroke-darkBlue fill-darkBlue">
                  <IconamoonSearchThin width={20} height={20} />
                </span>
              </div>
              <div>
                <Link
                  href="/cart"
                  className="  fill-darkBlue stroke-darkBlue px-3 h-[40px] flex items-center justify-center hover:bg-gray-100 rounded-lg"
                  title="Go to Cart"
                >
                  <MdiCartOutline width={20} height={20} />
                  <span className="text-sm font-normal text-darkBlue">(1)</span>
                </Link>
              </div>
              <div className=" z-[100]">
                <Tooltip
                  content={`change mode to  ${
                    mode == "dark" ? "light" : "dark"
                  }`}
                  placement="bottom"
                >
                  <DarkThemeToggle />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
