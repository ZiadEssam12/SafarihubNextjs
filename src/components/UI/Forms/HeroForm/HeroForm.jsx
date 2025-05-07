"use client";
import * as yup from "yup";
import {
  MaterialSymbolsLightClose,
  UilSearch,
  SolarCalendarLinear,
} from "@/icons/Icons";
import { useFormik } from "formik";
import { useState, useRef, useEffect } from "react";

export default function HeroForm() {
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const initialValues = {
    destination: "",
    checkIn: "",
    checkOut: "",
    minBudget: "",
    maxBudget: "",
  };

  const validationSchema = yup.object({
    destination: yup.string().trim().required("Destination is required"),
    checkIn: yup.date().nullable().required("Check-in date is required"),
    checkOut: yup
      .date()
      .nullable()
      .min(yup.ref("checkIn"), "Check-out date must be after check-in date")
      .required("Check-out date is required"),
    minBudget: yup.number().positive("Price must be positive").nullable(),
    maxBudget: yup
      .number()
      .positive("Price must be positive")
      .min(
        yup.ref("minBudget"),
        "Maximum price must be greater than minimum price"
      )
      .nullable(),
  });

  function onSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "Select date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Close date pickers when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (checkInRef.current && !checkInRef.current.contains(event.target)) {
        setShowCheckInPicker(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target)) {
        setShowCheckOutPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-8 md:px-8  w-full text-black dark:text-white flex lg:flex-row items-center gap-5 bg-white/20 dark:bg-gray-800/20 backdrop-blur-[3px] rounded-lg border border-white/30 dark:border-gray-700/30 shadow-lg">
          <div className="bg-white dark:bg-gray-800 px-10 py-5 rounded-md grid grid-cols-5 gap-5">
            <div className="flex flex-col gap-y-2 w-full lg:w-fit px-8 lg:px-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  id="destinations"
                  placeholder="Where To?"
                  name="destination"
                  value={formik.values.destination}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-2 border-0 placeholder:capitalize outline-transparent dark:bg-gray-700 focus:outline-transparent focus:ring-0 shadow-sm focus:border-transparent"
                />
                <button
                  className="absolute right-1 bg-gray-100 rounded-full text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.setFieldValue("destination", "");
                  }}
                  aria-label="clear destination"
                >
                  <MaterialSymbolsLightClose width={24} height={24} />
                </button>
              </div>
              {formik.touched.destination && formik.errors.destination && (
                <div className="text-red-500 text-xs">
                  {formik.errors.destination}
                </div>
              )}
            </div>

            {/* Check-in Date Field */}
            <div
              className="flex flex-col gap-y-2 w-full md:w-fit px-8 md:px-0"
              ref={checkInRef}
            >
              <div className="relative w-full">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-2 border-0 bg-white dark:bg-gray-700 rounded shadow-sm"
                  onClick={() => {
                    setShowCheckInPicker(!showCheckInPicker);
                    setShowCheckOutPicker(false);
                  }}
                >
                  <span
                    className={
                      formik.values.checkIn
                        ? "text-black dark:text-white"
                        : "text-gray-500"
                    }
                  >
                    {formik.values.checkIn
                      ? formatDate(formik.values.checkIn)
                      : "Check-in"}
                  </span>
                  <SolarCalendarLinear
                    className="text-gray-400"
                    width={20}
                    height={20}
                  />
                </button>

                {showCheckInPicker && (
                  <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-700 shadow-lg rounded-md z-10">
                    <input
                      type="date"
                      name="checkIn"
                      value={formik.values.checkIn}
                      onChange={(e) => {
                        formik.handleChange(e);
                        setShowCheckInPicker(false);
                      }}
                      className="p-2 border-0 outline-transparent focus:outline-transparent focus:ring-0"
                    />
                  </div>
                )}

                {formik.values.checkIn && (
                  <button
                    className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      formik.setFieldValue("checkIn", "");
                    }}
                    aria-label="clear check-in date"
                  >
                    <MaterialSymbolsLightClose width={18} height={18} />
                  </button>
                )}
              </div>
              {formik.touched.checkIn && formik.errors.checkIn && (
                <div className="text-red-500 text-xs">
                  {formik.errors.checkIn}
                </div>
              )}
            </div>

            {/* Check-out Date Field */}

            <div className="relative w-full">
              <button
                type="button"
                className="flex items-center justify-between w-full p-2 border-0 bg-white dark:bg-gray-700 rounded shadow-sm"
                onClick={() => {
                  setShowCheckOutPicker(!showCheckOutPicker);
                  setShowCheckInPicker(false);
                }}
              >
                <span
                  className={
                    formik.values.checkOut
                      ? "text-black dark:text-white"
                      : "text-gray-500"
                  }
                >
                  {formik.values.checkOut
                    ? formatDate(formik.values.checkOut)
                    : "Check-out"}
                </span>
                <SolarCalendarLinear
                  className="text-gray-400"
                  width={20}
                  height={20}
                />
              </button>

              {showCheckOutPicker && (
                <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-700 shadow-lg rounded-md z-10">
                  <input
                    type="date"
                    name="checkOut"
                    value={formik.values.checkOut}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowCheckOutPicker(false);
                    }}
                    className="p-2 border-0 outline-transparent focus:outline-transparent focus:ring-0"
                  />
                </div>
              )}

              {formik.values.checkOut && (
                <button
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.setFieldValue("checkOut", "");
                  }}
                  aria-label="clear check-out date"
                >
                  <MaterialSymbolsLightClose width={18} height={18} />
                </button>
              )}
            </div>
            {formik.touched.checkOut && formik.errors.checkOut && (
              <div className="text-red-500 text-xs">
                {formik.errors.checkOut}
              </div>
            )}

            <input
              type="number"
              min={1}
              id="minBudget"
              name="minBudget"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Min price"
              className="w-full p-2 border-0 placeholder:capitalize dark:bg-gray-700 outline-transparent focus:outline-transparent focus:ring-0 shadow-sm focus:border-transparent"
            />
            {formik.touched.minBudget && formik.errors.minBudget && (
              <div className="text-red-500 text-xs">
                {formik.errors.minBudget}
              </div>
            )}
            <input
              type="number"
              min={1}
              id="maxBudget"
              name="maxBudget"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Max price"
              className="w-full p-2 border-0 placeholder:capitalize dark:bg-gray-700 outline-transparent focus:outline-transparent focus:ring-0 shadow-sm focus:border-transparent"
            />
            {formik.touched.maxBudget && formik.errors.maxBudget && (
              <div className="text-red-500 text-xs">
                {formik.errors.maxBudget}
              </div>
            )}
          </div>
          <div className="gap-y-2 w-full md:w-fit h-20 flex items-center px-8 md:px-0 bg-[#f57c00] hover:bg-orange rounded-md">
            <button
              type="submit"
              className="w-full lg:w-fit justify-center flex items-center gap-2 cursor-pointer text-white text-sm font-bold py-2 px-4 rounded"
            >
              <UilSearch />
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
