import React from "react";
import "./Timetable.css"; // Import CSS file

const Period = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const times = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM"
  ];

  return (
    <div className="timetable-container">
      <h2 className="title">School Management System</h2>
      <div className="table-controls">
        <button className="btn">Today</button>
        <button className="btn">Back</button>
        <button className="btn">Next</button>
        <span className="date-range">October 27 - November 02</span>
      </div>

      <table className="timetable">
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, index) => (
            <tr key={index}>
              <td className="time-slot">{time}</td>
              {days.map((_, idx) => (
                <td key={idx} className="empty-slot"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Period;
