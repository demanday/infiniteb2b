import React from "react";
import "./MiddleSection.css";
import CarouselSection from "./Carousal";
import StatsSection from "./StatsSection/StatsSection";
import SolutionSet from "./SolutionSet/Solutionset";
import TopicsSection from "./TopicSection/TopicSection";
import VendorSection from "./VendorSection/VendorSection";
import hederFile from "../../Asset/hederFile.mp4"

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
    <> <section className="middle-section">
        {/* Background video */}
        <div className="background-video">
          <video autoPlay muted loop>
          <source src={hederFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content that sits above the video */}
        <div className="content">
          <h1>INFINITE B2B</h1>
          <p>
            Your Gateway to Endless B2B Resources.
          </p>
          <div className="buttons">
            <button className="btn-green">Get Started</button>
            <button className="btn-transparent">Learn More</button>
          </div>
        </div>

        {/* Background overlay for better readability */}
        <div className="background-overlay"></div>
    </section>
      <CarouselSection />
      <StatsSection />
      <SolutionSet/>
<TopicsSection />
     <VendorSection/>
      </>
  );
};

export default MiddleSection;



