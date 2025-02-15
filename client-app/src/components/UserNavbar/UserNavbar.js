import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";

import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { BsMenuButtonFill } from "react-icons/bs";

import { RiMenuFill } from "react-icons/ri";

export default function UserNavbar({ toggleBar, setToggleBar }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => setShowDropdown(!showDropdown);

  const handleToggleBar = () => {
    setToggleBar(!toggleBar);
  };

  return (
    <>
      <div className="hidden lg:flex gap-2 w-full text-white p-2">
        <div className="flex items-center justify-center transition-transform duration-500 ease-in-out px-2 w-[250px]">
          <img
            src="/images/safarnama-white.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center justify-between py- w-full">
          <div className="flex items-center gap-3">
            <div className=" text-xl">
              <RiMenuFill
                className=" hover:cursor-pointer"
                onClick={() => handleToggleBar()}
              />
            </div>
            <input />
            {/* <Input className="rounded-full" /> */}
          </div>
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="flex items-center gap-2 text-[12px]  hover:cursor-pointer">
                <div className="bg-white/10 rounded-full p-2 text-lg">
                  <FaRegUser className="" />
                </div>
                <span>demo99@mail...</span>
                <IoMdArrowDropdown className=" text-xl ml-2" />
              </div>
              <div className="absolute hidden group-hover:block top-full right-0 w-max-14 bg-white/10 shadow-lg rounded-md z-10">
                <a
                  href="/profile"
                  className="block px-5 py-2 rounded-md hover:bg-[#EFBC49]"
                >
                  Profile
                </a>
                <a
                  href="/forgot-password"
                  className="block px-5 py-2 rounded-md hover:bg-[#EFBC49]"
                >
                  Forgot Password
                </a>
                <a
                  href="/logout"
                  //   onClick={() => handleLogout()}
                  className="block px-5 py-2 rounded-md hover:bg-[#EFBC49]"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:hidden flex flex-col gap-2 justify-between ">
        <div className="flex justify-between items-center px-2 pb-2">
          <a
            href="/"
            className="flex items-center justify-center text-3xl hover:cursor-pointer"
          >
            <span>AFGHAN ATTIRE</span>
          </a>
          <div className="hover:cursor-pointer" onClick={handleDropdown}>
            <BsMenuButtonFill />
          </div>
        </div>
        {showDropdown && (
          <div className="absolute top-full flex flex-col gap-2 bg-[#2B2B2B] w-full p-3 rounded z-30">
            <a
              href="/"
              className="flex items-center border border-[#999] rounded-full text-[12px] px-3 py-2"
            >
              <span>Home</span>
            </a>
            <a
              href="shop"
              className="flex items-center border border-[#999] rounded-full text-[12px] px-3 py-2 "
            >
              <span>Collaborations</span>
            </a>
            <a
              href="shop"
              className="flex items-center border border-[#999] rounded-full text-[12px] px-3 py-2 "
            >
              <span>About</span>
            </a>
            <a
              href="about"
              className="flex items-center border border-[#999] rounded-full text-[12px] px-3 py-2 "
            >
              <span>Contact</span>
            </a>{" "}
          </div>
        )}
      </div>
    </>
  );
}
