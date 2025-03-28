import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField, Button } from '@mui/material';

function Footer() {
  return (
    <>
      <section style={{ height: '60vh', backgroundColor: 'whitesmoke',marginTop:'40px' }}>
        <Container>
          <Row>
            {/* Left Column */}
            <Col md={4} className="d-flex justify-content-center mt-5">
              <div>
                <h3>ClassEase</h3>
                <p style={{ fontFamily: '"Inconsolata", monospace', fontSize: '20px' }}>
                  We offer an all-in-one solution for managing <br /> students, teachers, schedules, and exams in <br />
                  schools and coaching centers.
                </p>
              </div>
            </Col>

            {/* Middle Column */}
            <Col md={4} className="d-flex justify-content-center mt-5">
              <div>
                <h3>Links</h3>
                <ul>
                  <li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="/">Home</a>
                  </li>
                  <li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="/faq">FAQ's</a>
                  </li>
                  <li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="/login">Login</a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Right Column */}
            <Col md={4} className="d-flex justify-content-center mt-5">
              <div>
                <h3>Get In Touch</h3>
                <div className="card p-3" style={{ width: '18rem' }}>
                  <h5 className="card-title">Contact Us</h5>

                  {/* Corrected MUI TextField Inputs */}
                  <TextField id="name" label="Name" variant="outlined" fullWidth margin="dense" />
                  <TextField id="email" label="Email" variant="outlined" fullWidth margin="dense" />
                  <TextField id="message" label="Message" variant="outlined" fullWidth margin="dense" multiline rows={3} />

                  <Button variant="contained" color="primary" fullWidth className="mt-2">
                    Submit
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section style={{ height: '10vh', backgroundColor: 'whitesmoke' }}>
        <Container>
          <Row>
            

            {/* Middle Column */}
            <Col md={6} >
              <div style={{paddingTop:'15px'}}>
               <p>Terms and Conditions | Privacy Policy</p>
              </div>
            </Col>

            {/* Right Column */}
            <Col md={6}  >
              <div style={{paddingTop:'15px'}}>
              <p> Copyright &copy; 2025 ClassEase | All Rights are Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
