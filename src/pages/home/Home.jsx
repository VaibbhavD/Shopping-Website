import React, { useContext } from "react";
import HeroSection from "../../Components/herosection/HeroSection";
import ProductCard from "../../Components/productcard/ProductCard";
import Categeroy from "../../Components/Categeory/Categeroy";
import Track from "../../Components/track/Track";
import Testimonal from "../../Components/testimonal/Testimonal";
import DiscountSection from "../../Components/Discountsection/DiscountSection";
import Layout from "../../Components/layout/Layout";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <DiscountSection />
      <Categeroy />
      <ProductCard />
      <Track />
      <Testimonal />
    </Layout>
  );
}

export default Home;
