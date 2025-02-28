"use client";

import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  contact_fname: "",
  contact_lname: "",
  contact_email: "",
  contact_phone: "",
  contact_message: "",
};

function submitForm(values) {
  console.log(values);
}

const validationSchema = Yup.object({
  contact_fname: Yup.string().required("First name is required"),
  contact_lname: Yup.string().required("Last name is required"),
  contact_email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contact_phone: Yup.string()
    .matches(/^[0-9+]+$/, "Phone number can only contain numbers and +")
    .required("Phone number is required"),
  contact_message: Yup.string().required("Message is required"),
});

export default function ContactUsForm() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full text-[#8D8D8D] grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      {/* first name */}
      <div className="col-span-1">
        <FormFieldWithValidation
          id="contact_fname"
          touched={formik.touched.contact_fname}
          errors={formik.errors.contact_fname}
          field={formik.getFieldProps("contact_fname")}
          label="First Name"
        />
      </div>

      {/* Last name */}
      <div className="col-span-1">
        <FormFieldWithValidation
          id={"contact_lname"}
          touched={formik.touched.contact_lname}
          errors={formik.errors.contact_lname}
          field={formik.getFieldProps("contact_lname")}
          label={"Last Name"}
        />
      </div>

      {/* Email */}
      <div className="col-span-1">
        <FormFieldWithValidation
          id={"contact_email"}
          touched={formik.touched.contact_email}
          errors={formik.errors.contact_email}
          field={formik.getFieldProps("contact_email")}
          label={"Email"}
        />
      </div>

      {/* Phone */}
      <div className="col-span-1">
        <FormFieldWithValidation
          id={"contact_phone"}
          touched={formik.touched.contact_phone}
          errors={formik.errors.contact_phone}
          field={formik.getFieldProps("contact_phone")}
          label={"Phone"}
        />
      </div>

      {/* Message */}
      <div className="col-span-1 lg:col-span-2">
        <label
          htmlFor="contact_message"
          className={`${
            formik.touched.contact_message &&
            formik.errors.contact_message &&
            "text-red-500"
          } ${
            formik.touched.contact_message &&
            !formik.errors.contact_message &&
            "text-darkBlue"
          } font-medium text-xs`}
        >
          Message
        </label>
        <textarea
          name="contact_message"
          id="contact_message"
          className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue placeholder:text-[14px] font-normal"
          placeholder="Type your message here..."
          {...formik.getFieldProps("contact_message")}
        />
        {formik.touched.contact_message && formik.errors.contact_message ? (
          <div className="text-red-500 text-xs">
            {formik.errors.contact_message}
          </div>
        ) : null}
      </div>

      <div className="col-span-1 lg:col-span-2 flex items-center justify-end">
        <button
          type="submit"
          className="bg-[#011C2B] w-full lg:w-[200px] h-[54px] rounded-md text-white font-medium"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
