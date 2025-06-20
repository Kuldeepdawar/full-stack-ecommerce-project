import React from "react";
import Hero from "../compoenents/Hero";
import LatestCollection from "../compoenents/LatestCollection";
import BestSellere from "../compoenents/BestSellere";
import OurPolicy from "../compoenents/OurPolicy";
import NewsletterBox from "../compoenents/NewsletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellere />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
