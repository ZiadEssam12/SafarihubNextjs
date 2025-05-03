"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Logo from "../Logo/Logo";

export default function LoadingAuth({ children }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 size-full z-50 flex flex-col justify-between items-center py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={"/orangeLogo-removebg-preview.webp"}
            width={150}
            height={150}
            alt="Safari Hub Logo"
          />
        </div>
        <div className="w-full flex justify-center pb-10">
          <Logo />
        </div>
      </div>
    );
  }

  return children;
}
