import Logo from "@/components/Logo/Logo";
import ForgetPasswordForm from "./ForgetPasswordForm";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 py-12 lg:px-8 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 text-darkBlue dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
          <div className="flex justify-center pb-4">
          <Logo />
          </div>

          <div>
            <h2 className="text-3xl font-bold capitalize">
              Forget your password?
            </h2>
            <p className="text-darkBlue dark:text-gray-200 mt-2 capitalize">
              Don&apos;t worry! Just write your email and we will send you a
              link to reset your password
            </p>
          </div>

          <ForgetPasswordForm />

          <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-white">
            Have an account already?
            <Link
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
