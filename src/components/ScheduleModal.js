import React, { useState } from 'react';
import "../Styles/ScheduleModal.css"; // Add your modal styles here
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

function ScheduleModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs().startOf('hour').add(1, 'hour'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Save the selected date, time, name, and email
    console.log("Date:", date.format("YYYY-MM-DD"));
    console.log("Time:", selectedTime.format("HH:mm"));
    console.log("Name:", name);
    console.log("Email:", email);

    // Close the modal
    onClose();
  };

  const handleNext = () => {
    // Proceed to the next step
    setStep(step + 1);
  };

  const handlePrevious = () => {
    // Go back to the previous step
    setStep(step - 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="calendar-container">
            <span className="section-label">Date</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </LocalizationProvider>
          </div>
        );
      case 1:
        return (
          <div className="time-picker-container">
            <span className="section-label">Time</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticTimePicker
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}
              />
            </LocalizationProvider>
          </div>
        );
      case 2:
        return (
          <div className="team-member-container">
            <span className="section-label">Add Member</span>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>×</span>
        <div className="modal-body">
          {renderStepContent()}
        </div>
        <div className="button-container">
          {step > 0 && <button className="prev-button" onClick={handlePrevious}>Previous</button>}
          {step < 2 ?
            <button className="next-button" onClick={handleNext}>Next</button> :
            <button className="save-button" onClick={handleSave}>Save</button>}
        </div>
      </div>
    </div>
  );
}

export default ScheduleModal;
