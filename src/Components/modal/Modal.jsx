import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import React, { useContext } from "react";
import Context from "../../context/data/Context";

export default function Modal(props) {
  const context = useContext(Context);
  const { mode } = context;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          class={`mt-6 text-base px-6 py-2.5 w-full  hover:bg-gray-900 text-white rounded ${
            mode === "dark" ? "bg-gray-700" : " bg-pink-600 hover:bg-pink-700"
          }`}
          onClick={openModal}
        >
          Check out
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => console.log("click model close ")}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <div class="leading-loose md:pt-20 ">
                    <form
                      class={`max-w-xl md:m-4 m-2 md:px-8 p-5 border-1 border-white rounded shadow-xl ${
                        mode === "dark"
                          ? "bg-gray-600 text-stone-100"
                          : "bg-white"
                      }`}
                    >
                      <p class="  text-center font-bold">
                        Customer information
                      </p>
                      <div class="">
                        <label
                          class="block text-sm font-medium "
                          for="cus_name"
                        >
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
                        <label
                          class="hidden font-medium block "
                          for="cus_email"
                        >
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
                        <label
                          class="hidden font-medium md:block "
                          for="cus_email"
                        >
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
                        <label
                          class="hidden md:block font-medium "
                          for="cus_email"
                        >
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
                          onClick={() => closeModal()}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
