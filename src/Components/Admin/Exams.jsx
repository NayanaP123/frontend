import * as React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addExamAPI,
  deleteExamAPI,
  getExamAPI,
  updateExamAPI,
} from "../../../Services/allApi";

function Exams() {
  
  const [show, setShow] = useState(false);
  const [exams, setExams] = useState([]);

  // ✅ Define all state variables correctly
  const [examDate, setExamDate] = useState(""); 
  const [subject, setSubject] = useState(""); 
  const [examType, setExamType] = useState(""); 
  const [classNumber, setClassNumber] = useState(""); 
  const [editId, setEditId] = useState(null);

  // ✅ Fetch exams from API
  const fetchExams = async () => {
    try {
      const response = await getExamAPI();
      setExams(response.data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  // ✅ Handle add or update
  const handleAddOrUpdateExam = async () => {
    // ❌ Fix: Prevent undefined variables
    if (!examDate || !subject || !examType || !classNumber) {
      alert("All fields are required!");
      return;
    }

    const examData = { examDate, subject, examType, classNumber };

    try {
      if (editId) {
        await updateExamAPI(editId, examData);
      } else {
        await addExamAPI(examData);
      }
      fetchExams();
      handleClose();
    } catch (error) {
      console.error("Error saving exam:", error);
    }
  };

  // ✅ Handle delete
  const handleDelete = async (id) => {
    try {
      await deleteExamAPI(id);
      fetchExams();
    } catch (error) {
      console.error("Error deleting exam:", error);
    }
  };

  // ✅ Handle edit (populate modal fields)
  const handleEdit = (exam) => {
    setExamDate(exam.examDate);
    setSubject(exam.subject);
    setExamType(exam.examType);
    setClassNumber(exam.classNumber);
    setEditId(exam._id);
    setShow(true);
  };

  // ✅ Reset form and close modal
  const handleClose = () => {
    setShow(false);
    setExamDate("");
    setSubject("");
    setExamType("");
    setClassNumber("");
    setEditId(null);
  };

  return (
    <>
      <section>
        <div className="container" style={{ backgroundColor: "white", borderRadius: "20px" }}>
          <h3 style={{ textAlign: "center" }}>ADD NEW EXAM</h3>
          <div className="d-flex justify-content-center">
            <form>
              <div className="mb-3">
                <label className="form-label">Exam Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Exam Type</label>
                <select
                  className="form-control"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                >
                  <option value="">Select Exam Type</option>
                  <option value="Pen and Paper">Pen and Paper</option>
                  <option value="Online">Online</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Class Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={classNumber}
                  onChange={(e) => setClassNumber(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleAddOrUpdateExam}>
                {editId ? "Update Exam" : "Add Exam"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="row">
            {exams.map((exam, index) => (
              <div key={index} className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{exam.subject}</h5>
                    <p><strong>Exam Date:</strong> {exam.examDate}</p>
                    <p><strong>Exam Type:</strong> {exam.examType}</p>
                    <p><strong>Class Number:</strong> {exam.classNumber}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <button className="btn btn-success" onClick={() => handleEdit(exam)}>
                          <i className="fa-solid fa-pen-to-square" style={{ color: "white" }}></i>
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-danger" onClick={() => handleDelete(exam._id)}>
                          <i className="fa-solid fa-trash" style={{ color: "white" }}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Edit Exam" : "Add Exam"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Exam Date</label>
          <input type="date" className="form-control" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
          <label>Subject</label>
          <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <label>Exam Type</label>
          <select className="form-control" value={examType} onChange={(e) => setExamType(e.target.value)}>
            <option value="">Select Exam Type</option>
            <option value="Pen and Paper">Pen and Paper</option>
            <option value="Online">Online</option>
          </select>
          <label>Class Number</label>
          <input type="text" className="form-control" value={classNumber} onChange={(e) => setClassNumber(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleAddOrUpdateExam}>{editId ? "Update" : "Add"}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Exams;
