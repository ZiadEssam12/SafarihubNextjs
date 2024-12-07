"use client";

import { useFormik } from "formik";
import { string, object } from "yup";
import { Alert } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/button/Button";
import Link from "next/link";
import Logo from "@/components/Logo/Logo";

const initalValues = {
  email: "",
};

const validationSchema = object({
  email: string()
    .email("البريد الالكتروني غير صحيح")
    .required("البريد الالكتروني مطلوب"),
});

export default function ForgetPasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        formik.resetForm();
        router.push("/resetPassowrd");
      }, 2000);
    },
  });

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex  rtl:flex-row-reverse justify-center gap-x-2">
          <h2 className="text-center text-3xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            عقاري
          </h2>
          <Logo />
        </div>

        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
          <div>
            <h2 className="text-3xl font-bold">نسيت كلمة المرور؟</h2>
            <p className="text-gray-600 dark:text-gray-200 mt-2">
              لا تقلق! فقط اكتب بريدك الإلكتروني وسنرسل لك رمزًا لإعادة تعيين
              كلمة المرور الخاصة بك!
            </p>
          </div>
          <form className="space-y-6 mt-6" onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                البريد الالكتروني
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-700 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <Alert color="failure" className="my-2">
                  {formik.errors.email}
                </Alert>
              )}
            </div>

            <div>
              <LoadingButton
                text="اعادة التعيين"
                areaLabel={"reset password button"}
                valid={formik.isValid && formik.dirty}
                loading={loading}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-white">
            لديك حساب بالفعل؟
            <Link
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              سجل الدخول
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
