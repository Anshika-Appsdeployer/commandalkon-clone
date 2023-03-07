import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <nav className="w-full flex align-center justify-end bg-gray-800">
      <div className="flex justify-end mx-auto px-4 sm:px-6 lg:px-8 m-0">
        <div className="flex justify-end m-0 px-4">
          <div className="w-full flex justify-end">
            <a
              href="#"
              className="px-6 text-xs font-semibold text-white hover:text-orange-700"
            >
              CLIENT LOGIN 
            </a>
            
            <div className="text-xs font-semibold text-white hover:text-orange-700">
              REGION
              <select name="regions" id="regions">
                <option value="latam">LATAM</option>
                <option value="brazil">BRAZIL</option>
                <option value="ociania">OCIANIA</option>
                <option value="emea">EMEA</option>
                <option value="netherlands">NETHERLANDS</option>
                <option value="france">FRANCE</option>
              </select>
            </div>
            <BiSearch className="mx-2 cursor-pointer hover:text-orange-700 text-white float-right" />
            <hr className="m-2" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
