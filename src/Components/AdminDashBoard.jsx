import React, { useContext, useEffect, useState } from "react";
import AdminProfile from './AdminProfile'

import Fees from './Admin/Fees'

import { AdminContext } from "./Admin/AdminContext";
import SideBar from "./SideBar";
import AdminHome from "./Admin/AdminHome";
import AdminClass from "./Admin/AdminClass";
import Subjects from "./Admin/Subjects";
import StudentList from "./Admin/StudentList";
import TeacherList from "./Admin/TeacherList";
// import Admission from "./Admin/Admission";
import Timetable from "./Admin/Timetable";
import Attendance from "./Admin/Attendance";
import Exams from "./Admin/Exams";
import NoticeAdd from "./Admin/NoticeAdd";




function AdminDashboard() {
  const { activeComponent } = useContext(AdminContext);

  
  

  return (
    <div className="flex">
      {/* Sidebar (Fixed on the left) */}
      <SideBar />

      {/* Main content area */}
      <div className="content flex-1 ml-64 p-6 overflow-y-auto h-screen">
        {activeComponent === "home" && <AdminHome />}
        {activeComponent === "profile" && <AdminProfile />}
        {activeComponent === "Class" && <AdminClass />}
        {activeComponent === "Subjects" && <Subjects />}
        {activeComponent === "Students" && <StudentList />}
        {activeComponent === "Teachers" && <TeacherList />}
        {/* {activeComponent === "Admission" && <Admission />} */}
        {activeComponent === "Schedule" && <Timetable />}
        {activeComponent === "Attendance" && <Attendance />}
        {activeComponent === "Exam" && <Exams />}
        {activeComponent === "Notice" && <NoticeAdd />}
      </div>
    </div>
  );
}

export default AdminDashboard;
