import React from "react";
import "./NewsLetter.css";
import NewsLetterImg from "../../Asset/newsletter-hero.png";
import Header from "../Header/Heder";
import Footer from "../Footer/Footer";
import Card from "./Card"

const NewsletterHeader = () => {
  return (
    <><Header />
      <div className="newsletter-header-container">
      <div className="newsletter-header-content">
        <div className="text-content">
          <h1 className="newsletter-heading">
            READ BY OVER <span>13 MILLION</span> BUSINESS LEADERS
          </h1>
          <p className="newsletter-content">
            Our weekly newsletters help busy professionals stay current with the latest
            software and solutions to help address critical business challenges.
          </p>
        </div>
        <div className="image-content">
          <img
            src={NewsLetterImg}
            alt="Newsletter on Phone"
            className="newsletter-image" />
        </div>
      </div>
      </div>
       <div>
      {/* Header */}
      <header className="header-title">
        <h1>Professional Newsletters</h1>
        <p>Select newsletters based on your professional interests</p>
      </header>

      {/* Card Grid */}
      <section className="card-container">
        <Card 
          title="The IT Professional"
          description="Tailored for IT professionals, offering insights on IT solutions, cybersecurity, data analytics, and emerging technologies."
        />
        <Card 
          title="The Finance Professional"
          description="Enables finance professionals to stay ahead with tips on finance strategies, forecasting, budgeting, and compliance."
        />
        <Card 
          title="The Sales Professional"
          description="Provides resources for sales professionals with B2B content covering strategies, case studies, and best practices."
        />
        <Card 
          title="The HR Professional"
          description="Crafted to empower HR professionals, offering insights on talent management, employee relations, and compliance."
        />
      </section>
    </div>
      <Footer/>
    
    </>
  );
};

export default NewsletterHeader;
