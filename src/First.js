import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./First.css"; // Import the CSS file

const First = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleOpenClick = () => {
    navigate("/second"); // Navigate to '/second' route
  };

  return (
    <div className="first-container">
       <div className="video1">
        {/* Add autoPlay and ensure it's styled in portrait format */}
        <video className="background-video" autoPlay loop muted controls>
          <source src="/videos/11.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="next-button" onClick={handleOpenClick}>
        next
      </button>
    </div>
  );
};

export default First;
