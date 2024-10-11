import React, { useState,useEffect } from 'react';
import { Grid, Button, Box } from '@mui/material';
import CarouselCard from '../common/CardComponent/Card';

const CarouselSection = () => {
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - cardsToShow : prevIndex - cardsToShow
    );
  };

  return (
    <section>
      <h2 style={{textAlign: 'center', fontSize:'35px', margin: '10px'}}>B2B SOLUTIONS ACROSS ALL INDUSTRIES, VENDORS AND PRODUCT CATEGORIES</h2>
      <Box display="flex" alignItems="center" justifyContent="center">
        {/* Previous Button */}
        <Button onClick={handlePrev} variant="contained" color="primary">
          Prev
        </Button>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Carousel logic */}
          {cardData.slice(currentIndex, currentIndex + 3).map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CarouselCard
                title={card.title}
                type={card.type}
                description={card.description}
                author={card.author}
                imageUrl={card.imageUrl}
              />
            </Grid>
          ))}
        </Grid>

        {/* Next Button */}
        <Button onClick={handleNext} variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </section>
  );
};

export default CarouselSection;



