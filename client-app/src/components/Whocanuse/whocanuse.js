import React from "react";
const PosUSerRoles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-4 px-6 py-20">
      <div className="flex justify-center items-center">
        {/* <img
          src={Layer51}
          alt="Example Image"
          className="w-full lg:max-w-lg  rounded-lg shadow-md"
        /> */}
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="m-0 p-0 text-red-600 font-bold">
          Who Can Use Our Index POS
        </h1>
        <h1 className="text-3xl text-black font-bold w-full md:w-[55%] leading-10 ">
          Our Software Capable for wide range of Business and Industries
        </h1>
        <ul className="list-none list-inside grid  sm:grid-cols-2 md:grid-cols-2  gap-5 pt-5">
          <div className="flex   gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>Retail Stores</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>Restaurants and Cafes</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>eCommerce Business</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>Salons and Spas</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>Grocery Stores</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>Convenience Stores</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>Hospitality and Hotels</li>
          </div>
          <div className="flex  gap-2 ">
            {/* <img src={Layer49} alt="" /> */}
            <li>And Many More..</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PosUSerRoles;
