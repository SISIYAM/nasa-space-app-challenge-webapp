import React, { useState, useEffect } from "react";
import "@/components/styles.css";
import { title, subtitle } from "@/components/primitives";
const cardData = [
  {
    id: 1,
    title: "বিনামূল্যে বীজ ও সার বিতরণ",
    description: "পুনরায় চাষাবাদের জন্য বিনামূল্যে বীজ ও সার।",
  },
  {
    id: 2,
    title: "কৃষি প্রশিক্ষণ ও পরামর্শ সেবা",
    description: "আধুনিক প্রযুক্তি ও পদ্ধতি সম্পর্কে প্রশিক্ষণ ও পরামর্শ।",
  },
  {
    id: 3,
    title: "আর্থিক সহায়তা",
    description: "সহজ শর্তে ঋণ",
  },
  {
    id: 4,
    title: "কৃষি যন্ত্রপাতির ভাড়া",
    description: "আধুনিক কৃষি যন্ত্রপাতির ভাড়া সুবিধা",
  },
  {
    id: 5,
    title: "যোগাযোগ",
    description: "নিকটস্থ কৃষি অফিসে বিস্তারিত তথ্য নিন।",
  },
  {
    id: 6,
    title: "বীমা সুবিধা",
    description: "দুর্যোগের বিরুদ্ধে বীমা সুরক্ষা।",
  },
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
    <div className="carousel-container mb-14">
      <h1 className={`${title({ color: "violet", size: "sm" })}`}>
        প্রিয় কৃষক ভাই ও বোনেরা,
      </h1>
      <p>
        বন্যায় ক্ষতিগ্রস্ত কৃষকদের জন্য সরকার নিচের সহায়তাসমূহ প্রদান করছে:
      </p>
      <div
        className="carousel my-7"
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
