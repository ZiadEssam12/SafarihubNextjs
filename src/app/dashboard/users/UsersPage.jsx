"use client";

import React, { useEffect, useState } from "react";
// import DashboardSectionHeader from "../DashboardSectionHeader/DashboardSectionHeader";

import UserForm from "./UserForm";
import {
  DeleteModal,
  TableData,
} from "@/components/ReusableComponents/ResuableComponents";

const tableHead = ["الاسم", "البريد الالكتروني", "الجوال", "الصلاحيات"];

const usersDummy = [
  {
    id: 1,
    fullName: "أحمد علي",
    email: "ahmed.ali@example.com",
    phone: "0501234567",
    role: "مشرف",
  },
  {
    id: 2,
    fullName: "سارة محمد",
    email: "sara.mohamed@example.com",
    phone: "0502345678",
    role: "مستخدم",
  },
  {
    id: 3,
    fullName: "خالد حسين",
    email: "khaled.hussein@example.com",
    phone: "0503456789",
    role: "مدير",
  },
  {
    id: 4,
    fullName: "ليلى أحمد",
    email: "layla.ahmed@example.com",
    phone: "0504567890",
    role: "محرر",
  },
  {
    id: 5,
    fullName: "يوسف صالح",
    email: "yousef.salah@example.com",
    phone: "0505678901",
    role: "مشرف",
  },
];

const roles = ["مشرف", "مستخدم", "مدير", "محرر"];

export default function UsersPage() {
  const [users, setUsers] = useState(usersDummy); // Original data
  const [filteredusers, setFilteredusers] = useState(usersDummy); // Filtered data
  const [searchTerm, setSearchTerm] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  // This useEffect ensures filteredusers is always in sync with data
  useEffect(() => {
    setFilteredusers(users);
  }, [users]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setFilteredusers(users);
      return;
    }

    const filteredusers = users.filter((user) =>
      user.fullName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredusers.length === 0) {
      setFilteredusers([]);
    } else {
      setFilteredusers(filteredusers);
    }
  };

  function showDeleteModal(id) {
    setDeleteModal(true);
    setDeleteId(id);
  }

  function deleteRow(id) {
    const newusers = users.filter((user) => user.id !== id);
    setUsers(newusers);
    setDeleteModal(false);
  }

  function cancelDelete() {
    setDeleteModal(false);
    setDeleteId("");
  }

  function editRow(id) {
    const user = users.find((user) => user.id === id);
    setUpdateData(user);
    setOpenModal(true);
  }

  return (
    <>
      <div id="DashBoardUsers" className="p-6 min-h-screen">
        {/* <DashboardSectionHeader sectionTitle="كل المستخدمين" /> */}

        <div className="flex justify-between my-6 ">
          <input
            type="text"
            placeholder="ابحث عن مستخدم"
            className="w-[200px] border-2 border-gray-500 rounded-md p-2"
            onChange={handleSearchChange}
            value={searchTerm}
          />

          <button
            aria-label="add new user"
            type="button"
            className="flex flex-x-3 items-center px-3 py-2 justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setOpenModal(true)}
          >
            <span className="mr-2">إضافة مستخدم جديد</span>
          </button>
        </div>

        {/* add or update user */}
        <div>
          <UserForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            data={users}
            setData={setUsers}
            updateData={updateData}
            setUpdateData={setUpdateData}
            roles={roles}
          />
        </div>

        <div className="mt-4">
          {/* Disaplying all users */}
          <TableData
            data={searchTerm === "" ? users : filteredusers}
            columns={tableHead}
            deleteRow={showDeleteModal}
            editRow={editRow}
          />
          {/* delete user */}
          <DeleteModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            onDelete={deleteRow}
            cancelDelete={cancelDelete}
            deleteId={deleteId}
            deleteStatement="هل أنت متأكد من حذف هذه المستخدم"
          />
        </div>
      </div>
    </>
  );
}
