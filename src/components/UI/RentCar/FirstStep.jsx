"use client";

import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";
import { useEffect } from "react";

{
  /*
            step 1 :
            pick up date / time , location and drop off location
  */
}
export default function FirstStep({ formik, next }) {
  const today = new Date();

  // Validate form before allowing next step
  const handleNext = () => {
    next();
  };

  return (
    <div className="w-full col-span-2 space-y-6">
      {/* Header Section */}
      <div className="text-center mb-8">

        <p className="text-gray-600">
          Please provide your pickup and drop-off information
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"pickUpDate"}
            label={"Pick up date"}
            type="date"
            min={today.toISOString().split("T")[0]}
            lableFortSize="text-lg"
            field={formik.getFieldProps("pickUpDate")}
            touched={formik.touched.pickUpDate}
            errors={formik.errors.pickUpDate}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"pickUpTime"}
            label={"Pick up time"}
            type="time"
            min={"12:00"}
            lableFortSize="text-lg"
            field={formik.getFieldProps("pickUpTime")}
            touched={formik.touched.pickUpTime}
            errors={formik.errors.pickUpTime}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"pickUpLocation"}
            label={"Pick up Location"}
            placeholder="Enter your pick up location"
            lableFortSize="text-lg"
            field={formik.getFieldProps("pickUpLocation")}
            touched={formik.touched.pickUpLocation}
            errors={formik.errors.pickUpLocation}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"dropOffLocation"}
            label={"Drop Off Location"}
            placeholder="Enter your Drop Off location"
            lableFortSize="text-lg"
            field={formik.getFieldProps("dropOffLocation")}
            touched={formik.touched.dropOffLocation}
            errors={formik.errors.dropOffLocation}
          />
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-end mt-8">
        <button
          className={`py-3 px-8 rounded-lg text-white font-semibold transition-colors duration-200 flex items-center gap-2 ${"bg-darkBlue hover:bg-darkBlue/90 cursor-pointer"}`}
          onClick={handleNext}
        >
          Next Step
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
