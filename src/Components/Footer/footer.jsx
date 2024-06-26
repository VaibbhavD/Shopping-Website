import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/Context";
import shoppe from "../../assets/Images/shoppe.png";

export default function Footer() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <footer
      className={`text-stone-100 body-font  ${
        mode === "dark" ? "bg-gray-700" : "bg-gray-400"
      }`}
      // style={{
      //   backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
      //   color: mode === "dark" ? "white" : "",
      // }}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="flex   text-center justify-center md:text-lg text-xs order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10 ">
              <li>
                <Link
                  to={"/"}
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/order"}
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Order
                </Link>
              </li>
              <li>
                <a
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Local For Vocal
                </a>
              </li>
              <li>
                <Link
                  to={"/cart"}
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Cart
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest mb-3 uppercase"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Customer Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/returnpolicy"}
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/aboutus"}
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://my-portfolio-puxr.vercel.app/"
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Contact Us
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-stone-100 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-80 m-auto px-4">
        <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
      </div>

      <div
        className="bg-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div
          className={`container px-5  mx-auto flex items-center sm:flex-row flex-col ${
            mode === "dark" ? "bg-gray-700" : "bg-gray-400"
          }`}
        >
          <Link to={"/"} className="pb-5">
            <img src={shoppe} width={150} />
          </Link>
          <p
            className="text-sm text-white sm:ml-6 sm:mt-0 mt-4"
            // style={{ color: mode === "dark" ? "white" : "white" }}
          >
            © 2024 Vaibhav D —
            <a
              href="https://my-portfolio-puxr.vercel.app/"
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank"
              // style={{ color: mode === "dark" ? "white" : "white" }}
            >
              www.Vaibhav_D.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6 text-blue-700"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6 text-blue-400"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6 text-red-500"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
