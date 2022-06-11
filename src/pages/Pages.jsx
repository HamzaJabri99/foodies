import React from "react";
import Home from "./Home";
import { Route, Routes, NavLink } from "react-router-dom";
import Cuisine from "./Cuisine";
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </div>
  );
};

export default Pages;
