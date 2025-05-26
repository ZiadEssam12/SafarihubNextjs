"use client";

import { EditIcon } from "@/icons/Icons";

export default function EditCartItem({ id, title }) {
  return (
    <button
      title="Edit trip details"
      className="p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-full transition-colors"
    >
      <EditIcon
        width={24}
        height={24}
        className="text-gray-600 dark:text-gray-300"
      />
    </button>
  );
}
