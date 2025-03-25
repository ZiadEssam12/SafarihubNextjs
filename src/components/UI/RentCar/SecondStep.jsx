"use client";

import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";
import React from "react";

{
  /* 
            step 2 : 
            name , email , phone , nationality , num of adult and num of children
        */
}
export default function SecondStep({ formik, next, prev }) {
  // Handle next step with validation
  const handleNext = () => {
    if (formik.isValid && formik.dirty) {
      next();
    }
  };

  return (
    <div className="w-full col-span-2 space-y-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Please provide your personal details and group information
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"name"}
            label={"Name"}
            placeholder="Enter your name"
            lableFortSize="text-lg"
            field={formik.getFieldProps("name")}
            touched={formik.touched.name}
            errors={formik.errors.name}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"email"}
            label={"Email"}
            type="email"
            placeholder="Enter your email"
            lableFortSize="text-lg"
            field={formik.getFieldProps("email")}
            touched={formik.touched.email}
            errors={formik.errors.email}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"phone"}
            label={"Phone"}
            type="tel"
            placeholder="Enter your phone"
            lableFortSize="text-lg"
            field={formik.getFieldProps("phone")}
            touched={formik.touched.phone}
            errors={formik.errors.phone}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"nationality"}
            label={"Nationality"}
            placeholder="Enter your nationality"
            lableFortSize="text-lg"
            field={formik.getFieldProps("nationality")}
            touched={formik.touched.nationality}
            errors={formik.errors.nationality}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"numOfAdult"}
            label={"Number of adults"}
            type="number"
            placeholder="Enter number of adults"
            lableFortSize="text-lg"
            min={1}
            field={formik.getFieldProps("numOfAdult")}
            touched={formik.touched.numOfAdult}
            errors={formik.errors.numOfAdult}
          />
        </div>
        <div className="space-y-2">
          <FormFieldWithValidation
            id={"numOfChildren"}
            label={"Number of children"}
            type="number"
            placeholder="Enter number of children"
            lableFortSize="text-lg"
            min={0}
            field={formik.getFieldProps("numOfChildren")}
            touched={formik.touched.numOfChildren}
            errors={formik.errors.numOfChildren}
          />
        </div>
      </div>

      {/* Form Status */}
      <div className="text-sm text-gray-500 mt-4">
        {!formik.isValid && formik.dirty && (
          <p className="text-red-500">
            Please fill in all required fields correctly
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          className="py-3 px-8 rounded-lg bg-darkBlue text-white font-semibold hover:bg-darkBlue/90 transition-colors duration-200 flex items-center gap-2"
          onClick={prev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Previous Step
        </button>
        <button
          className={`py-3 px-8 rounded-lg text-white font-semibold transition-colors duration-200 flex items-center gap-2 ${
            formik.isValid && formik.dirty
              ? "bg-darkBlue hover:bg-darkBlue/90"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!formik.isValid || !formik.dirty}
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
