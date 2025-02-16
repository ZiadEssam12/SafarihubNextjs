"use client";

import dynamic from "next/dynamic";

const ContactUsForm = dynamic(() => import("./ContactUsForm"), { ssr: false });

export default function ContactFormWrapper() {
  return <ContactUsForm />;
}
