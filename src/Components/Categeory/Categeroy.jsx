import React, { useContext } from "react";
import Context from "../../context/data/Context";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import ecommerce_cloths from "../../assets/Images/ecommerce_mens_cloths.jpg";
import ecommerce_furniture from "../../assets/Images/ecommerce_furniture.jpg";
import ecommerce_mobiles from "../../assets/Images/ecommercesmart_phones.gif";
import ecommerce_tvs from "../../assets/Images/ecommerce_Tvs.jpg";
import furniture2 from "../../assets/Images/furniture2.png";
import cloths2 from "../../assets/Images/cloths2.png";
import mobile2 from "../../assets/Images/mobile2.png";
import tv2 from "../../assets/Images/tv2.png";

function Categeroy() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div
      class="bg-white dark:bg-gray-800  h-full lg:p-3"
      style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "white" }}
    >
      <div class="mx-auto max-w-screen-2xl px-2  md:px-6">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-6">
          <div class="flex items-center gap-12">
            <h2
              class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Categeory
              <p class="h-1 w-20 mt-3 bg-pink-600 rounded"></p>
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 md:px-5">
          <Link
            to={"/category/ cloths"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={cloths2}
              loading="lazy"
              alt="Photo by Minh Pham"
              class="lg:hidden absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
            />
            <img
              src={ecommerce_cloths}
              loading="lazy"
              alt="Photo by Minh Pham"
              class="hidden lg:block absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-1 mb-1  p-1 px-2 inline-block text-xs text-white md:text-lg">
              Mens Wear
            </span>
          </Link>

          <Link
            to={"/category/ mobiles"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={mobile2}
              loading="lazy"
              alt="Photo by Magicle"
              class="lg:hidden absolute inset-0 h-full  w-full object-cover object-left md:object-top  transition duration-200 group-hover:scale-110"
            />
            <img
              src={ecommerce_mobiles}
              loading="lazy"
              alt="Photo by Magicle"
              class="hidden lg:block absolute inset-0 h-full  w-full object-cover object-left md:object-top  transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-1 mb-1 p-1 px-2  inline-block text-xs text-white md:text-lg">
              Smart Phones
            </span>
          </Link>

          <Link
            to={"/category/ furniture"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={furniture2}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="md:hidden absolute inset-0 h-full w-full object-cover object-right md:object-center transition duration-200 group-hover:scale-110"
            />
            <img
              src={ecommerce_furniture}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="hidden md:block absolute inset-0 h-full w-full object-cover object-right md:object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-1 mb-1 bg- p-1 px-2 rounded-md inline-block text-xs text-white md:text-lg">
              Home & Furnitures
            </span>
          </Link>

          <Link
            to={"/category/ electronics"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={tv2}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-1 mb-1  p-1 px-2 inline-block text-xs text-white md:text-lg">
              Smart TV's
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categeroy;
