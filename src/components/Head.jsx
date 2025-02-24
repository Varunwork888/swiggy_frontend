import React from "react";
import logo from "../assets/logo.png";
import { SlArrowDown } from "react-icons/sl";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import './head.css';

export default function Head() {
  return (
    <div>
      <nav className="flex h-[80px] items-center  overflow-hidden shadow-navbar">
        <img
          className="w-[80px] h-[80px] bg-white ml-[150px] transition-transform duration-300 hover:scale-110"
          src={logo}
          alt="swiggy-logo"
        />
        <h3 className="ml-[27px]">Other Kashipur, Uttarakhand 244713, India</h3>
        <SlArrowDown className="text-[12px] ml-[7px] text-orange-500" />

        <div className="w-[50%] h-full ml-[40px] flex justify-between font-bold">
          <div className="flex items-center  gap-[9px] hover:text-orange-500">
            <PiSuitcaseSimpleLight className="text-[20px] stroke-[4px] " />
            <h3>Swiggy Corporate</h3>
          </div>
          <div className="flex items-center  gap-[9px] hover:text-orange-500">
            <CiSearch className="text-[20px] stroke-[1.5px]" />
            <h3>Search</h3>
          </div>
          <div className="flex items-center  gap-[9px] hover:text-orange-500">
            <TbRosetteDiscount className="text-[20px]" />
            <h3>Offers</h3>
          </div>
          <div className="flex items-center  gap-[9px] hover:text-orange-500">
            <IoHelpBuoyOutline className="text-[20px]" />
            <h3>Help</h3>
          </div>
          <div className="flex items-center  gap-[9px] hover:text-orange-500">
            <FaRegUser className="text-[20px]" />
            <h3>Sign In</h3>
          </div>
          <div className="flex items-center  gap-[9px] hover:text-orange-500">
            <CgShoppingCart className="text-[20px]" />
            <h3>Cart</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
