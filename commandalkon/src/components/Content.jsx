import React from "react";
import { GiMicrophone } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { GrCloudSoftware } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import { RiRecycleLine } from "react-icons/ri";
import connex_eventimage from "../assets/connex_eventimage.png";
import connex from "../assets/connex.png";
import { GiRoad } from "react-icons/gi";

const Content = () => {
  return (
    <>
      <div>
        <h2 class="text-2xl md:text-4xl tracking-3 md:m-6 text-center text-gray-500 font-semibold">
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
          <GrCloudSoftware class="text-6xl text-red-500 m-2" />
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
          <img src={connex_eventimage} alt="Image" class="w-full h-auto" />
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
          <button class="bg-red-500 text-white tracking-3 text-xs font-semibold hover:border-2 focus:ring-red-500 py-4 px-6 rounded-full">
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
          class="w-full md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
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
          class="w-full md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
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
          class="w-full md:w-1/4 bg-cover bg-center flex flex-col justify-center items-center
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

      <div class="flex justify-center">
        <div class="border border-gray-300 rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <svg class="w-8 h-8 fill-current text-gray-500" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 10c0 3.866 3.134 7 7 7s7-3.134 7-7c0-3.866-3.134-7-7-7S2 6.134 2 10zm2 0a5 5 0 119.468 2.24l.945.518 1.49-2.727-.944-.518A5 5 0 014 10zm3 0a2 2 0 113.732 1.146l-.965 1.765a4 4 0 10-4.438 0l-.964-1.765A2 2 0 017 10z"
              />
            </svg>
            <h2 class="text-gray-800 text-lg font-medium mx-2">Title</h2>
          </div>
          <p class="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis lectus ut enim convallis finibus vel vel turpis. Donec vitae
            erat ipsum.{" "}
          </p>
        </div>

        <div class="border border-gray-300 rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
            <svg class="w-8 h-8 fill-current text-gray-500" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 10c0 3.866 3.134 7 7 7s7-3.134 7-7c0-3.866-3.134-7-7-7S2 6.134 2 10zm2 0a5 5 0 119.468 2.24l.945.518 1.49-2.727-.944-.518A5 5 0 014 10zm3 0a2 2 0 113.732 1.146l-.965 1.765a4 4 0 10-4.438 0l-.964-1.765A2 2 0 017 10z"
              />
            </svg>
            <h2 class="text-gray-800 text-lg font-medium mx-2">Title</h2>
          </div>
          <p class="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis lectus ut enim convallis finibus vel vel turpis. Donec vitae
            erat ipsum.{" "}
          </p>
        </div>

        <div class="border border-gray-300 rounded-md p-4 m-4">
          <div class="flex items-center justify-center">
          <GiRoad className="text-lg" />
            <svg class="w-8 h-8 fill-current text-gray-500" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 10c0 3.866 3.134 7 7 7s7-3.134 7-7c0-3.866-3.134-7-7-7S2 6.134 2 10zm2 0a5 5 0 119.468 2.24l.945.518 1.49-2.727-.944-.518A5 5 0 014 10zm3 0a2 2 0 113.732 1.146l-.965 1.765a4 4 0 10-4.438 0l-.964-1.765A2 2 0 017 10z"
              />
            </svg>
            <h2 class="text-gray-800 text-lg font-medium mx-2">Title</h2>
          </div>
          <p class="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis lectus ut enim convallis finibus vel vel turpis. Donec vitae
            erat ipsum.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
