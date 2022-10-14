import Image from "next/image";
import React from "react";

const arr = [1, 2, 3, 4, 5, 6];
const TopCourse = () => {
  return (
    <>
    <div className="relative z-10 flex flex-wrap justify-around items-center md:px-28 py-20 bg-[#046664]">
      {arr.map((course, index) => (
        <div className="md:w-[calc(33%_-_10px)] flex justify-center py-8" key={course}>
          <div className="card w-60  bg-base-100 shadow-xl" >
            <>
              <Image
                src="https://iili.io/ZNFBHJ.png"
                alt="img"
                width={"240"}
                height={"160"}
              />
            </>
            <div className="card-body p-4">
              <h2 className="card-title text-[#046664] ">
                Cloud Computing Google Cloud
              </h2>

              <div className="card-actions w-full mt-14 mb-3">
                <button className=" btn border-none p-2  rounded-md text-white  font-semibold bg-gradient-to-r from-[#1CBADA] to-[#02DBB6] w-full">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}


      <button className=" mt-20 btn border-none py-2 px-8  rounded-md text-white  font-semibold bg-gradient-to-r from-[#1CBADA] to-[#02DBB6] ">
        Browse Top courses
      </button> 

      <div className="w-screen h-full -z-10 absolute bg-[#046664] "></div>
    </div>
    </>

  );
};

export default TopCourse;
