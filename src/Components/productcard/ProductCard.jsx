import React, { useContext } from "react";
import Context from "../../context/data/Context";

function ProductCard() {
  const context = useContext(Context);
  const { mode } = context;

  const pics = [
    "https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg",
    "https://images.unsplash.com/photo-1689217634234-38efb49cb664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://cdn.devdojo.com/images/june2023/mountains-10.jpeg",
    "https://cdn.devdojo.com/images/june2023/mountains-06.jpeg",
    "https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <section>
      <div
        class="w-full h-full select-none p-2 lg:p-6"
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <h1
          class="sm:text-3xl text-2xl pt-5 font-bold title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Our Latest Collection
        </h1>
        <div class="h-1 w-20 bg-pink-600 rounded"></div>
        <ul class="grid grid-cols-2 gap-4 md:gap-10 lg:grid-cols-4 m-2 md:px-20 md:pt-4">
          {pics.map((url) => (
            <li>
              <div
                key={url}
                className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex justify-center cursor-pointer ">
                  <img
                    src={url}
                    class="object-cover  select-none w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4] hover:ease-in-out hover:scale-105 duration-500"
                    alt="photo gallery image 07"
                  />
                </div>
                <div className="p-5 border-t-2">
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    E-Bharat
                  </h2>
                  <h1
                    className="title-font text-lg font-medium text-gray-900 mb-3"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    This is title
                  </h1>
                  {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹ 500
                  </p>
                  <div className=" flex justify-center">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductCard;
