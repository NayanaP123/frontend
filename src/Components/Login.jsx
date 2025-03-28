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
import { loginAdminAPI } from '../../Services/allApi';



function Login() {

 
  const [adminData,setAdminData]=useState({email:"",password:""})
  const navigate=useNavigate()

console.log(adminData);

const handleLogin=async(e)=>{
  e.preventDefault()
   if(adminData.email && adminData.password ){
    // api call

    try {
      const result=await loginAdminAPI(adminData)
    console.log(result);

    if(result.status==200){
      sessionStorage.setItem("adminData", JSON.stringify(result.data));
    
      navigate('/adminDashboard')
      setAdminData({username:"",email:"",password:""})
toast.success('logined successfully')

    }
    else{
      if(result.status==404){
        toast.error(result.response.error)
        setAdminData({username:"",email:"",password:""})

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
                

                 

           
                

                  <div className='d-flex justify-content-center'>
                    <Button onClick={(e)=>handleLogin(e)} variant="primary">
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

export default Login
