"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Logo from "../Logo/Logo";

// Preload the image
const logoSrc = "/orangeLogo-removebg-preview.webp";

export default function LoadingAuth({ children }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 size-full z-50 flex flex-col justify-between items-center py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={logoSrc}
            width={150}
            height={150}
            alt="Safari Hub Logo"
            priority
            loading="eager"
            fetchPriority="high"
            unoptimized
          />
        </div>
        <div className="w-full flex justify-center">
          <Logo />
        </div>
      </div>
    );
  }

  return children;
}
