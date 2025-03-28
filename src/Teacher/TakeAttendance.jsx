import React, { useState, useEffect } from "react";
import "./TakeAttendance.css"; // Import the styles

const TakeAttendance = () => {
    // Sample class and student data (replace with API data)
    const classes = ["Five", "Seven", "Eight"];
    
    const studentsData = {
        Five: [
            { id: 1, name: "Ethan Thompson" },
            { id: 2, name: "Keli Desuja" },
        ],
        Seven: [
            { id: 3, name: "John Doe" },
            { id: 4, name: "Jane Smith" },
        ],
        Eight: [
            { id: 5, name: "Alice Johnson" },
            { id: 6, name: "Bob Brown" },
        ]
    };

    const [selectedClass, setSelectedClass] = useState("");
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    // Handle class selection
    useEffect(() => {
        if (selectedClass) {
            setStudents(studentsData[selectedClass] || []);
            setAttendance({});
        }
    }, [selectedClass]);

    // Handle attendance marking
    const handleAttendanceChange = (studentId, status) => {
        setAttendance((prev) => ({
            ...prev,
            [studentId]: status,
        }));
    };

    // Submit attendance
    const handleSubmit = () => {
        console.log("Attendance Submitted:", attendance);
        alert("Attendance Submitted Successfully!");
    };

    return (
        <div className="attendance-container">
            <h2 className="attendance-header">Mark Attendance for All Students</h2>
            <p>You are assigned to {classes.length} classes. Select a class and take attendance.</p>

            <select
                className="class-selector"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
            >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                    <option key={cls} value={cls}>
                        {cls}
                    </option>
                ))}
            </select>

            {selectedClass && (
                <div className="student-list">
                    {students.map((student) => (
                        <div key={student.id} className="student-row">
                            <span>{student.name}</span>
                            <select
                                className="attendance-dropdown"
                                onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                            >
                                <option value="Present">Present</option>
                                <option value="Absent">Absent</option>
                                <option value="Late">Late</option>
                            </select>
                        </div>
                    ))}
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit Attendance
                    </button>
                </div>
            )}
        </div>
    );
};

export default TakeAttendance;
