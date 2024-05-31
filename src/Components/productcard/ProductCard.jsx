import React, { useContext, useEffect } from "react";
import Context from "../../context/data/Context";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <section>
      {products && (
        <div
          class="w-full h-full select-none p-2 lg:px-6 "
          style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
        >
          <h1
            class="sm:text-3xl text-2xl pt-5 font-bold title-font mb-2 lg:pl-3 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            {/* Our Latest Collection */}
            {/* <div class="h-1 w-20 mt-3   bg-pink-600 rounded"></div> */}
          </h1>
          <ul class="grid grid-cols-2 gap-4 md:gap-10 lg:grid-cols-4 m-2 md:px-20 md:pt-4">
            {products.map((product, index) => (
              <li key={index} className="">
                <div
                  key={index}
                  className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div className="flex justify-center cursor-pointer p-4 ">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.imageUrl}
                        class="object-contain select-none w-full h-auto  rounded aspect-[5/6] lg:aspect-[3/4] xl:aspect-[3/4] hover:ease-in-out hover:scale-105 duration-500"
                        alt="photo gallery image 07"
                      />
                    </Link>
                  </div>
                  <div className="p-4 border-t-2">
                    <h2
                      className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {product.brand}
                    </h2>
                    <h1
                      className="title-font min-h-12 text-lg font-medium text-gray-900 mb-1"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {product.title}
                    </h1>
                    {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                    <p
                      className="leading-relaxed mb-3"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      ₹ {product.price}
                    </p>
                    <div className=" flex justify-center">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex justify-center focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ProductCard;
