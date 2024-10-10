import React from 'react';
import { FaBook, FaBoxOpen, FaIndustry, FaSuitcase } from 'react-icons/fa'; // Icons used for stats
import './StatsSection.css'; // Custom CSS file for styling

const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <FaBook className="stat-icon" />
        <h3>366,126</h3>
        <p>B2B Assets</p>
      </div>
      <div className="stat-item">
        <FaBoxOpen className="stat-icon" />
        <h3>24,534</h3>
        <p>Vendors</p>
      </div>
      <div className="stat-item">
        <FaIndustry className="stat-icon" />
        <h3>400+</h3>
        <p>Industries</p>
      </div>
      <div className="stat-item">
        <FaSuitcase className="stat-icon" />
        <h3>600+</h3>
        <p>Vendor Offerings</p>
      </div>
    </div>
  );
};

export default StatsSection;
