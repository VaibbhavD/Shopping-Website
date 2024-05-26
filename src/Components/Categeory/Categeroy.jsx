import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Categeroy() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div
      class="bg-white dark:bg-gray-800  h-full pt-3 lg:p-3"
      style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
    >
      <div class="mx-auto max-w-screen-2xl px-2  md:px-6">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-6">
          <div class="flex items-center gap-12">
            <h2
              class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Categeory
              <p class="h-1 w-20 mt-3 bg-pink-600 rounded"></p>
            </h2>
            {/* <p
              class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              New Trendy Latest Fashion And Design
            </p> */}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 md:px-5">
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              VR
            </span>
          </a>
          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Magicle"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tech
            </span>
          </a>

          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Dev
            </span>
          </a>

          <a
            href="#"
            class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Retro
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categeroy;
