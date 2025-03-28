import React, { useContext } from "react";

import StudentProfile from './StudentProfile'


import { StudentContext } from "./StudentContext";
import StudentSideBar from "./StudentSidebar";
import StudentHome from "./StudentHome";
import Timetable from "./Timetable";
import Attendance from "./Attendance";
import Exams from "./Exams";
import Notice from "./Notice";


function StudentDashboard() {
  const { activeComponent } = useContext(StudentContext);

  return (
    <div className="flex">
      {/* Sidebar (Fixed on the left) */}
      <StudentSideBar />

      {/* Main content area */}
      <div className="content flex-1 ml-64 p-6 overflow-y-auto h-screen">
      {activeComponent === "home" && <StudentHome />}
        {activeComponent === "profile" && <StudentProfile />}
        {activeComponent === "Schedule" && <Timetable />}
        {activeComponent === "Attendance" && <Attendance />}
        {activeComponent === "Exam" && <Exams />}
        {activeComponent === "Notice" && <Notice />}
      </div>
    </div>
  );
}

export default StudentDashboard;
