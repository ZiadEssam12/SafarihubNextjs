"use client";

import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { WeuiArrowFilled } from "@/icons/Icons";
import Link from "next/link";

export default function DateTooltip({ linkName, LinkTo }) {
  const [selectedItem, setSelectedItem] = useState("أخر 7 ايام");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  
  return (
    <>
      <div className="border-t-[0.1px] py-6 border-gray-200 dark:border-gray-400 h-[40px] flex justify-between items-center text-black dark:text-white">
        <div>
          <Dropdown label={selectedItem} inline>
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
            </Dropdown.Header>
            <Dropdown.Item
              onClick={() => handleSelect("اليوم")}
              className={`${
                selectedItem === "اليوم" ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
            >
              اليوم
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSelect("الأمس")}
              className={`${
                selectedItem === "ألامس" ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
            >
              الأمس
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSelect("أخر 7 ايام")}
              className={`${
                selectedItem === "أخر 7 ايام"
                  ? "bg-gray-200 dark:bg-gray-700"
                  : ""
              } `}
            >
              أخر 7 ايام
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSelect("أخر 30 يوما")}
              className={`${
                selectedItem === "أخر 30 يوما"
                  ? "bg-gray-200 dark:bg-gray-700"
                  : ""
              }`}
            >
              اخر 30 يوما
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleSelect("اخر 90 يوما")}
              className={`${
                selectedItem === "اخر 90 يوما"
                  ? "bg-gray-200 dark:bg-gray-700"
                  : ""
              }`}
            >
              اخر 90 يوما
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => handleSelect("مخصص")}
              className={`${
                selectedItem === "مخصص" ? "bg-gray-200 dark:bg-gray-700" : ""
              }`}
            >
              مخصص
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Link href={LinkTo} className="text-blue-700 flex items-center group">
            {linkName}
            <WeuiArrowFilled
              width="20"
              height="20"
              className="rotate-180 fill-blue-700 group-hover:-translate-x-[2px] transition-all duration-300"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
