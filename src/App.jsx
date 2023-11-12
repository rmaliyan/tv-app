import { useState } from "react";
import "./App.css";
import { TrendingCarousel } from "./components/trending-carousel";
import { Menu } from "./components/menu"
import { Featured } from "./components/featured"

import data from "../data.json";
const featured = data.Featured;

function App() {
  return (
    <div className="flex h-screen bg-black">
      <Menu />
      <div className="ml-40 flex flex-col justify-between">
        <Featured movie={featured} />
        <TrendingCarousel />
      </div>
    </div>
  );
}

export default App;
