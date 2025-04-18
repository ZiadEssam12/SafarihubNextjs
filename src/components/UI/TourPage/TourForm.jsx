"use client";

import LoadingButton from "@/components/button/Button";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const initialValues = {
  from: new Date().toISOString().split("T")[0],
  to: new Date().toISOString().split("T")[0],
  numOfAdult: 1,
  numOfChild: 1,
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
  numOfChild: Yup.number().required("Required").min(1),
});

export default function TourForm({ price }) {
  const [totalPrice, setTotalPrice] = useState(price);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    const adultsCount = formik.values.numOfAdult || 0;
    const extraCostPerAdult = 10;
    const basePrice = price;

    const newTotal =
      basePrice + (adultsCount > 1 ? (adultsCount - 1) * extraCostPerAdult : 0);
    setTotalPrice(newTotal);
  }, [formik.values.numOfAdult, price]);
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
              formik.touched.form && formik.errors.form
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
            Numebr of adults
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
            Numebr of children
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
            min={1}
            value={formik.values.numOfChild}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="numOfChild"
          />
        </div>
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
