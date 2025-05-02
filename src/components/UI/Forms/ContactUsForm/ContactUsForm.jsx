"use client";

import FormFieldWithValidation from "@/components/FormFieldWithValidation/FormFieldWithValidation";
import { useFormik } from "formik";
import { ContactUsInitialValues, ContactUsValidationSchema } from "./schema";

function submitForm(values) {
  console.log(values);
}

export default function ContactUsForm() {
  const formik = useFormik({
    initialValues: ContactUsInitialValues,
    validationSchema: ContactUsValidationSchema,
    onSubmit: submitForm,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full h-full flex flex-col text-[#8D8D8D] text-[16px]"
    >
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 h-4/5">
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
            } font-medium`}
          >
            Message
          </label>
          <textarea
            name="contact_message"
            id="contact_message"
            className="w-full pl-0 border-[0px] focus:borer-[0px] focus:ring-0 focus-visible:outline-0 focus:outline-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue placeholder:text-[15px] font-normal"
            placeholder="Type your message here..."
            {...formik.getFieldProps("contact_message")}
          />
          {formik.touched.contact_message && formik.errors.contact_message ? (
            <div className="text-red-500">{formik.errors.contact_message}</div>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-end mt-9 lg:mt-0 h-1/5">
        <button
          type="submit"
          className="bg-[#011C2B] w-full lg:w-[200px] h-[54px] rounded-md text-white font-medium cursor-pointer"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
