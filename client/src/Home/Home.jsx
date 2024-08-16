import React from "react";
import Banner from "./Banner";
import BestSellersBooks from "./BestSellersBooks";
import FavoriteBook from "./FavoriteBook";
import PromoBanner from "./PromoBanner";
import OthersBooks from "./OthersBooks";
import ReviewSection from "./ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellersBooks />
      <FavoriteBook />
      <PromoBanner />
      <OthersBooks />
      <ReviewSection />
    </div>
  );
};

export default Home;
