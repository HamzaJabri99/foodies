import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import RecipeDetails from "./RecipeDetails";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.path}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:plat" element={<Searched />} />
        <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
