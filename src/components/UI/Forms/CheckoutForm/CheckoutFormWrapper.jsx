"use client";

import dynamic from "next/dynamic";

const CheckoutForm = dynamic(() => import("./CheckoutForm"), {
  ssr: false,
  loading: () => (
    <p className="h-screen w-full rounded-md bg-gray-400 animate-pulse"></p>
  ),
});

export default function CheckoutFormWrappr() {
  return <CheckoutForm />;
}
