import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/data/Context";
import Modal from "../../Components/modal/Modal";
import Navbar from "../../Components/Header/navbar";
import CheckOut from "./CheckOut";
import PageLoader from "../../Components/Loader/PageLoader";
import { toast } from "react-toastify";
import { collection, doc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(Context);
  const { User, mode, Cart, loader, GetCart, Pageloader, DeleteToCart } =
    context;
  const [isopen, Setisopen] = useState(false);
  const [totalAmount, SettotalAmount] = useState();
  const [Tax, SetTax] = useState();
  const [Ship, SetShip] = useState();

  const OpenCheckoutpage = () => {
    Setisopen(true);
  };
  const CloseCheckoutpage = () => {
    Setisopen(false);
  };

  const UpdateProduct = async (product, value) => {
    if (product.Qty === 1 && value === -1) {
      toast.info("Minimum Qty Should be 1");
      return;
    }
    const userEmail = User.user.email;
    console.log(User.user.email);

    const userDocRef = doc(fireDB, "users", userEmail);

    const cartCollectionRef = collection(userDocRef, "Cart");
    const pro = doc(cartCollectionRef, product.id);
    console.log(pro);

    try {
      await setDoc(
        pro,
        {
          ...product,
          Qty: product.Qty + value,
        },
        { merge: true }
      );
      GetCart();
      toast.success(`Update ${product.title} Qty`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    let temp = Cart.reduce((sum, item) => (sum += item.price * item.Qty), 0);
    SetTax(Math.round(temp * 0.18) / 100);
    SetShip(Math.round((temp * 0.1) / 100));
    SettotalAmount(temp);
  }, [Cart]);

  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <Navbar />
        {Pageloader && <PageLoader />}

        <div className="  md:px-60 py-6 max-h-screen  ">
          <div class="grid lg:grid-cols-3 ">
            <div class="lg:col-span-2 bg-white divide-y lg:h-full lg:-mb-40 ">
              <h3
                className={`px-2 text-2xl font-bold text-gray-700   ${
                  mode === "dark" ? "bg-gray-400" : ""
                }`}
              >
                Shopping Cart
                <p class="h-1 w-20 mt-3  bg-pink-600 rounded"></p>
              </h3>
              {/* order cards */}
              <div
                class={`divide-y h-full lg:-mb-60 lg:overflow-auto no-scrollbar  ${
                  mode === "dark" ? "bg-gray-400" : ""
                }`}
              >
                {Cart.length === 0 && (
                  <div className="text-lg mt-10 ml-32 lg:ml-60 lg:pl-60 lg:max-h-screen fixed  font-medium">
                    No Products
                    <br />
                    <Link
                      to={"/"}
                      className="text-sm bg-pink-400 text-center p-2 px-6 mt-4 rounded-lg font-medium "
                    >
                      Go Back
                    </Link>{" "}
                  </div>
                )}
                {Cart.map((product, index) => (
                  <div
                    key={index}
                    class={`flex items-start max-sm:flex-col gap-8 py-2 px-6  ${
                      mode === "dark"
                        ? "bg-gray-600 text-white"
                        : "text-gray-800"
                    }`}
                  >
                    <div class="h-32 max-w-36 flex justify-center items-center shrink-0">
                      <img
                        src={product.imageUrl}
                        class="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div class="flex items-start gap-6 w-full">
                      <div>
                        <h3 class="text-lg font-bold  mb-2">{product.title}</h3>
                        <div>
                          <h6 class="text-base ">
                            Qty: <strong class="">{product.Qty}</strong>
                          </h6>
                          <h6 class="text-base  ">
                            Price:{" "}
                            <strong class="ml-2">Rs.{product.price}</strong>
                          </h6>
                        </div>

                        <div class="mt-4 flex flex-wrap gap-2 lg:gap-6">
                          <button
                            type="button"
                            class="font text-red-600 -semibold text-sm flex items-center gap-2 shrink-0"
                            onClick={() => DeleteToCart(product)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 fill-current inline"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"
                              ></path>
                            </svg>
                            Remove
                          </button>
                          <button
                            type="button"
                            class="font-semibold  text-sm flex items-center gap-2 shrink-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18px"
                              class="fill-current inline"
                              viewBox="0 0 64 64"
                            >
                              <path
                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                data-original="#000000"
                              ></path>
                            </svg>
                            Move to wish list
                          </button>
                        </div>
                      </div>

                      <div class="ml-auto text-right">
                        <div class="flex">
                          <button
                            type="button"
                            class="bg-transparent p-2 font-semibold bg-gray- "
                            onClick={() => UpdateProduct(product, -1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-3 fill-current"
                              viewBox="0 0 124 124"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            class="bg-transparent mx-2 px-4 py-2 font-semibold  text-base border"
                          >
                            {product.Qty}
                          </button>
                          <button
                            type="button"
                            class="bg-transparent p-2 font-semibold "
                            onClick={() => UpdateProduct(product, 1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-3 fill-current"
                              viewBox="0 0 42 42"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        <div class="mt-6 pr-4">
                          <h4 class="text-lg font-bold ">
                            <span class=" mr-1 font-medium">
                              {/* ${product.price} * {product.Qty} Qty */}
                            </span>
                          </h4>
                          <h4 class="text-lg font-bold">
                            Rs.{product.price * product.Qty}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summury */}

            {Cart.length === 0 ? (
              ""
            ) : (
              <div
                class={`p-6 lg:sticky text-black lg:h-fit ${
                  mode === "dark" ? "bg-gray-400" : "bg-gray-100 "
                }`}
              >
                <h3 class="text-xl text-pink-600 font-bold border-b ">
                  Order Summary
                </h3>

                <ul class=" divide-y mt-6">
                  <li class="flex flex-wrap gap-4 text-base py-4">
                    Subtotal{" "}
                    <span class="ml-auto font-bold">Rs.{totalAmount}</span>
                  </li>
                  <li class="flex flex-wrap gap-4 text-base py-4">
                    Shipping <span class="ml-auto font-bold">Rs.{Ship}</span>
                  </li>
                  <li class="flex flex-wrap gap-4 text-base py-4">
                    Tax <span class="ml-auto font-bold">Rs.{Tax}</span>
                  </li>
                  <li class="flex flex-wrap gap-4 text-base py-4 font-bold">
                    Total{" "}
                    <span
                      class={`ml-auto  ${
                        mode === "dark" ? "text-black" : "text-green-500"
                      }`}
                    >
                      Rs.{Math.round(totalAmount + Tax + Ship)}
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  class={`mt-6 text-base px-6 py-2.5 w-full  hover:bg-gray-900 text-white rounded ${
                    mode === "dark"
                      ? "bg-gray-700"
                      : " bg-pink-600 hover:bg-pink-700"
                  }`}
                  onClick={OpenCheckoutpage}
                >
                  Check out
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <hr className=" hidden md:block mt-6 font-bold" /> */}
      </div>
      {isopen && (
        <Modal isopen={isopen}>
          <CheckOut
            close={CloseCheckoutpage}
            total={totalAmount + Tax + Ship}
          />
        </Modal>
      )}
    </>
  );
}

export default Cart;
