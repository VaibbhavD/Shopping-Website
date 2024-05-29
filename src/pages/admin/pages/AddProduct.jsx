import React, { useContext } from "react";
import Context from "../../../context/data/Context";
import { toast } from "react-toastify";
import Loader from "../../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Timestamp } from "firebase/firestore";

function AddProduct(props) {
  const context = useContext(Context);
  const { mode, Setproduct, AddProduct, product, loader } = context;
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    Setproduct((prev) => ({
      ...prev,
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    }));
    await AddProduct();
    props.close();
  };

  return (
    <div className="">
      <div
        className=" flex justify-center mt-16 md:mt-8"
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <div
          className={`px-5 md:px-10 py-5 max-w-screen rounded-xl ${
            mode == "dark" ? "bg-gray-500" : "bg-gray-100"
          }`}
        >
          <div className="w-80">
            <h1 className="text-center text-black text-xl mb-4 border-b-4 border-pink-500 font-bold">
              Add Product
            </h1>
          </div>
          {/* title */}
          <div>
            <input
              type="text"
              name="title"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product title"
              value={product.title}
              onChange={(e) =>
                Setproduct({ ...product, title: e.target.value })
              }
            />
          </div>
          {/* Brand */}
          <div>
            <input
              type="text"
              name="title"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product Brand"
              value={product.brand}
              onChange={(e) =>
                Setproduct({ ...product, brand: e.target.value })
              }
            />
          </div>
          {/* Price */}
          <div>
            <input
              type="number"
              name="price"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product price"
              value={product.price}
              onChange={(e) =>
                Setproduct({ ...product, price: e.target.value })
              }
            />
          </div>
          {/* imageUrl */}
          <div>
            <input
              type="text"
              name="imageurl"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product imageUrl"
              value={product.imageUrl}
              onChange={(e) =>
                Setproduct({ ...product, imageUrl: e.target.value })
              }
            />
          </div>
          {/* Product category */}
          <div className="m-auto ">
            <select
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 "
              }`}
              defaultValue=""
              onChange={(e) =>
                Setproduct({ ...product, category: e.target.value })
              }
            >
              <option
                className={`${
                  mode === "dark"
                    ? "text-sm font-medium bg-gray-700 cursor-pointer text-white"
                    : "text-sm font-medium text-black cursor-pointer bg-stone-100"
                }`}
                value=""
                disabled
              >
                Categeory
              </option>
              <option
                className={`${
                  mode === "dark"
                    ? "text-sm font-medium  cursor-pointer bg-gray-700"
                    : "text-sm font-medium text-gray-700 cursor-pointer bg-stone-100"
                }`}
                onClick={() => console.log("hi")}
                value="cloths"
              >
                Clothing
              </option>
              <option
                className={`${
                  mode === "dark"
                    ? "text-sm font-medium   cursor-pointer bg-gray-700"
                    : "text-sm font-medium cursor-pointer text-gray-700 bg-stone-100"
                }`}
                value="mobiles"
              >
                Mobiles
              </option>
              <option
                className={`${
                  mode === "dark"
                    ? "text-sm font-medium  cursor-pointer  bg-gray-700"
                    : "text-sm font-medium cursor-pointer text-gray-700 bg-stone-100"
                }`}
                value="furniture"
              >
                Furniture
              </option>
              <option
                className={`${
                  mode === "dark"
                    ? "text-sm font-medium  cursor-pointer  bg-gray-700"
                    : "text-sm font-medium cursor-pointer text-gray-700 bg-stone-100"
                }`}
                value="kitchen"
              >
                Kitchen
              </option>
            </select>
          </div>
          {/* Text */}
          <div>
            <textarea
              cols="30"
              rows="5"
              name="title"
              className={` mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg  placeholder:text-gray-400 outline-none ${
                mode === "dark" ? "bg-stone-100" : "bg-gray-300 text-black"
              }`}
              placeholder="Product Description"
              value={product.description}
              onChange={(e) =>
                Setproduct({ ...product, description: e.target.value })
              }
            ></textarea>
          </div>
          {/* Add Button */}
          <div className="  mb-1">
            <button
              className=" bg-green-500 w-full flex justify-center hover:bg-green-400 hover:text-black font-bold  px-2 py-2 rounded-lg"
              onClick={SubmitHandler}
            >
              {loader ? <Loader /> : "Add Product"}
            </button>
          </div>
          {/* Cancel Button */}
          <div className=" flex justify-center ">
            <button
              className=" bg-red-500 w-full hover:bg-red-400  text-black font-bold  px-2 py-2 rounded-lg"
              onClick={() => props.close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
