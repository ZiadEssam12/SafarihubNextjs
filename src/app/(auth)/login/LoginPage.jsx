// pages/login.js
"use client";

import { useFormik } from "formik";
import { Label } from "flowbite-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/button/Button";
import Logo from "@/components/Logo/Logo";
import { signIn } from "next-auth/react";
import { loginSchema, SigninInitialValues } from "@/schemas/auth";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Log error state changes
  useEffect(() => {
    if (error) {
      console.log("Error state updated:", error);
    }
  }, [error]);

  const formik = useFormik({
    initialValues: SigninInitialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const result = await signIn("credentials", {
          redirect: false, // Prevent redirect
          email: values.email,
          password: values.password,
        });

        if (result?.error) {
          setError(result.code);
        } else if (!result.ok) {
          console.log("Request failed with status:", result.status);
          setError("Authentication failed. Please try again.");
        } else {
          console.log("Login successful, redirecting to /");
          router.push("/"); // Redirect on success
        }
      } catch (error) {
        console.error("Unexpected error during signIn:", error);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 dark:bg-darkBlue text-darkBlue">
      <div className="bg-white dark:bg-gray-800 text-darkBlue dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <Logo />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight dark:text-white capitalize">
            Sign in
          </h2>
        </div>
        <form className="space-y-6 mt-4" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium dark:text-white capitalize"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <Label color="red" className="my-2 text-red-900">
                {formik.errors.email}
              </Label>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium dark:text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  href="/forgetPassword"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 capitalize"
                >
                  Forget password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <Label color="red" className="my-2 text-red-900">
                {formik.errors.password}
              </Label>
            )}
            {error && (
              <Label color="red" className="my-2 text-red-900">
                {error}
              </Label>
            )}
          </div>

          <div>
            <LoadingButton
              text="Sign in"
              areaLabel="sign in button"
              valid={formik.isValid && formik.dirty}
              loading={loading}
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-white">
          Do not have an account?
          <Link
            href="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
