import React from "react";
import { useNavigate } from "react-router-dom";
import "./Third.css";

const Third = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/Forth");
  };

  return (
    <div className="third-container">
      <div className="video1">
        {/* Add autoPlay and ensure it's styled in portrait format */}
        <video className="background-video" autoPlay loop muted controls>
          <source src="/videos/4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Third;
