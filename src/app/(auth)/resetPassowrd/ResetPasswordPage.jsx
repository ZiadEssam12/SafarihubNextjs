"use client";

import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { Alert } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/button/Button";
import Logo from "@/components/Logo/Logo";

const initalValues = {
  newPassword: "",
  confirmNewPassword: "",
};

const validationSchema = object({
  newPassword: string()
    .min(8, "يجب أن لا تقل كلمة المرور عن 8 خانات")
    .required("كلمة المرور مطلوبة"),
  confirmNewPassword: string()
    .oneOf([ref("newPassword"), null], "كلمة المرور غير متطابقة")
    .required("كلمة المرور مطلوبة"),
});

export default function ResetPasswordPage() {
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
        router.push("/login");
      }, 0);
    },
  });

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex rtl:flex-row-reverse justify-center gap-x-2">
          <h2 className="text-center text-3xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            عقاري
          </h2>
          <Logo />
        </div>

        <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
          <div>
            <h2 className="text-3xl font-bold">نسيت كلمة المرور؟</h2>
            <p className="text-gray-600 dark:text-gray-200 mt-2">
              يرجى كتابة كلمة المرور الجديدة
            </p>
          </div>
          <form className="space-y-6 mt-6" onSubmit={formik.handleSubmit}>
            {/* new password input */}
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                كلمة المرور
              </label>

              {/* input div */}
              <div className="mt-2">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-700 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* end inout div */}

              {/* alert when input not valid */}
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="my-2 text-red-600 dark:text-red-500">
                  {formik.errors.newPassword}
                </p>
              )}
              {/* end alert when input not valid */}
            </div>
            {/* end new password input */}

            {/* confirm password input */}
            <div>
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                تأكيد كلمة المرور{" "}
              </label>

              {/* input div */}
              <div className="mt-2">
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-gray-700 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  value={formik.values.confirmNewPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* end input div */}

              {/* alert when input not valid */}
              {formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword && (
                  <Alert color="red" className="my-2">
                    {formik.errors.confirmNewPassword}
                  </Alert>
                )}
              {/*end alert when input not valid */}
            </div>
            {/* end confirm password input */}

            {/* submit button */}
            <div>
              <LoadingButton
                text="تغيير كلمة المرور"
                areaLabel={"reset password button"}
                valid={formik.isValid && formik.dirty}
                loading={loading}
              />
            </div>
            {/* end dubmit button */}
          </form>
        </div>
      </div>
    </>
  );
}
