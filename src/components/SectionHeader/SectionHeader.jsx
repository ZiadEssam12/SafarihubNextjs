import React from "react";

export default function SectionHeader({ title, backgroundImage = "" }) {
  return (
    <div className="text-orange h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center mx-break-out mb-10">
      <div className="container">
        <h1 className="text-[40px] font-semibold capitalize">{title}</h1>
      </div>
    </div>
  );
}
