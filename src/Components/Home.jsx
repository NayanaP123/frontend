import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import attendance from '../assets/attendance.jpg'
import landing from '../assets/landing.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'
import trust from '../assets/trust.png'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import 'animate.css';



import Collapse from 'react-bootstrap/Collapse';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import RegisteredDisplay from './RegisteredDisplay';
import Footer from './Footer';
import Buttons from './Buttons';
function Home() {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  const handlebuttonLogin=()=>{
    navigate('/login')
    
  }

  const handleFaq=()=>{
    navigate('/faq')
  }
  
  return (
    <>
    <Header/>
    <section className='hero' >
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text">
          <h1 style={{marginTop:'120px',fontFamily:'"Moon Dance", cursive',fontWeight:'500',fontSize:'64px'}}>Empowering <span style={{fontFamily:'"Cormorant", serif',fontWeight:'500',fontStyle:'italic',fontSize:'74px'}} class="animate__animated animate__bounce">education</span> <br /> with <span style={{fontFamily:'"Cormorant", serif',fontWeight:'500',fontStyle:'italic',fontSize:'74px'}} class="animate__animated animate__bounce">smart</span> management</h1>
            <br />
            <p  style={{fontFamily:'"Inconsolata", monospace',fontSize:'20px'}}>We offer an all-in-one solution for managing <br /> students, teachers, schedules, and exams in  <br />schools and coaching centers.</p>

            {/* lineheight */}
            
            
          </div>
          <div className="buttons">
          <button  onClick={handlebuttonLogin} style={{backgroundColor:'rgb(172, 222, 46)',height:'50px',width:'200px',borderRadius:'10px',color:'black',fontSize:'20px'}}>Get Started Now</button>
            
          </div>
        </div>
        <div className="col-md-6">

          <img style={{marginTop:'40px'}} src={landing} alt="" className='w-100'/>
          
        </div>
      </div>
    </div>

   </section>





   <section className="setup" style={{marginTop:'350px'}}>
  <div className="container">
    <div className="text-header text-center">
      <h3>Registered Institutions</h3>
    </div>

    <div className="marquee-container">
      <div className="marquee-content">
        <RegisteredDisplay />
      </div>
    </div>
  </div>
</section>






<section className='hero' >
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text">
          <h1 style={{marginTop:'120px',fontFamily:'"Cormorant", serif',fontWeight:'500',fontSize:'64px'}}>Smart Solutions for Efficient School Management</h1>
            <br />
            <p  style={{fontFamily:'"Inconsolata", monospace',fontSize:'20px'}}>Manage your school or coaching center effortlessly with our smart and efficient platform. From student and teacher management to attendance tracking, scheduling, and real-time notifications, our solution simplifies every aspect of academic administration, saving time and enhancing productivity.</p>

            {/* lineheight */}
            
            
          </div>
         
        </div>
        <div className="col-md-6">

          
          
        </div>
      </div>



      <div className="row">
  <div className="col-md-4 col-md-4 d-flex justify-content-center mt-5">
    <div>
      <button style={{height:'50px',width:'50px',backgroundColor:'blue',borderRadius:'20px',color:'white'}}>1</button>
      <br />
      <div className="card" style={{ width: "18rem" ,height:'480px'}}>
        <img src={card1} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Smart Automation & Accuracy</h5>
          <p className="card-text">
          A digital dashboard with automated attendance, scheduling, and reports being generated.
          </p>
         
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4 col-md-4 d-flex justify-content-center mt-5">
    <div>
    <button style={{height:'50px',width:'50px',backgroundColor:'blue',borderRadius:'20px',color:'white'}}>2</button>
      <br />
      <div className="card" style={{ width: "18rem",height:'480px' }}>
        <img src={card2} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Communication & Collaboration</h5>
          <p className="card-text">
          A network of teachers, students, and administrators connected through chat bubbles and notifications.
          </p>
         
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4 col-md-4 d-flex justify-content-center mt-5">
    <div>
    <button style={{height:'50px',width:'50px',backgroundColor:'blue',borderRadius:'20px',color:'white'}}>3</button>
      <br />
      <div className="card" style={{ width: "18rem",height:'480px' }}>
        <img src={card3} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Secure & Scalable System</h5>
          <p className="card-text">
          A shield with a lock, a cloud-based server, or multiple institutions connected securely.
          </p>
         
        </div>
      </div>
    </div>
  </div>
</div>



    </div>

   </section>





   <section className='hero' >
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text">
          <h1 style={{marginTop:'120px',fontFamily:'"Moon Dance", cursive',fontWeight:'500',fontSize:'64px'}}>Trusted by <span style={{fontFamily:'"Cormorant", serif',fontWeight:'500',fontStyle:'italic',fontSize:'74px'}}>Educators,</span> <br /> Loved by  <span style={{fontFamily:'"Cormorant", serif',fontWeight:'500',fontStyle:'italic',fontSize:'74px'}}>Learners </span> </h1>
            <br />
            <p  style={{fontFamily:'"Inconsolata", monospace',fontSize:'20px'}}>We simplify school management with smart automation, real-time communication, and secure data handling, letting institutions focus on quality education.</p>

            {/* lineheight */}
            
            
          </div>
         
        </div>
        <div className="col-md-6">

          <img style={{marginTop:'40px'}} src={trust} alt="" className='w-100'/>
          
        </div>
      </div>
    </div>

   </section>





   <section className="setup">
    <div style={{marginTop:'40px'}} className="container">
      {/* <div className="text-header text-center">
        <h3>hi</h3>
        <p>Automates tasks, saves time, enhances accuracy, and boosts overall productivity for schools and coaching centers</p>
      </div> */}

      <div className="items text-center">
      <Card className="text-center">
     
      <Card.Body>
        <Card.Title><h1 style={{marginTop:'50px',textAlign:'center',fontSize:'34px',color:'navy'}}>Transform the Way You Manage <br /> Your Institution!</h1></Card.Title>
        <Card.Text>
        <p style={{fontFamily:'"Inconsolata", monospace',fontSize:'20px',textAlign:'center'}} >Join hundreds of institutions streamlining their management! <br /> Simplify your workflow, save time, and enhance efficiency. Start today!</p>
        </Card.Text>
        <Button onClick={handlebuttonLogin} variant="primary">Get Started Now</Button>
      </Card.Body>
     
    </Card>
      </div>
    </div>
   </section>







   <section style={{paddingTop:'40px'}} className="setup">
    <div className="container">
      <div className="text-header text-center">
        <h3>Frequently Asked Questions</h3>
        <p>Curious? Click to Reveal the Answer!💡</p>
      </div>

      <div className="items text-center">
        <div className="row">
          <div className="col-md-2">
            
          </div>
          <div className="col-md-8">
      
          <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> What is the purpose of this School/Coaching Center Management App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This app helps schools and coaching centers manage students, teachers, attendance, exams, schedules, and communication efficiently through a centralized digital platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Question 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Who can use this system</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The system is designed for school owners, administrators, teachers, and students, each having role-based access to relevant features.
          </Typography>
        </AccordionDetails>
      </Accordion>

     

            
          </div>
          <div className="col-md-2">
            
          </div>
        </div>

        <Button onClick={handleFaq} style={{marginTop:'30px'}} variant="primary">View More</Button>
      </div>
    </div>
   </section>

   <Footer/>














   



   

    
    </>
  )
}

export default Home






    






