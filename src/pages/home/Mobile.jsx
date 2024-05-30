import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Mobile() {
  const context = useContext(Context);
  const { mode } = context;
  return (
    <div
      class="font-sans text-[#333]  max-md:max-w-md mx-auto pt-10 lg:px-6  "
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <h2 class="text-2xl font-bold lg:text-3xl ml-2  dark:text-white lg:pl-1">
        Mobile & Accessories
        <p class="h-1 w-20 mt-3 bg-pink-600 rounded"></p>
      </h2>
      <div class="grid md:grid-cols-2 items-center md:gap-8 gap-4 ">
        <div class="max-md:order-1 max-md:text-center px-8">
          <p class="hidden md:block text-sm font-bold text-pink-600">
            World's Best Bestselling Mobile & Accessories
          </p>
          <h2 class="md:text-5xl text-xl font-extrabold md:mb-4 md:!leading-[55px]">
            Upgrade To <span className="text-pink-500">5G Phones</span> Starting
            From 11,699\-
          </h2>
          <p class="hidden md:block mt-4 text-base text-gray-500 leading-relaxed">
            Luxurious, handcrafted furniture for ultimate comfort and elegance.
            Stylish, durable furniture blending modern design with timeless
            quality. Premium furniture for unparalleled comfort and
            sophistication."
          </p>
        </div>
        <div class="md:h-[450px] h-52  p-2">
          <img
            src="https://i1.wp.com/techbeasts.com/wp-content/uploads/2018/06/kraken-a8.png?fit=826%2C620&ssl=1"
            class="w-full h-full  shadow-[0_2px_22px_-10px_rgba(93,96,127,0.2)]"
            alt="Dining Experience"
          />
        </div>
      </div>
      <div class=" flex justify-center text-white "></div>
    </div>
  );
}

export default Mobile;
