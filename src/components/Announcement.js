import React, { useState } from 'react';
import "../Styles/Announcement.css";

function Announcement() {
  const initialAnnouncements = [
    "IT Hiring Drive for Fresher",
    "Important Client Meeting",
    "Recession important Meeting",
    "Hire Akram for full stack role as SDE 1",
  ];

  const [announcements, setAnnouncements] = useState(initialAnnouncements.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setAnnouncements(initialAnnouncements);
    } else {
      setAnnouncements(initialAnnouncements.slice(0, 3));
    }
  };

  return (
    <div className="announcement-container">
      <div className="announcement-column">
        <h4>Announcement</h4>
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement-item">
            <h6>{announcement}</h6>
          </div>
        ))}
        {!showAll && (
          <div className="other-announcement">
            <h6>Other Announcements</h6>
          </div>
        )}
        <button className="show-all-button" onClick={handleShowAll}>
          {showAll ? "Show Less Announcements" : "Show All Announcements"}
        </button>
      </div>
    </div>
  );
}

export default Announcement;
