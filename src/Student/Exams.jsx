import React, { useState, useEffect } from "react";
import "./Exams.css"; // Add CSS for styling

const Exams = () => {
  // Sample exam data (Replace this with API data if needed)
  const [exams, setExams] = useState([
    { date: "12 Dec 2024", subject: "English", type: "Test" },
    { date: "18 Dec 2024", subject: "English", type: "Test" },
    { date: "11 Dec 2024", subject: "English", type: "Test" },
    { date: "5 Oct 2024", subject: "Physics", type: "Final" },
    { date: "6 Nov 2024", subject: "Geography", type: "Final2" },
  ]);

  return (
    <div className="exams-container">
      <h2>Your Examinations <span className="class-name">[ Class: Six ]</span></h2>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Exam Date</th>
            <th>Subject</th>
            <th>Exam Type</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={index}>
              <td>{exam.date}</td>
              <td>{exam.subject}</td>
              <td>{exam.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exams;
