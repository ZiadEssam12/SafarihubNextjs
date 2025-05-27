"use client";

import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React, { useState } from "react";
import { MaterialSymbolsMenuRounded, MdiCartOutline } from "@/icons/Icons";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import SearchButton from "./SearchButton";

export default function NavbarClientActions() {
  // Theme mode hook for client-side theme toggle
  const { mode } = useThemeMode();
  
  // State for hamburger menu
  const [showHamMenu, setShowHamMenu] = useState(false);

  return (
    <>
      <div className="flex gap-x-1 items-center justify-end">
        {/* Search Bar */}
        <SearchButton />
        {/* End Search Bar */}
        
        {/* Cart Icon */}
        <div className="relative">
          <Link
            href="/cart"
            className="px-3 h-[40px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            title="Go to Cart"
          >
            <MdiCartOutline
              width={20}
              height={20}
              className="text-darkBlue dark:text-gray-300"
            />
          </Link>
        </div>
        
        {/* Theme Toggle */}
        <div className="z-[100]">
          <Tooltip
            content={`Change mode to ${mode === "dark" ? "light" : "dark"}`}
            placement="bottom"
          >
            <DarkThemeToggle />
          </Tooltip>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden relative rounded-md">
          <button
            onClick={() => {
              setShowHamMenu((prev) => !prev);
            }}
            className="text-2xl fill-black dark:fill-white flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="open menu"
          >
            <MaterialSymbolsMenuRounded
              width={24}
              height={24}
              className="fill-black dark:fill-white stroke-black dark:stroke-white"
            />
          </button>
        </div>
      </div>
      
      {/* Hamburger Menu */}
      <HamburgerMenu
        showHamMenu={showHamMenu}
        setShowHamMenu={setShowHamMenu}
      />
    </>
  );
}
