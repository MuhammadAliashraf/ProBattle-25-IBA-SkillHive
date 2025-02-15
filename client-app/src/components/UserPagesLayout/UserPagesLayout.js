import React from "react";

function UserPagesLayout({ children }) {
  // Corrected 'children'
  //remove h-[100vh] Then Footer Take the height of According To Content
  return (
    <div className="justify-start mt-5">
      {children}
    </div>
  ); // Removed {}
}

export default UserPagesLayout;
