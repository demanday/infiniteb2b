import React from "react";
import Header from "../Header/Heder";  // Ensure you have a header component
import Footer from "../Footer/Footer";  // Ensure you have a footer component
import SolutionComp from "./SolutionComp";  // This will be the card for each solution set
import "./SolutionSets.css";  // The CSS for this component

const SolutionSets = () => {
  const solutionSets = [
    {
      image: 'https://via.placeholder.com/100', // Placeholder image
      title: 'ABM (Account Based Marketing)',
      subtitle: '113 solutions',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Artificial Intelligence (AI)',
      subtitle: '419 solutions',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Big Data',
      subtitle: '560 solutions',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Cloud Platform as a Service (PaaS)',
      subtitle: '108 solutions',
    },
    // Add more solutions as needed
  ];

  return (
    <>
      <Header />
      <div className="solution-sets-container">
        {/* <div className="filter-bar">
          <span>Filter: </span>
          <div className="alphabet-filter">
            {'#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
              <button key={letter} className="alphabet-button">
                {letter}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </div> */}

        <div className="solution-set-list">
          {solutionSets.map((set, index) => (
            <SolutionComp
              key={index}
              image={set.image}
              title={set.title}
              subtitle={set.subtitle}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SolutionSets;
