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
import { useNavigate } from 'react-router-dom';

const VendorSection = () => {
  const navigate = useNavigate();
  
  const handleCaptionClick = (name) => {
    const formattedName = name.replace(/\s+/g, '-');
    const nameLowercase=formattedName.toLowerCase();
    navigate(`/vendorSolutionCenter/${nameLowercase}`); 
  };
  return (
    <div className="vendor-section">
      {/* Vendor logos */}
      <div className="vendor-logos">
        <div className="vendor-grid">
          <img src={ServiceNowLogo} alt="ServiceNow" onClick={()=>handleCaptionClick('Servicenow')}/>
          <img src={OracleLogo} alt="Oracle" onClick={()=>handleCaptionClick('oracle')}/>
          <img src={GELogo} alt="GE Lighting" onClick={()=>handleCaptionClick('gelighting')}/>
          <img src={SAPLogo} alt="SAP" onClick={()=>handleCaptionClick('sap')}/>
          <img src={TripActionsLogo} alt="TripActions" onClick={()=>handleCaptionClick('triaction')}/>
          <img src={GoogleLogo} alt="Google" onClick={()=>handleCaptionClick('google')}/>
          <img src={VerizonLogo} alt="Verizon" onClick={()=>handleCaptionClick('verizon')}/>
          <img src={ABBLogo} alt="ABB" onClick={()=>handleCaptionClick('abb')}/>
          <img src={MasergyLogo} alt="Masergy" onClick={()=>handleCaptionClick('masergy')}/>
          <img src={BASFLogo} alt="BASF" onClick={()=>handleCaptionClick('basf')}/>
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
