import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Header2 from './Header2';
import { useNavigate } from 'react-router-dom';
import { loginStudentAPI } from '../../Services/allApi';



function StudentLogin() {

 
  const [studentData,setStudentData]=useState({username:"",email:"",AdmNo:""})
  const navigate=useNavigate()

console.log(studentData);

const handleLoginStudent=async(e)=>{
  e.preventDefault()
   if(studentData.username&&studentData.email && studentData.AdmNo ){
    // api call

    try {
      const result=await loginStudentAPI(studentData)
    console.log(result);

    if(result.status==200){
      sessionStorage.setItem("studentData", JSON.stringify(result.data));
    
      navigate('/studentDashboard')
      setAdminData({username:"",email:"",AdmNo:""})
toast.success('logined successfully')

    }
    else{
      if(result.status==404){
        toast.error(result.response.error)
        setAdminData({username:"",email:"",AdmNo:""})

      }
    }
      
    } catch (err) {
      console.log(err);
      
      
    }
    
    
  }
  else{
    toast.warning('fill completely')
  }
}




  return (
    <>
      <Header2 />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>

          <div className="col-md-4 d-flex justify-content-center">
            <Card style={{ width: '100%', marginTop: '5px' }}>
              <Card.Body>
                <Card.Title className='text-center'>Login Form</Card.Title>
                <Card.Text>
                  
                <div className='d-flex justify-content-center mt-3' >
                    <TextField value={studentData.username} onChange={(e) => setStudentData({...studentData,username:e.target.value})}
                      label="Username"
                      type="text"
                    />
                  </div>


                  <div className='d-flex justify-content-center mt-3' >
                    <TextField value={studentData.email} onChange={(e) => setStudentData({...studentData,email:e.target.value})}
                      label="Email"
                      type="email"
                    />
                  </div>

                  <div className='d-flex justify-content-center mt-3' >
                    <TextField value={studentData.AdmNo} onChange={(e) => setStudentData({...studentData,AdmNo:e.target.value})}
                      label="Admission Number"
                      type="text"
                    />
                  </div>
                

           

           
                

                  <div className='d-flex justify-content-center'>
                    <Button onClick={(e)=>handleLoginStudent(e)} variant="primary">
                      Login
                    </Button>
                  </div>

                </Card.Text>
              </Card.Body>
            </Card>

          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default StudentLogin
