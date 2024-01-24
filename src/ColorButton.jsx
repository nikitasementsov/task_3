import React, { useState, useEffect } from 'react';
const ColorButton = ({ color, onButtonClick }) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(true);
      onButtonClick(color);
  
      // Затримка для анімації
      setTimeout(() => {
        setIsClicked(false);
      }, 300);
    };
  
    return (
      <button
        className={`color-button ${isClicked ? 'clicked' : ''}`}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></button>
    );
  };
  
  export default ColorButton;