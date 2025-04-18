"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DeleteModal({ show, onClose, onConfirm, productId }) {
  const handleConfirm = () => {
    // Call the onConfirm function passed from parent
    if (onConfirm) {
      onConfirm(productId);
    }
  };
  console.log("I'm in delete modal");
  return (
    <>
      <Modal show={show} size="md" onClose={onClose} popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={onConfirm}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={onClose}>
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
