import React from 'react';
import Header2 from './Header2';
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <>
     <Header2 />
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '60vh' // Full screen height
    }}>
     
      <Link to={'/login'}><button style={buttonStyle}>ADMIN LOGIN</button></Link>
      <Link to={'/studentlogin'}><button style={buttonStyle}>STUDENT LOGIN</button></Link>
      <Link to={'/teacherlogin'}><button style={buttonStyle}>TEACHER LOGIN</button></Link>

    </div>
    </>
  );
}


// Button styling
const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '18px',
  borderRadius: '5px',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};


export default Buttons;
