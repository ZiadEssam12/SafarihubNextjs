import React from "react";
// import websiteLogo from "logo.svg";
import Image from "next/image";

export default function Logo({ width = "60", height = "60" }) {
  return (
    <Image
      alt="لوجو عقاري"
      src={"logo.svg"}
      width={width}
      height={height}
      // className="h-10 w-auto"
    />
  );
}
