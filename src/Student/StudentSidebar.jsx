import React, { useContext, useState } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaCalendarAlt, FaClipboardList, FaBook, FaBullhorn, FaBars, FaSignOutAlt } from "react-icons/fa";import "./Sidebar.css"; 
import { StudentContext } from './StudentContext';

function StudentSideBar() {
  const { activeComponent,setActiveComponent } = useContext(StudentContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate(); 

  const handleLogout = () => {
   
    console.log("Logging out...");
    navigate("/studentlogin"); 
  };

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
        
                <button style={{width:'100%',backgroundColor: activeComponent === "Schedule" ? "white" : "transparent",color: activeComponent === "Schedule" ? "black" : "white"}}>
                <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Schedule")}>
                <FaCalendarAlt className="icon" /> &nbsp;
                {isOpen && <span className='text'>Schedule</span>}
                </li>
                </button>
        
        
        
        
             
        
                <button style={{width:'100%',backgroundColor: activeComponent === "Attendance" ? "white" : "transparent",color: activeComponent === "Attendance" ? "black" : "white"}}>
                <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Attendance")}>
                <FaClipboardList className="icon" /> &nbsp;
                {isOpen && <span className='text'>Attendance</span>}
                </li>
                </button>
        
                <button style={{width:'100%',backgroundColor: activeComponent === "Exam" ? "white" : "transparent",color: activeComponent === "Exam" ? "black" : "white"}}>
                <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Exam")}>
                <FaBook className="icon" /> &nbsp;
                {isOpen && <span className='text'>Exam</span>}
                </li></button>
        
        
                <button style={{width:'100%',backgroundColor: activeComponent === "Notice" ? "white" : "transparent",color: activeComponent === "Notice" ? "black" : "white"}}>
                <li className="cursor-pointer hover:text-gray-400" onClick={() => setActiveComponent("Notice")}>
                <FaBullhorn className="icon" /> &nbsp;
                {isOpen && <span className='text'>Notice</span>}
                </li>
                </button>
             


                <button 
          style={{
            width: '100%',
            backgroundColor: 'red',
            color: 'white',
            marginTop: '20px'
          }} 
          onClick={handleLogout}
        >
          <li className="cursor-pointer hover:text-gray-400">
            <FaSignOutAlt className="icon" /> &nbsp;
            {isOpen && <span className='text'>Logout</span>}
          </li>
        </button>
              </ul>
            </div>
  );
}

export default StudentSideBar;
