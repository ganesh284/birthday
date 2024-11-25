import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import First from "./First"; // Import First component
import Second from "./Second";
import Third from "./Third";
import Forth from "./Forth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} /> {/* Define First route */}
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/forth" element={<Forth />} />
      </Routes>
    </Router>
  );
}

export default App;
