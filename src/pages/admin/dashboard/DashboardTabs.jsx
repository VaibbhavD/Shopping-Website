import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import myContext from "../../../context/data/Context";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import AddProduct from "../pages/AddProduct";
import Modal from "../../../Components/modal/Modal";
import PageLoader from "../../../Components/Loader/PageLoader";
import Loader from "../../../Components/Loader/Loader";
import UpdateProduct from "../pages/UpdateProduct";

function DashboardTab() {
  const context = useContext(myContext);
  const {
    mode,
    AllProducts,
    AllOrders,
    AllUsers,
    Editproduct,
    Deleteproduct,
    Pageloader,
  } = context;
  let [AddproductModal, SetAddproductModal] = useState(false);
  let [UpdateModal, SetUpdateModal] = useState(false);

  let products = [];
  if (AllProducts.cloths) {
    for (const k in AllProducts) {
      products = [...products, ...AllProducts[k]];
    }
  }

  const allUsers = AllUsers ? AllUsers : [];
  const allOrders = AllOrders ? AllOrders : [];

  console.log(allUsers);

  function closeModal() {
    SetAddproductModal(false);
    SetUpdateModal(false);
  }

  function OpenAddproModal() {
    SetAddproductModal(true);
  }
  function OpenUpdateModal() {
    SetUpdateModal(true);
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
                    onClick={OpenAddproModal}
                  >
                    {" "}
                    <div className="flex gap-2 items-center">
                      Add Product <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>
                <div className="relative overflow-x-auto md:px-10 md:min-h-40 ">
                  {Pageloader && <PageLoader />}
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead
                      className="text-xs border text-center border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
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
                    {products.map((product, index) => (
                      <tbody key={index} className="text-center">
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
                            {index + 1}
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-black whitespace-nowrap"
                          >
                            <img
                              className="w-16 m-auto"
                              src={product.imageUrl}
                              alt="img"
                            />
                          </th>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {product.title}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {product.price}
                          </td>
                          <td
                            className="px-4 py-4 text-center text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {product.category}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {product.date}
                          </td>
                          <td className="px-6 py-4">
                            <div className=" flex gap-2">
                              <div
                                className=" flex gap-2 cursor-pointer text-black "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                <div onClick={() => Deleteproduct(product)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-red-600 hover:scale-110"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </div>
                                <div
                                  onClick={() => {
                                    Editproduct(product);
                                    OpenUpdateModal();
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-blue-500 hover:scale-110"
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
                    ))}
                  </table>
                </div>
              </div>
            </TabPanel>
            {/* Order Details */}
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto pb-10 md:px-10">
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
                  {allOrders.map(
                    (
                      { PaymentId, Cart, addressInfo, date, bill, email },
                      index
                    ) => (
                      <tbody>
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
                            {PaymentId}
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-black whitespace-nowrap"
                          >
                            <img
                              className="w-16"
                              src={Cart[0].imageUrl}
                              alt="img"
                            />
                          </th>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {Cart[0].title}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            ₹{bill}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {Cart[0].category}
                          </td>

                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {addressInfo.FirstName}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {addressInfo.City + " " + addressInfo.State}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {addressInfo.ZipCode}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {addressInfo.PhoneNo}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {email}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {date}
                          </td>
                        </tr>
                      </tbody>
                    )
                  )}
                </table>
              </div>
            </TabPanel>
            {/* User Details */}
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
                        FirstName
                      </th>
                      <th scope="col" className="px-6 py-3">
                        LastName
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email{" "}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>
                    </tr>
                  </thead>
                  {allUsers &&
                    allUsers.map((user, index) => (
                      <tbody>
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
                            {index + 1}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {user.FirstName}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {user.LastName}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {user.email}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {user.date}
                          </td>
                          <td
                            className="px-6 py-4 text-black "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {user.uid}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Modal isopen={AddproductModal}>
        <AddProduct close={closeModal} />
      </Modal>
      <Modal isopen={UpdateModal}>
        <UpdateProduct close={closeModal} />
      </Modal>
    </>
  );
}

export default DashboardTab;
