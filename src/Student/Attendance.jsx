import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./Attendance.css"; // Import styles

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { date: "2-11-2024", status: "Absent" },
    { date: "3-11-2024", status: "Present" },
    { date: "4-11-2024", status: "Present" },
    { date: "5-11-2024", status: "Absent" },
  ]);

  const presentCount = attendanceData.filter((entry) => entry.status === "Present").length;
  const absentCount = attendanceData.filter((entry) => entry.status === "Absent").length;

  const chartData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [presentCount, absentCount],
        backgroundColor: ["#4CAF50", "#FFB300"],
        hoverBackgroundColor: ["#45A049", "#FFA000"],
      },
    ],
  };

  return (
    <div className="attendance-container">
      <h2>📌 Your Attendance</h2>

      <div className="attendance-summary">
        <div className="chart-container">
          <h3>Attendance Summary</h3>
          <Pie data={chartData} />
          <div className="chart-legend">
            <span className="legend present">🟢 Present</span>
            <span className="legend absent">🟡 Absent</span>
          </div>
        </div>

        <div className="attendance-records">
          <h3>Attendance Records</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td className={entry.status.toLowerCase()}>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
