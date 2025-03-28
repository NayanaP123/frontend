import React, { useState } from "react";
import "./Notice.css"; // Import styles

const Notice = () => {
  const [notices] = useState([
    {
      title: "Monday is holiday",
      description: "Monday will be a holiday for students of all classes.",
      audience: "Students",
      date: "11/02/2025",
    },
    {
      title: "Exam Schedule Released",
      description: "Final exam schedule has been updated on the portal.",
      audience: "All Students",
      date: "15/02/2025",
    },
  ]);

  return (
    <div className="notice-container">
      <h2>📌 Notice Board</h2>

      <div className="notice-list">
        {notices.map((notice, index) => (
          <div key={index} className="notice-card">
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
            <span className="notice-info">
              Audience: {notice.audience} | Date: {notice.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
