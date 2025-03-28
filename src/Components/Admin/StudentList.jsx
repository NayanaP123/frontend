import { useEffect, useState } from "react";
import { addStudentAPI, deleteStudentAPI, getStudentAPI, updateStudentAPI } from "../../../Services/allApi";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StudentList() {
  const [studentData, setStudentData] = useState({
    username: "",
    admNo: "",
    email: "",
    age: "",
    bloodGroup: "",
    gender: "",
    guardian: "",
    phone: "",
    address: "",
    admissionDate: "",
  });

  const [allStudents, setAllStudents] = useState([]);
  const [editStudentData, setEditStudentData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch all students when component mounts
  useEffect(() => {
    getAllStudents();
  }, []);

  // Get all students
  const getAllStudents = async () => {
    try {
      const result = await getStudentAPI();
      if (result.status === 200) {
        setAllStudents(result.data);
      }
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  // Add a new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (Object.values(studentData).some((value) => value === "")) {
      toast.warning("Please fill all fields");
      return;
    }

    try {
      const result = await addStudentAPI(studentData);
      if (result.status === 200) {
        setStudentData({
          username: "",
          admNo: "",
          email: "",
          age: "",
          bloodGroup: "",
          gender: "",
          guardian: "",
          phone: "",
          address: "",
          admissionDate: "",
        });

        toast.success("Student added successfully");
        setAllStudents([...allStudents, result.data]); 
      } else {
        toast.error(result.response?.data || "Something went wrong");
      }
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  // Delete student
  const handleDeleteStudent = async (id) => {
    try {
      const result = await deleteStudentAPI(id);
      if (result.status === 200) {
        toast.success("Student deleted successfully");
        setAllStudents(allStudents.filter((student) => student._id !== id));
      } else {
        toast.error(result.response?.data || "Error deleting student");
      }
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  // Edit student - open modal and set data
  const handleEditClick = (student) => {
    const { __v, ...filteredData } = student; // Remove `__v` but keep `_id`
    
    setEditStudentData({
      ...filteredData,
      admissionDate: student.admissionDate
        ? new Date(student.admissionDate).toISOString().split("T")[0]
        : "",
    });

    handleShow();
  };

  // Update student details
  const handleUpdateStudent = async () => {
    if (!editStudentData || !editStudentData._id) {
      toast.warning("No student selected for update");
      return;
    }

    try {
      const result = await updateStudentAPI(editStudentData._id, editStudentData);
      if (result.status === 200) {
        toast.success("Student updated successfully");
        
        setAllStudents(allStudents.map((student) => 
          student._id === editStudentData._id ? result.data : student
        ));

        setEditStudentData(null);
        handleClose();
      } else {
        toast.error(result.response?.data || "Error updating student");
      }
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };
 
  return (
    <>
      {/* ADD STUDENT FORM */}
      <section>
        <div className="container" style={{ backgroundColor: "white", borderRadius: "20px" }}>
          <h3 style={{ textAlign: "center" }}>ADD NEW STUDENT</h3>
          <br />
          <div className="d-flex justify-content-center">
            <form>
              {Object.keys(studentData).map((key) => (
                <div className="mb-3" key={key}>
                  <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <input
                    type={key === "admissionDate" ? "date" : "text"}
                    className="form-control"
                    value={studentData[key]}
                    onChange={(e) => setStudentData({ ...studentData, [key]: e.target.value })}
                  />
                </div>
              ))}
              <div className="d-grid gap-2">
                <button onClick={handleAddStudent} className="btn btn-primary">ADD</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* STUDENT LIST */}
      <section style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="row">
            {allStudents.length > 0 ? (
              allStudents.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{item.username}</h5>
                      <p>Email: {item.email}</p>
                      <p>Age: {item.age}</p>
                      <p>Gender: {item.gender}</p>
                      <p>Guardian: {item.guardian}</p>
                      <p>Phone No.: {item.phone}</p>
                      <p>Address: {item.address}</p>
                      <p>Blood Group: {item.bloodGroup}</p>
                      <p>Adm. Date: {item.admissionDate}</p>
                      <div className="row">
                        <div className="col-md-6">
                          <Button variant="primary" onClick={() => handleEditClick(item)}>Edit</Button>
                        </div>
                        <div className="col-md-6">
                          <button className="btn btn-danger" onClick={() => handleDeleteStudent(item._id)}>
                            <i className="fa-solid fa-trash" style={{ color: "white" }}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No students found</p>
            )}
          </div>
        </div>
      </section>

      {/* EDIT STUDENT MODAL */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editStudentData && (
            <div className="edit-form">
              {Object.keys(editStudentData).map((key) =>
                key !== "_id" ? (
                  <div key={key} className="mb-3">
                    <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <input
                      type={key === "admissionDate" ? "date" : "text"}
                      className="form-control"
                      value={editStudentData[key]}
                      onChange={(e) => setEditStudentData({ ...editStudentData, [key]: e.target.value })}
                    />
                  </div>
                ) : null
              )}
              <button className="btn btn-success" onClick={handleUpdateStudent}>Save Changes</button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StudentList;
