"use client";

import { useThemeMode } from "flowbite-react";
import dynamic from "next/dynamic";
// import React from "react";
// import ReactApexChart from "react-apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,

  loading: () => (
    <div className="min-h-full h-full bg-gray-300 dark:bg-gray-800 animate-pulse rounded-xl w-full"></div>
  ),
});

export default function DonutChart({}) {
  const { mode } = useThemeMode();

  const options = {
    chart: {
      type: "donut",
      fontFamily: "Inter, sans-serif",
      background: "transparent",
      height: "100%",
      animations: {
        enabled: false, // Disable animations for better rendering in a small container
      },
      dropShadow: {
        enabled: false, // Remove shadow for a clean fit
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // Inner size of the donut
          labels: {
            show: true,
            total: {
              show: true,
              label: "المجموع", // Main text in the center
              fontSize: "30px",
              fontWeight: 600,
              color: mode === "dark" ? "#ffffff" : "#6B7280", // Adjust color based on mode
              formatter: function () {
                return "350K"; // Value to display below the label
              },
            },
          },
        },
      },
    },
    theme: {
      mode: mode,
    },
    labels: ["Web", "Mobile", "Tablet", "Others"],
    legend: {
      position: "bottom",
      labels: {
        colors: mode === "dark" ? "#ffffff" : "#6B7280",
      },
    },
  };

  const series = [44, 55, 13, 33]; // Example data (percentages or absolute values)

  return (
    <div className="w-full h-full">
      <ReactApexChart
        // key={mode}
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}
