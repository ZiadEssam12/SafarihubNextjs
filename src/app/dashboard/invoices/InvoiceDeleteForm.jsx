"use client";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function InvoiceDeleteForm({
  deleteModal,
  setDeleteModal,
  onDelete,
  cancelDelete,
  deleteId,
}) {
  return (
    <>
      <Modal
        show={deleteModal}
        dismissible
        size="md"
        onClose={() => setDeleteModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              هل أنت متأكد من حذف هذه الفاتورة
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                aria-label="confirm delete"
                color="failure"
                onClick={() => onDelete(deleteId)}
              >
                تأكيد
              </Button>
              <Button
                aria-label="cancel delete"
                color="gray"
                onClick={() => cancelDelete()}
              >
                الغاء
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
