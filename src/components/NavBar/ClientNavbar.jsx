"use client";

// import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React, { useState } from "react";
import {
  IconamoonSearchThin,
  MaterialSymbolsMenuRounded,
  MdiCartOutline,
} from "@/icons/Icons";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
export default function ClientNavbar() {
  // const { mode } = useThemeMode();
  const [showHamMenu, setShowHamMenu] = useState(false);

  return (
    <>
      <div className="w-full bg-white">
        <div className=" border-b-[0.5px] border-gray-300 dark:bg-gray-900">
          <div className="container flex items-center  h-20 py-4 justify-between ">
            <Link href="/" className="flex gap-x-3 items-center">
              {/* <figure className="flex items-center">
                <Logo width={40} height={40} />
              </figure> */}
              <p className="text-lg lg:text-3xl font-bold text-orange">
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
                {/* <Tooltip
                  content={`change mode to  ${
                    mode == "dark" ? "light" : "dark"
                  }`}
                  placement="bottom"
                >
                  <DarkThemeToggle />
                </Tooltip> */}
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
