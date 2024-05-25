import React from "react";

function PageLoader() {
  return (
    <div class="w-full h-screen fixed top-0 left-0 bg-white opacity-75 z-50">
      <div class="flex md:mt-80 justify-center gap-2">
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
      </div>
    </div>
  );
}

export default PageLoader;
