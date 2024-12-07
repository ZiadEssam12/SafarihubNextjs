"use client";

import React, { useState, useEffect } from "react";
import { MaterialSymbolsLightClose } from "@/icons/Icons";

export default function EventModal({
  isOpen,
  onClose,
  event,
  onSave,
  onDelete,
  mode,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start: new Date(),
    end: new Date(),
    backgroundColor: "#3788d8",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        ...event,
        start: event.start || new Date(),
        end: event.end || new Date(),
      });
    }
  }, [event]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      dir="rtl"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {mode === "add" ? "إضافة حدث" : "تعديل الحدث"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <MaterialSymbolsLightClose
              width={24}
              height={24}
              className="fill-black dark:fill-white"
            />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 text-gray-700 dark:text-white">
            <div>
              <label className="block text-sm font-medium  ">العنوان</label>
              <input
                type="text"
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium ">الوصف</label>
              <textarea
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium ">
                  وقت البداية
                </label>
                <input
                  type="datetime-local"
                  value={
                    formData.start
                      ? new Date(formData.start).toISOString().slice(0, 16)
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      start: new Date(e.target.value),
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">
                  وقت النهاية
                </label>
                <input
                  type="datetime-local"
                  value={
                    formData.end
                      ? new Date(formData.end).toISOString().slice(0, 16)
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({ ...formData, end: new Date(e.target.value) })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium ">اللون</label>
              <input
                type="color"
                value={formData.backgroundColor || "#3788d8"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    backgroundColor: e.target.value,
                    borderColor: e.target.value,
                  })
                }
                className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3 space-x-reverse">
            {mode === "edit" && onDelete && (
              <button
                type="button"
                onClick={onDelete}
                className="px-4 py-2 border border-red-500 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                حذف
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {mode === "add" ? "إضافة" : "حفظ التغييرات"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
