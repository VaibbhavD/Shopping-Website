import React, { useContext } from "react";
import Context from "../../context/data/Context";

function FurnitureSection() {
  const context = useContext(Context);
  const { mode } = context;
  return (
    <div
      class="font-sans text-[#333]  max-md:max-w-md mx-auto pt-10 lg:px-6 "
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <h2 class="text-2xl font-bold lg:text-3xl ml-2  dark:text-white  ">
        Home & Furnitures
        <p class="h-1 w-20 mt-3 bg-pink-600 rounded"></p>
      </h2>
      <div class="grid md:grid-cols-2 items-center md:gap-8 gap-6 ">
        <div class="max-md:order-1 max-md:text-center px-10">
          <p class="hidden md:block text-sm font-bold text-pink-600">
            World's Best Bestselling Furniture
          </p>
          <h2 class="md:text-5xl text-xl font-extrabold mb-4 md:!leading-[55px]">
            <span className="text-pink-500">Up to 60% off</span> | Best deals on
            furniture, home & more
          </h2>
          <p class="hidden md:block  mt-4 text-base text-gray-500 leading-relaxed">
            Luxurious, handcrafted furniture for ultimate comfort and elegance.
            Stylish, durable furniture blending modern design with timeless
            quality. Premium furniture for unparalleled comfort and
            sophistication."
          </p>
          <button
            className="md:p-2 md:mt-5 mt-2 md:px-5 p-1 font-bold rounded-md text-white hover:text-black bg-pink-500
 hover:bg-stone-100 border-2 "
          >
            Sell Furnitures
          </button>
        </div>
        <div class="md:h-[450px] h-52  p-2">
          <img
            src="https://lh5.googleusercontent.com/A9-jKMv4zzUUvl39aHQZa_4aBIQ46Ia6VdhyrKhm1Agkvi-BsasFv0Ia4FuDR00YfRcPwu1UvVKmeaXfTTGoFZ1CYqbBwC_Ifs_tWizUS-v11G49L-Ay_3seSkeWKQY3fn5Rcg_G24y14aKyPQ"
            class="w-full h-full  shadow-[0_2px_22px_-10px_rgba(93,96,127,0.2)]"
            alt="Dining Experience"
          />
        </div>
      </div>
      <div class=" flex justify-center text-white ">
        {/* <img
          src="https://readymadeui.com/google-logo.svg"
          class="w-28 mx-auto"
          alt="google-logo"
        />
        <img
          src="https://readymadeui.com/facebook-logo.svg"
          class="w-28 mx-auto"
          alt="facebook-logo"
        />
        <img
          src="https://readymadeui.com/linkedin-logo.svg"
          class="w-28 mx-auto"
          alt="linkedin-logo"
        />
        <img
          src="https://readymadeui.com/pinterest-logo.svg"
          class="w-28 mx-auto"
          alt="pinterest-logo"
        /> */}
      </div>
    </div>
  );
}

export default FurnitureSection;
