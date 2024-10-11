// src/components/TopicsSection.js
import React from 'react';
import './TopicSection.css';

const TopicsSection = () => {
  return (
    <div className="topics-container">
      <div className="topics-text">
        <h1>TOPICS THAT MATTER TO <span>YOU</span></h1>
        <p>Save, share and organize solutions into your own custom collections for easy on-demand access</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="topics-grid">
        <div className="topic-item">Artificial Intelligence</div>
        <div className="topic-item">Augmented & Virtual Reality</div>
        <div className="topic-item">Blockchain</div>
        <div className="topic-item">Big Data</div>
        <div className="topic-item">Cloud Platform as a Service</div>
        <div className="topic-item">Cloud Security</div>
        <div className="topic-item">Customer Experience</div>
        <div className="topic-item">DevOps</div>
        <div className="topic-item">Healthcare</div>
        <div className="topic-item">IoT</div>
        <div className="topic-item">Marketing Automation</div>
        <div className="topic-item">Server Virtualization</div>
        <div className="topic-item">Robotic Process Automation</div>
        <div className="topic-item">Talent Management</div>
      </div>
    </div>
  );
};

export default TopicsSection;
