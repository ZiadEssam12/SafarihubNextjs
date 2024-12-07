"use client";

import React from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Modal } from "flowbite-react";
import { IcBaselinePlus } from "@/icons/Icons";

const validationSchema = object({
  fullName: string().required("يرجى كتابة الاسم"),
  duration: string().required("يرجى ادخال المدة"),
  paid: string().required("يرجى ادخال المبلغ المدفوع"),
  date: string().required("يرجى تحديد التاريخ"),
  id: string().required("يرجى ادخال رقم الرقم المرجعي"),
});
const initialValues = {
  fullName: "",
  duration: "",
  paid: "",
  date: new Date().toISOString().split("T")[0], // Ensure this is empty or set a default value in initialValues
  id: "",
};

export default function InvoiceForm({
  openModal,
  setOpenModal,
  setData,
  updateData = { id: "" },
  setUpdateData,
}) {
  function handleFormSubmit(values) {
    setData((prevData) => [...prevData, values]);
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
          {updateData.id ? "تعديل الفاتورة" : "إضافة فاتورة جديدة"}
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4 relative"
            id="invoice-form"
          >
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

            <div>
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                المدة
              </label>
              <input
                type="text"
                id="duration"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="المدة"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.duration}
              />
              {formik.touched.duration && formik.errors.duration && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.duration}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="paid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                المدفوع
              </label>
              <input
                type="text"
                id="paid"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="المدفوع"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.paid}
              />
              {formik.touched.paid && formik.errors.paid && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.paid}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                الرقم المرجعي
              </label>
              <input
                type="text"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="الرقم المرجعي "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.id}
              />
              {formik.touched.id && formik.errors.id && (
                <div
                  className="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.id}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                التاريخ
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.touched.date && formik.errors.date && (
                <div
                  class="p-4 my-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {formik.errors.date}
                </div>
              )}
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button
            aria-label="add or update invoice"
            className="mt-4 border-2 border-gray-100 flex justify-center items-center py-2 w-full"
            form="invoice-form"
          >
            <IcBaselinePlus width="20" height="20" style={{ color: "black" }} />
            <span className="mr-2">
              {updateData.id ? "تعديل الفاتورة" : "إضافة فاتورة جديدة"}
            </span>
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
