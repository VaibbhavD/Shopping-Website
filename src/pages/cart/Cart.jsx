import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Cart() {
  const context = useContext(Context);
  const { mode } = context;
  return (
    <div
      className=" bg-gray-100 pb-10 md:px-60"
      style={{
        backgroundColor: mode === "dark" ? "#282c34" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div class="grid lg:grid-cols-3">
        <div
          class={`lg:col-span-2  overflow-x-auto rounded-l-lg ${
            mode === "dark" ? "bg-gray-600 text-white" : "bg-white"
          }`}
        >
          <div class="flex gap-2 border-b pb-4 pt-2 pl-4 ">
            <h2 class="text-2xl font-bold   flex-1">Shopping Cart</h2>
            <h3 class="text-xl font-bold  pr-10">3 Items</h3>
          </div>

          <table class=" w-full border-collapse divide-y overflow-auto">
            <thead class="whitespace-nowrap text-left">
              <tr>
                <th class="text-base  p-4">Description</th>
                <th class="text-base  p-4">Quantity</th>
                <th class="text-base  p-4">Price</th>
              </tr>
            </thead>

            <tbody class="whitespace-nowrap divide-y ">
              <tr>
                <td class="py-6 px-4 ">
                  <div class="flex items-center gap-6 w-max">
                    <div class="h-32 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product6.webp"
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div>
                      <p class="text-base font-bold ">Black T-Shirt</p>
                      <button
                        type="button"
                        class="mt-3 font-semibold text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-6 px-4">
                  <div class="flex divide-x border w-max rounded overflow-hidden">
                    <button
                      type="button"
                      class="flex items-center justify-center bg-gray-400 w-10 h-10 font-semibold"
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
                      class="bg-transparent w-10 h-10 font-semibold  text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
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
                </td>
                <td class="py-6 px-4">
                  <h4 class="text-base font-bold ">$18.5</h4>
                </td>
              </tr>
              <tr>
                <td class="py-6 px-4">
                  <div class="flex items-center gap-6 w-max">
                    <div class="h-32 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product3.webp"
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div className="hidden">
                      <p class="text-base font-bold ">Gray T-Shirt</p>
                      <button
                        type="button"
                        class="mt-3 font-semibold text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-6 px-4">
                  <div class="flex divide-x border w-max rounded overflow-hidden">
                    <button
                      type="button"
                      class="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
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
                      class="bg-transparent w-10 h-10 font-semibold  text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
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
                </td>
                <td class="py-6 px-4">
                  <h4 class="text-base font-bold ">$18</h4>
                </td>
              </tr>
              <tr>
                <td class="py-6 px-4">
                  <div class="flex items-center gap-6 w-max">
                    <div class="h-32 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product3.webp"
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div className="hidden">
                      <p class="text-base font-bold ">Gray T-Shirt</p>
                      <button
                        type="button"
                        class="mt-3 font-semibold text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-6 px-4">
                  <div class="flex divide-x border w-max rounded overflow-hidden">
                    <button
                      type="button"
                      class="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
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
                      class="bg-transparent w-10 h-10 font-semibold  text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
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
                </td>
                <td class="py-6 px-4">
                  <h4 class="text-base font-bold ">$18</h4>
                </td>
              </tr>
              <tr>
                <td class="py-6 px-4">
                  <div class="flex items-center gap-6 w-max">
                    <div class="h-32 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product3.webp"
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div className="hidden">
                      <p class="text-base font-bold ">Gray T-Shirt</p>
                      <button
                        type="button"
                        class="mt-3 font-semibold text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-6 px-4">
                  <div class="flex divide-x border w-max rounded overflow-hidden">
                    <button
                      type="button"
                      class="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
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
                      class="bg-transparent w-10 h-10 font-semibold  text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
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
                </td>
                <td class="py-6 px-4">
                  <h4 class="text-base font-bold ">$18</h4>
                </td>
              </tr>

              <tr>
                <td class="py-6 px-4">
                  <div class="flex items-center gap-6 w-max">
                    <div class="h-32 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product7.webp"
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div>
                      <p class="text-base font-bold ">Black T-Shirt</p>
                      <button
                        type="button"
                        class="mt-3 font-semibold text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-6 px-4">
                  <div class="flex divide-x border w-max rounded overflow-hidden">
                    <button
                      type="button"
                      class="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
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
                      class="bg-transparent w-10 h-10 font-semibold  text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
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
                </td>
                <td class="py-6 px-4">
                  <h4 class="text-base font-bold ">$15.5</h4>
                </td>
              </tr>

              <tr>
                <td class="py-6 px-4">
                  <div class="flex items-center gap-6 w-max">
                    <div class="h-32 shrink-0">
                      <img
                        src="https://readymadeui.com/images/product3.webp"
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div>
                      <p class="text-base font-bold ">Gray T-Shirt</p>
                      <button
                        type="button"
                        class="mt-3 font-semibold text-red-400 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-6 px-4">
                  <div class="flex divide-x border w-max rounded overflow-hidden">
                    <button
                      type="button"
                      class="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
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
                      class="bg-transparent w-10 h-10 font-semibold  text-base"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="flex justify-center items-center bg-gray-800 text-white w-10 h-10 font-semibold"
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
                </td>
                <td class="py-6 px-4">
                  <h4 class="text-base font-bold ">$18</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          class={`p-6 lg:sticky text-black lg:top-0 lg:h-screen ${
            mode === "dark" ? "bg-gray-400" : "bg-gray-50 "
          }`}
        >
          <h3 class="text-xl font-bold border-b ">Order Summary</h3>

          <ul class=" divide-y mt-6">
            <li class="flex flex-wrap gap-4 text-base py-4">
              Subtotal <span class="ml-auto font-bold">$37.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base py-4">
              Shipping <span class="ml-auto font-bold">$4.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base py-4">
              Tax <span class="ml-auto font-bold">$4.00</span>
            </li>
            <li class="flex flex-wrap gap-4 text-base py-4 font-bold">
              Total <span class="ml-auto">$45.00</span>
            </li>
          </ul>

          <button
            type="button"
            class={`mt-6 text-base px-6 py-2.5 w-full  hover:bg-gray-900 text-white rounded ${
              mode === "dark" ? "bg-gray-700" : " bg-pink-600 hover:bg-pink-700"
            }`}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
