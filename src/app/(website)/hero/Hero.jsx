"use client";

import React from "react";

import { MaterialSymbolsLightClose, UilSearch } from "@/icons/Icons";
import { useFormik } from "formik";
import * as Yup from "yup";

import Image from "next/image";
import MultiRangeSlider from "@/components/DualRangeSlider/DualRangeSlider";
const initialValues = {
  destination: String(),
  category: String(),
  days: Number(),
  range: Number(),
};
const validationSchema = Yup.object({
  destination: Yup.string(),
  category: Yup.string(),
  days: Yup.number(),
  range: Yup.number().max(11000),
});

export default function Hero() {
  function onSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <>
      <div className="flex justify-center items-center mx-break-out">
        <div className="w-full">
          <figure className="w-full h-1/2">
            <Image
              src="/heroBackground.webp" // Ensure the correct path is provided here
              alt="pyramids hero background"
              className="w-full object-cover max-h-[600px] h-[60vh] lg:h-auto hero-section"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
              loading="lazy"
              // layout="responsive" // This makes the image responsive
              width={1200} // Specify the original width
              height={800} // Specify the original height
              unoptimized
            />
          </figure>
        </div>
      </div>

      <div id="triPackUp" className="px-4 md:px-0 -translate-y-3 ">
        <form onSubmit={formik.handleSubmit}>
          <div className="bg-white dark:bg-gray-800  rounded-md shadow-lg py-4 md:px-8 md:h-28 w-full text-black dark:text-white flex flex-col md:flex-row items-center gap-5">
            <div className="flex flex-col gap-y-2 w-full md:w-fit px-8 md:px-0">
              <label htmlFor="destinations" className="ms-2">
                Destinations
              </label>
              <div className="relative  flex items-center">
                <input
                  type="text"
                  id="destinations"
                  placeholder="Destinations"
                  name="destination"
                  value={formik.values.destination}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-0 outline-transparent dark:bg-gray-700 focus:outline-transparent focus:ring-0 shadow-sm focus:border-transparent  w-full"
                />
                <button
                  className="absolute right-1 bg-gray-100 rounded-full text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.setFieldValue("destination", "");
                  }}
                >
                  <MaterialSymbolsLightClose />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full md:w-fit px-8 md:px-0">
              <label htmlFor="categories" className="ms-2 ">
                Categories
              </label>
              <div className="relative w-full  flex items-center">
                <input
                  type="text"
                  placeholder="Categories"
                  name="category"
                  id="categories"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border-0 dark:bg-gray-700 outline-transparent focus:outline-transparent focus:ring-0 shadow-sm focus:border-transparent w-full"
                />
                <button
                  className="absolute right-1 bg-gray-100 rounded-full text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.setFieldValue("category", "");
                  }}
                >
                  <MaterialSymbolsLightClose />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 w-full md:w-fit px-8 md:px-0">
              <label htmlFor="days" className="ms-2">
                Duration (Days)
              </label>
              <input
                type="number"
                min={1}
                id="days"
                name="days"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Number of days?"
                className="border-0 dark:bg-gray-700 outline-transparent focus:outline-transparent focus:ring-0 shadow-sm focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-y-2 w-full md:w-fit px-8 md:px-0">
              <label htmlFor="price" className="ms-2">
                Price ($0 - $11000)
              </label>
            </div>
            <div className="flex flex-col gap-y-2 w-full md:w-fit px-8 md:px-0">
              <button
                type="submit"
                className="w-full lg:w-fit justify-center flex items-center gap-2 bg-[#f57c00] hover:bg-orange-400 text-white text-sm font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
              >
                <UilSearch />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
