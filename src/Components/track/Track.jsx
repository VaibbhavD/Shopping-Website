import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Track() {
  const context = useContext(Context);
  const { toggle, mode } = context;

  return (
    <div>
      <section
        className="text-gray-600 body-font pt-10 cursor-default"
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <div className="container md:py-5 ">
          <div className="grid grid-cols-3 w-full md:px-4 gap-0">
            <div className="pl-2 p-1 w-full text-center">
              <div
                className={`shadow-xl hover:shadow-md hover:shadow-gray-200  py-7 rounded-lg ${
                  mode === "dark" ? "bg-gray-600 text-white " : "bg-pink-100"
                }`}
              >
                <svg
                  className="text-pink-600 w-8 h-8 mb-3 inline-block lg:h-12 lg:w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <h2
                  className="title-font font-medium md:text-lg text-base text-gray-900 hover:scale-110 duration-500 w-full"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Quality Products
                </h2>
                <p className="text-xs leading-relaxed lg:text-base">
                  Our T-Shirts 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="p-1 w-full mx-auto text-center">
              <div
                className={`shadow-xl hover:shadow-md hover:shadow-gray-200  py-7 rounded-lg ${
                  mode == "dark" ? "bg-gray-600 text-white " : "bg-pink-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-pink-600 w-8 h-8 mb-3 inline-block lg:h-12 lg:w-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <h2
                  className="title-font font-medium md:text-lg text-base text-gray-900 hover:scale-110 duration-500 w-full"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Free Shipping
                </h2>
                <p className="text-xs leading-relaxed lg:text-base">
                  We ship all over India for FREE.
                </p>
              </div>
            </div>
            <div className="p-1 pr-2 w-full text-center">
              <div
                className={`shadow-xl hover:shadow-md hover:shadow-gray-200  py-7 rounded-lg ${
                  mode == "dark" ? "bg-gray-600 text-white " : "bg-pink-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-pink-600 w-8 h-8 mb-3 inline-block lg:h-12 lg:w-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <h2
                  className="title-font font-medium md:text-lg text-base text-gray-900 hover:scale-110 duration-500 w-full"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Exciting Offers
                </h2>
                <p className="text-xs leading-relaxed lg:text-base">
                  We provide amazing offers & discounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
