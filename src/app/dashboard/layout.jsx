"use client";

import React, { useState } from "react";
import DashboardNavBar from "./navbar/Navbar";
import SideSection from "./SideSection/SideSection";

export default function DashboardLayout({ children }) {
  const [closeSideSection, setCloseSideSection] = useState(true);
  function sideSectionToggle() {
    setCloseSideSection(closeSideSection ? false : true);
  }

  return (
    <>
      <SideSection closeSideSection={closeSideSection} />
      <DashboardNavBar sideSectionToggle={sideSectionToggle} />

      <div className="remove-margin w-full">
        <div
          className={`px-3 lg:px-4 remove-margin bg-inherit min-h-screen pt-[90px]  mr-auto w-full ${
            closeSideSection
              ? "sm:w-[calc(100%-64px)]"
              : "sm:w-[calc(100%-256px)]"
          }  transition-all duration-300`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
