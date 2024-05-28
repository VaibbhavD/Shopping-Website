import React, { useContext, useState } from "react";
import Context from "../../context/data/Context";
import { fireDB } from "../../firebase/FirebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { toast } from "react-toastify";

function CheckOut(props) {
  const context = useContext(Context);
  const {
    mode,
    SetUserProfile,
    UserProfile,
    User,
    Cart,
    AddUserProfile,
    GetCart,
    GetOrders,
  } = context;

  const BuyNow = async () => {
    if (
      UserProfile.FirstName == null ||
      UserProfile.LastName == null ||
      UserProfile.PhoneNo == null ||
      UserProfile.State == null ||
      UserProfile.ZipCode == null ||
      UserProfile.City == null ||
      UserProfile.FirstName == null
    ) {
      toast.error("Fill all the Input Fields!");
      return;
    }
    const addressInfo = {
      ...UserProfile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    console.log(addressInfo);

    AddUserProfile();

    // RozarPay Method
    var options = {
      key: "rzp_test_XRtjw8gXhATuTr",
      key_secret: "0kqIyXHmRLpb4aPbNVrMhqnk",
      amount: parseInt(props.total * 100),
      currency: "INR",
      order_receipt:
        "order_rcptid_" + UserProfile.FirstName + UserProfile.LastName,
      name: "E-Shoppe",
      description: "for testing purpose",
      handler: async function (response) {
        // console.log(response)
        toast.success("Order Placed");
        const PaymentId = response.razorpay_payment_id;

        const OrderInfo = {
          Cart,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: User.user.email,
          userid: User.user.uid,
          bill: props.total,
          PaymentId,
        };
        console.log(OrderInfo);
        const collref = doc(fireDB, "users", User.user.email);
        const orderref = collection(collref, "Orders");

        try {
          await addDoc(orderref, OrderInfo);

          const cartref = collection(collref, "Cart");
          const cartsnapshot = await getDocs(cartref);
          console.log(cartsnapshot);
          cartsnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
            GetCart();
            GetOrders();
            props.close();
          });
        } catch (error) {
          console.log(error);
        }
      },

      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div class="leading-loose md:pt-20 pt-16 px-4 ">
      <div
        class={`md:max-w-4xl mx-auto w-full h-max rounded-md p-4  top-0 ${
          mode === "dark" ? "bg-gray-500 " : "bg-white"
        }`}
      >
        <h2 class="text-xl font-bold text-center text-gray-800">
          Complete your order
        </h2>
        <form class="mt-8 md:px-2">
          <div>
            <h3 class="text-base font-semibold text-gray-800 mb-4">
              Personal Details
            </h3>
            <div class="grid md:grid-cols-2 gap-2">
              <div class="relative flex items-center">
                <input
                  type="text"
                  placeholder="First Name"
                  class=" py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  value={UserProfile.FirstName}
                  onChange={(e) =>
                    SetUserProfile({
                      ...UserProfile,
                      FirstName: e.target.value,
                    })
                  }
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="relative flex items-center">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  value={UserProfile.LastName}
                  onChange={(e) =>
                    SetUserProfile({ ...UserProfile, LastName: e.target.value })
                  }
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  class="py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  value={User.user.email}
                  disabled
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>

              <div class="relative flex items-center">
                <input
                  type="number"
                  placeholder="Phone No."
                  maxLength={10}
                  class="py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  value={UserProfile.PhoneNo}
                  onChange={(e) =>
                    SetUserProfile({ ...UserProfile, PhoneNo: e.target.value })
                  }
                  required
                />
                <svg
                  fill="#bbb"
                  class="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h3 class="text-base font-semibold text-gray-800 mb-4">
              Shipping Address
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Address Line"
                class="py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                value={UserProfile.AddressLine}
                onChange={(e) =>
                  SetUserProfile({
                    ...UserProfile,
                    AddressLine: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="City"
                class="py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                value={UserProfile.City}
                onChange={(e) =>
                  SetUserProfile({
                    ...UserProfile,
                    City: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="State"
                class="py-3 md:px-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                value={UserProfile.State}
                onChange={(e) =>
                  SetUserProfile({
                    ...UserProfile,
                    State: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="Zip Code"
                class="py-3 md:px-2  bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                value={UserProfile.ZipCode}
                onChange={(e) =>
                  SetUserProfile({
                    ...UserProfile,
                    ZipCode: e.target.value,
                  })
                }
                required
              />
            </div>

            <div class="flex gap-4 max-md:flex-col mt-8">
              <button
                type="button"
                class="rounded-md px-4 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-gray-800 max-md:order-1"
                onClick={() => props.close()}
              >
                Cancel
              </button>
              <button
                type="button"
                class="rounded-md px-4 py-3 w-full text-sm font-semibold bg-green-800 text-white hover:bg-gray-900"
                onClick={BuyNow}
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
