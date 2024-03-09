import React, { useState } from 'react';
import "../Styles/UpdateSection.css"; // Add your styles here
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

function UpdateSection() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedTime, setEditedTime] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleCreateEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: "Create New Event",
      time: "Add Time",
      date: "Add Date",
    };
    setEvents([...events, newEvent]);
  };

  const handleCancelEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleEditEvent = (id) => {
    const eventToEdit = events.find(event => event.id === id);
    setEditEvent(eventToEdit);
    setEditedTitle(eventToEdit.title);
    setEditedTime(eventToEdit.time);
    setEditedDate(eventToEdit.date);
  };

  const handleSaveEdit = () => {
    const updatedEvents = events.map(event => {
      if (event.id === editEvent.id) {
        return {
          ...event,
          title: editedTitle,
          time: editedTime,
          date: editedDate
        };
      }
      return event;
    });
    setEvents(updatedEvents);
    setEditEvent(null);
    setEditedTitle("");
    setEditedTime("");
    setEditedDate("");
  };

  return (
    <div className="upcoming-schedule-container">
      <h3>Upcoming Event</h3>
      <div className="date-dropdown">
        {/* Drop down for date */}
        <select className="date-select">
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          {/* Add more date options as needed */}
        </select>
      </div>
      {/* Headings with white containers */}
      <div className="section-container">
        <h6>Priority</h6>
        {events.map(event => (
          <div key={event.id} className="white-container">
            {editEvent && editEvent.id === event.id ? (
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editedTime}
                  onChange={(e) => setEditedTime(e.target.value)}
                />
                <input
                  type="text"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                />
              </>
            ) : (
              <>
                <p>{event.title}</p>
                <h6>{event.time}, {event.date}</h6>
              </>
            )}
            <div className="button-container">
              {editEvent && editEvent.id === event.id ? (
                <button className="save-button" onClick={handleSaveEdit}>
                  <SaveIcon />
                </button>
              ) : (
                <button className='save-button' onClick={() => handleEditEvent(event.id)}>
                  <EditIcon />
                </button>
              )}
              <button className='save-button' onClick={() => handleCancelEvent(event.id)}>
                <CloseIcon />
              </button>
            </div>
          </div>
        ))}
      </div>  
        <button className="create-button" onClick={handleCreateEvent}>
          Create an Event
        </button>
    </div>
  );
}

export default UpdateSection;
