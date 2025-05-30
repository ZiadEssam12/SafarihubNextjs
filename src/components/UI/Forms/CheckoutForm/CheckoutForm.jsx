"use client";

import { InputWithDropDown } from "@/components/InputWithDropDown/InputWithDropDown";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const checkoutFormSchema = yup.object().shape({
  fName: yup.string().required("First name is required"),
  lName: yup.string().required("Last name is required"),
  compName: yup.string(),
  country: yup.string().required("Country is required"),
  town: yup.string().required("Town is required"),
  state: yup.string().required("State is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().required("Email is required"),
  pickupLocation: yup.string().required("Pickup location is required"),
  additionalNote: yup.string(),
});

const checkoutFormInitialValues = {
  fName: "",
  lName: "",
  compName: "",
  country: "",
  town: "",
  state: "",
  phone: "",
  email: "",
  pickupLocation: "",
  additionalNote: "",
};

const steps = [
  {
    id: 1,
    title: "Personal Information",
    description: "Tell us about yourself",
  },
  {
    id: 2,
    title: "Address Information",
    description: "Where are you located?",
  },
  {
    id: 3,
    title: "Contact & Tour Details",
    description: "How can we reach you?",
  },
  {
    id: 4,
    title: "Review & Notes",
    description: "Final details and review",
  },
];

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const formik = useFormik({
    initialValues: checkoutFormInitialValues,
    validationSchema: checkoutFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const nextStep = (e) => {
    e.preventDefault();
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const goToStep = (stepNumber, e) => {
    e.preventDefault();
    setCurrentStep(stepNumber);
  };

  // Step 1: Personal Information
  const renderPersonalInformation = () => (
    <div className="bg-white rounded-xl p-6 border-l-4 border-orange shadow-sm">
      <h3 className="text-lg font-semibold text-darkBlue mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="fName"
            className="block text-sm font-medium text-darkBlue"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fName"
            name="fName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
            placeholder="Enter your first name"
            {...formik.getFieldProps("fName")}
          />
          {formik.errors.fName && formik.touched.fName && (
            <p className="text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {formik.errors.fName}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="lName"
            className="block text-sm font-medium text-darkBlue"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lName"
            name="lName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
            placeholder="Enter your last name"
            {...formik.getFieldProps("lName")}
          />
          {formik.errors.lName && formik.touched.lName && (
            <p className="text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {formik.errors.lName}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label
          htmlFor="compName"
          className="block text-sm font-medium text-darkBlue"
        >
          Company Name
          <span className="text-xs font-normal text-darkBlue/50 ml-2">
            (Optional)
          </span>
        </label>
        <input
          type="text"
          id="compName"
          name="compName"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
          placeholder="Enter your company name"
          {...formik.getFieldProps("compName")}
        />
        {formik.errors.compName && formik.touched.compName && (
          <p className="text-red-500 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {formik.errors.compName}
          </p>
        )}
      </div>
    </div>
  );

  // Step 2: Address Information
  const renderAddressInformation = () => (
    <div className="bg-white rounded-xl p-6 border-l-4 border-orange shadow-sm">
      <h3 className="text-lg font-semibold text-darkBlue mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-orange"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Address Information
      </h3>

      <div className="space-y-2 mb-6">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-darkBlue"
        >
          Country <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <InputWithDropDown
            name="country"
            id="country"
            placeholder="Select your country"
            value={formik.values.country}
            onChange={(value) => formik.setFieldValue("country", value)}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.country && formik.touched.country && (
          <p className="text-red-500 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {formik.errors.country}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="town"
            className="block text-sm font-medium text-darkBlue"
          >
            Town / City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="town"
            name="town"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
            placeholder="Enter your city"
            {...formik.getFieldProps("town")}
          />
          {formik.errors.town && formik.touched.town && (
            <p className="text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {formik.errors.town}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-darkBlue"
          >
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
            placeholder="Enter your state"
            {...formik.getFieldProps("state")}
          />
          {formik.errors.state && formik.touched.state && (
            <p className="text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {formik.errors.state}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  // Step 3: Contact & Tour Details
  const renderContactAndTourDetails = () => (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white rounded-xl p-6 border-l-4 border-orange shadow-sm">
        <h3 className="text-lg font-semibold text-darkBlue mb-4 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Contact Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-darkBlue"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
              placeholder="Enter your phone number"
              {...formik.getFieldProps("phone")}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 text-sm flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {formik.errors.phone}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-darkBlue"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
              placeholder="Enter your email address"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tour Details */}
      <div className="bg-white rounded-xl p-6 border-l-4 border-orange shadow-sm">
        <h3 className="text-lg font-semibold text-darkBlue mb-4 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Tour Details
        </h3>

        <div className="space-y-2">
          <label
            htmlFor="pickupLocation"
            className="block text-sm font-medium text-darkBlue"
          >
            Pickup Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm"
            placeholder="Enter your pickup location"
            {...formik.getFieldProps("pickupLocation")}
          />
          {formik.errors.pickupLocation && formik.touched.pickupLocation && (
            <p className="text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {formik.errors.pickupLocation}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  // Step 4: Review & Notes
  const renderReviewAndNotes = () => (
    <div className="space-y-8">
      {/* Order Review */}
      <div className="bg-white rounded-xl p-6 border-l-4 border-orange shadow-sm">
        <h3 className="text-lg font-semibold text-darkBlue mb-4 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Review Your Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <div>
              <span className="font-medium text-darkBlue">Name:</span>
              <span className="ml-2 text-gray-700">
                {formik.values.fName} {formik.values.lName}
              </span>
            </div>
            {formik.values.compName && (
              <div>
                <span className="font-medium text-darkBlue">Company:</span>
                <span className="ml-2 text-gray-700">
                  {formik.values.compName}
                </span>
              </div>
            )}
            <div>
              <span className="font-medium text-darkBlue">Email:</span>
              <span className="ml-2 text-gray-700">{formik.values.email}</span>
            </div>
            <div>
              <span className="font-medium text-darkBlue">Phone:</span>
              <span className="ml-2 text-gray-700">{formik.values.phone}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-darkBlue">Country:</span>
              <span className="ml-2 text-gray-700">
                {formik.values.country}
              </span>
            </div>
            <div>
              <span className="font-medium text-darkBlue">City:</span>
              <span className="ml-2 text-gray-700">{formik.values.town}</span>
            </div>
            <div>
              <span className="font-medium text-darkBlue">State:</span>
              <span className="ml-2 text-gray-700">{formik.values.state}</span>
            </div>
            <div>
              <span className="font-medium text-darkBlue">
                Pickup Location:
              </span>
              <span className="ml-2 text-gray-700">
                {formik.values.pickupLocation}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="bg-white rounded-xl p-6 border-l-4 border-orange shadow-sm">
        <h3 className="font-semibold text-2xl text-orange mb-4 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Additional Notes
        </h3>

        <div className="space-y-2">
          <label
            htmlFor="additionalNote"
            className="block text-sm font-medium text-darkBlue"
          >
            Order Notes
            <span className="text-xs font-normal text-darkBlue/50 ml-2">
              (Optional)
            </span>
          </label>
          <textarea
            id="additionalNote"
            name="additionalNote"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white shadow-sm resize-none"
            rows={4}
            placeholder="Any special requests or notes about your order..."
            {...formik.getFieldProps("additionalNote")}
          />
          {formik.errors.additionalNote && formik.touched.additionalNote && (
            <p className="text-red-500 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {formik.errors.additionalNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInformation();
      case 2:
        return renderAddressInformation();
      case 3:
        return renderContactAndTourDetails();
      case 4:
        return renderReviewAndNotes();
      default:
        return renderPersonalInformation();
    }
  }; // Progress Bar Component

  return (
    <div className="">
      <form className="space-y-8">
        {" "}
        {/* Progress Indicator */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                {" "}
                <button
                  type="button"
                  onClick={(e) => goToStep(step.id, e)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                    currentStep === step.id
                      ? "bg-orange text-white"
                      : currentStep > step.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </button>
                {/* Only show text for current step */}
                {currentStep === step.id && (
                  <div className="ml-3 flex-1">
                    <div className="text-sm font-medium text-orange">
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {step.description}
                    </div>
                  </div>
                )}
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-4 rounded-full ${
                      currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Step Content */}
        {renderStepContent()}
        {/* Navigation Buttons */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>
                Step {currentStep} of {steps.length}
              </span>
            </div>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-orange text-white rounded-lg font-medium hover:bg-orange/90 transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                onClick={formik.handleSubmit}
                disabled={!formik.isValid || formik.isSubmitting}
                className="px-8 py-3 cursor-pointer bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-200 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Complete Order
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
