"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import { useRouter } from "next/navigation";

export default function SideSection({ closeSideSection }) {
  const router = useRouter();

  return (
    <>
      <div className="hide-on-print bg-white dark:bg-gray-800 ">
        <Sidebar
          className={`top-[50px]  fixed  right-0 z-40 hide-on-print h-screen ${
            closeSideSection ? "translate-x-full" : "translate-x-0"
          }  sm:translate-x-0 border-l-[1px] border-gray-200 dark:border-gray-400 
          }
            transition-all duration-200 
            `}
          aria-label="Sidebar"
          {...(closeSideSection && { collapsed: "off" })}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => router.push("/dashboard")}
                className="cursor-pointer"
                icon={HiChartPie}
                role="button"
              >
                لوحة التحكم
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => router.push("/dashboard/profile")}
                className="cursor-pointer"
                icon={CgProfile}
                role="button"
              >
                الملف الشخصي
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => router.push("dashboard/profile")}
                className="cursor-pointer"
                icon={SlCalender}
                role="button"
              >
                التقويم
              </Sidebar.Item>
              <Sidebar.Collapse label="المتجر الألكتروني" icon={HiShoppingBag}>
                <Sidebar.Item
                  onClick={() => router.push("/dashboard/profile")}
                  className="cursor-pointer"
                  role="button"
                >
                  الفواتير
                </Sidebar.Item>
                <Sidebar.Item href="#">Sales</Sidebar.Item>
                <Sidebar.Item href="#">Refunds</Sidebar.Item>
                <Sidebar.Item href="#">Shipping</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item role="button" icon={HiInbox}>
                الوارد
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => router.push("/dashboard/users")}
                className="cursor-pointer"
                icon={HiUser}
                role="button"
              >
                المستخدمين
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => router.push("/dashboard/products")}
                className="cursor-pointer"
                icon={HiShoppingBag}
                role="button"
              >
                المنتجات
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => router.push("/login")}
                className="cursor-pointer"
                icon={HiArrowSmRight}
                role="button"
              >
                تسجيل الدخول
              </Sidebar.Item>
              <Sidebar.Item
                className="cursor-pointer"
                icon={HiTable}
                role="button"
                onClick={() => router.push("/signup")}
              >
                التسجيل
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}
