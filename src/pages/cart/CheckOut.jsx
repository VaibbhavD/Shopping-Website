import React, { useContext } from "react";
import Context from "../../context/data/Context";

function CheckOut(props) {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div class="leading-loose md:pt-8 ">
      <form
        class={`max-w-xl md:m-4 m-2 md:px-8 p-5 border-1 border-white rounded shadow-xl ${
          mode === "dark" ? "bg-gray-600 text-stone-100" : "bg-white"
        }`}
      >
        <p class="  text-center font-bold">Customer information</p>
        <div class="">
          <label class="block text-sm font-medium " for="cus_name">
            Name
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div class="mt-2">
          <label class=" font-medium " for="cus_email">
            Email
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="email"
            required
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" font-medium " for="cus_email">
            Mobile No
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_mobileno"
            name="cus_email"
            type="number"
            required
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" block font-medium " for="cus_email">
            Address
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class="hidden font-medium block " for="cus_email">
            City
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden font-medium md:block " for="cus_email">
            State
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="State"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden md:block font-medium " for="cus_email">
            Zip
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required
            placeholder="Zip"
            aria-label="Email"
          />
        </div>
        <div class="mt-4 justify-end flex gap-1">
          <button
            class="px-8 p-1 text-white font-bold tracking-wider bg-green-600 rounded"
            type="submit"
          >
            Pay
          </button>
          <button
            class="px-4 p-1 text-white font-bold tracking-wider bg-red-600 rounded"
            type="submit"
            onClick={() => props.close()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
