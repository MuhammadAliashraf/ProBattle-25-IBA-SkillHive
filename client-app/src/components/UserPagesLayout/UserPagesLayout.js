
import Sidebar from "components/Sidebar/Sidebar";
import UserNavbar from "components/UserNavbar/UserNavbar";
import React, { useState } from "react";

function UserPagesLayout({ children }) {
  const [toggleBar, setToggleBar] = useState(false);
  // Corrected 'children'
  //remove h-[100vh] Then Footer Take the height of According To Content
  return (
    <div className="bg-slate-500 h-full">
      <UserNavbar toggleBar={toggleBar} setToggleBar={setToggleBar} />
      <div className="flex">
        <Sidebar toggleBar={toggleBar}></Sidebar>
        <div className="justify-start mx-auto">{children}</div>
      </div>
    </div>
  ); // Removed {}
}

export default UserPagesLayout;
