import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import React from "react";

function GuestPagesLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="justify-start mx-auto w-10/12 mt-5">{children}</div>
      <Footer />
    </>
  );
}

export default GuestPagesLayout;
