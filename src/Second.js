import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Second.css"; // Import the CSS file for second page

const Second = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleYesClick = () => {
    navigate("/Third"); // Navigate to '/Third' route (modify as needed)
  };

  const moveNoButton = () => {
    const noButton = document.getElementById('noButton');
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calculate the maximum x and y positions within the visible viewport
    const maxX = window.innerWidth - buttonWidth - 10; // Subtract button width and some margin
    const maxY = window.innerHeight - buttonHeight - 10; // Subtract button height and some margin

    // Generate random positions within the allowed range
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply new position to No button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  };

  return (
    <div className="second-container">
      <div className="button-container">
        <button className="option-button yes-button" onClick={handleYesClick}>
          Yes
        </button>
        <button
          id="noButton"
          className="option-button no-button"
          onMouseOver={moveNoButton} // Trigger move on hover
          onTouchStart={moveNoButton} // Trigger move on touch
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Second;
