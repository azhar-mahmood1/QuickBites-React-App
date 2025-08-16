import './Header.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const paragraphs = [
    "Quick Bite is a fast food restaurant dedicated to serving delicious, high-quality meals at affordable prices. Focused on speed, convenience, and great taste, Quick Bite offers a menu packed with customer. ",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        setAnimate(true);
      }, 500); // Wait for the animation to finish
    }, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId);
  }, [paragraphs]);

  return (
    <header className="header">
      <div className="header-contents">
        <h2>Order Your Food Here</h2>
        <p className={`paragraph ${animate ? 'animate' : ''}`}>{paragraphs[activeIndex]}</p>
        <div className="dot-container">
          {paragraphs.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setActiveIndex(index);
                  setAnimate(true);
                }, 500); // Wait for the animation to finish
              }}
            ></div>
          ))}
        </div>
        <button>View Menu</button>
      </div>
    </header>
  );
};

export default Header;