import React, { useState } from "react";
import "./Timetable.css"; // Import styles

const StudentTimetable = () => {
  const [selectedClass, setSelectedClass] = useState("Five");

  const timetableData = {
    Five: [
      { time: "09:00 - 10:00 AM", mon: "Math - Olivia Carter", tue: "Science - Liam Johnson", wed: "", thu: "English - Sophia Lee", fri: "Computer - John Doe" },
      { time: "10:00 - 11:00 AM", mon: "History - Mark Adams", tue: "", wed: "Science - Liam Johnson", thu: "Math - Olivia Carter", fri: "" },
      { time: "11:00 - 12:00 PM", mon: "Physics - David Brown", tue: "Chemistry - Emma Clark", wed: "", thu: "Biology - John Doe", fri: "Social Studies - Rachel Green" },
    ],
    Six: [
      { time: "09:00 - 10:00 AM", mon: "Science - Liam Johnson", tue: "Math - Olivia Carter", wed: "", thu: "English - Sophia Lee", fri: "Physics - David Brown" },
      { time: "10:00 - 11:00 AM", mon: "Chemistry - Emma Clark", tue: "Biology - John Doe", wed: "Computer - John Doe", thu: "", fri: "History - Mark Adams" },
      { time: "11:00 - 12:00 PM", mon: "", tue: "Physics - David Brown", wed: "Math - Olivia Carter", thu: "Social Studies - Rachel Green", fri: "English - Sophia Lee" },
    ],
  };

  return (
    <div className="timetable-container">
      <h2>📅 Student Timetable</h2>

      <div className="class-selection">
        <label>View Timetable for:</label>
        <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="Five">Class Five</option>
          <option value="Six">Class Six</option>
        </select>
      </div>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {timetableData[selectedClass].map((row, index) => (
              <tr key={index}>
                <td>{row.time}</td>
                <td>{row.mon || "-"}</td>
                <td>{row.tue || "-"}</td>
                <td>{row.wed || "-"}</td>
                <td>{row.thu || "-"}</td>
                <td>{row.fri || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTimetable;
