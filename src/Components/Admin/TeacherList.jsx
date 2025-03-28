import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import teacher from '../../assets/teacher.webp';
import { toast } from 'react-toastify';
// import { addTeacherAPI } from '../../../Services/allApi';


function TeacherList() {
  const theme = useTheme();
  const [teacherData, setTeacherData] = useState({
    username: "",
    email: "",
    age: "",
    bloodgroup: "",
    gender: "",
    qual: "",
    phone: "",
    admdate: "",
    admNo: "",
    img: ""
  });

  console.log(teacherData);

  const [imgfileStatus, setimgfileStatus] = useState(false);
  const [preview, setpreview] = useState(teacher);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setTeacherData({
      username: "",
      email: "",
      age: "",
      bloodgroup: "",
      gender: "",
      qual: "",
      phone: "",
      admdate: "",
      admNo: "",
      img: ""
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (teacherData.img.type === 'image/png' || teacherData.img.type === 'image/jpg' || teacherData.img.type === 'image/jpeg') {
      setimgfileStatus(true);
      setpreview(URL.createObjectURL(teacherData.img));
    } else {
      setimgfileStatus(false);
      setTeacherData(prevState => ({ ...prevState, img: "" }));
      setpreview(teacher);
    }
  }, [teacherData.img]);

  // Placeholder function for adding teacher
  const handleAddTeacher=async(e) => {
    e.preventDefault();
   const {username,email,age,bloodgroup,gender,qual,phone,admdate,admNo,img}=teacherData

   if(username&&email&&age&&bloodgroup&&gender&&qual&&phone&&admdate&&admNo&&img){
// api call

// reqbody
const reqBody=new FormData()
reqBody.append('username',username)
reqBody.append('email',email)
reqBody.append('age',age)
reqBody.append('bloodgroup',bloodgroup)
reqBody.append('gender',gender)
reqBody.append('qual',qual)
reqBody.append('phone',phone)
reqBody.append('admdate',admdate)
reqBody.append('admNo',admNo)
reqBody.append('img',img)


// reqheader

const token=sessionStorage.getItem("adminData").token
if(token){
  const reqHeader={
    "content-type":"multipart/form-data",
    "authorization":`Bearer ${token}`
  }


  
}
   }
   else{
    toast.warning('fill completely')
   }
  };

  return (
    <>
      <section>
        <div className="container" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>ADD NEW TEACHER</h3>
          <br />

          <Button variant="primary" onClick={handleShow}>
            Add New Teacher
          </Button>
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <img src={teacher} className="card-img-top" alt="Teacher" />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p>Email: teacher@gmail.com</p>
                  <p>Age: 26</p>
                  <p>Gender: Male</p>
                  <p>Qualifications: B.Ed</p>
                  <p>Phone No.: 9999999999</p>
                  <p>Address: Sample Address</p>
                  <p>Blood Group: A+</p>
                  <p>Adm. Date: 12/12/24</p>
                  <div className="row">
                    <div className="col-md-4">
                      <a href="#" className="btn btn-success">
                        <i className="fa-solid fa-pen-to-square" style={{ color: 'white' }}></i>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#" className="btn btn-danger">
                        <i className="fa-solid fa-trash" style={{ color: 'white' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Adding Teacher */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group">
            <input
              onChange={(e) => setTeacherData({ ...teacherData, img: e.target.files[0] })}
              type="file"
              className="form-control"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
          </div>
          {!imgfileStatus && <p style={{ color: 'red' }}>*Only upload PNG/JPG/JPEG</p>}

          <div className="col-md-4" style={{ height: '120px', width: '120px' }}>
            <img style={{ height: '120px', width: '120px' }} src={preview} alt="Preview" />
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, username: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Register Number</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, admNo: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Admission Date</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, admdate: e.target.value })}
                type="date"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, email: e.target.value })}
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, age: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Blood Group</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, bloodgroup: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <select
              onChange={(e) => setTeacherData({ ...teacherData, gender: e.target.value })}
              className="form-select"
              defaultValue="Select Gender"
            >
              <option disabled>Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Others">Others</option>
            </select>

            <div className="mb-3 mt-3">
              <label className="form-label">Qualification</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, qual: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                onChange={(e) => setTeacherData({ ...teacherData, phone: e.target.value })}
                type="text"
                className="form-control"
              />
            </div>

            <button onClick={handleAddTeacher} className="btn btn-primary w-100 mt-3">
              ADD TEACHER
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TeacherList;
