"use client";

import { useRef, useState } from "react";
import RentCarSteps from "./RentCarSteps";
import { useFormik } from "formik";
import {
  RentCarDefaultValues,
  RentCarSchema,
} from "../Forms/RentCarForm/RentCarSchema";

const steps = [
  {
    title: "Time & Location",
    content: "Time & Location",
  },
  {
    title: "Personal Information",
    content: "Personal Information",
  },
  {
    title: "Confirmation",
    content: "Confirmation",
  },
];

export default function RentCar() {
  const formik = useFormik({
    initialValues: RentCarDefaultValues,
    validationSchema: RentCarSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [currentStep, setCurrentStep] = useState(1);
  const ref = useRef(null);

  const handleNavigate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100, // Adding scroll padding top of 100px
        behavior: "smooth",
      });
    }
  };

  const next = (e) => {
    handleNavigate(e);

    if (currentStep === 3) return;
    setCurrentStep((prev) => prev + 1);
    // Scroll to the top of the form when moving to the next step
  };

  const prev = (e) => {
    handleNavigate(e);
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      <section
        className="w-3/4 flex-1 flex flex-col px-10 py-14 rounded-xl bg-white shadow-md "
        ref={ref}
      >
        <div className="flex justify-center items-center">
          {/* Progress Bar */}
          {/* 
              Note: used pseudo elements instead of a real element but it's not working
              so I had to use a real element so I can Give it a dynamic translateX value
              as the pseudo elements don't accept dynamic values
          */}

          {/* Steps */}
          <div className="w-3/4 relative flex  py-2 border-b-2 ">
            <div
              className="hidden md:block absolute bg-darkBlue h-2 w-1/3 rounded-full z-10 -bottom-1 transition-all duration-300"
              style={{
                transform: `translateX(${(currentStep - 1) * 100}%)`,
              }}
            />
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col text-center items-center"
              >
                <span
                  className={`text-2xl font-bold size-10 text-white flex items-center justify-center ${
                    currentStep === index + 1 ? "bg-darkBlue" : "bg-darkBlue/70"
                  } rounded-md`}
                >
                  {index + 1}
                </span>
                <span
                  className={`font-semibold md:text-lg ${
                    currentStep === index + 1
                      ? "text-darkBlue text-sm "
                      : "hidden md:block text-darkBlue/70 text-[0px]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <form className="flex-1 flex items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {/* 2- form  */}
            <RentCarSteps
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              next={next}
              prev={prev}
              formik = {formik}
            />
          </div>
        </form>
      </section>
    </>
  );
}
