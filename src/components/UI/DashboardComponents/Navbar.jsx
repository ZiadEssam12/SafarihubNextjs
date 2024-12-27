"use client";

import { useThemeMode, DarkThemeToggle } from "flowbite-react";
import React, { useState, useEffect, useRef } from "react";
import {
  HeroiconsBars3CenterLeft16Solid,
  IconamoonProfileFill,
  MdiChevronUp,
} from "@/icons/Icons";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";

export default function DashboardNavBar({ sideSectionToggle }) {
  const { mode } = useThemeMode();
  const [profile, setProfile] = useState(false);
  const dropdownRef = useRef(null);

  function toggleProfile() {
    setProfile((prevProfile) => !prevProfile);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown after navigation
  function handleLinkClick() {
    setProfile(false);
  }

  return (
    <div className=" text-inherit fixed w-full top-0 bg-gray-50 dark:bg-gray-800 z-50 hide-on-print border-b-[0.1px] border-gray-200 dark:border-gray-400 h-[60px] flex items-center justify-between pr-3 pl-3 md:pl-4">
      <div className="flex gap-x-3 items-center text-black dark:text-white">
        <button
          aria-label="sidebar toggle button"
          className=" hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-[10px]"
          onClick={() => {
            sideSectionToggle();
          }}
        >
          <HeroiconsBars3CenterLeft16Solid
            width="20"
            height="20"
            className="rotate-180 fill-black dark:fill-white"
          />
        </button>
        <Link
          href="/dashboard"
          className="text-2xl font-semibold flex items-center gap-x-2"
        >
          <Logo width="30" height="30" />
          عقاري
        </Link>
      </div>

      <div className="flex items-center justify-between gap-x-3 text-black dark:text-white">
        {/* Dark mode button */}
        <div className="border-[1px] rounded-lg border-gray-300 dark:border-gray-500">
          <DarkThemeToggle className="size-9 flex items-center justify-center" />
        </div>
        {/* End dark mode button */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex flex-row-reverse items-center justify-center cursor-pointer"
            onClick={toggleProfile}
          >
            <span className="translate-x-1">
              <button
                className="flex items-center"
                aria-label="open profile menu"
              >
                <MdiChevronUp
                  key={mode}
                  width="30"
                  height="30"
                  className={`fill-black dark:fill-white ${
                    profile && "rotate-180"
                  } transition-all`}
                />
              </button>
            </span>
            <span className="mx-1">
              <IconamoonProfileFill
                width="48"
                height="48"
                className="fill-black dark:fill-white hidden sm:block"
              />
            </span>
            <div className="text-end">
              <p className="text-[13px] font-bold m-0 p-0">زياد عصام</p>
              <p className="text-[13px] font-semibold m-0 p-0">
                مدير الموقع 2025
              </p>
            </div>
          </div>
          <div
            key={mode}
            className={`absolute top-full translate-y-3 bg-gray-50 dark:bg-gray-800 w-full h-fit opacity-100 flex flex-col justify-between rounded-lg  ${
              !profile && "hidden opacity-0"
            }`}
          >
            <div className="flex flex-col h-full justify-between py-2 mx-2 text-sm lg:text-base">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="hover:bg-gray-600 py-2 px-3 transition-all w-full block rounded-md hover:text-white"
              >
                الملف الشخصي
              </Link>
              <Link
                href="invoices"
                onClick={handleLinkClick}
                className="hover:bg-gray-600 py-2 px-3 transition-all w-full block rounded-md hover:text-white"
              >
                المحادثات
              </Link>
              <Link
                href="users"
                onClick={handleLinkClick}
                className="hover:bg-gray-600 py-2 px-3 transition-all w-full block rounded-md hover:text-white"
              >
                الإعدادت
              </Link>
            </div>

            <div className="border-t-[1px] py-2 mx-2">
              <Link
                href="settings"
                onClick={handleLinkClick}
                className="hover:bg-gray-600 py-2 px-3 transition-all w-full block rounded-md hover:text-white"
              >
                تسجيل الخروج
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
