import React, { useState } from 'react';
import "../Styles/Schedule.css";
import ScheduleModal from './ScheduleModal';


function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="schedule-container">
      <div className="schedule-box">
        <h3>Recent Activity</h3>
        <h6 style={{ color: "white" }}>10:50 AM, MON 23/02/2024</h6>
        <h3>You Posted a New Job</h3>
        <h5 style={{ color: "white" }}>Kindly check the requirement and verify if everything is correct.</h5>
        <div className="button-section">
          <h6 style={{ color: "white" }}>Schedule the call</h6>
          <button className="schedule-button" onClick={handleScheduleClick}>Schedule</button>
        </div>
      </div>
      {isModalOpen && <ScheduleModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Schedule;
