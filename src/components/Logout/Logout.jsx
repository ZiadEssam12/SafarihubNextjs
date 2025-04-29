"use client";
import { signOut } from "next-auth/react";

export function SignOut() {
  return <button className="text-white" onClick={() => signOut()}>Sign Out</button>;
}
