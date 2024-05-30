import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/data/Context";
import Filter from "../../Components/filter/Filter";
import ProductCard from "../../Components/productcard/ProductCard";
import Layout from "../../Components/layout/Layout";
import { FaFilter } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PageLoader from "../../Components/Loader/PageLoader";

function MainProductPage() {
  const context = useContext(Context);
  const { mode, AllProducts, Pageloader } = context;

  const [isopen, Setisopen] = useState(false);
  const [product, Setproduct] = useState([]);
  const [title, Settitle] = useState("");

  const navigate = useNavigate();

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    for (const key in AllProducts) {
      console.log(key);
      if (" " + key === category) {
        console.log(AllProducts[key]);
        Setproduct(AllProducts[key]);
        if (category === " cloths") {
          Settitle("Mens Wear & Clothing");
        } else if (category === " mobiles") {
          Settitle("Smart Phones");
        } else if (category === " furniture") {
          Settitle("Home & Furnitures");
        } else if (category === " electronics") {
          Settitle("Smart TV's");
        }
        break;
      }
    }
  }, [category, AllProducts]);

  const FilterShow = () => {
    Setisopen((prev) => !prev);
  };

  return (
    <Layout>
      {Pageloader && <PageLoader />}
      {isopen && <Filter />}
      <div className="flex  justify-between px-5 pt-5">
        <button
          className={`lg:p-3 p-1 -ml-2 md:ml-0  duration-200 rounded-full ${
            mode == "dark"
              ? "md:bg-white md:text-gray-700"
              : "md:bg-gray-600 md:text-white"
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:scale-110 font-bold "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        {product && (
          <h1 className="text-xl md:text-4xl font-medium">
            {title}
            <p class="h-1 w-full mt-3 bg-pink-600 rounded"></p>
          </h1>
        )}
        <button
          className={`p-2 px-3   border-2 rounded-md ${
            mode === "dark"
              ? "border-white text-white"
              : "text-black border-black"
          }`}
          onClick={FilterShow}
        >
          <FaFilter />
        </button>
      </div>
      <ProductCard products={product} />
    </Layout>
  );
}

export default MainProductPage;
