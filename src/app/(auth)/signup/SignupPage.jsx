"use client";

import { useFormik } from "formik";
import { object, string, ref } from "yup";
// import { Label } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoadingButton from "@/components/button/Button";
import Logo from "@/components/Logo/Logo";

// Initial values and validation schema
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

const validationSchema = object({
  name: string().required("اسم الشركة مطلوب"),
  email: string()
    .email("البريد الالكتروني غير صحيح")
    .required("البريد الالكتروني مطلوب"),
  password: string()
    .min(8, "يجب أن لا يقل طول كلمة المرور عن 8 احرف او ارقام")
    .required("كلمة المرور مطلوبة"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "كلمة المرور غير متطابقة")
    .required("يجب تأكيد كلمة المرور"),
  phoneNumber: string()
    .matches(/^(05)[013456789][0-9]{7}$/, "رقم الهاتف غير صحيح")
    .required("رقم الهاتف مطلوب"),
});

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      formik.resetForm();
      router.push("/login");
    },
  });

  const renderField = (id, label, type = "text") => (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched[id] && formik.errors[id] && (
        // <Label color="failure" className="my-2" value={formik.errors[id]} />
        <div className="text-red-500 text-sm mt-1">{formik.errors[id]}</div>
      )}
    </div>
  );

  return (
    <>
      <div className="flex h-fit flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 b">
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
            <Logo />
            <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Register a new Account
            </h2>
          </div>

          <div className="mt-8 ">
            <form className="space-y-3" onSubmit={formik.handleSubmit}>
              {renderField("name", "Name")}
              {renderField("email", "Email Address", "email")}
              {renderField("phoneNumber", "Phone Number")}

              <div className="flex flex-col lg:flex-row justify-between w-full gap-x-2 gap-y-4">
                {renderField("password", "Password", "password")}
                {renderField("confirmPassword", "Confirm Password", "password")}
              </div>

              <div>
                <LoadingButton
                  text="Sign Up"
                  areaLabel={"sign up button"}
                  valid={formik.isValid && formik.dirty}
                  loading={loading}
                />
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 capitalize">
              Already Have an Account?
              <Link
                href="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Sign in Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
