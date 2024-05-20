import React, { useContext } from "react";
import Context from "../../context/data/Context";

function DiscountSection() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div
      class={`mt-0 relative bg-white p-5 `}
      style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
    >
      <section
        aria-labelledby="sale-heading"
        class="relative mx-auto flex max-w-screen flex-col items-center rounded-2xl text-stone-100 bg-black text-center sm:px-6 md:p-5 lg:px-6 shadow-gray-100 shadow-md"
      >
        <div class="mx-auto max-w-2xl lg:max-w-none p-5">
          <h3
            id="sale-heading"
            class="text-2xl font-bold tracking-tight  sm:text-5xl lg:text-6xl"
          >
            Get 25% off during our one-time sale
          </h3>
          <p class="hidden mx-auto mt-4 max-w-xl text-xs md:text-xl text-gray-200 md:block">
            Most of our products are limited releases that won't come back. Get
            your favorite items while they're in stock.
          </p>
        </div>
      </section>
    </div>
  );
}

export default DiscountSection;
