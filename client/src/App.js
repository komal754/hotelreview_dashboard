//app.js
import React from 'react';
import Navbar from './components/Navbar';
import RoutesComponent from './routes';
import Sidebar from './components/Sidebar';
import './App.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <RoutesComponent />
        </div>
      </div>
    </div>
  );
};

export default App;