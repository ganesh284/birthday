import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forth.css";

const Forth = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/");
  };

  return (
    <div className="forth-container">
      <div className="video2">
        {/* Add autoPlay and ensure it's styled in portrait format */}
        <video className="background-video" autoPlay loop muted controls>
          <source src="/videos/22.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Forth;
