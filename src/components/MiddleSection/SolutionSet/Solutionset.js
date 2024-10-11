// src/components/SolutionSet.js
import React from 'react';
import './SolutionSet.css'; 
import Marketing from "../../../Asset/marketingImg.png";
import HealthImg from "../../../Asset/healthImg.png";
import CyberSecurityImg from "../../../Asset/cybersecurityImg.png";
import BigdataImg from "../../../Asset/bigdataImg.png";
import CloudPlatformImg from "../../../Asset/cloudplatformImg.png";
import DevopsImg from "../../../Asset/devopsImg.png"


const SolutionSet = () => {
  return (
    <div className="solution-container">
     
      <div className="left-side">
  <div className="left-side-images">
    <div className="grid-item img-item1">
      <img src={Marketing} alt="Marketing Automation" />
      <div className="caption">Marketing Automation</div>
    </div>
    <div className="image-item-combine">
      <div className="grid-item img-item2">
        <img src={HealthImg} alt="Big Data" />
        <div className="caption">Big Data</div>
      </div>
      <div className="grid-item img-item2">
        <img src={CyberSecurityImg} alt="DevOps" />
        <div className="caption">DevOps</div>
      </div>
    </div>
  </div>


 <div className="right-side-images">
  <div className="grid-item img-item2">
    <img src={BigdataImg} alt="Healthcare Industry" />
    <div className="caption">Healthcare Industry</div>
  </div>
  <div className="grid-item img-item2">
    <img src={DevopsImg} alt="Cybersecurity Applications" />
    <div className="caption">Cybersecurity Applications</div>
  </div>
  <div className="grid-item img-item1 full-width-image">
    <img src={CloudPlatformImg} alt="Cloud PaaS" />
    <div className="caption">Cloud Platform as a Service (PaaS)</div>
  </div>
</div>
</div>

      <div className="right-side">
        <h1>CURATED SOLUTION SETS</h1>
        <p>
          Save time with our uniquely organized collections of tried and tested solutions to industry challenges.
        </p>
        <button className="explore-button">Explore Solution Sets</button>
      </div>
    </div>
  );
};

export default SolutionSet;
