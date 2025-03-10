"use client";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { TrashIcon } from "@/icons/Icons";

export default function DeleteButton({ productId, onDeleteSuccess }) {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {
    try {
      // Add your delete logic here
      // For example:
      // await deleteCartItem(productId);
      console.log("Item deleted: ", productId);

      // Close the modal after deletion
      setOpenModal(false);

      // Notify parent component about successful deletion
      if (onDeleteSuccess) {
        onDeleteSuccess(productId);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <button
        title="Click to delete trip"
        onClick={() => setOpenModal(true)}
        className="delete-btn"
      >
        <TrashIcon />
      </button>
      <DeleteModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDelete}
        productId={productId}
      />
    </>
  );
}
