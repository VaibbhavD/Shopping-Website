import React, { useContext } from "react";
import HeroSection from "../../Components/herosection/HeroSection";
import ProductCard from "../../Components/productcard/ProductCard";
import Categeroy from "../../Components/Categeory/Categeroy";
import Track from "../../Components/track/Track";
import Testimonal from "../../Components/testimonal/Testimonal";
import DiscountSection from "../../Components/Discountsection/DiscountSection";
import { useDispatch, useSelector } from "react-redux";
import { Cartactions } from "../../redux/CartSlice";

function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const addcart = () => {
    dispatch(Cartactions.AddToCart("TShirt"));
  };

  const deletecart = () => {
    dispatch(Cartactions.DeleteFromCart("TShirt"));
  };

  return (
    <>
      <div>
        <button type="button" onClick={addcart} className="p-4 bg-green-100">
          AddProduct
        </button>
        <button type="button" onClick={deletecart} className="p-4 bg-red-100">
          Delete Product
        </button>
      </div>
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
