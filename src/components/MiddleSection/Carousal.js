import React, { useState, useEffect } from 'react';
import CarouselCard from '../common/CardComponent/Card'; 
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Carousal.css';
import { useNavigate } from 'react-router-dom';


const CarouselSection = () => {
    const navigate = useNavigate(); 

  const cardData = [
    {
      title: "Proactive Security for your AWS Environments with Trellix",
      type: "EBOOK",
      description: "Proactive Security for your AWS environments.",
      author: "Trellix",
      imageUrl: "../../Asset/dummy.png",
    },
    {
      title: "The State of Software Supply Chain Security",
      type: "CASE STUDY",
      description: "A detailed analysis on software supply chain security.",
      author: "Reversing Labs",
      imageUrl: "../../Asset/dummy.png",
    },
    {
      title: "Navigating the New Threat Landscape",
      type: "GUIDE",
      description: "An essential guide to dealing with new threats.",
      author: "Darktrace",
      imageUrl: "../../Asset/dummy.png",
    },
    {
      title: "Using AI in Medical Imaging to Improve Accuracy",
      type: "CASE STUDY",
      description: "How AI is revolutionizing medical imaging.",
      author: "Intel",
      imageUrl: "../../Asset/dummy.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update cards based on window width
  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setCardsToShow(1); // Mobile: 1 card
    } else if (width <= 900) {
      setCardsToShow(2); // Tablet: 2 cards
    } else {
      setCardsToShow(3); // Desktop: 3 cards
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Next and Previous Handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Ensure we do not exceed the limit
      const nextIndex = prevIndex + 1;
      return nextIndex + cardsToShow > cardData.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Ensure we do not go below 0
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? cardData.length - cardsToShow : nextIndex;
    });
  };

   const handleCaptionClick = (name) => {
    const formattedName = name.replace(/\s+/g, '-');
    const nameLowercase=formattedName.toLowerCase();
    navigate(`/categories/${nameLowercase}`); 
  };

  return (
    <section>
      <h2 style={{ textAlign: 'center', fontSize: '35px', margin: '10px' }}>
        B2B SOLUTIONS ACROSS ALL INDUSTRIES, VENDORS AND PRODUCT CATEGORIES
      </h2>
      <div className="carousel-wrapper">
        {/* Previous Button */}
        <span className="arrow-btn arrow-left" onClick={handlePrev}>
          <IoIosArrowBack />
        </span>

        {/* Flex container for cards */}
        <div className="carousel-container">
          <div
            className="card-container"
            style={{
              transform: `translateX(-${(currentIndex * (100 / cardsToShow))}%)`,
              transition: 'transform 0.5s ease', // Ensure smooth transition
            }}
          >
            {cardData.map((card, index) => (
              <div className="card-wrapper" key={index} onClick={()=>handleCaptionClick(card.title)}>
                <CarouselCard
                  title={card.title}
                  type={card.type}
                  description={card.description}
                  author={card.author}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <span className="arrow-btn arrow-right" onClick={handleNext}>
          <IoIosArrowForward />
        </span>
      </div>
    </section>
  );
};

export default CarouselSection;
