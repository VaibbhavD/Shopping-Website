import React, { useContext } from "react";
import Context from "../../context/data/Context";
import ecommerce_mens_cloths from "../../assets/Images/ecommerce_mens_cloths.jpg";

function Clothing() {
  const context = useContext(Context);
  const { mode } = context;
  return (
    <div
      class="font-sans text-[#333]  max-md:max-w-md mx-auto pt-3 md:pt-8 lg:px-6  "
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <h2 class="text-2xl font-bold lg:text-4xl ml-2  dark:text-white lg:pl-1">
        Mens Fashinon
        <p class="h-1 w-20 mt-3 bg-pink-600 rounded"></p>
      </h2>
      <div class="grid md:grid-cols-2 items-center md:gap-5 ">
        <div class="max-md:order-1 max-md:text-center px-8">
          <p class="hidden md:block text-sm font-bold text-pink-600">
            We are the largest fashion outlet in India{" "}
          </p>
          <h2 class="md:text-5xl text-xl font-extrabold md:mb-4 md:!leading-[55px]">
            Mid Season Sale Live : Avail Flat{" "}
            <span className="text-pink-500">50% Off.</span>{" "}
          </h2>
          <p class="hidden md:block mt-4 text-base text-gray-500 leading-relaxed">
            Luxurious, handcrafted furniture for ultimate comfort and elegance.
            Stylish, durable furniture blending modern design with timeless
            quality. Premium furniture for unparalleled comfort and
            sophistication."
          </p>
        </div>
        <div class="md:h-full w-full h-60 p-2">
          <img
            src="https://assets.ajio.com/medias/sys_master/images/images/h0a/h5e/49021103996958/15042022-M-bottomwear-mens-topbanner-4070.jpg"
            class="w-full h-full  shadow-[0_2px_22px_-10px_rgba(93,96,127,0.2)]"
            alt="Dining Experience"
          />
        </div>
      </div>
      <div class=" flex justify-center text-white "></div>
    </div>
  );
}

export default Clothing;
