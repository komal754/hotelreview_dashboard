import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/concern">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Concern
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
