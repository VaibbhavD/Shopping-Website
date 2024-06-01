import React, { useContext } from "react";
import Navbar from "../../Components/Header/navbar";
import Context from "../../context/data/Context";
import PageLoader from "../../Components/Loader/PageLoader";
import { Link, useNavigate } from "react-router-dom";

function Order() {
  const context = useContext(Context);
  const { Orders, Pageloader, GetOrders, mode } = context;
  console.log(Orders);
  const navigate = useNavigate();
  // GetOrders();
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <Navbar />
      <div>
        {Pageloader && <PageLoader />}
        <h2 className="text-2xl text-pink-500 font-bold p-5 ">
          Orders
          <p class="h-1 w-20 mt-3 bg-pink-600 rounded"></p>
        </h2>
        <div className="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Products */}
          <div className="">
            <div className="space-y-8">
              {Orders.length === 0 ? (
                <div className="grid justify-center items-center mt-40 font-bold text-xl">
                  <p>No Orders</p>
                  <Link
                    to={"/"}
                    className="text-sm bg-pink-400 text-center py-2 mt-2 rounded-lg font-medium "
                  >
                    Go Back
                  </Link>
                </div>
              ) : (
                ""
              )}
              {Orders.map(({ Cart, addressInfo, email, date, id, bill }) => (
                <div
                  key={Cart[0].id}
                  className={` border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg ${
                    mode === "dark"
                      ? "bg-gray-500 text-ston-50"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <p className="text-sm  text- p-2">
                    Order placed-{" "}
                    <time
                      dateTime="2021-03-22"
                      className="font-medium text-gray-900"
                    >
                      {date}
                    </time>
                  </p>
                  <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                    <div className="flex lg:col-span-7">
                      <div className="flex-shrink-0 w-full aspect-w-1 aspect-h-1 md:-mt-5 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                        <img
                          src={Cart[0].imageUrl}
                          alt="Product Image"
                          className="w-full h-full object-top sm:object-cover max-w-[150px] max-h-[200px] sm:w-full sm:h-full"
                        />
                      </div>

                      <div className="mt-6 sm:mt-0 -ml-48 sm:ml-10">
                        <h3 className="text-base font-medium text-gray-900">
                          <a className="text-pink-500">{Cart[0].title}</a>
                        </h3>
                        <p className="mt-2 text-sm font-medium text-green-500">
                          Rs.{bill || Cart[0].price}
                        </p>
                        <p className="mt-3 text-sm ">{Cart[0].brand}</p>
                        <p className="mt-3 text-sm ">Order id- {id}</p>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:col-span-5">
                      <dl className="grid grid-cols-2 gap-x-6 text-sm">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Delivery address
                          </dt>
                          <dd className="mt-3 ">
                            <span className="block">
                              {addressInfo.AddressLine + addressInfo.City},
                            </span>
                            <span className="block">{addressInfo.State},</span>
                            <span className="block">
                              Zip-{addressInfo.ZipCode}
                            </span>
                          </dd>
                        </div>
                        <div className="-ml-5 ">
                          <dt className="font-medium  text-gray-900">
                            Shipping updates
                          </dt>
                          <dd className="mt-3  space-y-3 overflow-auto ">
                            <p>Email- {email}</p>
                            <p>MobileNo- {addressInfo.PhoneNo}</p>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing */}
          {/* <div className="mt-16">
            <h2 className="sr-only">Billing Summary</h2>

            <div className="bg-gray-100 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                <div>
                  <dt className="font-medium text-gray-900">Billing address</dt>
                  <dd className="mt-3 ">
                    <span className="block">Floyd Miles</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">
                    Payment information
                  </dt>
                  <div className="mt-3">
                    <dd className="-ml-4 -mt-4 flex flex-wrap">
                      <div className="ml-4 mt-4 flex-shrink-0">
                        <svg
                          aria-hidden="true"
                          width={36}
                          height={24}
                          viewBox="0 0 36 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-auto"
                        >
                          <rect width={36} height={24} rx={4} fill="#224DBA" />
                          <path
                            d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                            fill="#fff"
                          />
                        </svg>
                        <p className="sr-only">Visa</p>
                      </div>
                      <div className="ml-4 mt-4">
                        <p className="text-gray-900">Ending with 4242</p>
                        <p className="text-gray-600">Expires 02 / 24</p>
                      </div>
                    </dd>
                  </div>
                </div>
              </dl>

              <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                <div className="pb-4 flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">$72</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">$5</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Tax</dt>
                  <dd className="font-medium text-gray-900">$6.16</dd>
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <dt className="font-medium text-gray-900">Order total</dt>
                  <dd className="font-medium text-indigo-600">$83.16</dd>
                </div>
              </dl>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Order;
