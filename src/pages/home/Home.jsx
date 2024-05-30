import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../../Components/herosection/HeroSection";
import ProductCard from "../../Components/productcard/ProductCard";
import Categeroy from "../../Components/Categeory/Categeroy";
import Track from "../../Components/track/Track";
import Testimonal from "../../Components/testimonal/Testimonal";
import DiscountSection from "../../Components/Discountsection/DiscountSection";
import Layout from "../../Components/layout/Layout";
import FurnitureSection from "./FurnitureSection";
import Mobile from "./Mobile";
import PageLoader from "../../Components/Loader/PageLoader";
import Context from "../../context/data/Context";
import Clothing from "./Cloths";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

function Home() {
  const context = useContext(Context);
  const { Pageloader, AllProducts } = context;

  const clothsproduct =
    AllProducts.cloths && Array.isArray(AllProducts.cloths)
      ? AllProducts.cloths.slice(0, 8)
      : [];
  const mobileproducts =
    AllProducts.mobiles && Array.isArray(AllProducts.mobiles)
      ? AllProducts.mobiles.slice(0, 8)
      : [];
  const furnitureproducts =
    AllProducts.furniture && Array.isArray(AllProducts.furniture)
      ? AllProducts.furniture.slice(0, 8)
      : [];

  return (
    <Layout>
      {Pageloader && <PageLoader />}
      <ScrollToTop />
      <HeroSection />
      <DiscountSection />
      <Categeroy />
      <Clothing />
      <ProductCard products={clothsproduct} />
      <Mobile />
      <ProductCard products={mobileproducts} />
      <FurnitureSection />
      <ProductCard products={furnitureproducts} />
      <Track />
      <Testimonal />
    </Layout>
  );
}

export default Home;
