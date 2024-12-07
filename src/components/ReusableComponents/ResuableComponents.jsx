"use client";

import { Button, Modal, Table } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {
  IcomoonFreeBin,
  IcomoonFreePencil,
  MdiEyeOutline,
} from "@/icons/Icons";
import { useRouter } from "next/navigation";

export function TableData({
  data,
  columns,
  deleteRow = () => {},
  editRow = () => {},
  navigateTo = "",
}) {
  const router = useRouter();
  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="overflow-x-auto">
      <Table className="text-right text-base">
        {/* Table Header */}
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>

          {columns.map((column, index) => (
            <Table.HeadCell key={`${column}-${index}`}>{column}</Table.HeadCell>
          ))}
          <Table.HeadCell className="text-center">الإجراءات</Table.HeadCell>
        </Table.Head>

        {/* Table Body */}
        <Table.Body className="divide-y">
          {sortedData.map((row, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              key={`${row.id || index}`}
            >
              {/* Add Row Index */}
              <Table.Cell>{index + 1}</Table.Cell>

              {/* Render Row Data */}
              {Object.entries(row)
                .filter(([key]) => key !== "id") // Exclude the "id" key
                .map(([key, value], cellIndex) => (
                  <Table.Cell key={`${key}-${cellIndex}`}>{value}</Table.Cell>
                ))}

              {/* Action Buttons */}
              <Table.Cell className="flex gap-x-3 items-center justify-center">
                {/* View Button */}
                {navigateTo && (
                  <button
                    type="button"
                    aria-label="display row data"
                    className="font-medium fill-black hover:underline dark:fill-white"
                    onClick={() =>
                      router.push({
                        pathname: navigateTo,
                        query: { rowData: JSON.stringify(row) },
                      })
                    }
                    title="عرض"
                  >
                    <MdiEyeOutline width={30} height={30} />
                  </button>
                )}

                {/* Edit Button */}
                <button
                  type="button"
                  aria-label="update table row"
                  className="font-medium fill-cyan-600 hover:underline dark:fill-cyan-500"
                  title="تعديل"
                  onClick={() => editRow(row.id)}
                >
                  <IcomoonFreePencil />
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  aria-label="delete table row"
                  className="font-medium fill-red-600 hover:underline dark:fill-red-500"
                  title="حذف"
                  onClick={() => deleteRow(row.id)}
                >
                  <IcomoonFreeBin />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export function DeleteModal({
  deleteModal,
  setDeleteModal,
  onDelete,
  cancelDelete,
  deleteId,
  deleteStatement = "",
}) {
  return (
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
            {deleteStatement}
          </h3>
          <div className="flex justify-center gap-4">
            {/* Confirm Delete Button */}
            <Button
              aria-label="confirm delete"
              color="failure"
              onClick={() => deleteId && onDelete(deleteId)}
            >
              تأكيد
            </Button>

            {/* Cancel Delete Button */}
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
  );
}
