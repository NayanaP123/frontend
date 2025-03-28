import React, { useState } from "react";
import "./Timetable.css"; // Import styles

const TeacherTimetable = () => {
  const [teacherName, setTeacherName] = useState("John Doe"); // Example default teacher

  const timetableData = {
    Five: [
      { time: "09:00 - 10:00 AM", subject: "Math", teacher: "Olivia Carter", day: "Monday" },
      { time: "10:00 - 11:00 AM", subject: "History", teacher: "Mark Adams", day: "Monday" },
      { time: "11:00 - 12:00 PM", subject: "Physics", teacher: "David Brown", day: "Monday" },
      { time: "09:00 - 10:00 AM", subject: "Science", teacher: "Liam Johnson", day: "Tuesday" },
      { time: "10:00 - 11:00 AM", subject: "Math", teacher: "Olivia Carter", day: "Thursday" },
      { time: "11:00 - 12:00 PM", subject: "Biology", teacher: "John Doe", day: "Thursday" },
    ],
    Six: [
      { time: "09:00 - 10:00 AM", subject: "Science", teacher: "Liam Johnson", day: "Monday" },
      { time: "10:00 - 11:00 AM", subject: "Chemistry", teacher: "Emma Clark", day: "Tuesday" },
      { time: "11:00 - 12:00 PM", subject: "Physics", teacher: "David Brown", day: "Tuesday" },
      { time: "09:00 - 10:00 AM", subject: "Math", teacher: "Olivia Carter", day: "Tuesday" },
      { time: "10:00 - 11:00 AM", subject: "Computer", teacher: "John Doe", day: "Wednesday" },
      { time: "11:00 - 12:00 PM", subject: "English", teacher: "Sophia Lee", day: "Friday" },
    ],
  };

  // Filter timetable to show only subjects taught by the logged-in teacher
  const teacherSchedule = Object.keys(timetableData).flatMap((className) =>
    timetableData[className].filter((entry) => entry.teacher === teacherName)
  );

  return (
    <div className="timetable-container">
      <h2>📅 Teacher's Schedule</h2>

      <div className="teacher-selection">
        <label>Select Your Name:</label>
        <select value={teacherName} onChange={(e) => setTeacherName(e.target.value)}>
          <option value="John Doe">John Doe</option>
          <option value="Olivia Carter">Olivia Carter</option>
          <option value="Liam Johnson">Liam Johnson</option>
          <option value="Emma Clark">Emma Clark</option>
        </select>
      </div>

      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Subject</th>
              <th>Day</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {teacherSchedule.length > 0 ? (
              teacherSchedule.map((row, index) => (
                <tr key={index}>
                  <td>{row.time}</td>
                  <td>{row.subject}</td>
                  <td>{row.day}</td>
                  <td>{Object.keys(timetableData).find((cls) => timetableData[cls].includes(row))}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No schedule found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherTimetable;
