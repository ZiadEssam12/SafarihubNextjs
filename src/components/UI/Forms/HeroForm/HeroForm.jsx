"use client";
import * as yup from "yup";
import { MaterialSymbolsLightClose, UilSearch } from "@/icons/Icons";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function HeroForm() {
  const router = useRouter();

  const initialValues = {
    destination: "",
    duration: "",
    minBudget: "",
    maxBudget: "",
  };
  const validationSchema = yup.object({
    destination: yup.string().trim().required("Destination is required"),
    duration: yup
      .number()
      .positive("Duration must be positive")
      .integer("Duration must be a whole number")
      .min(1, "Duration must be at least 1 day")
      .max(365, "Duration cannot exceed 365 days")
      .nullable(),
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

    // Create query parameters from form values
    const queryParams = new URLSearchParams();

    // Add non-empty values to query params
    if (values.destination?.trim()) {
      queryParams.append("destination", values.destination.trim());
    }
    if (values.duration) {
      queryParams.append("duration", values.duration);
    }
    if (values.minBudget) {
      queryParams.append("minBudget", values.minBudget);
    }
    if (values.maxBudget) {
      queryParams.append("maxBudget", values.maxBudget);
    }

    // Navigate to search page with query parameters
    const searchUrl = `/search?${queryParams.toString()}`;
    router.push(searchUrl);
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {" "}
        <div className="p-3 md:p-3 lg:p-5 w-full text-black dark:text-white flex flex-col lg:flex-row items-center gap-6 bg-white/25 dark:bg-gray-800/25 backdrop-blur-[2px] rounded-xl border border-white/40 dark:border-gray-700/40 shadow-2xl">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-6 lg:px-5 py-3 rounded-lg flex flex-col lg:flex-row gap-4 shadow-lg border border-gray-100 dark:border-gray-700">
            {/* Destination Field */}
            <div className="flex flex-col gap-y-2 w-full lg:w-[200px]">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Destination
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  id="destinations"
                  placeholder="Where To?"
                  name="destination"
                  value={formik.values.destination}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-12 px-4 pr-10 border border-gray-200 dark:border-gray-600 rounded-lg placeholder:capitalize dark:bg-gray-700 bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-orange-300"
                />
                {formik.values.destination && (
                  <button
                    className="absolute right-3 p-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full text-gray-600 dark:text-gray-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      formik.setFieldValue("destination", "");
                    }}
                    aria-label="clear destination"
                  >
                    <MaterialSymbolsLightClose width={16} height={16} />
                  </button>
                )}
              </div>
              {formik.touched.destination && formik.errors.destination && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.destination}
                </div>
              )}{" "}
            </div>

            {/* Duration Field */}
            <div className="flex flex-col gap-y-2 w-full lg:w-[200px]">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Duration
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  max={365}
                  id="duration"
                  name="duration"
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="days"
                  className="w-full h-12 px-4 pr-12 border border-gray-200 dark:border-gray-600 rounded-lg placeholder:capitalize bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-orange-300"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  days
                </span>
              </div>
              {formik.touched.duration && formik.errors.duration && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.duration}
                </div>
              )}
            </div>

            {/* Min Budget */}
            <div className="flex flex-col gap-y-2 w-full lg:w-[200px]">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Min Budget
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  $
                </span>
                <input
                  type="number"
                  min={1}
                  id="minBudget"
                  name="minBudget"
                  value={formik.values.minBudget}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Min price"
                  className="w-full h-12 pl-8 pr-4 border border-gray-200 dark:border-gray-600 rounded-lg placeholder:capitalize dark:bg-gray-700 bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-orange-300"
                />
              </div>
              {formik.touched.minBudget && formik.errors.minBudget && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.minBudget}
                </div>
              )}
            </div>

            {/* Max Budget */}
            <div className="flex flex-col gap-y-2 w-full lg:w-[200px]">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Max Budget
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                  $
                </span>
                <input
                  type="number"
                  min={1}
                  id="maxBudget"
                  name="maxBudget"
                  value={formik.values.maxBudget}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Max price"
                  className="w-full h-12 pl-8 pr-4 border border-gray-200 dark:border-gray-600 rounded-lg placeholder:capitalize bg-gray-50 dark:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-orange-300"
                />
              </div>
              {formik.touched.maxBudget && formik.errors.maxBudget && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors.maxBudget}
                </div>
              )}
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto">
            <button
              type="submit"
              className="w-full cursor-pointer lg:w-auto h-12 px-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <UilSearch className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
