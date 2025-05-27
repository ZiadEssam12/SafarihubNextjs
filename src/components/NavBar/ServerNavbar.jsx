import React from "react";
import Link from "next/link";
import NavbarClientActions from "./NavbarClientActions";

export default function ServerNavbar() {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <div className="border-b-[0.5px] border-gray-300 dark:border-gray-700">
        <div className="container flex items-center h-20 py-4 justify-between">
          {/* Logo - Server Component */}
          <Link href="/" className="flex gap-x-3 items-center">
            <p className="text-lg lg:text-3xl font-bold text-orange user-select-none">
              Safari Hub
            </p>
          </Link>

          {/* Client Actions Component */}
          <NavbarClientActions />
        </div>
      </div>
    </div>
  );
}
