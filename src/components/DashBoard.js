import React from "react";
import "../Styles/DashBoard.css";
import Announcement from "./Announcement"; // Import the Announcement component

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>DashBoard</h1>
      <div className="top-section">
        <div className="box beige">
          <h3>Available Positions</h3>
          <p>10</p>
          <p1 style={{ color: "red" }}>New hiring</p1>
        </div>
        <div className="box blue">
          <h3>No. of Openings</h3>
          <p>20</p>
          <p1 style={{ color: "darkblue" }}>Interview Candidate</p1>
        </div>
        <div className="box light-purple">
          <h3>New Joining</h3>
          <p>5</p>
          <p1 style={{ color: "purple" }}>New Employees</p1>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-box white">
          <h3>Total Employees</h3>
          <p>216</p>
          <img className="graph-image" src="graph.png" alt="Graph" />
          <p1 style={{ color: "black" }}>
            120 Men
            <br />
            96 Women
          </p1>
        </div>
        <div className="bottom-box white">
          <h3>Talent Request</h3>
          <p>6</p>
          <img className="graph-image" src="graph.png" alt="Graph" />
          <p1 style={{ color: "black" }}>
            6 Men
            <br />
            10 Women
          </p1>
        </div>
      </div>
      <Announcement />
    </div>
  );
};

export default Dashboard;
