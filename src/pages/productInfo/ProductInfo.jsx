import React, { useContext, useEffect, useState } from "react";
import ProductReview1 from "./Rating";
import Highlight1 from "./Highlights";
import Context from "../../context/data/Context";
import Layout from "../../Components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import PageLoader from "../../Components/Loader/PageLoader";
import Loader from "../../Components/Loader/Loader";
import RelatedProducts from "./RelatedProducts";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

function ProductInfo() {
  const context = useContext(Context);
  const { mode, AllProducts, AddtoCart, loader } = context;
  const [product, Setproduct] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    for (let category in AllProducts) {
      const products = AllProducts[category];
      for (let product of products) {
        if (product.id === id) {
          Setproduct(product);
          break;
        }
      }
    }
  }, [AllProducts, id]);

  ScrollToTop();

  return (
    <Layout>
      <section
        className="text-gray-600 body-font overflow-hidden md:p-0 px-1 "
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        {!product ? (
          <PageLoader />
        ) : (
          <div className="container pt-5 md:pl-20">
            {/* Back button */}
            <button
              className={`p-3  duration-200 rounded-full ${
                mode == "dark"
                  ? "bg-white text-gray-700"
                  : "bg-gray-600 text-white"
              }`}
              onClick={() => {
                navigate(-1);
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
            <div
              className={`lg:w-4/5 mx-auto flex flex-wrap gap-2 p-1 lg:ml-60 ${
                mode === "dark" ? "bg-gray-500 text-stone-100" : ""
              }`}
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
              }}
            >
              <img
                alt="ecommerce"
                className={`lg:w-2/5 w-full lg:h-auto h-80 object-contain object-center rounded `}
                src={product.imageUrl}
              />
              <div
                className={`lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 pl-2 ${
                  mode === "dark" ? "bg-gray-500 text-stone-100" : ""
                }`}
              >
                <h2 className="text-sm title-font  tracking-widest">
                  {product.brand}
                </h2>
                <h1
                  className={`text-gray-900 text-3xl title-font font-medium mb-1 ${
                    mode === "dark" ? "bg-gray-500 text-stone-100" : ""
                  }`}
                >
                  {product.title}
                </h1>
                <div className=" mb-4">
                  <span className="flex gap-2 py-2 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5 text-blue-800"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5 text-blue-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round blue"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5 text-pink-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>

                  <div className="flex pt-2">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      <p className="text-sm">Price</p>
                      Rs.{product.price}
                    </span>
                  </div>
                </div>
                <div className="pb-5 flex ">
                  <button
                    className="  text-white bg-green-600 border-0 p-2 w-40 flex justify-center px-6 focus:outline-none hover:bg-green-500 rounded"
                    onClick={() => AddtoCart(product)}
                  >
                    {loader ? <Loader /> : "Add To Cart"}
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5 text-red-600"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
                <p className="font-bold">Description</p>
                <p class="h-1 w-20  bg-pink-600 rounded"></p>
                <p className="leading-relaxed border-b-2 mb-5 ">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <ProductReview1 product={product} />
      <Highlight1 />
      {product && <RelatedProducts product={product} />}
    </Layout>
  );
}

export default ProductInfo;
