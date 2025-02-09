"use client";

import { InputWithDropDown } from "@/components/InputWithDropDown/InputWithDropDown";
import { useFormik } from "formik";
import * as yup from "yup";

// f name , l name
// comp name
// coun / region
// town / city
// state
// phone
// email

// pickup location
// additonal note

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

export default function CheckoutForm() {
  const formik = useFormik({
    initialValues: checkoutFormInitialValues,
    validationSchema: checkoutFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="">
      <form className="flex flex-col gap-5 w-full">
        {/* name */}
        <div className="flex gap-4 w-full">
          <div className="flex flex-col flex-1">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              id="fName"
              name="fName"
              className="w-full rounded-md"
              {...formik.getFieldProps("fName")}
            />
            {formik.errors.fName && formik.touched.fName && (
              <p className="text-red-500 text-sm">{formik.errors.fName}</p>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="lName">Last Name</label>

            <input
              type="text"
              id="lName"
              name="lName"
              className="w-full rounded-md"
              {...formik.getFieldProps("lName")}
            />
            {formik.errors.lName && formik.touched.lName && (
              <p className="text-red-500 text-sm">{formik.errors.lName}</p>
            )}
          </div>
        </div>

        {/* end name */}

        {/* company name */}
        <div className="flex flex-col w-full">
          <label htmlFor="compName">
            Company Name{" "}
            <span className="text-xs font-normal text-darkBlue/50">
              (Optional)
            </span>
          </label>
          <input
            type="text"
            id="compName"
            name="compName"
            className="w-full rounded-md"
            {...formik.getFieldProps("compName")}
          />
          {formik.errors.compName && formik.touched.compName && (
            <p className="text-red-500 text-sm">{formik.errors.compName}</p>
          )}
        </div>
        {/* end company name */}

        {/* country / region */}
        <div className="flex flex-col w-full">
          <label htmlFor="country">Country</label>
          <InputWithDropDown
            name="country"
            id="country"
            placeholder="Country / Region"
            value={formik.values.country}
            onChange={(value) => formik.setFieldValue("country", value)}
            onBlur={formik.handleBlur}
          />

          {formik.errors.country && formik.touched.country && (
            <p className="text-red-500 text-sm">{formik.errors.country}</p>
          )}
        </div>

        {/* end country / region */}

        {/* town / city / state */}
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="town">Town / City</label>
            <input
              type="text"
              id="town"
              name="town"
              className="w-full rounded-md"
              {...formik.getFieldProps("town")}
            />
            {formik.errors.town && formik.touched.town && (
              <p className="text-red-500 text-sm">{formik.errors.town}</p>
            )}
          </div>
          {/* end town / city / state */}

          {/* state */}
          <div className="flex flex-col w-full">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full rounded-md"
              {...formik.getFieldProps("state")}
            />
            {formik.errors.state && formik.touched.state && (
              <p className="text-red-500 text-sm">{formik.errors.state}</p>
            )}
          </div>
          {/* end state */}
        </div>
        {/* end town / city / state */}

        {/* phone / email  */}
        <div className="flex gap-4 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full rounded-md"
              {...formik.getFieldProps("phone")}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
        </div>

        {/* end phone / email  */}

        {/* pickup location */}
        <div className="flex flex-col w-full">
          <label htmlFor="pickupLocation">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="w-full rounded-md"
            {...formik.getFieldProps("pickupLocation")}
          />
          {formik.errors.pickupLocation && formik.touched.pickupLocation && (
            <p className="text-red-500 text-sm">
              {formik.errors.pickupLocation}
            </p>
          )}
        </div>
        {/* end pickup location */}

        {/* additonal note */}
        <div className="flex flex-col w-full">
          <h3
            htmlFor="additionalNote"
            className="font-semibold text-2xl text-orange pt-8 pb-2"
          >
            Additional Note
          </h3>

          <label htmlFor="additionalNote" className="">
            Order notes{" "}
            <span className="text-xs font-normal text-darkBlue/50">
              (optional)
            </span>
          </label>
          <textarea
            id="additionalNote"
            name="additionalNote"
            className="w-full rounded-md"
            rows={4}
            placeholder="Notes about your order, e.g. special notes for delivery."
            {...formik.getFieldProps("additionalNote")}
          />
          {formik.errors.additionalNote && formik.touched.additionalNote && (
            <p className="text-red-500 text-sm">
              {formik.errors.additionalNote}
            </p>
          )}
        </div>
        {/* end additonal note */}
      </form>
    </div>
  );
}
