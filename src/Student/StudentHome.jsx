import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import school1 from "../assets/school1.jpeg";
import student from "../assets/student.webp";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";


function StudentHome() {
  const theme = useTheme();
  const [studentName,setStudentName]=useState("")
    useEffect(() => {
      if(sessionStorage.getItem("studentData")){
        setStudentName(JSON.parse(sessionStorage.getItem("studentData")).student.username)
      }
      else{
        setStudentName("")
      }
     
    }, [])

  // Attendance Data for Pie Chart
  const attendanceData = [
    { name: "Present", value: 75, color: "#007bff" },
    { name: "Absent", value: 25, color: "#ffc107" },
  ];

  // Attendance Records Table
  const attendanceRecords = [
    { date: "2-11-2024", status: "Absent" },
    { date: "1-11-2024", status: "Present" },
    { date: "31-10-2024", status: "Present" },
  ];
  
  return (
    <>
 



      <section style={{height:'100vh'}}>
        <div className="container" style={{backgroundColor:'white',borderRadius:'20px'}}>
          <div className="row">
          <div className="col-md-4">
          <div>
              <h1 style={{marginTop:'20px',fontFamily:'"Moon Dance", cursive',fontWeight:'500',fontSize:'64px'}} >Hello, <em   style={{fontFamily:'"Cormorant", serif',fontWeight:'500',fontStyle:'italic',fontSize:'74px'}}>{studentName}</em> 👋</h1>
              <p style={{color:'blue'}}>Kunnamangalam HSS</p>

             
              <p style={{fontFamily:'"Inconsolata", monospace',fontSize:'20px',marginTop:'10px'}}>Easily access your schedule, attendance, exams, and important announcements in one place. 📚</p>
              
            </div>
            

            <div style={{marginTop:'50px'}}>
              <h3>Profile</h3>
              <br />
              <div>
      <div
        className="card text-center shadow-lg"
        style={{ width: "250px", borderRadius: "15px" }}
      >
        <div className="card-body">
          <img
            src={student}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h4 className="card-title">Nayana P</h4>
          <p className="card-text text-muted">Student</p>
          <p className="text-muted">Kunnamagalam HSS, Kerala</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-primary btn-sm mx-2">
              Edit
            </a>
            
          </div>
        </div>
      </div>
    </div>
            </div>

            <div  style={{marginTop:'50px',marginBottom:'50px'}}>
  <h3>Events</h3>
  <br />
  <div className="container">
    <div
      className="p-3 border border-dark rounded bg-light"
      style={{ maxWidth: "100%", width: "420px" }}
    >
      <div className="row align-items-center">
        <div className="col-md-3 text-center">
          <div className="d-flex flex-column align-items-center justify-content-center border border-dark rounded bg-dark text-white p-2" style={{ height: "80px", width: "80px" }}>
            <h2 className="m-0">12</h2>
            <p className="m-0">Wed</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <h5 className="mb-1">Dance Competition</h5>
          <p className="mb-0">Auditorium</p>
        </div>
        <div className="col-md-3 text-center">
          <button className="btn btn-primary w-100">View</button>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>

          <div className="col-md-8" style={{backgroundColor:'rgba(206, 254, 47, 0.21)'}}>
            <div style={{height:'350px',width:'600px'}}>

            </div>
            <div style={{paddingTop:'20px'}}>
            <Card sx={{ display: 'flex', boxShadow: '0px 4px 10px rgba(58, 59, 56, 0.21)' ,border:'2px solid lightgrey',borderRadius:'10px',backgroundColor:'beige'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className="row">
            <div className="col-md-4">
            <Typography component="div" variant="h5">
            No.of Students in Institute
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
            style={{color:'red'}}
          >
            <h5>150</h5>
          </Typography>
            </div>


            <div className="col-md-4">
            <Typography component="div" variant="h5">
            No.of Teachers in Institute
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
            style={{color:'red'}}
          >
            <h5>20</h5>
          </Typography>
            </div>




            <div className="col-md-4">
            <Typography component="div" variant="h5">
            No.of current Classes
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
            style={{color:'red'}}
          >
            <h5>12</h5>
          </Typography>
            </div>
          </div>
        </CardContent>
       
      </Box>
      <div className="col-md-3">
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={school1}
        alt="Live from space album cover"
      />
      </div>
    </Card>
            </div>




{/* Attendance Chart & Records */}
<div className="row" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="col-md-6">
                  <h5>Your Attendance</h5>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={attendanceData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {attendanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="col-md-6">
                  <h5>Attendance Records</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceRecords.map((record, index) => (
                        <tr key={index}>
                          <td>{record.date}</td>
                          <td>
                            <span className={`badge ${record.status === "Present" ? "bg-success" : "bg-danger"}`}>
                              {record.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudentHome