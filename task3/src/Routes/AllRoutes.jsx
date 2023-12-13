import React from "react";
import { Routes, Route } from "react-router-dom";
import Recipes from "../Pages/Recipes";
import Calories from "../Pages/Calories";
import Diet from "../Pages/Diet";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
