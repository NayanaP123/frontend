import React, { useState } from "react";
import "./TeacherNotice.css"; // Import the styles

const TeacherNotice = () => {
  // Sample notices
  const [notices, setNotices] = useState([
    { id: 1, title: "Exam Cancelled", message: "History Examination cancelled for Class 8", date: "16/03/2024" },
    { id: 2, title: "Exam Rescheduled", message: "Maths Exam for Class 10 is rescheduled to 20/03/2024", date: "14/03/2024" },
  ]);

  return (
    <div className="notice-container">
      <h2>📢 Notice Board</h2>
      {notices.length > 0 ? (
        notices.map((notice) => (
          <div key={notice.id} className="notice-card">
            <h3>{notice.title}</h3>
            <p>{notice.message}</p>
            <span className="date">Posted On: {notice.date}</span>
          </div>
        ))
      ) : (
        <p className="no-notices">No notices available</p>
      )}
    </div>
  );
};

export default TeacherNotice;
