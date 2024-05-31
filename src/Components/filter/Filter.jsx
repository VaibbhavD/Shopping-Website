import React, { useContext } from "react";
import Context from "../../context/data/Context";

function Filter() {
  const context = useContext(Context);
  const { mode } = context;

  return (
    <div>
      <div className="  mx-auto  ">
        <div
          className="p-5 drop-shadow-xl  "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="flex items-center justify-between ">
            <p className="font-medium">Filters</p>
            <button
              className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-red-500 font-bold text-sm border-b-2 rounded-md"
              // style={{ color: mode === "dark" ? "white" : "red" }}
            >
              Reset Filter
            </button>
          </div>
          <div className="  ">
            <div className="grid grid-cols-2 justify-center md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="jacket">Jacket</option>
                <option value="shirt">shirt</option>
                <option value="mobile">mobile</option>
                <option value="jacket">Jacket</option>
              </select>
              <select
                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Price
                </option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
