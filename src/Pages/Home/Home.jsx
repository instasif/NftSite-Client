import React from "react";
import Hero from "../../Componants/Hero/Hero";
import TodaysPic from "../../Componants/TodaysPic/TodaysPic";
import LiveActions from "../../Componants/LiveActions/LiveActions";
import CreateAndSellYourNFTs from "../../Componants/Create and Sell Your NFT/CreateAndSellYourNFTs";

const Home = () => {
  return (
    <div>
      <Hero />
      <LiveActions />
      <TodaysPic />
      <CreateAndSellYourNFTs />
    </div>
  );
};

export default Home;
