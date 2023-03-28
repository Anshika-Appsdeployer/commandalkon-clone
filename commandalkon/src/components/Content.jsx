import React from "react";
import { GiMicrophone } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { RiRecycleLine } from "react-icons/ri";
import connex_eventimage from "../assets/connex_eventimage.png";
import connex from "../assets/connex.png";
import { GiRoad } from "react-icons/gi";
import { AiOutlineDotChart } from "react-icons/ai";
import { GiStoneWall } from "react-icons/gi";
import { GiTriangleTarget } from "react-icons/gi";
import amber from "../assets/Amber.png";
import Vicat from "../assets/Vicat.png";
import MartinMarietta from "../assets/MartinMarietta.png";
import Cemex from "../assets/cemex.png";
import Boral from "../assets/boral.png";
import Kiewit from "../assets/kiewit.png";

const Content = () => {
  return (
    <>
      <div>
        <h2 class="m-6 text-2xl md:text-4xl tracking-3 md:m-6 text-center text-gray-500 font-semibold">
          In the News
        </h2>
        <div class="flex flex-wrap justify-center">
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="h-20 bg-gray-100 flex justify-center items-center">
                <GiMicrophone className="text-3xl text-red-500" />
              </div>
              <div class="p-4">
                <p class="text-gray-600 tracking-2 text-lg">
                  John Pumpelly has joined Command Alkon’s Senior Leadership
                  Team as Chief Financial Officer. John brings over 30 years of
                  financial, strategic, and operational leadership experience
                  with technology and business services companies. Read the full
                  Press Release now!{" "}
                </p>
                <span className="cursor-pointer text-red-500">
                  Read Article &#x2192;
                </span>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="h-20 bg-gray-100 flex justify-center items-center">
                <GiMicrophone className="text-3xl text-red-500" />
              </div>
              <div class="p-4">
                <p class="text-gray-600 tracking-2 text-lg">
                  Command Alkon will introduce Customer Portal, a mobile
                  application that provides visibility in the materials delivery
                  cycle, at CONEXPO-CON/AGG 2023. Customer Portal allows
                  materials buyers to streamline operations, self-serve through
                  instant, reliable data sharing, and create, manage, and track
                  orders 24 hours a day.{" "}
                </p>
                <span className="cursor-pointer text-red-500">
                  Read Article &#x2192;
                </span>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="h-20 bg-gray-100 flex justify-center items-center">
                <GiMicrophone className="text-3xl text-red-500" />
              </div>
              <div class="p-4">
                <p class="text-gray-600 tracking-2 text-lg">
                  Command Alkon shares its commitment to support the heavy
                  building materials community with a refocus of its strategy in
                  the ready mix, aggregate, and asphalt markets through
                  solutions that help drive customers’ business. Check out this
                  Press Release to learn more!{" "}
                </p>
                <span className="cursor-pointer text-red-500">
                  Read Article &#x2192;
                </span>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="h-20 bg-gray-100 flex justify-center items-center">
                <GiMicrophone className="text-3xl text-red-500" />
              </div>
              <div class="p-4">
                <p class="text-gray-600 tracking-2 text-lg">
                  Brett Bertz has been added to the Senior Leadership Team as
                  Senior Vice President of Global Professional Services. Brett
                  will be responsible for designing and executing strategies
                  that ensure services are efficiently meeting and exceeding
                  customer needs during implementation. Get more details from
                  the full Press Release!{" "}
                </p>
                <span className="cursor-pointer text-red-500">
                  Read Article &#x2192;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-white max-w-2xl p-4">
          <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
            WHY COMMAND ALKON?
          </h1>
          <p class="m-4 text-gray-600 tracking-3 text-center">
            For specialized technology solutions that drive value across the
            heavy building materials supply chain – in ready mix and asphalt
            plants, at quarries and cement operations, on the roads with
            trucking providers, and on construction jobsites projects around the
            globe.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <TbSettingsAutomation class="text-6xl text-red-500 m-2" />
          <div class="flex items-center mb-4">
            <h2 class="m-3 text-lg text-gray-600 tracking-3 font-bold">
              AUTOMATION
            </h2>
          </div>
          <p class="text-gray-600 m-2 tracking-3">
            Replace manual processes and streamline your operations while
            savings money and driving growth every step of the way.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <AiOutlineCloudServer class="text-6xl text-red-500 m-2" />
          <div class="flex items-center mb-4">
            <h2 class="m-3 text-lg text-gray-600 tracking-3 font-bold">
              VISIBILITY
            </h2>
          </div>
          <p class="text-gray-600 m-2 tracking-3">
            Harness the problem-solving energies of your business and arm your
            team with insights into every aspect of the supply chain puzzle.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <BiGitBranch class="text-6xl text-red-500 m-2" />
          <div class="flex items-center mb-4">
            <h2 class="m-3 text-lg text-gray-600 tracking-3 font-bold">
              COLLABORATION
            </h2>
          </div>
          <p class="text-gray-600 m-2 tracking-3">
            Simplify rich data and analytics with supply chain partners to get
            insights and visibility into your future success.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
          <RiRecycleLine class="text-6xl text-red-500 m-2" />
          <div class="flex items-center mb-4">
            <h2 class="m-3 text-lg text-gray-600 tracking-3 font-bold">
              SIMPLIFICATION
            </h2>
          </div>
          <p class="text-gray-600 m-2 tracking-3">
            Minimize complex tasks while being efficient, effective, productive,
            and delivering the most value to your customer.
          </p>
        </div>
      </div>

      {/* <PRIMARY SECTION */}

      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={connex_eventimage}
            alt="connex_eventimage"
            class="w-full h-auto"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center">
          <img src={connex} alt="Image" class="w-64 mb-4" />
          <h2 class="m-2 text-xl text-gray-600 tracking-3 text-center font-bold mb-2">
            THE COLLABORATION PLATFORM FOR THE HEAVY BUILDING MATERIALS SUPPLY
            CHAIN
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-center">
            CONNEX connects contractors, project owners, and jobsite inspectors
            with their heavy building material suppliers and haulers to
            accomplish more.
          </p>
          <button class="bg-red-500 hover:bg-white border-2 hover:border-red-500 hover:text-red-500 text-white tracking-3 text-xs font-semibold py-4 px-6 rounded-full">
            EXPLORE CONNEX
          </button>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-white max-w-2xl p-4">
          <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
            HELPING MATERIALS BUYERS, SUPPLIERS & HAULERS
          </h1>
          <p class="m-4 text-gray-600 tracking-3 text-center text-sm">
            What kind of industry hero are you? Scroll to select your role and
            see how we can help your projects and operations.
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-4 m-4 p-4">
        <div
          class="w-full h-80 md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
          bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/Contractor_370x515.jpg')]"
        >
          <h2 class="text-2xl text-center text-white tracking-3 font-semibold mb-2">
            BUILDING CONTRACTOR
          </h2>
          <p class="text-white text-lg text-center mb-4">
            Building a Better World
          </p>
          <button class="bg-none text-white tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
            LEARN MORE
          </button>
        </div>
        <div
          class="w-full h-80 md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
          bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/Producer_370x515.jpg')]"
        >
          <h2 class="text-2xl text-center text-white tracking-3 font-semibold mb-2">
            READY MIX PRODUCER
          </h2>
          <p class="text-white text-lg text-center mb-4">
            Laying the Foundations
          </p>
          <button class="bg-none text-white tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
            LEARN MORE
          </button>
        </div>
        <div
          class="w-full h-80 md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
          bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/Supplier_370x515.jpg')]"
        >
          <h2 class="text-2xl text-center text-white tracking-3 font-semibold mb-2">
            BULK MATERIALS SUPPLIER
          </h2>
          <p class="text-white text-lg text-center mb-4">
            Supplying the Ingredients
          </p>
          <button class="bg-none text-white tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
            LEARN MORE
          </button>
        </div>
        <div
          class="w-full h-80 md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
          bg-[url('https://commandalkon.com/wp-content/uploads/2020/05/Hauler_370x515.jpg')]"
        >
          <h2 class="text-2xl text-center text-white tracking-3 font-semibold mb-2">
            BULK MATERIALS HAULER
          </h2>
          <p class="text-white text-lg text-center mb-4">Moving What Matters</p>
          <button class="bg-none text-white tracking-3 text-xs font-semibold border-2 py-4 px-6 rounded-full">
            LEARN MORE
          </button>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-white max-w-2xl p-4">
          <h1 class="text-2xl text-gray-600 tracking-3 text-center font-bold">
            OUR IMPACT
          </h1>
          <p class="m-4 text-gray-600 tracking-3 text-center text-sm">
            Command Alkon software and technology solutions have helped heavy
            building materials suppliers, haulers and buyers digitize, automate
            and improve their operations, projects and supply chain workflows.
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GiRoad className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              ROADWAY CONSTRUCTION PROJECT +$1B
            </h2>
          </div>
          <p class="text-gray-600 mt-4">
            Saved over $3M on aggregates and trucking by reducing ticket data
            entry errors and simplifying invoice reconciliation.{" "}
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <AiOutlineDotChart className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              LEADING READY MIX PRODUCER
            </h2>
          </div>
          <p class="text-gray-600 mt-4">
            Improved cubic yards per man hour by 5% and increased driver
            utilization by 20% through dispatch optimization.{" "}
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 border border-gray-300 rounded-md p-4 m-4">
          <div class="h-20 flex justify-center items-center">
            <GiStoneWall className="text-6xl text-red-500" />
          </div>
          <div class="flex items-center justify-center">
            <h2 class="text-gray-800 text-lg font-medium mx-2">
              LEADING AGGREGATES PROVIDER
            </h2>
          </div>
          <p class="text-gray-600 mt-4">
            Decreased fleet size and man hours by 14% with visibility through
            telematics and transportation management.{" "}
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-white max-w-2xl p-4">
          <div class="h-20 m-4 pt-6 flex justify-center items-center">
            <GiTriangleTarget className="text-6xl text-red-500" />
          </div>
          <h1 class="m-4 pb-6 px-10 text-lg text-gray-600 tracking-3 text-center font-bold">
            PROUDLY SERVING THE HEAVY WORK INDUSTRY FOR OVER 40 YEARS
          </h1>
        </div>
      </div>

      <div class="flex flex-col md:flex-row m-6">
        <div class="w-full md:w-1/2 flex justify-start items-start p-12 bg-gray-50">
          <img src={amber} alt="Image" class="w-full h-auto" />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50">
          <h2 class="m-2 text-2xl text-gray-600 tracking-3 text-right font-bold mb-2">
            CONTACT US TODAY
          </h2>
          <p class="m-2 text-sm text-gray-700 tracking-3 text-left">
            Ready to learn more? Get in touch and we’ll show you how to build
            amazing!
          </p>
          <button class="bg-red-500 hover:bg-white border-2 hover:border-red-500 hover:text-red-500 text-white tracking-3 text-xs font-semibold py-4 px-6 rounded-full">
            CONTACT US TODAY
          </button>
        </div>
      </div>

      <div class="overflow-hidden my-20 md:my-36">
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div class="elfsight-app-5ebe48d1-1fc5-4651-b6e3-8ff23d561fe6"></div>
        <div class="carousel flex transition-all duration-500">
          <img src={Vicat} alt="Vicat" class="w-full h-full object-cover" />
          <img
            src={MartinMarietta}
            alt="MartinMarietta"
            class="w-full h-full object-cover"
          />
          <img src={Cemex} alt="Cemex" class="w-full h-full object-cover" />
          <img src={Boral} alt="Boral" class="w-full h-full object-cover" />
          <img src={Kiewit} alt="Kiewit" class="w-full h-full object-cover" />
        </div>
        {/* <div class="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-2">
          <button
            class="carousel-btn bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            data-direction="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.293 10l3.147-3.146a.5.5 0 0 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L6.293 11H13.5a.5.5 0 1 0 0-1H6.293z"
              />
            </svg>
          </button>
          <button
            class="carousel-btn bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            data-direction="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M13.707 10l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708.708L13.707 9H6.5a.5.5 0 1 0 0 1h7.207z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Content;
