import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Label, Modal, Select } from "flowbite-react";
import { IcBaselinePlus } from "@/icons/Icons";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
};

export default function UserForm({
  openModal,
  setOpenModal,
  setData,
  updateData = { id: "" },
  setUpdateData,
  roles,
}) {
  const validationSchema = yup.object({
    fullName: yup.string().required("يرجى كتابة الاسم"),
    email: yup
      .string()
      .email("يرجى كتابة البريد الالكتروني")
      .required("يرجى كتابة البريد الالكتروني"),

    phone: yup.string().required("يرجى كتابة رقم الجوال"),
    role: yup
      .string()
      .oneOf(roles, "يجب ان تكون الصلاحية من ضمن الصلاحيات المعروضة")
      .required("يرجى اختيار الصلاحيات"),
  });

  function handleFormSubmit(values) {
    let id = Math.floor(Math.random() * 10000);
    let newValues = { id, ...values };

    setData((prevData) => [...prevData, newValues]);
    formik.resetForm();
    setOpenModal(false);
  }

  function handleFormUpdate(values) {
    setData((prevData) => {
      const updatedData = prevData.map((data) =>
        data.id === updateData.id ? values : data
      );
      return updatedData;
    });
    formik.resetForm();
    setOpenModal(false);

    setUpdateData({});
  }

  const formik = useFormik({
    enableReinitialize: true, // Allow Formik to reset with new initialValues
    initialValues: updateData.id ? updateData : initialValues,
    validationSchema: validationSchema,
    onSubmit: updateData.id ? handleFormUpdate : handleFormSubmit, // Directly assign the function here
  });

  function closeModal() {
    formik.resetForm();
    setOpenModal(false);
    setUpdateData({});
  }

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => closeModal()}>
        <Modal.Header className="justify-between">
          {updateData.id ? "تعديل المستخدم" : "إضافة مستخدم جديد"}
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4 relative"
            id="user-form"
          >
            {/* full name */}
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                الاسم
              </label>
              <input
                type="text"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="الاسم"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.fullName}
                </div>
              )}
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                البريد الالكتروني
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="البريد الالكتروني"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* phone */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                رقم الهاتف
              </label>
              <input
                type="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="رقم الهاتف"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.phone}
                </div>
              )}
            </div>

            {/* role */}
            <div id="userRole">
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="roles" value="الصلاحية" />
                </div>
                <Select
                  id="roles"
                  value={formik.values.role}
                  onChange={(value) =>
                    formik.setFieldValue("role", value.target.value)
                  }
                  required
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </Select>
              </div>

              {formik.touched.role && formik.errors.role && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.role}
                </div>
              )}
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="mt-4 border-2 border-gray-100 flex justify-center items-center py-2 w-full"
            form="user-form"
            type="submit"
            aria-label="submit user form"
          >
            <IcBaselinePlus
              width="20"
              height="20"
              // style={{ color: "black" }}
              className="fill-black dark:fill-white"
            />
            <span className="mr-2 dark:text-white">
              {updateData.id ? "تعديل المستخدم" : "إضافة مستخدم جديد"}
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
