import React from "react";

function PageLoader() {
  return (
    <div class="w-full p-2 fixed h-screen pt-60 bg-white opacity-50 z-50">
      <div class="flex justify-center items-center gap-2">
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
      </div>
    </div>
  );
}

export default PageLoader;
