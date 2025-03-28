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
import { registerAPI } from '../../Services/allApi';
import { useNavigate } from 'react-router-dom';



function Registration() {

 
  const [adminData,setAdminData]=useState({username:"",email:"",password:"",instiname:""})
  const navigate=useNavigate()

console.log(adminData);

const handleRegister=async(e)=>{
  e.preventDefault()
  const {username,email,password,instiname}=adminData
  if(username && email && password && instiname){
    // api call

    try {
      const result=await registerAPI(adminData)
    console.log(result);

    if(result.status==200){
      navigate('/login')
      setAdminData({username:"",email:"",password:"",instiname:""})
toast.success('registered successfully')

    }
    else{
      if(result.status==406){
        toast.error(result.response.data)
        setAdminData({username:"",email:"",password:"",instiname:""})

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
                <Card.Title className='text-center'>Registration Form</Card.Title>
                <Card.Text>
                  <div className='d-flex justify-content-center mt-5'>
                    <TextField value={adminData.username} onChange={(e) => setAdminData({...adminData,username:e.target.value})}
                      label="Username"
                      type="text"


                    />
                    
                  </div>
                 


                  <div className='d-flex justify-content-center mt-3' >
                    <TextField value={adminData.email} onChange={(e) => setAdminData({...adminData,email:e.target.value})}
                      label="Email"
                      type="email"
                    />
                  </div>
                

                  <div className='d-flex justify-content-center mt-3' >
                    <TextField value={adminData.password} onChange={(e) => setAdminData({...adminData,password:e.target.value})}
                      label="Password"
                      type="password"
                    />
                  </div>
                

                 

                  <div className='d-flex justify-content-center mt-3' >
                    <TextField value={adminData.instiname}  onChange={(e) => setAdminData({...adminData,instiname:e.target.value})}
                      label="Institution Name"
                      type="text"
                    />
                  </div>
                 

           
                

                  <div className='d-flex justify-content-center'>
                    <Button onClick={(e)=>handleRegister(e)} variant="primary">
                      Register
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

export default Registration
