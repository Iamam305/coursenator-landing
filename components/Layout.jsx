import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#E8FCF9] w-full max-w-screen overflow-x-hidden">
      <div className="max-w-screen-xl  mx-auto "> 
        <Navbar />
        <main className="md:px-0 px-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
