"use client";

// import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import { useThemeMode } from "flowbite-react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,

  loading: () => (
    <div className="h-[250px] xl:h-[350px] bg-gray-300 dark:bg-gray-800 animate-pulse rounded-xl w-full"></div>
  ),
});

const series = [
  {
    name: "Product One",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
  },

  {
    name: "Product Two",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
  },
];

export default function LineChart() {
  const { mode } = useThemeMode();

  const options = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: mode === "dark" ? "#ffffff" : "#6B7280", // Dynamic color for light/dark mode
        useSeriesColors: false,
      },
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      zoom: {
        enabled: false, // Disable zooming
      },
      dropShadow: {
        enabled: false,
      },
      animations: {
        enabled: false, // Disable animations for better rendering in a small container
      },

      toolbar: {
        show: false,
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
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },

    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#3056D3", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },

      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: "400",
          colors: mode === "dark" ? "#ffffff" : "#6B7280", // Dynamic color for light/dark mode
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 100,
      labels: {
        style: {
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          fontWeight: "400",
          colors: mode === "dark" ? "#ffffff" : "#6B7280", // Dynamic color for light/dark mode
        },
        offsetX: -10, // Add 5px margin to the right of the labels
      },
    },
  };
  return (
    <div className="w-full h-full min-h-[250px] xl:min-h-[350px]  overflow-hidden">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
        width={"100%"}
      />
    </div>
  );
}
