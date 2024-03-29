import React from "react";

const Hero = () => {
  return (
    <>
      <div
        class="bg-cover bg-center h-screen flex items-center justify-center 
        bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/Hero_Naboodah_Deskop_1440x810.jpg')]"
      >
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 class="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold leading-tight">
            Software & Technology
          </h1>
          <h2 class="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-4 leading-tight">
            For Heavy Building Materials
          </h2>
          <p class="text-white text-sm font-semibold sm:text-lg mt-4 leading-relaxed italic">
          Command Alkon is our partner. They understand our challenges and how they can support our business with their industry knowledge and specific solutions.
          </p>
          <p class="text-white text-sm sm:text-lg mt-4 leading-relaxed">
          Jason Gregory | Operations Manager, AL NABOODAH
          </p>
        </div>
      </div>

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
