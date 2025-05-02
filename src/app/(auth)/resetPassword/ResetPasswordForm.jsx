"use client";

import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { Alert } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/button/Button";

const initialValues = {
  newPassword: "",
  confirmNewPassword: "",
};

const validationSchema = object({
  newPassword: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmNewPassword: string()
    .oneOf([ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function ResetPasswordForm({ token }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!token) {
        setError(
          "Reset token is missing. Please request a new password reset link."
        );
        return;
      }

      setLoading(true);
      try {
        const response = await fetch("/api/auth/reset-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            password: values.newPassword,
            confirmPassword: values.confirmNewPassword,
          }),
        });
        const data = await response.json();

        if (!response.ok) {
          setError(
            data.message || "Failed to reset password. Please try again."
          );
          return;
        }

        setSuccess(true);
        formik.resetForm();
        router.push("/login");
      } catch (err) {
        setError("Failed to reset password. Please try again.");
        console.error("Password reset error:", err);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {error && (
        <Alert color="red" className="mt-4">
          {error}
        </Alert>
      )}

      {success ? (
        <Alert color="success" className="mt-4">
          Password successfully reset! Redirecting to login...
        </Alert>
      ) : (
        <form className="space-y-6 mt-6" onSubmit={formik.handleSubmit}>
          {/* new password input */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >
              New Password
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
                placeholder="Enter new password"
              />
            </div>
            {/* end input div */}

            {/* alert when input not valid */}
            {formik.touched.newPassword && formik.errors.newPassword && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
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
              Confirm Password
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
                placeholder="Confirm new password"
              />
            </div>
            {/* end input div */}

            {/* alert when input not valid */}
            {formik.touched.confirmNewPassword &&
              formik.errors.confirmNewPassword && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {formik.errors.confirmNewPassword}
                </p>
              )}
            {/*end alert when input not valid */}
          </div>
          {/* end confirm password input */}

          {/* submit button */}
          <div>
            <LoadingButton
              text="Reset Password"
              areaLabel={"reset password button"}
              valid={formik.isValid && formik.dirty}
              loading={loading}
            />
          </div>
          {/* end submit button */}
        </form>
      )}
    </>
  );
}
