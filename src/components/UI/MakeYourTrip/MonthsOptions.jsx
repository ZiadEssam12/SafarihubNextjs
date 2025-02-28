"use client";

import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthPicker({ setFieldValue }) {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    handleMonthSelect(month);
  };

  const handleMonthSelect = (month) => {
    setFieldValue("month", month);
  };

  return (
    <div className="grid grid-cols-3 p-2">
      {months.map((month, index) => (
        <button
          key={index}
          className={`p-2 select-none ${
            selectedMonth === month
              ? "bg-darkBlue text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleMonthClick(month);
          }}
        >
          {month}
        </button>
      ))}
    </div>
  );
}
