import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import StoreSection from "./storeSection/StoreSection";
import SearchRecipes from "./searchRecipes/SearchRecipes";
import Recipes from "./recipes/Recipes";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StoreSection />} />
        <Route path="/recipes/:recpieId" element={<SearchRecipes />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Index;
