import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
    <div className="w-full flex flex-row bg-gray-800">
      <img
        src={logo}
        className="w-50 h-30 m-8 mt-4 object-contain"
        alt="logo"
      />
      <nav class="flex flex-row">
        <div class="w-full flex flex-row">
          <ul class="flex flex-row align-center justify-around text-white m-auto text-xs font-semibold">
            <li class="underline hover:underline-offset-8 px-2">PLATFORM</li>
            <li class="underline hover:underline-offset-8 px-2">SOLUTIONS</li>
            <li class="underline hover:underline-offset-8 px-2">RESOURCES</li>
            <li class="underline hover:underline-offset-8 px-2">EVENTS</li>
            <li class="underline hover:underline-offset-8 px-2">SUPPORT</li>
            <li class="underline hover:underline-offset-8 px-2">ABOUT</li>
          </ul>
          <div className="realtive flex flex-wrap justify-end">
          <button type="button"
          // text-white tracking-3 text-xs font-semibold hover:border-2 focus:ring-red-500 py-4 px-6 rounded-full
          className="text-white absolute top-0 right-0 mx-2 my-8 px-2 border-2 hover:bg-red-500 hover:border-none text-xs font-semibold rounded-full float-right">CONTACT</button>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
