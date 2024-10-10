import React from "react";
import "./MiddleSection.css";
import CarouselSection from "./Carousal";
import StatsSection from "./StatsSection/StatsSection";
import SolutionCard from "./SolutionSet/Solutionset";







const solutions = [
  { image: 'marketing_automation.jpg', title: 'Marketing Automation' },
  { image: 'big_data.jpg', title: 'Big Data' },
  { image: 'devops.jpg', title: 'DevOps' },
  { image: 'healthcare.jpg', title: 'Healthcare Industry' },
  { image: 'cybersecurity.jpg', title: 'Cybersecurity Applications' },
  { image: 'cloud_platform.jpg', title: 'Cloud Platform as a Service (PaaS)' },
];


const MiddleSection = () => {
  return (
    <><section className="middle-section">
          <div className="content">
              <h1>INFINITE B2B</h1>
              <p>
                 Your Gateway to
                 Endless B2B Resources.
              </p>
              <div className="buttons">
                  <button className="btn-green">Get Started</button>
                  <button className="btn-transparent">Learn More</button>
              </div>
          </div>
          <div className="background-overlay"></div>
      </section><CarouselSection />
      <StatsSection/>

      {/* <div className="solution-section">
      <div className="solution-grid">
        {solutions.map((solution, index) => (
          <div className={`solution-card card-${index}`} key={index}>
            <img src={solution.image} alt={solution.title} className="solution-image" />
            <div className="solution-title">{solution.title}</div>
          </div>
        ))}
      </div>

      <div className="solution-content">
        <h2 className="section-heading">CURATED SOLUTION SETS</h2>
        <p className="section-description">
          Save time with our uniquely organized collections of tried and tested solutions to industry challenges.
        </p>
        <button className="explore-btn">EXPLORE SOLUTION SETS</button>
      </div>
    </div> */}
      </>
  );
};

export default MiddleSection;
