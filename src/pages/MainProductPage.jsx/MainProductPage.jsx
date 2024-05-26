import React, { useContext, useState } from "react";
import Context from "../../context/data/Context";
import Filter from "../../Components/filter/Filter";
import ProductCard from "../../Components/productcard/ProductCard";
import Layout from "../../Components/layout/Layout";
import { FaFilter } from "react-icons/fa";

function MainProductPage() {
  const context = useContext(Context);
  const { mode } = context;

  const [isopen, Setisopen] = useState(false);

  const FilterShow = () => {
    Setisopen((prev) => !prev);
  };

  return (
    <Layout>
      {isopen && <Filter />}
      <button
        className={`p-2 px-3 absolute mr-5 mt-5 right-0  border-2 rounded-md ${
          mode === "dark"
            ? "border-white text-white"
            : "text-black border-black"
        }`}
        onClick={FilterShow}
      >
        <FaFilter />
      </button>
      <ProductCard />
    </Layout>
  );
}

export default MainProductPage;
