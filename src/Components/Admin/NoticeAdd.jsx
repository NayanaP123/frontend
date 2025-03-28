import React, { useState, useEffect } from "react";
import "./NoticePage.css"; // Importing CSS for styling

const NoticeAdd = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("");
  const [notices, setNotices] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load notices from localStorage on component mount
  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(storedNotices);
  }, []);

  // Save notices to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("notices", JSON.stringify(notices));
  }, [notices]);

  const handleAddNotice = () => {
    if (!title || !message || !audience) {
      alert("All fields are required!");
      return;
    }

    const newNotice = { title, message, audience, date: new Date().toLocaleString() };

    if (editIndex !== null) {
      // Editing an existing notice
      const updatedNotices = [...notices];
      updatedNotices[editIndex] = newNotice;
      setNotices(updatedNotices);
      setEditIndex(null);
    } else {
      // Adding a new notice
      setNotices([...notices, newNotice]);
    }

    // Reset form fields
    setTitle("");
    setMessage("");
    setAudience("");
  };

  const handleEdit = (index) => {
    const notice = notices[index];
    setTitle(notice.title);
    setMessage(notice.message);
    setAudience(notice.audience);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedNotices = notices.filter((_, i) => i !== index);
    setNotices(updatedNotices);
  };

  return (
    <div className="notice-container">
      <h1>School Management System</h1>

      <div className="notice-form">
        <h2>{editIndex !== null ? "Edit Notice" : "Create New Notice"}</h2>
        <label>Title *</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />

        <label>Message *</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message"></textarea>

        <label>Select Audience</label>
        <select value={audience} onChange={(e) => setAudience(e.target.value)}>
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="all">All</option>
        </select>

        <button onClick={handleAddNotice}>{editIndex !== null ? "Update Notice" : "Add Notice"}</button>
      </div>

      <h2>Notices</h2>
      <div className="notices-list">
        {/* {notices.map((notice, index) => (
          <div key={index} className="notice-card">
            <h3>
              {notice.title} - <span className={notice.audience}>{notice.audience}</span>
            </h3>
            <p>{notice.message}</p>
            <small>Posted on: {notice.date}</small>
            <div className="notice-actions">
              <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))} */}


          <div className="notice-card">
            <h3>
              Republic day - <span >All</span>
            </h3>
            <p>Holiday</p>
            <small>Posted on: 25/1/15</small>
            <div className="notice-actions">
              <button className="edit-btn" >Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default NoticeAdd;
