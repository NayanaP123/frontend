
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import school1 from '../../assets/school1.jpeg'
import bg from '../../assets/bg.webp'
import student from '../../assets/student.webp'


import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';

function AdminHome() {
  const theme = useTheme();
  const [adminName,setAdminName]=useState("")
    useEffect(() => {
      if(sessionStorage.getItem("adminData")){
        setAdminName(JSON.parse(sessionStorage.getItem("adminData")).admin.instiname)
      }
      else{
        setAdminName("")
      }
     
    }, [])

  const classData = [
    { name: 'Six', students: 40 },
    { name: 'Seven', students: 35 },
    { name: 'Eight', students: 50 },
    { name: 'Nine', students: 45 },
    { name: 'Ten', students: 30 },
    { name: 'Eleven', students: 20 },
    { name: 'Twelve', students: 25 },
  ];
  
  const subjectData = [
    { name: 'Math', enrolled: 50 },
    { name: 'Science', enrolled: 45 },
    { name: 'English', enrolled: 40 },
    { name: 'History', enrolled: 35 },
    { name: 'Physics', enrolled: 30 },
    { name: 'Chemistry', enrolled: 25 },
    { name: 'Biology', enrolled: 20 },
  ];
  
  return (
    <>
 



      <section style={{height:'100vh'}}>
        <div className="container" style={{backgroundColor:'white',borderRadius:'20px'}}>
          <div className="row">
          <div className="col-md-4">
          <div>
              <h1 style={{marginTop:'20px',fontFamily:'"Moon Dance", cursive',fontWeight:'500',fontSize:'64px'}} >Hello, <em   style={{fontFamily:'"Cormorant", serif',fontWeight:'500',fontStyle:'italic',fontSize:'74px'}}>{adminName}</em> 👋</h1>
              <p style={{color:'blue'}}>Kunnamangalam HSS</p>

             
              <p style={{fontFamily:'"Inconsolata", monospace',fontSize:'20px',marginTop:'10px'}}>Oversee school operations, track student and teacher activities, and ensure smooth management. 🏫</p>
              
            </div>
            

            <div style={{marginTop:'50px'}}>
              {/* <h3>Profile</h3> */}
              <br />
              <div>
      <div
        className="card text-center shadow-lg"
        style={{ width: "100%", borderRadius: "15px" }}
      >
        <div className="card-body">
          <img
            src={student}
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px" }}
          />
          <h4 className="card-title">Nayana P</h4>
          <p className="card-text text-muted">Principal</p>
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
            <div style={{height:'300px',width:'600px'}}>

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





            <div className="row" style={{ marginBottom:'50px',marginTop:'60px'}}>
  <div className="col-md-6">
    <h5>Classes Overview</h5>
    <div>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={classData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="students" fill="#007bff" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  </div>

  <div className="col-md-6">
    <h5>Subjects Overview</h5>
    <div>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={subjectData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="enrolled" fill="#dc3545" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  </div>
</div>

          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminHome