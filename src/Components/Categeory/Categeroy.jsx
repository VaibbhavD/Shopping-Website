import React, { useContext } from "react";
import Context from "../../context/data/Context";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function Categeroy() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div
      class="bg-white dark:bg-gray-800  h-full pt-3 lg:p-3"
      style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
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
              src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Apparel-Events/Topbrands/Ingress-men._SS800_QL85_.jpg"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </Link>
          <Link
            to={"/category/ mobiles"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Clp/tiles/10May/D119951047_WLD_5Grevamp_March2024_Header_Mob_gif_1242x450.gif"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </Link>

          <Link
            to={"/category/ furniture"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://m.media-amazon.com/images/G/31/IMG20/Furniture/2023/Header/3000X700_bestseller._SX3000_QL85_.jpg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </Link>

          <Link
            to={"/category/ electronics"}
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/06/Flipkart_page_desktopV2.jpg"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categeroy;
