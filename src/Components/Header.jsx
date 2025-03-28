import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate=useNavigate()

  const handlebuttonLogin=()=>{
    navigate('/login')
  }
  const handlebuttonRegister=()=>{
    navigate('/register')
  }
  return (
    <>
   {/* <div className="container"> */}
   <nav style={{padding:'10px 10px',backgroundColor:'beige'}} class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href='/'><img style={{height:'20px'}} src={logo} alt="" /> ClassEase</a>
    <form class="d-flex" role="search">
   
    <button onClick={handlebuttonLogin} style={{marginRight:'20px'}} type="button" class="btn btn-success">Login</button>
    <button onClick={handlebuttonRegister} type="button" class="btn btn-danger">Register</button>
    </form>
  </div>
</nav>
   {/* </div> */}



   {/* home */}

   
    </>
  )
}

export default Header