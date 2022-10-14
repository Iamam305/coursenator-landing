import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar ">
        <div className="flex w-full justify-between md:justify-start">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <Image src={"https://iili.io/ZXk7UB.png"} width="250" height="100" />

          {/* mobile menu  */}
          <div className="inline-block md:hidden dropdown dropdown-end">
            <label
              tabIndex={0}
              className="p-3 m-1 rounded-md bg-[#014949] text-white ml-12 cursor-pointer"
            >
              Menu

              
            </label>
            <ul tabIndex={0} className="">
              <>
                <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                  <li className="">
                    <a>Blogs</a>
                  </li>

                  <li className="">
                    <a>Login</a>
                  </li>

                  <li className="p-3 m-1 rounded-md bg-[#014949] text-white  cursor-pointer">
                    <a className="p-0">Login/Signup</a>
                  </li>
                </ul>
              </>
            </ul>
          </div>
          {/* end mobile menu  */}
          <div className="hidden md:inline-block dropdown">
            <label
              tabIndex={0}
              className="flex justify-between items-center py-3 px-6 m-1 rounded-md bg-[#014949] text-white ml-12 cursor-pointer"
            >
              Courses

              <svg className="ml-2 "width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L8.87692 9L17 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
</svg>

            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a>Course 1</a>
              </li>
              <li>
                <a>Course 2</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden md:inline-block flex-none">
          <ul className="menu menu-horizontal p-0 text-lg text-[#014949] font-medium font-sans">
            <li className="">
              <a>Blogs</a>
            </li>

            <li className="">
              <a>Login</a>
            </li>

            <li className="p-3 m-1 rounded-md bg-[#014949] text-white  cursor-pointer">
              <a className="p-0">Login/Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
