// eimport { Helmet } from "react-helmet";
"use client";

// import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Label } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/button/Button";
import Logo from "@/components/Logo/Logo";

const initalValues = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: string()
    .email("البريد الالكتروني غير صحيح")
    .required("البريد الالكتروني مطلوب"),
  password: string()
    .min(8, "يجب أن لا يقل طول كلمة المرور عن 8 احرف او ارقام")
    .required("كلمة المرور مطلوبة"),
});


export default function LoginPage() {
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
        router.push("/dashboard"); // Navigate to the dashboard
      }, 1000);
    },
  });

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <Logo />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            سجل الدخول إلى حسابك
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <Label
                  color="failure"
                  className="my-2"
                  value={formik.errors.email}
                />
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  كلمة المرور
                </label>
                <div className="text-sm">
                  <Link
                    href={"/forgetPassword"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    هل نسيت كلمة المرور؟
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <Label
                  color="failure"
                  className="my-2"
                  value={formik.errors.password}
                />
              )}
            </div>

            <div>
              <LoadingButton
                text="تسجيل الدخول"
                areaLabel={"sign in button"}
                valid={formik.isValid && formik.dirty}
                loading={loading}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-white">
            لست لديك حساب؟{" "}
            <Link
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              قم بالتسجيل الان
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
