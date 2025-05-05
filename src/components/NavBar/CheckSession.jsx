"use client";

import { LucideUser, MaterialSymbolsLogout } from "@/icons/Icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function CheckSession() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

  return (
    <div>
      {session?.user?.id ? (
        <div className="flex items-center gap-x-2">
          <button
            className="text-darkBlue font-medium rounded-md cursor-pointer py-2 px-3 bg-white flex justify-center items-center gap-x-1 dark:bg-darkBlue dark:text-white"
            onClick={handleSignOut}
          >
            <span>
              <MaterialSymbolsLogout width={24} height={24} />
            </span>
            Sign Out
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="flex gap-x-1 items-center bg-white text-darkBlue px-4 py-2 rounded-md dark:bg-darkBlue dark:text-white"
        >
          <span className="fill-darkBlue stroke-darkBlue">
            <LucideUser />
          </span>
          Login
        </Link>
      )}
    </div>
  );
}
