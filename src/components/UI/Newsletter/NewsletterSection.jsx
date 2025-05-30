"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function NewsletterSection() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        // Simulate API call for newsletter subscription
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("Successfully subscribed to our newsletter!");
        resetForm();
      } catch (error) {
        toast.error("Failed to subscribe. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="py-16 break-out text-darkBlue bg-darkBlue dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Tours
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Subscribe to our newsletter and be the first to know about new
            destinations, special offers, and travel tips for your Egyptian
            adventure.
          </p>{" "}
          <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
              <div className="flex-1">
                <div className="h-[60px]">
                  {" "}
                  {/* Fixed height container */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange transition-all duration-200 bg-white"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-300 text-sm mt-1 text-left">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !formik.isValid}
                className="bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap h-[48px]"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
          <p className="text-gray-300 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
