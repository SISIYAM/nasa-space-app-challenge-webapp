import React, { useState, useEffect } from "react";
import "@/components/styles.css";

const cardData = [
  { id: 1, title: "Card 1", description: "This is the first card" },
  { id: 2, title: "Card 2", description: "This is the second card" },
  { id: 3, title: "Card 3", description: "This is the third card" },
  { id: 4, title: "Card 4", description: "This is the fourth card" },
  { id: 5, title: "Card 5", description: "This is the fifth card" },
  { id: 6, title: "Card 6", description: "This is the sixth card" },
];

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto sliding every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {cardData.map((card) => (
          <div
            className="carousel-card border border-gray-400 shadow-lg"
            key={card.id}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
