"use client";

import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React from "react";
import Logo from "../Logo/Logo";
import { MdiCartOutline } from "@/icons/Icons";
import Link from "next/link";
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
            <div className="flex gap-x-1 items-center">
              <div className="border-[1px] border-gray-300 rounded-lg z-[100]">
                <Tooltip
                  content={`change mode to  ${
                    mode == "dark" ? "light" : "dark"
                  }`}
                  placement="bottom"
                >
                  <DarkThemeToggle />
                </Tooltip>
              </div>
              <Link
                href="/cart"
                className="border-[1px] border-gray-300 rounded-lg  fill-darkBlue stroke-darkBlue size-[40px] flex items-center justify-center"
                title="Go to Cart"
              >
                <MdiCartOutline width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
