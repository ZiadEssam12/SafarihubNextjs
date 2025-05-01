"use client";

import { useFormik } from "formik";
import { string, object } from "yup";
import { Alert } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/button/Button";


const initalValues = {
  email: "",
};

const validationSchema = object({
  email: string().email("Email is not valid").required("Email is required"),
});

export default function ForgetPasswordForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null); // "success" or "error"

  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setMessage(null);
      setStatus(null);

      try {
        // Send request to API
        const response = await fetch("/api/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: values.email }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage(data.message || "Password reset link sent to your email");
          formik.resetForm();
        } else {
          setStatus("error");
          setMessage(data.message || "Something went wrong");
        }
      } catch (error) {
        console.error("Forgot password error:", error);
        setStatus("error");
        setMessage("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {status === "success" && (
        <Alert color="success" className="my-4">
          {message}
        </Alert>
      )}

      {status === "error" && (
        <Alert color="failure" className="my-4">
          {message}
        </Alert>
      )}

      <form className="space-y-6 mt-6" onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-darkBlue dark:text-white"
          >
            Your email address
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
            text="Reset Password"
            areaLabel={"reset password button"}
            valid={formik.isValid && formik.dirty}
            loading={loading}
          />
        </div>
      </form>
    </>
  );
}
