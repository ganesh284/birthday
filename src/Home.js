import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleOpenClick = () => {
    navigate("/first"); // Navigate to '/first' route
  };

  return (
    <div className="home-container">
      
      <button className="open-button" onClick={handleOpenClick}>
        Open
      </button>
    </div>
  );
};

export default Home;
