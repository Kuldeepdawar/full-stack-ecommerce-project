import React from "react";
import Hero from "../compoenents/Hero";
import LatestCollection from "../compoenents/LatestCollection";
import BestSellere from "../compoenents/BestSellere";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellere />
    </div>
  );
};

export default Home;
