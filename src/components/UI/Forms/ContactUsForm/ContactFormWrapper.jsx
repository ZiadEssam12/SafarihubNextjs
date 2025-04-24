"use client";

import dynamic from "next/dynamic";

const ContactUsForm = dynamic(() => import("./ContactUsForm"), {
  loading: () => (
    <p className="h-full w-full rounded-md bg-gray-400 animate-pulse"></p>
  ),
});

export default function ContactFormWrapper() {
  return <ContactUsForm />;
}
