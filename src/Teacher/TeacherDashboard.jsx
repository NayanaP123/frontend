import React, { useContext } from "react";
import { TeacherContext } from './TeacherContext';
import TeacherProfile from './TeacherProfile';
import TeacherSideBar from './TeacherSidebar';
import TeacherHome from "./TeacherHome";
import Timtable from './Timtable'
import TakeAttendance from './TakeAttendance'
import AddExams from './AddExams'
import TeacherNotice from './TeacherNotice'

function TeacherDashboard() {
  const { activeComponent } = useContext(TeacherContext);

  return (
    <div className="flex">
      {/* Sidebar (Fixed on the left) */}
      <TeacherSideBar />

      {/* Main content area */}
      <div className="content flex-1 ml-64 p-6 overflow-y-auto h-screen">
        {activeComponent === "home" && <TeacherHome />}
        {activeComponent === "profile" && <TeacherProfile />}
        {activeComponent === "Schedule" && <Timtable />}
        {activeComponent === "Attendance" && <TakeAttendance />}
        {activeComponent === "Exam" && <AddExams />}
        {activeComponent === "Notice" && <TeacherNotice />}

      </div>
    </div>
  );
}

export default TeacherDashboard;
