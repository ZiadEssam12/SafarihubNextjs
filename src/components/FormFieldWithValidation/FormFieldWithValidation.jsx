import React from "react";

export default function FormFieldWithValidation({
  type = "text",
  id,
  touched,
  errors,
  label,
  field,
  lableFortSize = "",
  ...props
}) {
  return (
    <>
      <label
        htmlFor={id}
        className={`${touched && errors && "text-red-500"} ${
          touched && !errors && "text-darkBlue"
        } font-medium ${lableFortSize} capitalize`}
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="w-full pl-0 border-[0px] focus:borer-[0px] focus:outline-none focus:ring-0 border-b-2 border-[#8D8D8D] focus:border-darkBlue focus:text-darkBlue"
        // {...formik.getFieldProps("contact_fname")}
        {...field}
        {...props}
      />
      {touched && errors ? (
        <div className="text-red-500 text-sm mt-1">{errors}</div>
      ) : null}
    </>
  );
}
