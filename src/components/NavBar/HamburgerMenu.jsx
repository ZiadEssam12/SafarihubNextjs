"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MaterialSymbolsLightClose, TablerChevronDown } from "@/icons/Icons";
import { links } from "./links";

export default function HamburgerMenu({ showHamMenu, setShowHamMenu }) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  // Track dropdown state for each menu item separately
  const [openDropdowns, setOpenDropdowns] = useState({});

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
        <div
          className={`md:hidden bg-white px-4 pt-4 flex flex-col gap-1 h-screen text-black fixed top-0 right-0 w-3/4 z-[100] transition-transform duration-300 ease-in-out ${
            showHamMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="self-end p-2 bg-gray-200 rounded-lg"
            onClick={() => setShowHamMenu(false)}
          >
            <MaterialSymbolsLightClose width={30} height={30} />
          </button>
          {links.map((link, index) => {
            return !link.dropdown ? (
              <Link
                key={`link-${index}`}
                href={link.url}
                className={`w-full hover:bg-gray-200 rounded-md p-2 px-4 
                ${
                  isActive(link.url) &&
                  "bg-darkBlue text-white focus:bg-darkBlue focus:text-white"
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <div key={`dropdown-${index}`} className="p-2 px-4">
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="w-full flex justify-between items-center"
                >
                  {link.name}
                  <span className="fill-darkBlue stroke-darkBlue">
                    <TablerChevronDown
                      width={24}
                      height={24}
                      className={`${
                        openDropdowns[link.name] ? "rotate-180" : ""
                      } transition-all duration-150 fill-darkBlue stroke-darkBlue`}
                    />
                  </span>
                </button>

                {openDropdowns[link.name] && link.dropdown && (
                  <>
                    <div className="flex flex-col w-full gap-1 mt-3">
                      {link.dropdown.map((sublink, subIndex) => (
                        <Link
                          key={`sublink-${subIndex}`}
                          href={sublink.url}
                          className={`w-full hover:bg-gray-200 rounded-md p-2 px-4 ${
                            isActive(sublink.url) &&
                            "bg-darkBlue text-white focus:bg-darkBlue focus:text-white"
                          }`}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
