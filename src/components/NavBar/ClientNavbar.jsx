"use client";

import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React, { useState } from "react";
import { MaterialSymbolsMenuRounded, MdiCartOutline } from "@/icons/Icons";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import SearchButton from "./SearchButton";

export default function ClientNavbar() {
  // Use the complete hook functionality
  const { mode } = useThemeMode();
  const [showHamMenu, setShowHamMenu] = useState(false);

  return (
    <>
      <div className="w-full bg-white dark:bg-gray-900">
        <div className="border-b-[0.5px] border-gray-300 dark:border-gray-700">
          <div className="container flex items-center h-20 py-4 justify-between">
            <Link href="/" className="flex gap-x-3 items-center">
              <p className="text-lg lg:text-3xl font-bold text-orange user-select-none ">
                Safari Hub
              </p>
            </Link>
            <div className="flex gap-x-1 items-center justify-end">
              {/* Search Bar */}
              <SearchButton />
              {/* End Search Bar */}
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
              <div className="md:hidden relative rounded-md">
                <button
                  onClick={() => {
                    setShowHamMenu((prev) => !prev);
                  }}
                  className="text-2xl fill-black flex items-center p-2 hover:bg-gray-100 rounded-md"
                  aria-label="open menu"
                >
                  <MaterialSymbolsMenuRounded
                    width={24}
                    height={24}
                    className="fill-black stroke-black"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HamburgerMenu
        showHamMenu={showHamMenu}
        setShowHamMenu={setShowHamMenu}
      />
    </>
  );
}
