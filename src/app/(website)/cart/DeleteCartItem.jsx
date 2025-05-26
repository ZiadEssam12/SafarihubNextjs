"use client";

import { LineMdLoadingLoop } from "@/icons/Icons";
import { DeleteCartItem } from "@/lib/api";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DeleteItemFromCart({ itemId, title }) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    let result;
    try {
      setLoading(true);
      result = await DeleteCartItem({ itemId });

      if (result.success) {
        toast.success(`Tour deleted successfully.`);
        setOpenModal(false); // Close modal first
        router.refresh(); // ✅ Use refresh() instead of reload()
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
      toast.error(`Failed to delete tour. Please try again.`);
    } finally {
      setLoading(false);
      if (!result?.success) {
        // Only keep modal open if deletion failed
        setOpenModal(false);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
        title="Delete trip from cart"
        className="p-2 cursor-pointer bg-red-300 hover:bg-red-400 dark:hover:bg-red-700 rounded-full transition-colors"
      >
        {loading ? (
          <LineMdLoadingLoop width={24} height={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-600 dark:text-red-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this tour?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="red"
                className="cursor-pointer"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? (
                  <LineMdLoadingLoop width={24} height={24} />
                ) : (
                  <>{"Yes, I'm sure"}</>
                )}
              </Button>
              <Button
                className="cursor-pointer"
                color="gray"
                onClick={() => setOpenModal(false)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
