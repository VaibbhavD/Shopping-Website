import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Testimonal() {
  const context = useContext;
  const { mode } = context;

  return (
    <>
      <div class=" mt-0 relative bg-white p-5">
        {/* <!-- Decorative background image and gradient --> */}
        {/* <!-- Callout --> */}
        <section
          aria-labelledby="sale-heading"
          class="relative mx-auto flex max-w-7xl flex-col items-center rounded-2xl p-4 pt-5 text-stone-100 bg-gray-900 text-center sm:px-6 lg:px-6 mb-5"
        >
          <div class="mx-auto max-w-2xl lg:max-w-none p-5">
            <h3
              id="sale-heading"
              class="text-3xl font-bold tracking-tight  sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our one-time sale
            </h3>
            <p class="mx-auto mt-4 max-w-xl text-xl text-gray-200">
              Most of our products are limited releases that won't come back.
              Get your favorite items while they're in stock.
            </p>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        <section>
          <div class="flex flex-col bg-white mt-4 p-auto  ">
            <h2
              className=" text-center text-3xl font-semibold mb-10"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              What our <span className=" text-pink-500">customers</span> are
              saying
            </h2>
            <div class="flex pb-10 overflow-auto lg:mx-40 gap-10">
              <div class=" min-w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div class=" h-fit p-5 w-screen text-center lg:w-96  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    React Js
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    UI Develeoper
                  </p>
                </div>
              </div>

              <div class="  w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div class=" h-fit p-5 w-screen text-center  lg:w-96   rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    React Js
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    UI Develeoper
                  </p>
                </div>
              </div>
              <div class="  w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div class=" h-fit p-5 w-screen text-center  lg:w-96   rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    React Js
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    UI Develeoper
                  </p>
                </div>
              </div>
              <div class="  w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div class=" h-fit p-5 w-screen text-center lg:w-96   rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    React Js
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    UI Develeoper
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonal;
