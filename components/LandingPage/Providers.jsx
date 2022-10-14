import Image from "next/image";
import React from "react";

const Providers = () => {
  return (
    <>
      <div className="hero w-full py-8 pb-20">
        <div className="hero-content w-full justify-evenly items-center flex-col lg:flex-row">
          <Image src="https://iili.io/ZXxP9a.md.png" className=" w-1/2" width={"500"} height={"645"}/>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold text-[#014949]">20+ Providers</h1>
            
            <button className="mt-16 btn border-none py-2 px-8 rounded-md text-white text-base font-semibold bg-gradient-to-r from-[#1CBADA] to-[#02DBB6] ">
            Browse All Providers
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}; 

export default Providers;
