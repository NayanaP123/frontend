import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Box from '@mui/material/Box';
import Header from './Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Card } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';



function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const handleSubmit = () => {
    toast.success("Successfully submitted")

  }

  return (
    <>
      <Header />
      <section >
        <div className="container">
          <div className="row">
            <div className="text">
              <h1 style={{ marginTop: '40px', fontFamily: '"Cormorant", serif', fontWeight: '500', fontSize: '64px', textAlign: 'center' }}>FAQ'S</h1>
              <br />

              {/* Question 1 */}

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



              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span"> How does attendance tracking work</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Teachers can mark attendance digitally, and the system automatically updates student records, reducing manual errors and saving time.
                  </Typography>
                </AccordionDetails>
              </Accordion>




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




              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">Can students check their schedules and exam dates</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, students can log in to view their class schedules, exam timetables, and important announcements.
                  </Typography>
                </AccordionDetails>
              </Accordion>




              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">How are notifications and announcements shared</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Admins and teachers can post updates on the digital notice board, ensuring students receive real-time notifications about important events.
                  </Typography>
                </AccordionDetails>
              </Accordion>


              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span">Is the system secure</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, it uses role-based authentication and data encryption to ensure security and prevent unauthorized access.
                  </Typography>
                </AccordionDetails>
              </Accordion>



            </div>

          </div>
        </div>

      </section>

      <section className="setup">
        <div style={{ marginTop: '40px' }} className="container">

          <div className="items text-center">
            <Card className="text-center">

              <Card.Body>
                <Card.Title><h1 style={{ marginTop: '50px', textAlign: 'center', fontSize: '34px', color: 'navy' }}>📩 Have Questions? We're Here to Help!</h1></Card.Title>
                <Card.Text>
                  <p style={{ fontFamily: '"Inconsolata", monospace', fontSize: '20px', textAlign: 'center' }} >Fill out the form below, and our team will get back to you as soon as possible</p>
                  <br />
                  <TextField id="name" label="Name" variant="outlined" fullWidth margin="dense" />
                  <TextField id="email" label="Email" variant="outlined" fullWidth margin="dense" />
                  <TextField id="message" label="Message" variant="outlined" fullWidth margin="dense" multiline rows={3} />


                </Card.Text>
                <Button onClick={handleSubmit} variant="primary">SUBMIT</Button>
              </Card.Body>

            </Card>
          </div>
        </div>
      </section>




    </>
  )
}

export default Faqs;
