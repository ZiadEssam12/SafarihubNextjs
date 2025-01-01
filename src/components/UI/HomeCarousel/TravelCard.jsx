"use client";

import React from "react";
import { MdiHeartOutline } from "@/icons/Icons";
import Image from "next/image";
import Link from "next/link";

export default function TravelCard({ id, title, description, price, image }) {
  return (
    <Link
      href={`/tours/${id}`}
      className="relative flex flex-col ms-1 bg-white border-2  border-transparent dark:border-gray-500  rounded-lg shadow-md overflow-hidden h-full user-select-none"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%" }} // optional
        />
        <button
          className="absolute top-2 right-2 rounded-full transition-colors"
          role="button"
          aria-label={`add ${title} to wishlist`}
        >
          <MdiHeartOutline className="size-8" />
        </button>
        <div className="absolute top-2 left-2 bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-medium">
          Offer
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="text-lg font-semibold color-dark dark:text-gray-100 mb-2 line-clamp-1"
          title={title}
        >
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-200 text-sm flex-grow">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold text-orange-500">
            ${price.toFixed(2)}
          </div>
          <button
            className="bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 transition-colors capitalize"
            aria-label="add to cart"
            role="button"
          >
            add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
