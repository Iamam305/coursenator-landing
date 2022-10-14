import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full hero py-8">
        <div className="hero-content w-full flex-col justify-end md:flex-row-reverse">
          <Image
            src="https://iili.io/Zh2n6J.png"
            className="max-w-sm rounded-full"
            width='350'
            height='350'
          />
          <div className="md:w-2/3 pr-4"> 
            <h1 className="text-5xl font-semibold text-[#014949]">
              Your Personal Course <br /> Navigator
            </h1>
            <Link href={'/SearchCourse'} > 
            <button  className="mt-16 btn border-none p-2 rounded-md text-white text-lg font-semibold bg-gradient-to-r from-[#1CBADA] to-[#02DBB6] w-2/3">
             Search 10,428 courses
            </button>
            </Link>

            <ul className="flex  flex-wrap mt-10">
              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Computer Science</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Art & Design</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Health & Medicine</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Mathematics</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Education</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Engineering</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Business</p>
              </li>

              <li className="flex justify-between items-center text-lg font-bold  p-2 m-2 break-before-avoid">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="14.5" r="14.5" fill="black" />
                </svg>

                <p className="leading-6 border-b-[3px] border-[#0E5124] py-2 ml-2">Humanities</p>
              </li>

             
            </ul>
          </div>
        </div>

      
      </div>
      <div className="flex flex-col  md:flex-row justify-around items-center py-20">
            <div className="flex flex-col justify-center items-center my-4">
                <span className="w-24 h-24 border-4 rounded-lg border-[#014949]"></span>
                <h2 className="mt-4">ABCD</h2>
            </div>

            <div className="flex flex-col justify-center items-center my-4">
                <span className="w-24 h-24 border-4 rounded-lg border-[#014949]"></span>
                <h2 className="mt-4">ABCD</h2>

            </div>

            <div className="flex flex-col justify-center items-center my-4">
                <span className="w-24 h-24 border-4 rounded-lg border-[#014949]"></span>
                <h2 className="mt-4">ABCD</h2>

            </div>
        </div>
    </>
  );
};

export default Hero;
