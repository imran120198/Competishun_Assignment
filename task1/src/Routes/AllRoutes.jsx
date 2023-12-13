import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "../Pages/Movies";
import Watchlist from "../Pages/Watchlist";
import Favorites from "../Pages/Favorites";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/favourites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
