"use client";
import { number, object, string } from "yup";
import { MaterialSymbolsLightClose, UilSearch } from "@/icons/Icons";
import { useFormik } from "formik";

export default function HeroForm() {
  const initialValues = {
    destination: String(),
    category: String(),
    days: Number(),
    range: Number(),
  };
  const validationSchema = object({
    destination: string(),
    category: string(),
    days: number(),
    range: number().max(11000),
  });

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
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white dark:bg-gray-800  rounded-md shadow-lg py-4 md:px-8 lg:h-28 w-full text-black dark:text-white flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col gap-y-2 w-full lg:w-fit px-8 lg:px-0">
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
    </>
  );
}
