"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "./NavBar";
import { TablerChevronDown } from "@/icons/Icons";

export default function HamburgerMenu() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Update currentPath whenever pathname changes
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Function to check if a link is active
  const isActive = (linkUrl) => {
    // For links with just '/', only match exact home page
    if (linkUrl === "/") {
      return pathname === "/";
    }

    // For other links, check if the current path starts with the link URL (before any hash)
    const linkPathWithoutHash = linkUrl.split("#")[0];
    return pathname === linkPathWithoutHash;
  };

  return (
    <div className="md:hidden p-3 bg-gray-100 flex flex-col gap-1 w-full text-black">
      {links.map((link, index) => {
        return !link.dropdown ? (
          <>
            <Link
              key={`${link}-${index}`}
              href={link.url}
              className={`w-full hover:bg-gray-200 rounded-md p-2 px-4 
              ${
                isActive(link.url) &&
                "bg-darkBlue text-white focus:bg-darkBlue focus:text-white"
              }`}
            >
              {link.name}
            </Link>
          </>
        ) : (
          <>
            <div className="p-2 px-4">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full flex justify-between items-center"
              >
                {link.name}
                <span className="fill-darkBlue stroke-darkBlue">
                  <TablerChevronDown
                    width={24}
                    height={24}
                    className={`${
                      showDropdown && "rotate-180"
                    } transition-all duration-150 fill-darkBlue stroke-darkBlue`}
                  />
                </span>
              </button>

              <div className="flex flex-col w-full gap-1 mt-2">
                {showDropdown && (
                  <>
                    {link.dropdown.map((sublink, subIndex) => (
                      <Link
                        key={`${sublink}-${subIndex}`}
                        href={sublink.url}
                        className={`w-full hover:bg-gray-200 rounded-md p-2 px-4 ${
                          isActive(sublink.url) &&
                          "bg-darkBlue text-white focus:bg-darkBlue focus:text-white"
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
