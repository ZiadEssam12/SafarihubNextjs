"use client";

import { useEffect, useState } from "react";
import {
  initialValues,
  validationSchema,
} from "../Forms/MakeYourTripForm/Schema";
import { useFormik } from "formik";

import Options from "./Options";
import MakeYourTripForm from "../Forms/MakeYourTripForm/MakeYourTripForm";

// Form inputs:
// step 1:
// select option (duration , from , to , month)

// step 2:
// f name l name
// nationality
// phone (email address)
// number of adults
// number of children
// number of infants

// budget  (min max)

// additonal information

const handleSubmit = (values) => {
  console.log(values);
};

export default function MakeYourTrip() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <form
      className="h-full flex-1 flex flex-col justify-between"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex-1 grid gap-3 grid-cols-6 rounded-lg p-3 bg-white">
        {step === 1 && (
          <Options
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            formik={formik}
          />
        )}
        {step >= 2 && <MakeYourTripForm formik={formik} />}
      </div>
      <div className="col-span-6 flex flex-row-reverse gap-4 justify-center py-3 mt-auto">
        {step === 1 ? (
          <button
            type="button"
            className="text-white rounded-lg bg-orange w-[100px] py-2"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setStep((prev) => prev + 1);
            }}
          >
            Next
          </button>
        ) : (
          <>
            <button
              className="bg-orange text-white rounded-lg w-[100px] py-2"
              type="submit"
            >
              Submit
            </button>
            <button
              className="text-white rounded-lg bg-orange w-[100px] py-2"
              onClick={(e) => {
                e.preventDefault();
                setStep((prev) => prev - 1);
              }}
            >
              Back
            </button>
          </>
        )}
      </div>
    </form>
  );
}
