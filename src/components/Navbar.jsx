import React from "react";
import logo from "../assets/logo.jpeg";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] flex items-center justify-between px-16">
      
      
      <img
        src={logo}
        alt="Logo"
        className="w-[70px] h-[70px] rounded-full border"
      />

      
      <ul className="flex items-center gap-8 text-[#035F69]">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">My Appointments</li>

        
        <li className="flex items-center gap-8 cursor-pointer">
          Our Service
          <FiSearch className="text-lg" />
        </li>
      </ul>

     
      <div className="flex items-center gap-4">
        <button className="w-[134px] h-[52px] rounded-[19px] bg-white text-[#035F69] border cursor-pointer">
          Sign In
        </button>

        <button className="w-[138px] h-[53px] rounded-[19px] bg-[#035F69] text-white cursor-pointer">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;