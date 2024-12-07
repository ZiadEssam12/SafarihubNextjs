"use client";

import { useThemeMode } from "flowbite-react";
import dynamic from "next/dynamic";
import React from "react";
// import ReactApexChart from "react-apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,

  loading: () => (
    <div className="min-h-full h-full bg-gray-300 dark:bg-gray-800 animate-pulse rounded-xl w-full"></div>
  ),
});

export default function ColumnChart() {
  const { mode } = useThemeMode();

  //   const [chartData] = useState({
  // ,
  //   });

  const series = [
    {
      name: "المصروفات",
      data: [44, 55, 41, 67, 22, 43, 40],
    },
    {
      name: "الايرادات",
      data: [5, 7, 10, 8, 13, 4, 13],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: "100%",
      width: "100%",
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    tooltip: {
      enabled: true,
      theme: mode === "dark" ? "dark" : "light", // Adjust tooltip theme based on mode
      style: {
        background: mode === "dark" ? "#333" : "#f3f4f6", // Tooltip background color
        fontSize: "12px",
        fontWeight: "bold",
        color: mode === "dark" ? "#ffffff" : "#333", // Text color inside the tooltip
      },
      x: {
        show: true, // Show x-axis value in the tooltip
      },
      y: {
        formatter: function (val) {
          return `${val} units`; // Customize y-axis values in the tooltip
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        borderRadiusApplication: "around", // 'around', 'end'
        borderRadiusWhenStacked: "all", // 'all', 'last'
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 600,
              color: mode === "dark" ? "#ffffff" : "#6B7280", // Text color
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "سبت", // January
        "أحد", // February
        "أثنين", // March
        "ثلاثاء", // April
        "اربعاء", // May
        "خميس", // June
        "جمعة", // July
      ],
      labels: {
        style: {
          colors: mode === "dark" ? "#ffffff" : "#6B7280",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: mode === "dark" ? "#ffffff" : "#6B7280",
        },
      },
    },
    legend: {
      position: "top",
      labels: {
        colors: mode === "dark" ? "#ffffff" : "#6B7280",
        useSeriesColors: false,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="w-full h-full">
      <ReactApexChart
        // key={mode}
        options={options}
        series={series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
}
