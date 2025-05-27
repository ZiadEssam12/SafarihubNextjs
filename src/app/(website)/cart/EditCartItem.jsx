"use client";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";

import * as Yup from "yup";
import { EditIcon } from "@/icons/Icons";
import { useFormik } from "formik";
import { UpdateCartItem } from "@/lib/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function EditCartItem({ itemData }) {
  console.log("Item data :", itemData);
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  // Helper function to format date for input
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
  };
  // Helper function to extract time from ISO date string
  const formatTimeForInput = (dateString) => {
    if (!dateString) return "09:00"; // Default fallback
    try {
      const date = new Date(dateString);
      // Check if the date is valid
      if (isNaN(date.getTime())) return "09:00";
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`; // Convert to HH:MM format
    } catch (error) {
      return "09:00"; // Fallback on any error
    }
  };

  const initialValues = {
    id: itemData?.id || "",
    fromDate: formatDateForInput(itemData?.fromDate) || "",
    fromTime: formatTimeForInput(itemData?.fromDate) || "09:00",
    adults: itemData?.adults || 1,
    children: itemData?.children || 0,
    infants: itemData?.infants || 0,
  };
  const validationSchema = Yup.object({
    fromDate: Yup.date().required("From date is required"),
    fromTime: Yup.string().required("From time is required"),
    adults: Yup.number()
      .integer("Adults must be a whole number")
      .min(1, "At least one adult is required")
      .required("Number of adults is required"),
    children: Yup.number()
      .integer("Children must be a whole number")
      .min(0, "Children cannot be negative")
      .required("Number of children is required"),
    infants: Yup.number()
      .integer("Infants must be a whole number")
      .min(0, "Infants cannot be negative")
      .required("Number of infants is required"),
  });
  const handleSubmitEdit = async (values) => {
    console.log("Edit Cart Item", values);

    try {
      const result = await UpdateCartItem({ item: values });
      if (result.success) {
        console.log("Cart item updated successfully:", result);
        // Close modal and optionally refresh the page
        setOpenModal(false);
        // You might want to trigger a page refresh or update state here
        // window.location.reload(); // Simple refresh for now
        toast.success("Cart item updated successfully!");
        router.refresh(); // Refresh the page to see changes
      } else {
        console.error("Failed to update cart item:", result.message);
        // Handle error - show toast notification, etc.
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
      // Handle error - show toast notification, etc.
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitEdit,
    enableReinitialize: true, // Allows form to update with new itemData
  });

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <button
        title="Edit trip details"
        onClick={() => setOpenModal(true)}
        type="button"
        aria-label="Edit trip details"
        className="p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-full transition-colors"
      >
        <EditIcon
          width={24}
          height={24}
          className="text-gray-600 dark:text-gray-300"
        />
      </button>{" "}
      <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            {" "}
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit Trip Details - {itemData?.tour?.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tour Duration: {itemData?.tour?.duration_in_days || "N/A"} days
              {itemData?.tour?.duration_in_days &&
                " (End date will be calculated automatically)"}
            </p>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* From Date */}
              <div>
                <Label htmlFor="fromDate">From Date</Label>
                <TextInput
                  id="fromDate"
                  name="fromDate"
                  type="date"
                  value={formik.values.fromDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  color={
                    formik.touched.fromDate && formik.errors.fromDate
                      ? "failure"
                      : "gray"
                  }
                />
                {formik.touched.fromDate && formik.errors.fromDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.fromDate}
                  </p>
                )}{" "}
              </div>
              {/* From Time */}
              <div>
                <Label htmlFor="fromTime">From Time</Label>
                <TextInput
                  id="fromTime"
                  name="fromTime"
                  type="time"
                  value={formik.values.fromTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  color={
                    formik.touched.fromTime && formik.errors.fromTime
                      ? "failure"
                      : "gray"
                  }
                />
                {formik.touched.fromTime && formik.errors.fromTime && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.fromTime}
                  </p>
                )}
              </div>
              {/* To Date */}
              {/* Current I don't need the to date as
               * it aldready handled in the backend
               * but you can uncomment this if needed
               */}
              {/* <div>
                <Label htmlFor="toDate" value="To Date" />
                <TextInput
                  id="toDate"
                  name="toDate"
                  type="date"
                  value={formik.values.toDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  color={
                    formik.touched.toDate && formik.errors.toDate
                      ? "failure"
                      : "gray"
                  }
                />
                {formik.touched.toDate && formik.errors.toDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.toDate}
                  </p>
                )}
              </div> */}{" "}
              {/* Adults */}
              <div>
                <Label htmlFor="adults">Number of Adults</Label>
                <TextInput
                  id="adults"
                  name="adults"
                  type="number"
                  min="1"
                  value={formik.values.adults}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  color={
                    formik.touched.adults && formik.errors.adults
                      ? "failure"
                      : "gray"
                  }
                />
                {formik.touched.adults && formik.errors.adults && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.adults}
                  </p>
                )}
              </div>
              {/* Children */}
              <div>
                <Label htmlFor="children"> Number of Children </Label>
                <TextInput
                  id="children"
                  name="children"
                  type="number"
                  min="0"
                  value={formik.values.children}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  color={
                    formik.touched.children && formik.errors.children
                      ? "failure"
                      : "gray"
                  }
                />
                {formik.touched.children && formik.errors.children && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.children}
                  </p>
                )}
              </div>
              {/* Infants */}
              <div>
                <Label htmlFor="infants">Number of Infants</Label>
                <TextInput
                  id="infants"
                  name="infants"
                  type="number"
                  min="0"
                  value={formik.values.infants}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  color={
                    formik.touched.infants && formik.errors.infants
                      ? "failure"
                      : "gray"
                  }
                />
                {formik.touched.infants && formik.errors.infants && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.infants}
                  </p>
                )}
              </div>
              {/* Form Buttons */}
              <div className="flex justify-between items-center pt-4">
                <Button
                  type="submit"
                  color="blue"
                  className="cursor-pointer"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Updating..." : "Update Trip"}
                </Button>

                <Button color="gray" onClick={onCloseModal} type="button">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
