// src/components/VendorSection.js
import React from 'react';
import './VendorSection.css';

// Import vendor logos
import ServiceNowLogo from '../../../Asset/servicenow.webp';
import OracleLogo from '../../../Asset/oracle.webp';
import GELogo from '../../../Asset/GElighting.webp';
import SAPLogo from '../../../Asset/sapImg.webp';
import TripActionsLogo from '../../../Asset/triactionImg.webp';
import GoogleLogo from '../../../Asset/google.png';
import VerizonLogo from '../../../Asset/version.png';
import ABBLogo from '../../../Asset/ABBImg.webp';
import BASFLogo from '../../../Asset/vsImg.png';
import MasergyLogo from '../../../Asset/masterImg.png';

const VendorSection = () => {
  return (
    <div className="vendor-section">
      {/* Vendor logos */}
      <div className="vendor-logos">
        <div className="vendor-grid">
          <img src={ServiceNowLogo} alt="ServiceNow" />
          <img src={OracleLogo} alt="Oracle" />
          <img src={GELogo} alt="GE Lighting" />
          <img src={SAPLogo} alt="SAP" />
          <img src={TripActionsLogo} alt="TripActions" />
          <img src={GoogleLogo} alt="Google" />
          <img src={VerizonLogo} alt="Verizon" />
          <img src={ABBLogo} alt="ABB" />
          <img src={MasergyLogo} alt="Masergy" />
          <img src={BASFLogo} alt="BASF" />
        </div>
      </div>

      {/* Trusted Vendors text */}
      <div className="vendor-text">
        <h1>TRUSTED <span>VENDORS</span></h1>
        <p>
          Learn from reputable B2B brands about the products and solutions that can help your business grow.
        </p>
        <button className="explore-vendors-btn">Explore Vendors</button>
      </div>
    </div>
  );
};

export default VendorSection;
