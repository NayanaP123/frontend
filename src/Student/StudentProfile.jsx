import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import studentImg from "../assets/student.webp";


function StudentProfile() {
  const attendanceData = [
    { name: "Present", value: 80, color: "#28a745" },
    { name: "Absent", value: 20, color: "#dc3545" },
  ];
  return (
    <>

      <section>
        <h1 style={{textAlign:'center'}}>STUDENT PROFILE</h1>
      <div style={{ backgroundColor: "beige", minHeight: "100vh", padding: "20px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="shadow-lg text-center" style={{ borderRadius: "15px" ,height:'530px'}}>
              <Card.Body>
                <img
                  src={studentImg}
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{ width: "120px", height: "120px" }}
                />
                <h3>Nayana P</h3>
                <p className="text-muted">Student | Kunnamangalam HSS</p>
                <p><strong>Class:</strong> 12 | <strong>Roll No:</strong> 23</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="shadow-lg p-4" style={{ borderRadius: "15px" }}>
              <h4 className="mb-3">Personal Information</h4>
              <Row>
                <Col md={6}>
                  <p><strong>Email:</strong> nayana@example.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                </Col>
                <Col md={6}>
                  <p><strong>Address:</strong> Kozhikode, Kerala</p>
                  <p><strong>Joined:</strong> June 2022</p>
                </Col>
              </Row>
            </Card>

            <Row className="mt-4">
              <Col md={6}>
                <Card className="shadow-lg p-4 text-center" style={{ borderRadius: "15px" }}>
                  <h5>Attendance Summary</h5>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={attendanceData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {attendanceData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="shadow-lg p-4" style={{ borderRadius: "15px" }}>
                  <h5>Upcoming Events</h5>
                  <ul className="list-unstyled">
                    <li>📅 Science Fair - 15th March</li>
                    <li>📅 Sports Day - 20th March</li>
                    <li>📅 Annual Day - 25th March</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
      </section>
    </>
  )
}

export default StudentProfile