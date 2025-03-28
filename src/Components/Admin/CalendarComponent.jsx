import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CalendarComponent.css"; // Import custom CSS

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    { title: "Movie Night", date: "2025-03-14", color: "#ff0077" },
    { title: "Color Run", date: "2025-03-15", color: "#4CAF50" },
    { title: "Hostage Situation", date: "2025-03-18", color: "#FFC107" },
    { title: "Yard Sale", date: "2025-03-30", color: "#673AB7" },
  ]);

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Events Calendar</h2>
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          editable={true}
          selectable={true}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
