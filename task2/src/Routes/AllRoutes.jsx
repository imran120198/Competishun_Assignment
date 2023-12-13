import React from "react";
import Hotels from "../Pages/Hotels";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hotels />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
