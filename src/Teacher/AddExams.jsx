import React, { useState } from "react";
import "./AddExams.css"; // Import styles

const AddExams = () => {
  const [selectedClass, setSelectedClass] = useState("Seven");
  const [exams, setExams] = useState({
    Five: [{ subject: "Math", examType: "Final" }],
    Six: [{ subject: "English", examType: "Test" }],
    Seven: [{ subject: "Geography", examType: "Final" }, { subject: "Mathematics", examType: "Final" }],
  });

  const [newExam, setNewExam] = useState({ subject: "", examType: "", className: "Seven" });

  // Function to add a new exam
  const handleAddExam = () => {
    if (newExam.subject && newExam.examType) {
      setExams((prevExams) => ({
        ...prevExams,
        [newExam.className]: [...prevExams[newExam.className], { subject: newExam.subject, examType: newExam.examType }],
      }));
      setNewExam({ subject: "", examType: "", className: "Seven" });
    }
  };

  return (
    <div className="exams-container">
      <h2>📚 Examinations</h2>

      {/* Class Selection Dropdown */}
      <div className="class-selection">
        <label>Change Class:</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          {Object.keys(exams).map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>

      {/* Exam List */}
      <div className="exams-list">
        <h3>Examinations List</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Exam Type</th>
            </tr>
          </thead>
          <tbody>
            {exams[selectedClass].map((exam, index) => (
              <tr key={index}>
                <td>{exam.subject}</td>
                <td>{exam.examType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Exam Form */}
      <div className="add-exam">
        <h3>Add New Exam</h3>
        <input
          type="text"
          placeholder="Subject"
          value={newExam.subject}
          onChange={(e) => setNewExam({ ...newExam, subject: e.target.value })}
        />
        <select value={newExam.examType} onChange={(e) => setNewExam({ ...newExam, examType: e.target.value })}>
          <option value="">Select Exam Type</option>
          <option value="Test">Test</option>
          <option value="Final">Final</option>
        </select>
        <select value={newExam.className} onChange={(e) => setNewExam({ ...newExam, className: e.target.value })}>
          {Object.keys(exams).map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
        <button onClick={handleAddExam}>➕ Add Exam</button>
      </div>
    </div>
  );
};

export default AddExams;
