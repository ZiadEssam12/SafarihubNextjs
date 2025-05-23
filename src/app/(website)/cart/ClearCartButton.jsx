"use client";

import { LineMdLoadingLoop } from "@/icons/Icons";
import { ClearCart } from "@/lib/api";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function ClearCartButton() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClearCart = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await ClearCart();
      if (result.success) {
        toast.success("Cart cleared successfully.");
        setOpenModal(false);
        router.refresh();
      } else {
        toast.error(result.message || "Failed to clear cart.");
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("An error occurred while clearing the cart.");
    } finally {
      setLoading(false);
      if (!result?.success) {
        setOpenModal(false);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        aria-label="clear cart"
        type="button"
        className="cursor-pointer w-full sm:w-auto order-2 sm:order-1 border-2 border-[#d9362b] text-[#d9362b] hover:bg-[#d9362b]/5 px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Clear Cart
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
              Are you sure you want to clear the cart items? This action cannot
              be undone.
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="red"
                className={"cursor-pointer"}
                onClick={handleClearCart}
                disabled={loading}
                type="button"
              >
                {loading ? (
                  <LineMdLoadingLoop width={24} height={24} />
                ) : (
                  "Yes, I'm sure"
                )}
              </Button>

              <Button
                color="gray"
                className={"cursor-pointer"}
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
