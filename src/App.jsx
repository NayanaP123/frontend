import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Home from './Components/Home'

import Sidebar from './Components/SideBar';
import AdminDashBoard from './Components/AdminDashBoard';
// import AdminProfile from './Components/AdminProfile';
import { TeacherProvider } from './Teacher/TeacherContext';
import TeacherDashboard from './Teacher/TeacherDashboard';
import StudentDashboard from './Student/StudentDashboard'
import { StudentProvider } from './Student/StudentContext';
import { AdminProvider } from './Components/Admin/AdminContext';
import Faqs from './Components/Faqs';
import Login from './Components/Login';
import Registration from './Components/Registration'

import CalendarComponent from './Components/Admin/CalendarComponent'
import Period from './Components/Admin/Period'
import StudentLogin from './Components/StudentLogin';
import Buttons from './Components/Buttons';
// import AdminLogin from './Components/AdminLogin';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
    <AdminProvider>
    <StudentProvider>
    <TeacherProvider>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/adminDashboard" element={<AdminDashBoard />} />
            <Route path="/teacherDashboard" element={<TeacherDashboard />} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/buttons" element={<Buttons />} />          
              <Route path="/login" element={<Login />} />
              {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}
            <Route path="/studentlogin" element={<StudentLogin />} />
            <Route path="/register" element={<Registration />} />

            


            <Route path="/calendar" element={<CalendarComponent />} />
            <Route path="/period" element={<Period />} />
          </Routes>

          </TeacherProvider>
          </StudentProvider>
          </AdminProvider>
       

      <ToastContainer position="top-center" theme="light" />
    </>
  );
}

export default App;
