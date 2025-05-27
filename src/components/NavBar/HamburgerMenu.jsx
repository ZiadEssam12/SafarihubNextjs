"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  MaterialSymbolsLightClose,
  TablerChevronDown,
  IconamoonProfileFill,
  LetsIconsOrder,
  MdiCartOutline,
} from "@/icons/Icons";
import { links } from "./links";

export default function HamburgerMenu({ showHamMenu, setShowHamMenu }) {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [currentPath, setCurrentPath] = useState("");
  // Track dropdown state for each menu item separately
  const [openDropdowns, setOpenDropdowns] = useState({}); // Define user menu items (excluding logout which will be at bottom)
  const userMenuItems = session
    ? [
        {
          name: "My Profile",
          url: "/profile",
          dropdown: false,
          icon: IconamoonProfileFill,
        },
        {
          name: "My Bookings",
          url: "/bookings",
          dropdown: false,
          icon: LetsIconsOrder,
        },
        {
          name: "Cart",
          url: "/cart",
          dropdown: false,
          icon: MdiCartOutline,
        },
      ]
    : [];

  // Define auth buttons for non-logged-in users
  const authButtons = session
    ? null
    : [
        {
          name: "Login",
          url: "/login",
          dropdown: false,
        },
        {
          name: "Sign Up",
          url: "/register",
          dropdown: false,
        },
      ];

  // Combine main navigation links with user menu items
  const mainMenuItems = [...links, ...userMenuItems];

  // Update currentPath whenever pathname changes
  useEffect(() => {
    setCurrentPath(pathname);
    // Only close the menu if the path actually changed
    if (currentPath && currentPath !== pathname) {
      setShowHamMenu(false);
    }
  }, [pathname, currentPath]);

  // Function to check if a link is active
  const isActive = (linkUrl) => {
    if (linkUrl === "/") {
      return pathname === "/";
    }
    const linkPathWithoutHash = linkUrl.split("#")[0];
    return pathname === linkPathWithoutHash;
  };
  // Handle logout action
  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/" });
      setShowHamMenu(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }; // Handle menu item click
  const handleMenuItemClick = (item) => {
    if (item.action === "logout") {
      handleLogout();
    } else {
      setShowHamMenu(false);
    }
  };

  // Handle auth button clicks
  const handleAuthButtonClick = async (buttonName) => {
    setShowHamMenu(false);
  };
  // Toggle dropdown for a specific link
  const toggleDropdown = (linkName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [linkName]: !prev[linkName],
    }));
  };

  return (
    <>
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-black/50 z-[1000] transition-all duration-300 ease-in-out ${
          showHamMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {" "}
        <div
          className={`md:hidden bg-white px-4 pt-4 pb-4 flex flex-col h-screen text-black fixed top-0 right-0 w-3/4 z-[100] transition-transform duration-300 ease-in-out ${
            showHamMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="self-end p-2 bg-gray-200 rounded-lg mb-2"
            onClick={() => setShowHamMenu(false)}
          >
            <MaterialSymbolsLightClose width={30} height={30} />
          </button>
          {/* User info section for logged-in users */}
          {session && (
            <div className="border-b border-gray-200 pb-3 mb-3">
              <div className="text-sm text-gray-600">Welcome back,</div>
              <div className="font-semibold text-darkBlue">
                {session.user?.name || session.user?.email}
              </div>
            </div>
          )}
          {/* Main navigation items - scrollable area */}
          <div className="flex flex-col gap-1 flex-1 overflow-y-auto">
            {" "}
            {mainMenuItems.map((item, index) => {
              return !item.dropdown ? (
                <Link
                  key={`link-${index}`}
                  href={item.url}
                  onClick={() => handleMenuItemClick(item)}
                  className={`w-full hover:bg-gray-200 rounded-md p-2 px-4 flex items-center gap-3
                  ${
                    isActive(item.url) &&
                    "bg-darkBlue text-white focus:bg-darkBlue focus:text-white"
                  }`}
                >
                  {item.icon && (
                    <item.icon
                      width={20}
                      height={20}
                      className={`flex-shrink-0 ${
                        isActive(item.url) ? "text-white" : "text-darkBlue"
                      }`}
                    />
                  )}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <div key={`dropdown-${index}`} className="p-2 px-4">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex justify-between items-center gap-3"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <item.icon
                          width={20}
                          height={20}
                          className="flex-shrink-0 text-darkBlue"
                        />
                      )}
                      <span>{item.name}</span>
                    </div>
                    <span className="fill-darkBlue stroke-darkBlue">
                      <TablerChevronDown
                        width={24}
                        height={24}
                        className={`${
                          openDropdowns[item.name] ? "rotate-180" : ""
                        } transition-all duration-150 fill-darkBlue stroke-darkBlue`}
                      />
                    </span>
                  </button>

                  {openDropdowns[item.name] && item.dropdown && (
                    <div className="flex flex-col w-full gap-1 mt-3">
                      {item.dropdown.map((sublink, subIndex) => (
                        <Link
                          key={`sublink-${subIndex}`}
                          href={sublink.url}
                          onClick={() => setShowHamMenu(false)}
                          className={`w-full hover:bg-gray-200 rounded-md p-2 px-4 ${
                            isActive(sublink.url) &&
                            "bg-darkBlue text-white focus:bg-darkBlue focus:text-white"
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>{" "}
          {/* Bottom section for auth buttons/logout */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            {session ? (
              /* Logout button for logged-in users */
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-md p-3 px-4 text-center font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Logout
              </button>
            ) : (
              /* Login and Sign Up buttons for non-logged-in users */
              <div className="flex flex-col gap-2">
                {authButtons?.map((button, index) => (
                  <button
                    key={`auth-${index}`}
                    onClick={() => handleAuthButtonClick(button.name)}
                    className={`w-full rounded-md p-3 px-4 text-center font-medium transition-colors duration-200 ${
                      button.name === "Sign Up"
                        ? "bg-darkBlue text-white hover:bg-blue-700 shadow-sm hover:shadow-md"
                        : "border border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white"
                    }`}
                  >
                    {button.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
