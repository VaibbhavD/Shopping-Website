import React, { useContext, useState } from "react";
import Context from "../../context/data/Context";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Header/navbar";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../firebase/FirebaseConfig";
import { AuthActions } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";

function Login() {
  const context = useContext(Context);
  const { mode, loader, Setloader } = context;
  const naviget = useNavigate();
  const dispatch = useDispatch();

  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const login = async (e) => {
    Setloader(true);
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(Auth, email, password);
      localStorage.setItem("User", JSON.stringify(user));
      dispatch(AuthActions.Login(email));

      toast.success("Signin Successfully");
      Setloader(false);
      naviget("/");
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        class="py-16 p-4 md:m-0 lg:mb-0 pb-44 lg:pb-16 "
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl z-50 ">
          <div
            class="hidden lg:block lg:w-1/2 bg-cover"
            // style="background-image:url('')"
          >
            <img
              src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-mobile-shopping-concept-a-man-and-woman-buy-things-in-the-png-image_8644437.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            class={`w-full p-8 lg:w-1/2  ${
              mode === "dark"
                ? "bg-gray-500 text-stone-100"
                : "bg-white text-gray-600"
            }`}
          >
            <h2 class="text-2xl font-semibold  text-center">Brand</h2>
            <p class="text-xl text-center">
              Welcome <span className="text-pink-500">back!</span>
            </p>
            <a
              href="#"
              class={`flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100 ${
                mode === "dark" ? "bg-gray-600" : ""
              }`}
            >
              <div class="px-4 py-3">
                <svg class="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 class={`px-4 py-3 w-5/6 text-center font-bold `}>
                Sign in with Google
              </h1>
            </a>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 lg:w-1/4"></span>
              <a href="#" class="text-xs text-center  uppercase">
                or login with email
              </a>
              <span class="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={login}>
              <div class="mt-4">
                <label class="block  text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  class="bg-gray-100  focus:outline-none focus:shadow-outline border text-gray-600 border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  placeholder="johnsena@gmail.com"
                  onChange={(e) => Setemail(e.target.value)}
                />
              </div>
              <div class="mt-4">
                <div class="flex justify-between">
                  <label class="block  text-sm font-bold mb-2">Password</label>
                  <Link class="text-xs hover:text-blue-800 ">
                    Forget Password?
                  </Link>
                </div>
                <input
                  class="bg-gray-100  focus:outline-none text-gray-600 focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  value={password}
                  placeholder="*******"
                  onChange={(e) => Setpassword(e.target.value)}
                />
              </div>
              <div class="mt-8">
                <button
                  type="submit"
                  class="bg-pink-600 text-white text-md font-bold flex justify-center cursor-pointer py-2 px-4 w-full rounded hover:bg-pink-500"
                  disabled={loader ? true : false}
                >
                  {loader ? <Loader /> : "Login"}
                </button>
              </div>
            </form>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <Link to="/signup" class="text-xs  uppercase">
                Create New ? <b className="hover:text-blue-600">sign up</b>
              </Link>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
