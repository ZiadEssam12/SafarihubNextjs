"use client";
import {
  GuidanceUser1,
  IcOutlineEmail,
  LetsIconsOrder,
  LucideUser,
  MaterialSymbolsLogout,
  MdiHeartOutline,
} from "@/icons/Icons";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function UserProfileMenu({ session }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);

  // Handle sign out
  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

  // Set up global click listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    }

    // Add event listener when dropdown is open
    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div>
      {session ? (
        <>
          <div
            ref={dropdownRef}
            className="flex items-center gap-x-2 relative group user-profile-menu"
          >
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              title={`click to ${
                showDropDown ? "close" : "open"
              } user profile menu`}
              className="cursor-pointer bg-white text-darkBlue p-1 rounded-full dark:bg-darkBlue dark:text-white"
            >
              <GuidanceUser1 width={35} height={35} />
            </button>

            {showDropDown && (
              <>
                <div className="absolute bg-white dark:bg-darkBlue text-darkBlue dark:text-white rounded-md shadow-lg text-lg top-12  -translate-x-3/4  z-50">
                  <ul className="flex flex-col gap-y-1 py-4">
                    <li className="flex items-center gap-x-[2px] px-4 py-0.5">
                      <LucideUser width={25} height={25} />
                      <span>Ziad Essam</span>
                    </li>
                    <li className="flex items-center gap-x-[2px] px-4 py-0.5">
                      <IcOutlineEmail width={25} height={25} />
                      <span>{session.user.email}</span>
                    </li>
                    <li className="border-[1px] my-1 border-gray-100"> </li>
                    <li className="hover:opacity-90 hover:bg-gray-100 rounded-md transition-colors duration-150 pl-4 py-0.5 cursor-pointer">
                      <Link
                        href="/order"
                        className="flex gap-x-[2px] items-center"
                      >
                        <LetsIconsOrder width={25} height={25} />
                        <span>Your Orders</span>
                      </Link>
                    </li>
                    <li className="hover:opacity-90 hover:bg-gray-100 rounded-md transition-colors duration-150 pl-4 py-0.5 cursor-pointer">
                      <Link
                        href="/wishlist"
                        className="flex gap-x-[2px] items-center"
                      >
                        <MdiHeartOutline width={25} height={25} />
                        <span>Your Wishlist</span>
                      </Link>
                    </li>
                    <li className="border-[1px] my-1 border-gray-100"> </li>

                    <li className="hover:opacity-90 hover:bg-gray-100 rounded-md transition-colors duration-150 pl-4 py-0.5 cursor-pointer">
                      <button
                        className="flex items-center gap-x-[2px] cursor-pointer"
                        onClick={handleSignOut}
                      >
                        <span>
                          <MaterialSymbolsLogout width={24} height={24} />
                        </span>
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="flex gap-x-1 items-center bg-white text-darkBlue px-4 py-2 rounded-md dark:bg-darkBlue dark:text-white"
          >
            <span className="fill-darkBlue stroke-darkBlue">
              <LucideUser />
            </span>
            Login
          </Link>
        </>
      )}
    </div>
  );
}
