"use client";

import LoadingButton from "@/components/button/Button";
import { useFormik } from "formik";
import { useEffect, useState, useMemo } from "react";
import * as Yup from "yup";

const initialValues = {
  from: new Date().toISOString().split("T")[0],
  to: new Date().toISOString().split("T")[0],
  numOfAdult: 1,
  numOfChild: 0,
  numOfInfant: 0,
};

const validationSchema = Yup.object({
  from: Yup.date()
    .min(
      new Date().toISOString().split("T")[0],
      "From date should be today or later"
    )
    .required("Required"),
  to: Yup.date()
    .min(
      new Date().toISOString().split("T")[0],
      "From date should be today or later"
    )
    .required("Required"),
  numOfAdult: Yup.number().required("Required").min(1),
  numOfChild: Yup.number().required("Required").min(0),
  numOfInfant: Yup.number().min(0), // Optional field with minimum value of 0
});

export default function TourForm({ price, pricingGroups }) {
  const [totalPrice, setTotalPrice] = useState(price);


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // Calculate price using useMemo for better performance
  const calculatedPrice = useMemo(() => {
    const adultsCount = formik.values.numOfAdult || 0;
    const childrenCount = formik.values.numOfChild || 0;
    // const infantsCount = formik.values.numOfInfant || 0;

    if (adultsCount <= 0) {
      return 0; // No adults, no price
    }

    // If pricing groups provided, use them for dynamic pricing
    // Find applicable pricing group based on number of adults
    const pricingGroup =
      pricingGroups.find(
        (group) => adultsCount >= group.from && adultsCount <= group.to
      ) || pricingGroups[0];

    // Calculate costs for each person type
    const adultsCost = adultsCount * pricingGroup.price;
    const childrenCost = childrenCount * pricingGroup.child_price;

    // const infantsCost = pricingGroups[0]. > 0 ? infantsCount * infantPrice : 0;

    return adultsCost + childrenCost;
  }, [
    formik.values.numOfAdult,
    formik.values.numOfChild,
    price,
    pricingGroups,
  ]);

  // Update total price when calculation changes
  useEffect(() => {
    setTotalPrice(calculatedPrice);
  }, [calculatedPrice]);

  return (
    <form
      className="flex flex-col h-full px-4 justify-between py-2 md:col-span-5"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-2 lg:gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="formDate"
            className={`
            ${
              formik.touched.from && formik.errors.from
                ? "text-red-500"
                : "color-dark"
            }
            w-full
            `}
          >
            From
          </label>
          <input
            type="date"
            id="formDate"
            min={new Date().toISOString().split("T")[0]}
            {...formik.getFieldProps("from")}
            className={`rounded-lg w-full ${
              formik.touched.from && formik.errors.from ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="toDate"
            className={`
            ${
              formik.touched.to && formik.errors.to
                ? "text-red-500"
                : "color-dark"
            }
            w-full
            `}
          >
            To
          </label>
          <input
            type="date"
            id="toDate"
            min={formik.values.from || new Date().toISOString().split("T")[0]}
            {...formik.getFieldProps("to")}
            className={`rounded-lg w-full ${
              formik.touched.to && formik.errors.to ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="numOfAdult"
            className={`
            ${
              formik.touched.numOfAdult && formik.errors.numOfAdult
                ? "text-red-500"
                : "color-dark"
            }
            w-full
            `}
          >
            Number of adults
          </label>
          <input
            type="number"
            id="numOfAdult"
            placeholder="number of adults"
            className={`rounded-lg w-full ${
              formik.touched.numOfAdult &&
              formik.errors.numOfAdult &&
              "border-red-500"
            }`}
            min={1}
            value={formik.values.numOfAdult}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="numOfAdult"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label
            htmlFor="numOfChild"
            className={`
            ${
              formik.touched.numOfChild && formik.errors.numOfChild
                ? "text-red-500"
                : "color-dark"
            }
            w-full
            `}
          >
            Number of children
          </label>
          <input
            type="number"
            id="numOfChild"
            placeholder="number of children"
            className={`rounded-lg w-full ${
              formik.touched.numOfChild &&
              formik.errors.numOfChild &&
              "border-red-500"
            }`}
            min={0}
            value={formik.values.numOfChild}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="numOfChild"
          />
        </div>

        {/* Infant field - conditionally rendered if infantPrice exists */}
        {/* {infantPrice > 0 && (
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="numOfInfant"
              className={`
              ${
                formik.touched.numOfInfant && formik.errors.numOfInfant
                  ? "text-red-500"
                  : "color-dark"
              }
              w-full
              `}
            >
              Number of infants
            </label>
            <input
              type="number"
              id="numOfInfant"
              placeholder="number of infants"
              className={`rounded-lg w-full ${
                formik.touched.numOfInfant &&
                formik.errors.numOfInfant &&
                "border-red-500"
              }`}
              min={0}
              value={formik.values.numOfInfant}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="numOfInfant"
            />
          </div>
        )} */}
      </div>

      <div className="text-center">
        <p className="text-sm">subtotal</p>
        <h4 className="font-bold text-4xl color-dark">${totalPrice}</h4>
      </div>

      <div className="space-y-4">
        <LoadingButton
          className="w-full block"
          text="Book Now"
          valid={formik.isValid}
          areaLabel={"Book Now"}
          loading={formik.isSubmitting}
        />
      </div>
    </form>
  );
}
