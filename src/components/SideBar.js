import React from 'react';
import { SideBarData } from './SideBarData';
import "../Styles/SideBar.css";
import { IconContext } from 'react-icons'; // Import IconContext for styling icons

function SideBar() {
  return (
    <IconContext.Provider value={{ color: "red" }}> {/* Provide styling for icons */}
      <div className='SideBar'>
        <div className="sidebar-logo">
          <h1 className="sidebar-logo-title">WeHR</h1>
        </div>
        <div className="sidebar-menu">
          <h2 className="sidebar-menu-heading">MAIN MENU</h2>
          <ul>
            {SideBarData.slice(0, 5).map((item, index) => (
              <li key={index}>
                <a href={item.path}>
                  <div className="sidebar-icon">{item.icon}</div> {/* Render icon */}
                  <span className="sidebar-title">{item.title}</span> {/* Render title */}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="sidebar-menu-heading">OTHER</h2>
          <ul>
            {SideBarData.slice(5).map((item, index) => (
              <li key={index}>
                <a href={item.path}>
                  <div className="sidebar-icon-small">{item.icon}</div> {/* Render icon */}
                  <span className="sidebar-title-small">{item.title}</span> {/* Render title */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default SideBar;
