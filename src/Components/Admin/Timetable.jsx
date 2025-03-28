import React, { useState, useEffect } from "react";
import "./Timetable.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addScheduleAPI, deleteScheduleAPI, getScheduleAPI, updateScheduleAPI } from "../../../Services/allApi";

const Timetable = () => {
  const [schedules, setSchedules] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Five");
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({ time: "", subject: "", teacher: "", day: "" });

  // ✅ Fetch schedules on component mount
  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await getScheduleAPI();
      if (response.status === 200) {
        setSchedules(response.data); 
      } else {
        console.error("Error fetching schedules");
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Add or Update Schedule
  const handleSubmit = async () => {
    try {
      if (editData) {
        // Update existing schedule
        await updateScheduleAPI(editData._id, formData);
      } else {
        // Add new schedule
        await addScheduleAPI(formData);
      }
      setShowModal(false);
      fetchSchedules(); // Refresh data
    } catch (error) {
      console.error("Error saving schedule", error);
    }
  };

  // ✅ Open Edit Modal
  const handleEdit = (schedule) => {
    setEditData(schedule);
    setFormData(schedule);
    setShowModal(true);
  };

  // ✅ Delete Schedule
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      try {
        await deleteScheduleAPI(id);
        fetchSchedules(); // Refresh data
      } catch (error) {
        console.error("Error deleting schedule", error);
      }
    }
  };

  return (
    <>
      <div className="timetable-container">
        <h2>Weekly Schedule</h2>

        <div className="class-selection">
          <label>Change Class:</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            <option value="Five">Five</option>
            <option value="Six">Six</option>
          </select>
          <button onClick={() => { setShowModal(true); setEditData(null); setFormData({ time: "", subject: "", teacher: "", day: "" }); }}>
            Add New Period
          </button>
        </div>

        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Day</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule) => (
                <tr key={schedule._id}>
                  <td>{schedule.time}</td>
                  <td>{schedule.day}</td>
                  <td>{schedule.subject}</td>
                  <td>{schedule.teacher}</td>
                  <td>
                    <button onClick={() => handleEdit(schedule)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(schedule._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{editData ? "Edit Schedule" : "Add Schedule"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Time:</label>
          <input type="text" name="time" value={formData.time} onChange={handleChange} />

          <label>Day:</label>
          <select name="day" value={formData.day} onChange={handleChange}>
            <option value="">Select Day</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>

          <label>Subject:</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />

          <label>Teacher:</label>
          <input type="text" name="teacher" value={formData.teacher} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>{editData ? "Update" : "Add"}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Timetable;
