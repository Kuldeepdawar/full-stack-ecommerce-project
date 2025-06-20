import React from "react";
import Hero from "../compoenents/Hero";
import LatestCollection from "../compoenents/LatestCollection";
import BestSellere from "../compoenents/BestSellere";
import OurPolicy from "../compoenents/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellere />
      <OurPolicy />
    </div>
  );
};

export default Home;
