"use client";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers, FaCog, FaDatabase } from "react-icons/fa";
import { PiTreeStructure } from "react-icons/pi";
import { GiFamilyTree } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { Link } from "react-router-dom";

function Sidebar({ toggleBar }) {
  return (
    <>
      <div className="hidden md:block sticky">
        <div
          className={`flex flex-col ${
            toggleBar ? "w-14" : "w-[200]"
          }   h-full  pt-1 text-white transition-all duration-300 ease-in-out z-10 sidebar`}
        >
          <div className="overflow-y-auto overflow-x-hidden flex flex-col flex-grow m-2">
            <div className="flex flex-col flex-nowrap bg-white/10 rounded-xl space-y-1">
              <Link
                href="/"
                className="flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <IoSpeedometerSharp className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Home
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Home
                  </span>
                )}
              </Link>
              <Link
                to="/dashboard/collections/"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <FaUsers className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Collections
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Collections
                  </span>
                )}
              </Link>
              <Link
                href="/shahbaig-tree"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <GiFamilyTree className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    About
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    About
                  </span>
                )}
              </Link>

              <Link
                href="/family-tree"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <PiTreeStructure className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Contact
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Contact
                  </span>
                )}
              </Link>
            </div>

            {!toggleBar && (
              <p className="mb-3 px-5 py-3 hidden md:block text-center text-xs">
                Copyright @2025 1.0.0
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
