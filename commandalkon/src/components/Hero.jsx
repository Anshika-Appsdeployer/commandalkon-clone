import React from "react";
import Hero_Desktop_1440x810 from "../assets/Hero_Desktop_1440x810.jpg";

const Hero = () => {
  return (
    <>
      <img src={Hero_Desktop_1440x810} className="w-full object-contain" />
      <span className="text-4xl">
        <strong>Software & Technology</strong>
      </span>
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM A READY MIX PRODUCER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM AN ASPHALT PRODUCER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM AN AGGREGATE CEMENT SUPPLIER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM A BULK MATERIAL HAULER
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/5">
          <div class="h-40 bg-red-500 flex justify-center items-center">
            <p class="text-white tracking-3 font-semibold text-xs cursor-pointer text-center">
              I AM A CONTRACTOR
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
