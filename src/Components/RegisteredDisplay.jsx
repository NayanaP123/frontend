import React from 'react';
import Card from 'react-bootstrap/Card';
import school1 from '../assets/school1.jpeg'

function RegisteredDisplay() {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <Card className="marquee-item">
          <Card.Img variant="top" src={school1} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center', color: 'black' }}>Kunnamangalam HSS</Card.Title>
          </Card.Body>
        </Card>

        <Card className="marquee-item">
          <Card.Img variant="top" src={school1} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center', color: 'black' }}>ABC Public School</Card.Title>
          </Card.Body>
        </Card>

        <Card className="marquee-item">
          <Card.Img variant="top" src={school1} />
          <Card.Body>
            <Card.Title style={{ textAlign: 'center', color: 'black' }}>XYZ Academy</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default RegisteredDisplay;
