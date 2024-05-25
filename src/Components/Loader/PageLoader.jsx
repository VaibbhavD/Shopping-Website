import React from "react";

function PageLoader() {
  return (
    <div class="w-full p-2 bg-white opacity-75 z-50">
      <div class="flex gap-2">
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-pink-600"></div>
      </div>
    </div>
  );
}

export default PageLoader;
