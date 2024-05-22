import React, { useContext } from "react";
import Context from "../../../context/data/Context";

function UpdateProduct() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div>
      <div
        className=" flex justify-center py-10 h-fit"
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <div
          className={`px-5 md:px-10 py-5 rounded-xl ${
            mode == "dark" ? "bg-gray-500" : "bg-gray-100"
          }`}
        >
          <div className="">
            <h1 className="text-center text-black text-xl mb-4 border-b-4 border-pink-500 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="7"
              name="title"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product title"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
              UPDATE Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
