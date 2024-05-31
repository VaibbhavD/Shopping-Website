import React, { useContext, useState } from "react";
import Navbar from "../../Components/Header/navbar";
import Context from "../../context/data/Context";
import Modal from "../../Components/modal/Modal";
import UpdateProfile from "./UpdateProfile";
import PageLoader from "../../Components/Loader/PageLoader";

const ProfilePage = () => {
  const context = useContext(Context);
  const { mode, UserProfile, VerifyEmail, Pageloader } = context;

  const [isopen, Setisopen] = useState(false);
  const OpenCheckoutpage = () => {
    Setisopen(true);
  };
  const CloseCheckoutpage = () => {
    Setisopen(false);
  };

  return (
    <>
      {isopen && (
        <Modal isopen={isopen}>
          <UpdateProfile close={CloseCheckoutpage} />
        </Modal>
      )}
      <Navbar />
      {Pageloader && <PageLoader />}
      <div
        className="container mx-auto pb-12 lg:px-72"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className=" p-3 shadow-sm rounded-sm">
          <div className="flex flex-col items-center">
            <div className="image overflow-hidden w-32 h-32 rounded-full">
              <img
                className="w-full h-full object-cover"
                src="https://tse4.mm.bing.net/th?id=OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH&pid=Api&P=0&h=180"
                alt="Profile"
              />
            </div>
            <h1 className=" font-bold text-xl leading-8 my-1">
              {UserProfile.FirstName + " " + UserProfile.LastName}
            </h1>
          </div>
        </div>

        <div className=" p-3 shadow-sm rounded-sm mt-2 lg:pl-32">
          <div className="flex items-center space-x-2 font-semibold  leading-8">
            <span className="text-green-500">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">About</span>
          </div>
          <div className="">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">{UserProfile.FirstName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">{UserProfile.LastName}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">
                  <p>{UserProfile.email}</p>
                  <div className="mt-4">
                    <button
                      className="p-2 text-white text-sm font-semibold rounded-lg bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline focus:bg-green-700 hover:shadow-xs"
                      onClick={() => VerifyEmail()}
                    >
                      Verify Email
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">{UserProfile.PhoneNo}</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" p-3 shadow-sm rounded-sm mt-2  lg:pl-32">
          <div className="flex items-center space-x-2 font-semibold  leading-8">
            <span className="text-green-500">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">Address</span>
          </div>
          <div className="">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Address Line</div>
                <div className="px-4 py-2">{UserProfile.AddressLine}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">City</div>
                <div className="px-4 py-2">{UserProfile.City}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">State</div>
                <div className="px-4 py-2">{UserProfile.State}</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Zip Code</div>
                <div className="px-4 py-2">{UserProfile.ZipCode}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            className="block  text-white text-sm font-semibold rounded-lg bg-pink-500 hover:bg-pink-400 focus:outline-none focus:shadow-outline focus:bg-pink-700 hover:shadow-xs p-3"
            onClick={OpenCheckoutpage}
          >
            Update User Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
