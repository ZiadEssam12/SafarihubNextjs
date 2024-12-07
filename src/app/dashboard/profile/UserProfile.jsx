"use client";

import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { toast } from "react-toastify";
import {
  FaUser,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { useState } from "react";

const validationSchema = object({
  firstName: string()
    .required("الاسم الأول مطلوب")
    .min(2, "يجب أن يكون الاسم الأول على الأقل 2 أحرف")
    .max(30, "يجب ألا يزيد الاسم الأول عن 30 حرفًا"),
  lastName: string()
    .required("الاسم الأخير مطلوب")
    .min(2, "يجب أن يكون الاسم الأخير على الأقل 2 أحرف")
    .max(30, "يجب ألا يزيد الاسم الأخير عن 30 حرفًا"),
  phoneNumber: string()
    .required("رقم الجوال مطلوب")
    .matches(/^[0-9]{10}$/, "يجب أن يتكون رقم الجوال من 10 أرقام"),
  email: string()
    .email("يجب أن يكون بريدًا إلكترونيًا صالحًا")
    .required("البريد الإلكتروني مطلوب"),
  company: string().required("اسم الشركة مطلوب"),
  role: string().required("المنصب مطلوب"),
  password: string()
    .min(6, "يجب أن تكون كلمة المرور على الأقل 6 أحرف")
    .nullable(),
  confirmPassword: string()
    .oneOf([ref("password"), null], "يجب أن تتطابق كلمة المرور")
    .nullable(),
});

const UserProfile = () => {
  const [enableEdit, setEnableEdit] = useState(false);
  const initialValues = {
    firstName: "زياد",
    lastName: "عصام",
    phoneNumber: "0505545167",
    email: "ziad@example.com",
    company: "المتحدة للإلكترونيات",
    role: "مدير الموقع",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        toast.success("تم حفظ التغييرات بنجاح", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setSubmitting(false);
        setEnableEdit(false);
      }, 500);
    },
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800  border-[1px] border-gray-400 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          الملف الشخصي
        </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-6 text-gray-700 dark:text-white"
          dir="rtl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center text-sm font-medium   mb-1">
                <FaUser className="ml-2" />
                الاسم الأول
              </label>
              <input
                {...formik.getFieldProps("firstName")}
                disabled={!enableEdit}
                aria-label="الاسم الاول"
                className="w-full px-3 py-2 text-black disabled:dark:text-white  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaUser className="ml-2" />
                الاسم الأخير
              </label>
              <input
                {...formik.getFieldProps("lastName")}
                disabled={!enableEdit}
                aria-label="الاسم الاخير"
                className="w-full px-3 py-2 text-black border disabled:dark:text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.lastName}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaPhone className="ml-2" />
                رقم الجوال
              </label>
              <input
                {...formik.getFieldProps("phoneNumber")}
                disabled={!enableEdit}
                aria-label="رقم الجوال"
                className="w-full px-3 py-2 text-black border disabled:dark:text-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaEnvelope className="ml-2" />
                البريد الإلكتروني
              </label>
              <input
                {...formik.getFieldProps("email")}
                type="email"
                disabled={!enableEdit}
                aria-label="البريد الإلكتروني"
                className="w-full px-3 py-2 text-black disabled:dark:text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaBuilding className="ml-2" />
                الشركة
              </label>
              <input
                {...formik.getFieldProps("company")}
                disabled
                aria-label="الشركة"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.company && formik.touched.company && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.company}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaBuilding className="ml-2" />
                المنصب
              </label>
              <input
                {...formik.getFieldProps("role")}
                disabled
                aria-label="المنصب"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.role && formik.touched.role && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.role}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaLock className="ml-2" />
                كلمة المرور الجديدة
              </label>
              <input
                {...formik.getFieldProps("password")}
                type="password"
                disabled={!enableEdit}
                aria-label="كلمة المرور الجديدة"
                className="w-full px-3 py-2 text-black disabled:dark:text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div>
              <label className="flex items-center text-sm font-medium  mb-1">
                <FaLock className="ml-2" />
                تأكيد كلمة المرور
              </label>
              <input
                {...formik.getFieldProps("confirmPassword")}
                type="password"
                aria-label="تأكيد كلمة المرور"
                disabled={!enableEdit}
                className="w-full px-3 py-2 text-black disabled:dark:text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {!enableEdit && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setEnableEdit(true);
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                تعديل البيانات
              </button>
            )}

            {enableEdit && (
              <>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  {formik.isSubmitting ? "جاري الحفظ..." : "حفظ التغييرات"}
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setEnableEdit(false);
                    formik.resetForm();
                  }}
                  className="bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  الغاء التعديل
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
