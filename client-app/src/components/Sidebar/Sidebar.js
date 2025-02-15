"use client";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaUsers, FaCog, FaDatabase } from "react-icons/fa";
import { PiTreeStructure } from "react-icons/pi";
import { GiFamilyTree } from "react-icons/gi";
import { MdTimeline } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

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
              <a
                href="/"
                className="flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <IoSpeedometerSharp className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                )}
              </a>
              <a
                href="/members"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <FaUsers className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Members
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Members
                  </span>
                )}
              </a>
              <a
                href="/shahbaig-tree"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <GiFamilyTree className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Shahbaig Tree
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Shahbaig Tree
                  </span>
                )}
              </a>

              <a
                href="/family-tree"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <PiTreeStructure className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Family Tree
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Family Tree
                  </span>
                )}
              </a>

              <div className=" group text-sm">
                <div className=" flex flex-row items-center group rounded-mda h-11 focus:outline-none hover:bg-[#EFBC49]  border-l-4 border-transparent">
                  <span className="inline-flex justify-center items-center ml-2">
                    <FaDatabase className="" />
                  </span>
                  {!toggleBar ? (
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Records
                    </span>
                  ) : (
                    <div className="hidden absolute group-hover:block left-12 pl-2">
                      <div className="bg-white/10 rounded-xl text-sm tracking-wide truncate ">
                        <a
                          href="/records/education"
                          className="block px-11 py-2 rounded-md hover:bg-[#EFBC49] "
                        >
                          Education
                        </a>
                        <a
                          href="/records/medical"
                          className="block px-11 py-2 rounded-md hover:bg-[#EFBC49] "
                        >
                          Medical
                        </a>
                        <a
                          href="/records/other"
                          className="block px-11 py-2 rounded-md hover:bg-[#EFBC49] "
                        >
                          Others
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                {!toggleBar && (
                  <div className="hidden group-hover:block ">
                    <a
                      href="/records/education"
                      className="block px-9 py-2 rounded-md hover:bg-[#EFBC49] "
                    >
                      Education
                    </a>
                    <a
                      href="/records/medical"
                      className="block px-9 py-2 rounded-md hover:bg-[#EFBC49] "
                    >
                      Medical
                    </a>
                    <a
                      href="/records/other"
                      className="block px-9 py-2 rounded-md hover:bg-[#EFBC49] "
                    >
                      Others
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div>
              <a
                href="/sales"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <MdTimeline className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Timeline
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Timeline
                  </span>
                )}
              </a>

              <a
                href="/settings"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <GrGallery className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Gallery
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Gallery
                  </span>
                )}
              </a>
              <a
                href="/settings"
                className=" flex flex-row items-center group rounded-md h-11 focus:outline-none hover:bg-[#EFBC49] border-l-4 border-transparent"
              >
                <span className="inline-flex justify-center items-center ml-2">
                  <FaCog className="" />
                </span>
                {!toggleBar ? (
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                ) : (
                  <span className="hidden absolute group-hover:block left-full bg-white/10 px-3 py-1 rounded-full text-sm tracking-wide truncate">
                    Settings
                  </span>
                )}
              </a>
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
