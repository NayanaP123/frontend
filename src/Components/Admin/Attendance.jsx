import React, { useState, useEffect } from "react";
import axios from "axios";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Five");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAttendance();
  }, [selectedClass]);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/attendance?class=${selectedClass}`);
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">School Management System</h2>

      {/* Student Class Dropdown */}
      <div className="card p-4 mt-3">
        <h5>Student Class</h5>
        <select
          className="form-control"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="Five">Five</option>
          <option value="Six">Six</option>
          <option value="Seven">Seven</option>
        </select>

        {/* Search Name */}
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Search Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Attendance Details */}
      <div className="card p-4 mt-3">
        <h5>Attendance</h5>
        <p>Attendee Teacher: <b>Olivia Carter</b></p>
        <button className="btn btn-primary">CHANGE ATTENDEE</button>

        {/* Student List Table */}
        <table className="table table-dark table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Guardian Phone</th>
              <th>Class</th>
              <th>Percentage</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* {filteredStudents.map((student) => ( */}
              <tr >
                <td>Harsh</td>
                <td>Male</td>
                <td>9999999999</td>
                <td>10</td>
                <td>97%</td>
                <td>
                  <button className="btn btn-primary btn-sm">View</button>
                </td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
