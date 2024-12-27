"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardNavBar from "@/components/UI/DashboardComponents/Navbar";
import SideSection from "@/components/UI/DashboardComponents/SideBar";

// Higher-order component to guard the route
function withAdminGuard(WrappedComponent) {
  return function AdminGuard(props) {
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      // Replace this with your actual user fetching logic
      const user = { type: "user" }; // Example user object

      if (user.type !== "admin") {
        router.push("/");
      } else {
        setIsAdmin(true);
      }
    }, [router]);

    if (!isAdmin) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
}

function DashboardLayout({ children }) {
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

export default withAdminGuard(DashboardLayout);
