import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
    <div className="Navbar-left">
      <div className="SearchBar">
        <SearchIcon className="SearchIcon" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div className="Navbar-right">
      <NotificationsIcon className="Icon" />
      <MessageIcon className="Icon" />
      <AccountCircleIcon className="Icon" />
    </div>
  </div>
  );
}

export default Navbar;
