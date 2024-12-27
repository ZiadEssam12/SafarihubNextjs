"use client";

import { DarkThemeToggle, Tooltip, useThemeMode } from "flowbite-react";
import React from "react";

import { LucideUser } from "@/icons/Icons";
// import Logo from "../Logo/Logo";
import Link from "next/link";
import Logo from "../Logo/Logo";
export default function Navbar() {
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
      <div className="hidden bg-[#071C55] w-full h-20 sticky top-0 z-30  lg:flex items-center font-medium text-white">
        <div className="container flex items-center justify-between">
          <div className=" flex items-center gap-x-3 ">
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Home
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              About Us
            </Link>
            <div className="relative group">
              {/* Parent Link */}
              <Link
                href="/"
                className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2 cursor-pointer"
              >
                Egypt Tours
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute flex flex-col gap-y-2 left-0 mt-2 top-5 pt-4 translate-y-[100px] opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-[#071C55] shadow-lg min-w-max z-50">
                <Link
                  href="/"
                  to="/cairo"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  One Day Trip
                </Link>

                <Link
                  href="/"
                  to="/alexandria"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  Nulti Day Trip
                </Link>

                <Link
                  href="/"
                  to="/nile"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  Nile Cruise
                </Link>

                <Link
                  href="/"
                  to="/nile"
                  className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                >
                  Shore Excursions
                </Link>
              </div>
            </div>

            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Hidden Gems
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Make Your Trip
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Rent A Car
            </Link>
            <Link
              href="/"
              className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <Link href="/" to="/signin" className="flex gap-x-1 items-center">
              <LucideUser />
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
