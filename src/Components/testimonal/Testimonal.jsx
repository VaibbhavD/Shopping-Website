import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Testimonal() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <>
      <div
        class={`mt-0 relative bg-white pt-10 px-10${
          mode === "dark" ? "bg-[rgb(46 49 55)]" : "white"
        }`}
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <section>
          <div
            class={`flex flex-col bg-white mt-4 p-auto ${
              mode === "dark" ? "bg-gray-700" : "white"
            }`}
            style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
          >
            <h2
              className=" text-center text-3xl md:text-4xl font-semibold mb-10"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              What our <span className=" text-pink-500">customers</span> are
              saying
            </h2>
            <div class="flex pb-10 md:pb-20 overflow-auto lg:mx-36 gap-10 no-scrollbar">
              <div class="min-w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div
                  class={`h-fit p-5 w-screen text-center lg:w-96  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                    mode === "dark" ? "bg-gray-500" : "white"
                  }`}
                >
                  {" "}
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    “Switching to the new mobile phone from{" "}
                    <span className="text-pink-500">E-Shoppe</span> was the best
                    decision I made. The user interface is intuitive, and the
                    performance is lightning-fast. The transition was smooth,
                    thanks to the excellent support team who helped transfer all
                    my data effortlessly.”
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Neha Jain
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Mumbai
                  </p>
                </div>
              </div>

              <div class="  w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div
                  class={`h-fit p-5 w-screen text-center lg:w-96  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                    mode === "dark" ? "bg-gray-500" : "white"
                  }`}
                >
                  {" "}
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&h=180"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    “I’m thrilled with my new smart TV from{" "}
                    <span className="text-pink-500">E-Shoppe</span>. The setup
                    was incredibly easy, and the smart features are fantastic. I
                    can now stream all my favorite shows with just a click.
                    Plus, the customer service was very helpful when I had
                    questions about the installation.”
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Rohit Patil
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Pune
                  </p>
                </div>
              </div>
              <div class="  w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div
                  class={`h-fit p-5 w-screen text-center lg:w-96  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                    mode === "dark" ? "bg-gray-500" : "white"
                  }`}
                >
                  {" "}
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                  />
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="leading-relaxed text-sm"
                  >
                    “The T-Shirt I bought from{" "}
                    <span className="text-pink-500">E-Shoppe</span> is now my
                    favorite piece of clothing. It’s stylish, fits perfectly,
                    and the quality is top-notch. I’ve worn it almost every day
                    since I got it. Highly recommend their clothing line! The
                    fabric is soft and breathable, perfect for hot weather”
                  </p>
                  <span className="inline-block h-1 w-14 rounded bg-pink-500 mt-6 mb-4" />
                  <h2
                    style={{ color: mode === "dark" ? "#ff4162" : "" }}
                    className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  >
                    Kajal R.
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Delhi
                  </p>
                </div>
              </div>
              <div class="  w-screen ">
                {/* <div class="inline-block px-3"> */}
                <div
                  class={`h-fit p-5 w-screen text-center lg:w-96  rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out ${
                    mode === "dark" ? "bg-gray-500" : "white"
                  }`}
                >
                  {" "}
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&h=180"
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
                    Aakash
                  </h2>
                  <p
                    style={{ color: mode === "dark" ? "white" : "" }}
                    className="text-gray-500"
                  >
                    Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-col-1 grid-rows-2 lg:grid-rows-1 lg:flex justify-center gap-3 items-center pb-10">
          <h1 className="text-3xl font-bold text-pink-500">
            Vaibhav Dhamanage
          </h1>
          <div
            className={`flex justify-center gap-3 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            <a
              href="https://github.com/VaibbhavD"
              className="hover:text-blue-500"
            >
              <b className="text-blue-500">@</b>github
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-dhamanage-94a2b923b/"
              className="hover:text-blue-500"
            >
              <b className="text-blue-500">@</b>linkedin
            </a>
            <a
              href="https://my-portfolio-puxr.vercel.app/"
              className="hover:text-blue-500"
            >
              <b className="text-blue-500">@</b>portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonal;
