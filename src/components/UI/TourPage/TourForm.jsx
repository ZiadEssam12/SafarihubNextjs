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
      className="flex flex-col h-full px-4 justify-between  py-2 md:col-span-5"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 lg:gap-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="formDate"
            className={`
            ${
              formik.touched.form && formik.errors.form
                ? "text-red-500"
                : "color-dark"
            }
            `}
          >
            From
          </label>
          <input
            type="date"
            id="formDate"
            min={new Date().toISOString().split("T")[0]}
            {...formik.getFieldProps("from")}
            className={`rounded-lg ${
              formik.touched.from && formik.errors.from ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="toDate"
            className={`
            ${
              formik.touched.to && formik.errors.to
                ? "text-red-500"
                : "color-dark"
            }
            `}
          >
            To
          </label>
          <input
            type="date"
            id="toDate"
            min={formik.values.from || new Date().toISOString().split("T")[0]}
            {...formik.getFieldProps("to")}
            className={`rounded-lg ${
              formik.touched.to && formik.errors.to ? "border-red-500" : ""
            }`}
          />
        </div>

        <div className="flex flex-col gap-1 col-span-2 md:col-span-1 ">
          <label
            htmlFor="numOfAdult"
            className={`
            ${
              formik.touched.numOfAdult && formik.errors.numOfAdult
                ? "text-red-500"
                : "color-dark"
            }
            `}
          >
            Numebr of adults
          </label>
          <input
            type="number"
            id="numOfAdult"
            placeholder="number of adults"
            className={`rounded-lg ${
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
        <div className="flex flex-col gap-1  col-span-2 md:col-span-1">
          <label
            htmlFor="numOfChild"
            className={`
            ${
              formik.touched.numOfChild && formik.errors.numOfChild
                ? "text-red-500"
                : "color-dark"
            }
            `}
          >
            Numebr of children
          </label>
          <input
            type="number"
            id="numOfChild"
            placeholder="number of children"
            className={`rounded-lg ${
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
