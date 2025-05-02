import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo/Logo";
import ResetPasswordForm from "./ResetPasswordForm";

export const metadata = {
  title: "Reset Password | Safari Hub",
  description: "Enter a new password for your Safari Hub account",
};

export default async function Page({ searchParams }) {
  // get the token
  const token = (await searchParams).token;
  let validToken = false;

  try {
    // Call API to check the token
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password?token=${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();

    if (data.success) {
      validToken = true;
    }
  } catch (error) {
    console.log("Error fetching token validation:", error);
  }

  return (
    <>
      {token && validToken ? (
        <>
          <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center gap-x-2 pb-4">
                <Logo />
              </div>

              <h1 className="font-bold text-3xl text-center text-darkBlue">
                Reset Password
              </h1>
              <ResetPasswordForm token={token} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white rounded-md p-10 shadow-md w-full max-w-sm text-center">
              <h1 className="text-2xl font-bold text-darkBlue">
                Invalid Token
              </h1>
              <p className="mt-4 text-gray-600">
                The password reset token is invalid or has expired.
              </p>
              <Link
                href="/login"
                className="mt-6 text-blue-500 hover:underline"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
