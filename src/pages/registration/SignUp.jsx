import React, { useContext, useRef, useState } from "react";
import Navbar from "../../Components/Header/navbar";
import Context from "../../context/data/Context";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Auth, fireDB, googleProvider } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../Components/Loader/Loader";
import { AuthActions } from "../../redux/AuthSlice";
import { useDispatch } from "react-redux";
import shoppe from "../../assets/Images/shoppe.png";

function SignUp() {
  const context = useContext(Context);
  const { mode, loader, Setloader, NewUserProfile } = context;

  const dispatch = useDispatch();

  const [firstname, Setfirstname] = useState("");
  const [lastname, Setlastname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const RepasswordRef = useRef();

  const SignUp = async (e) => {
    e.preventDefault();
    Setloader(true);
    if (password != RepasswordRef.current.value) {
      toast.error("Please Check Password!");
    }
    // Firebase Authentication
    try {
      const User = await createUserWithEmailAndPassword(Auth, email, password);
      localStorage.setItem("User", JSON.stringify(User));
      localStorage.setItem("Password", JSON.stringify(password));
      dispatch(AuthActions.Login(email));
      const UserDetails = {
        FirstName: firstname,
        LastName: lastname,
        email: email,
        uid: User.user.uid,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };
      const Userref = collection(fireDB, "Users");
      await addDoc(Userref, UserDetails);
      NewUserProfile(UserDetails);
      toast.success("SignUp Scccesfully");
      Setloader(false);
      Setemail("");
      Setlastname("");
      Setfirstname("");
      Setpassword("");
      RepasswordRef.current.value = "";
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
  };

  const handleGoogleSignIn = async () => {
    console.log("Hi");
    Setloader(true);
    try {
      const result = await signInWithPopup(Auth, googleProvider);
      const user = result.user;

      localStorage.setItem("User", JSON.stringify(user));
      dispatch(AuthActions.Login(user.email));

      const UserDetails = {
        FirstName: user.displayName.split(" ")[0],
        LastName: user.displayName.split(" ").slice(1).join(" "),
        email: user.email,
        uid: user.uid,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const userRef = collection(fireDB, "Users");
      await addDoc(userRef, UserDetails);

      // Assuming NewUserProfile is a function that updates the user profile in your app
      NewUserProfile(UserDetails);

      toast.success("SignUp successfully with Google");
      Setloader(false);
    } catch (error) {
      toast.error(error.message);
      Setloader(false);
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="py-14 pb-18 lg:pb-0 md:py-0"
        style={{ backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "" }}
      >
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          {/* left Section image */}
          <div
            class="hidden lg:block lg:w-1/2 bg-cover p-4 py-8"
            // style="background-image:url('')"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/459/314/large_2x/shopping-online-store-for-sale-mobile-ecommerce-3d-blue-background-shop-online-on-mobile-app-24-hours-shopping-cart-credit-card-minimal-store-online-device-3d-rendered-free-vector.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          {/*Right Section form*/}
          <div
            class={`w-full px-7 pb-5 pt-4 lg:w-1/2  ${
              mode === "dark"
                ? "bg-gray-500 text-stone-100"
                : "bg-white text-gray-600"
            }`}
          >
            <div className=" flex justify-center">
              <img src={shoppe} width={150} />
            </div>

            <p class="text-xl text-center">
              Create <span className="text-pink-600">New Account</span>
            </p>

            {/* Google Signup */}
            <a
              href="#"
              class={`flex items-center justify-center mt-1  rounded-lg shadow-md hover:bg-gray-100 hover:text-gray-700  ${
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
              <h1
                class={`px-4 py-3 w-5/6 text-center font-bold `}
                onClick={handleGoogleSignIn}
              >
                Sign up with Google
              </h1>
            </a>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 lg:w-1/4 "></span>
              <a href="#" class="text-xs text-center  uppercase">
                or Sign up with email
              </a>
              <span class="border-b w-1/5 lg:w-1/4 "></span>
            </div>

            {/* Input Section */}
            <form onSubmit={SignUp}>
              <div class="mt-3 flex gap-2 w-full">
                <div className="w-1/2">
                  <label class="block text-sm font-bold mb-2">First Name</label>
                  <input
                    class="bg-gray-100 text-gray-600  focus:outline-none focus:shadow-outline border border-gray-300 rounded w-full px-4 py-2 appearance-none"
                    type="text"
                    placeholder="John"
                    value={firstname}
                    required
                    onChange={(e) => Setfirstname(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label class="block text-sm font-bold mb-2">Last Name</label>
                  <input
                    class="bg-gray-100 text-gray-600  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 w-full px-4 appearance-none"
                    type="text"
                    placeholder="Sena"
                    value={lastname}
                    onChange={(e) => Setlastname(e.target.value)}
                  />
                </div>
              </div>
              <div class="mt-3">
                <label class="block  text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  class="bg-gray-100 text-gray-600  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="john@gmail.com"
                  value={email}
                  required
                  onChange={(e) => Setemail(e.target.value)}
                />
              </div>
              <div class="mt-3">
                <div class="flex justify-between">
                  <label class="block  text-sm font-bold mb-2">Password</label>
                </div>
                <input
                  class="bg-gray-100 text-gray-600  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => Setpassword(e.target.value)}
                />
              </div>
              <div class="mt-3">
                <div class="flex justify-between">
                  <label class="block  text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  class="bg-gray-100 text-gray-600  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  placeholder="********"
                  required
                  ref={RepasswordRef}
                />
              </div>
              <div class="mt-7 ">
                <button
                  type="submit"
                  class="bg-pink-600 text-white text-md font-bold flex justify-center cursor-pointer py-2 px-4 w-full rounded hover:bg-pink-500"
                  disabled={loader ? true : false}
                >
                  {loader ? <Loader /> : "Sign Up"}
                </button>
              </div>
            </form>
            <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 md:w-1/4"></span>
              <Link to={"/login"} class="text-xs  uppercase">
                If You Have Account ?{" "}
                <b className="hover:text-blue-600">Login</b>
              </Link>
              <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
