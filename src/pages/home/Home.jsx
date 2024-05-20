import React, { useContext } from "react";
import Context from "../../context/data/Context";
import HeroSection from "../../Components/herosection/HeroSection";
import Filter from "../../Components/filter/Filter";
import ProductCard from "../../Components/productcard/ProductCard";
import Categeroy from "../../Components/Categeory/Categeroy";
import Track from "../../Components/track/Track";
import Testimonal from "../../Components/testimonal/Testimonal";
import DiscountSection from "../../Components/Discountsection/DiscountSection";

function Home() {
  const context = useContext(Context);
  console.log(context);
  return (
    <>
      <HeroSection />
      <DiscountSection />
      <Categeroy />
      <ProductCard />
      <Track />
      <Testimonal />
    </>
  );
}

export default Home;
