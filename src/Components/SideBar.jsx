import React, { useContext, useState } from 'react';

import { Link } from "react-router-dom";
import { FaHome, FaChalkboardTeacher, FaBook, FaUserGraduate, FaUserTie, FaClipboardList, FaCalendarAlt, FaCheckCircle, FaFileAlt, FaBullhorn, FaBars, FaUser } from "react-icons/fa";
import "./Sidebar.css"; 
import { AdminContext } from './Admin/AdminContext';


function SideBar() {
  const { activeComponent,setActiveComponent } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div 
      className={`sidebar ${isOpen ? "open" : "closed"}`}  
      style={{ fontSize: '18px' }}
    >
       <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaBars /> &nbsp;
      </button>
      <ul className="space-y-4 mt-5">
       <button style={{width:'100%',backgroundColor: activeComponent === "home" ? "white" : "transparent",color: activeComponent === "home" ? "black" : "white"}}> <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("home")}>
        <FaHome className="icon" /> &nbsp;
          {isOpen && <span className='text'>Home</span>}
        </li></button>
        
        <button style={{width:'100%',backgroundColor: activeComponent === "profile" ? "white" : "transparent",color: activeComponent === "profile" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("profile")}>
        <FaUser className="icon" /> &nbsp;
        {isOpen && <span className='text'>Profile</span>}
        </li>
        </button>

        <button style={{width:'100%',backgroundColor: activeComponent === "Class" ? "white" : "transparent",color: activeComponent === "Class" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Class")}>
        <FaChalkboardTeacher className="icon" /> &nbsp;
        {isOpen && <span className='text'>Class</span>}
        </li>
        </button>



        <button style={{width:'100%',backgroundColor: activeComponent === "Subjects" ? "white" : "transparent",color: activeComponent === "Subjects" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Subjects")}>
        <FaBook className="Subjects" /> &nbsp;
        {isOpen && <span className='text'>Subjects</span>}
        </li>
        </button>

        <button style={{width:'100%',backgroundColor: activeComponent === "Students" ? "white" : "transparent",color: activeComponent === "Students" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Students")}>
        <FaUserGraduate className="icon" /> &nbsp;
        {isOpen && <span className='text'>Students</span>}
        </li>
        </button>


        <button style={{width:'100%',backgroundColor: activeComponent === "Teachers" ? "white" : "transparent",color: activeComponent === "Teachers" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Teachers")}>
        <FaUserTie className="icon" /> &nbsp;
        {isOpen && <span className='text'>Teachers</span>}
        </li>
        </button>

        {/* <button style={{width:'100%',backgroundColor: activeComponent === "Admission" ? "white" : "transparent",color: activeComponent === "Admission" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Admission")}>
        <FaClipboardList className="icon" />  &nbsp;
        {isOpen && <span className='text'>Admission</span>}
        </li>
        </button> */}

        <button style={{width:'100%',backgroundColor: activeComponent === "Schedule" ? "white" : "transparent",color: activeComponent === "Schedule" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Schedule")}>
        <FaCalendarAlt className="icon" /> &nbsp;
        {isOpen && <span className='text'>Schedule</span>}
        </li>
        </button>

        <button style={{width:'100%',backgroundColor: activeComponent === "Attendance" ? "white" : "transparent",color: activeComponent === "Attendance" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Attendance")}>
        <FaCheckCircle className="icon" /> &nbsp;
        {isOpen && <span className='text'>Attendance</span>}
        </li>
        </button>

        <button style={{width:'100%',backgroundColor: activeComponent === "Exam" ? "white" : "transparent",color: activeComponent === "Exam" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Exam")}>
        <FaFileAlt className="icon" /> &nbsp;
        {isOpen && <span className='text'>Exam</span>}
        </li></button>


        <button style={{width:'100%',backgroundColor: activeComponent === "Notice" ? "white" : "transparent",color: activeComponent === "Notice" ? "black" : "white"}}>
        <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Notice")}>
        <FaBullhorn className="icon" /> &nbsp;
        {isOpen && <span className='text'>Notice</span>}
        </li>
        </button>
     
      </ul>
    </div>
  );
}

export default SideBar;
