"use client";

import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";
import React from "react";

// Form inputs:
// step 2:
// f name l name
// nationality
// phone (email address)
// number of adults
// number of children
// number of infants

// budget  (min max)

// additonal informatio

export default function MakeYourTripForm({ formik }) {
  return (
    <div className="col-span-6 h-full container py-3">
      <h2 className="font-semibold text-xl lg:text-[28px] text-darkBlue text-center">
        Fill The Information
      </h2>
      <div className="h-full grid gap-8 col-span-1 lg:grid-cols-5 py-5">
        {/* main info */}
        {/* Fname , Lname ,  nationality , phone , email */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <div className=" flex flex-col md:flex-row gap-4">
            {/* Fname */}
            <div className="flex-1 flex flex-col col-span-1 lg:col-span-1">
              <FormFieldWithValidation
                id="fName"
                label={"First Name"}
                errors={formik.errors.fName}
                touched={formik.touched.fName}
                field={formik.getFieldProps("fName")}
              />
            </div>
            {/* Lname */}
            <div className="flex-1 flex flex-col col-span-1 lg:col-span-1">
              <FormFieldWithValidation
                id="lName"
                label={"Last Name"}
                errors={formik.errors.lName}
                touched={formik.touched.lName}
                field={formik.getFieldProps("lName")}
              />
            </div>
          </div>
          {/* nationality */}
          <div className="flex flex-col">
            <FormFieldWithValidation
              id="nationality"
              label={"Nationality"}
              errors={formik.errors.nationality}
              touched={formik.touched.nationality}
              field={formik.getFieldProps("nationality")}
            />
          </div>
          {/* email */}
          <div className="flex flex-col">
            <FormFieldWithValidation
              id="email"
              label={"email"}
              errors={formik.errors.email}
              touched={formik.touched.email}
              field={formik.getFieldProps("email")}
            />
          </div>
          {/* phone */}
          <div className="flex flex-col">
            <FormFieldWithValidation
              id="phone"
              type="tel"
              label={"Phone"}
              errors={formik.errors.phone}
              touched={formik.touched.phone}
              field={formik.getFieldProps("phone")}
            />
          </div>
        </div>
        {/* end main info */}

        {/* number of {adult , infant , children} */}
        <div className="col-span-1 lg:col-span-2 space-y-4">
          {/* number of {adult , infant , children} */}
          {/* Numebr of adults */}
          <div className="flex flex-col">
            <FormFieldWithValidation
              id="children"
              type={"number"}
              label={"Number of adults"}
              errors={formik.errors.adults}
              touched={formik.touched.adults}
              field={formik.getFieldProps("adults")}
              min={1}
            />
          </div>
          {/* Number of children */}
          <div className="flex flex-col">
            <FormFieldWithValidation
              id="children"
              label={"Numebr of children"}
              min={0}
              errors={formik.errors.children}
              touched={formik.touched.children}
              field={formik.getFieldProps("children")}
            />
          </div>
          {/* Number of infants */}
          <div className="flex flex-col">
            <FormFieldWithValidation
              id="infants"
              label={"Numebr of infants"}
              min={0}
              errors={formik.errors.infants}
              touched={formik.touched.infants}
              field={formik.getFieldProps("infants")}
            />
          </div>
          {/* end */}

          {/* date */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col">
              <FormFieldWithValidation
                id="budgetMin"
                type={"number"}
                label={"Enter Your minimum Budget"}
                errors={formik.errors.budgetMin}
                touched={formik.touched.budgetMin}
                field={formik.getFieldProps("budgetMin")}
                min={1}
              />
            </div>

            <div className="flex flex-col">
              <FormFieldWithValidation
                id="budgetMax"
                type={"number"}
                label={"Enter Your maximum Budget"}
                errors={formik.errors.budgetMax}
                touched={formik.touched.budgetMax}
                field={formik.getFieldProps("budgetMax")}
                min={1}
              />
            </div>
          </div>
        </div>
        {/* end */}

        {/* additonal info */}
        <div className="flex flex-col w-full col-span-1 lg:col-span-5">
          <label
            htmlFor="additionalInformation"
            className="text-darkBlue font-semibold"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInformation"
            {...formik.getFieldProps("additionalInformation")}
            className="w-full h-32 border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
