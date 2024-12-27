import React from "react";
import websiteLogo from "../../../public/logo.svg";
import Image from "next/image";

export default function Logo({ width = "60", height = "60" }) {
  return (
    <Image
      alt="لوجو عقاري"
      src={websiteLogo}
      width={width}
      height={height}
      // className="h-10 w-auto"
    />
  );
}
