import React from 'react';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import DashBoard from './components/DashBoard';
import Schedule from './components/Schedule';
import UpdateSection from './components/UpdateSection';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Navbar />
      <DashBoard />
      <Schedule />
      <UpdateSection /> 
    </div>
  )
}

export default App
