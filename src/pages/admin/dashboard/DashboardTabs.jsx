import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import myContext from "../../../context/data/Context";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import AddProduct from "../pages/AddProduct";
import Modal from "../../../Components/modal/Modal";

function DashboardTab() {
  const context = useContext(myContext);
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
      <div
        className="container mx-auto pt-10 -mt-12 md:mt-0"
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-3 text-center    md:justify-end md:pr-5 pb-5 ">
              <Tab>
                <button
                  type="button"
                  className="font-medium bg-white border-b-2 hover:shadow-purple-400 border-purple-500  rounded-lg text-xl  shadow-md  px-2 md:px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineProductionQuantityLimits className="text-purple-600" />
                    Products
                  </div>{" "}
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium bg-white border-b-2 hover:shadow-pink-400 border-pink-500  rounded-lg text-xl shadow-md px-5 md:px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <AiFillShopping className="text-pink-500" /> Order
                  </div>
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium bg-white border-b-2 hover:shadow-green-400 border-green-500  rounded-lg text-xl  shadow-md  px-5 md:px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <FaUser className="text-green-500" /> Users
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              <div className="  px-4 md:px-0 pb-10">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <span className="w-fit border-b-2 border-pink-600">
                    Product Details
                  </span>
                </h1>
                <div className="flex justify-end md:mr-10">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600  border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-2 py-2  md:px-5 md:py-2.5 mb-2"
                    style={{
                      backgroundColor: mode === "dark" ? "" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                    onClick={openModal}
                  >
                    {" "}
                    <div className="flex gap-2 items-center">
                      Add Product <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>
                <div className="relative overflow-x-auto md:px-10 ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead
                      className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr
                        className="bg-gray-50 border-b  dark:border-gray-700"
                        style={{
                          backgroundColor:
                            mode === "dark" ? "rgb(46 49 55)" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          1.
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-16"
                            src="https://dummyimage.com/720x400"
                            alt="img"
                          />
                        </th>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          Title
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ₹100
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          pots
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          12 Aug 2019
                        </td>
                        <td className="px-6 py-4">
                          <div className=" flex gap-2">
                            <div
                              className=" flex gap-2 cursor-pointer text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6 text-red-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6 text-blue-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto pb-16 md:px-10">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold pb-7 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <span className="w-fit border-b-2 border-pink-600">
                    Order Details
                  </span>
                </h1>
                <table
                  className={`w-full text-sm text-left  dark:text-gray-400 ${
                    mode === "dark" ? "bg-gray-500" : "text-gray-500"
                  }`}
                >
                  <thead
                    className={`text-xs text-black uppercase bg-gray-200 `}
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="bg-gray-50 border-b  dark:border-gray-700"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        3393939
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        <img
                          className="w-16"
                          src="https://dummyimage.com/720x400"
                          alt="img"
                        />
                      </th>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Title
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ₹100
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        pots
                      </td>

                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        name
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        india
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        82828
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        929929929929
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        kkakka@gmail.com
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        12 Aug 2019
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto pb-10 md:px-10">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold pb-7"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <span className="w-fit border-b-2 border-pink-600">
                    User Details
                  </span>
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    className="text-xs text-black uppercase bg-gray-200 "
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="bg-gray-50 border-b  dark:border-gray-700"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        1.
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Name
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Address
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        181919
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        1991818818
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        kkk@gmail.com
                      </td>
                      <td
                        className="px-6 py-4 text-black "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        12 Aug 2019
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Modal isopen={isOpen}>
        <AddProduct close={closeModal} />
      </Modal>
    </>
  );
}

export default DashboardTab;
