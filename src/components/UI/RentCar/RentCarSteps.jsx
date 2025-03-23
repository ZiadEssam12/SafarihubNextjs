import React, { Suspense, lazy } from "react";

const FirstStep = lazy(() => import("./FirstStep"));
const SecondStep = lazy(() => import("./SecondStep"));
const ThirdStep = lazy(() => import("./ThirdStep"));

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4 col-span-2">
    <div className="h-60 bg-gray-300 rounded"></div>
  </div>
);

export default function RentCarSteps({ currentStep, next, prev, formik }) {
  return (
    <>
      <Suspense fallback={<SkeletonLoader />}>
        {/*
            step 1 :
            pick up date / time , location and drop off location
        */}
        {currentStep === 1 && (
          <FirstStep next={next} prev={prev} formik={formik} />
        )}
        {/* 
            step 2 : 
            name , email , phone , nationality , num of adult and num of children
        */}
        {currentStep === 2 && (
          <SecondStep next={next} prev={prev} formik={formik} />
        )}

        {/*
            step 3 :
            display name , date , pick up and drop off location 
            pick up time , price number of travelers        
          */}
        {currentStep === 3 && (
          <ThirdStep next={next} prev={prev} formik={formik} />
        )}
      </Suspense>
    </>
  );
}
