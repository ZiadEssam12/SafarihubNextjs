"use client";

import { DeleteModal, TableData } from "@/components/ReusableComponents/ResuableComponents";
import React, { useState, useEffect } from "react";
import InvoiceForm from "./InvoiceForm";

// import InvoiceForm from "./InvoiceForm";

const dummyData = [
  {
    fullName: "أحمد علي",
    duration: "3 أشهر",
    paid: "500 ريال",
    date: "2024-11-10",
    ref: "REF12345",
  },
  {
    fullName: "سارة محمد",
    duration: "6 أشهر",
    paid: "1000 ريال",
    date: "2024-11-05",
    ref: "REF12346",
  },
  {
    fullName: "محمد يوسف",
    duration: "12 شهر",
    paid: "2000 ريال",
    date: "2024-10-28",
    ref: "REF12347",
  },
  {
    fullName: "فاطمة سعيد",
    duration: "3 أشهر",
    paid: "400 ريال",
    date: "2024-11-01",
    ref: "REF12348",
  },
  {
    fullName: "علي خالد",
    duration: "6 أشهر",
    paid: "1200 ريال",
    date: "2024-09-25",
    ref: "REF12349",
  },
  {
    fullName: "نورة عبد الله",
    duration: "4 أشهر",
    paid: "800 ريال",
    date: "2024-08-15",
    ref: "REF12350",
  },
  {
    fullName: "سامي ناصر",
    duration: "9 أشهر",
    paid: "1500 ريال",
    date: "2024-07-20",
    ref: "REF12351",
  },
  {
    fullName: "منى فهد",
    duration: "5 أشهر",
    paid: "950 ريال",
    date: "2024-06-10",
    ref: "REF12352",
  },
  {
    fullName: "خالد عبد الرحمن",
    duration: "7 أشهر",
    paid: "1400 ريال",
    date: "2024-05-05",
    ref: "REF12353",
  },
  {
    fullName: "ريم عبد الله",
    duration: "8 أشهر",
    paid: "1600 ريال",
    date: "2024-04-22",
    ref: "REF12354",
  },
];
const tableHead = ["اسم العميل", "المدة", "المدفوع", "التاريخ", "رقم المرجع"];

export default function Invoices() {
  const [data, setData] = useState(dummyData); // Original data
  const [filteredInvoices, setFilteredInvoices] = useState(dummyData); // Filtered data
  const [searchTerm, setSearchTerm] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  // This useEffect ensures filteredInvoices is always in sync with data
  useEffect(() => {
    setFilteredInvoices(data);
  }, [data]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setFilteredInvoices(data);
      return;
    }

    const filteredData = data.filter((invoice) =>
      invoice.fullName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setFilteredInvoices([]);
    } else {
      setFilteredInvoices(filteredData);
    }
  };

  function showDeleteModal(id) {
    setDeleteModal(true);
    setDeleteId(id);
  }

  function deleteRow(id) {
    const newData = data.filter((invoice) => invoice.id !== id);
    setData(newData);
    setDeleteModal(false);
  }
  function cancelDelete() {
    setDeleteModal(false);
    setDeleteId("");
  }

  function editRow(id) {
    const invoice = data.find((invoice) => invoice.id === id);
    setUpdateData(invoice);
    setOpenModal(true);
  }

  return (
    <>
      <div id="invoices" className="relative p-4">
        <div className="border-b-[0.5px] border-gray-300 pb-3">
          <h2 className="font-bold text-3xl dark:text-white">كل الفواتير </h2>
        </div>

        <div className="flex justify-between my-6 ">
          <input
            type="text"
            placeholder="ابحث عن فاتورة"
            className="w-[200px] border-2 border-gray-500 rounded-md p-2"
            onChange={handleSearchChange}
            value={searchTerm}
          />

          <button
            aria-label="add new invoice"
            type="button"
            className="flex flex-x-3 items-center px-3 py-2 justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setOpenModal(true)}
          >
            <span className="mr-2">إضافة فاتورة جديدة</span>
          </button>
        </div>

        {/* add or update invoice */}
        <div>
          <InvoiceForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            data={data}
            setData={setData}
            updateData={updateData}
            setUpdateData={setUpdateData}
          />
        </div>

        <div className="mt-4">
          {/* Disaplying all invoices */}
          <TableData
            data={searchTerm === "" ? data : filteredInvoices}
            columns={tableHead}
            deleteRow={showDeleteModal}
            editRow={editRow}
            title="اضغط لعرض تفاصيل الفاتورة"
            navigateTo="/dashboard/invoice"
          />
          {/* delete invoice */}
          <DeleteModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            onDelete={deleteRow}
            cancelDelete={cancelDelete}
            deleteId={deleteId}
            deleteStatement="هل أنت متأكد من حذف هذه الفاتورة"
          />
        </div>
      </div>
    </>
  );
}
