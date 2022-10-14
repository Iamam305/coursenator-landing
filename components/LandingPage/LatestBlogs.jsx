import Image from "next/image";
import React from "react";

const LatestBlogs = () => {
  return (
    <div>
      <h2 className="text-[#046664] text-5xl font-semibold">Bloginator</h2>
      <div className="flex justify-evenly  py-20 flex-wrap">
        <span className="relative flex flex-col justify-between w-full m-8  md:w-1/5  ">
          <h2 className="absolute text-xl text-[#014949] mb-4">
            WATCH: Toni Gonzaga's Releases Her Studio Version of "Roar!"
          </h2>
          <div className="mt-28">
            <Image width="250" height="250" src="https://iili.io/ZN8uup.png" />
            <p className="text-sm text-[#014949] mt-2">
              Unfortunately, no "SABAY-SABAY!!!"
            </p>
            <p className="text-sm text-[#014949] mt-2">May 25, 2022 09:19 PM</p>
          </div>
        </span>

        <span className="relative flex flex-col justify-between w-full m-8  md:w-1/5  ">
          <h2 className="absolute text-xl text-[#014949] mb-4">
            New Friday Flex; May 20, 2022
          </h2>
          <div className="mt-28">
            <Image width="250" height="250" src="https://iili.io/ZN8uup.png" />
            <p className="text-sm text-[#014949] mt-2">
              Real-time reactions to the newest singles! This week: Harry
              Styles, Conan Gray, Jason Derulo feat. Kodak Black, Em Beiho...
            </p>
            <p className="text-sm text-[#014949] mt-2">May 22, 2022 06:49 PM</p>
          </div>
        </span>

        <span className="relative flex flex-col justify-between w-full m-8  md:w-1/5  ">
          <h2 className="absolute text-xl text-[#014949] mb-4">
            WATCH: Toni Gonzaga's Releases Her Studio Version of "Roar!"
          </h2>
          <div className="mt-28">
            <Image width="250" height="250" src="https://iili.io/ZN8uup.png" />
            <p className="text-sm text-[#014949] mt-2">
              Unfortunately, no "SABAY-SABAY!!!"
            </p>
            <p className="text-sm text-[#014949] mt-2">May 25, 2022 09:19 PM</p>
          </div>
        </span>

        <span className="relative flex flex-col justify-between w-full m-8  md:w-1/5  ">
          <h2 className="absolute text-xl text-[#014949] mb-4">
            WATCH: Toni Gonzaga's Releases Her Studio Version of "Roar!"
          </h2>
          <div className="mt-28">
            <Image width="250" height="250" src="https://iili.io/ZN8uup.png" />
            <p className="text-sm text-[#014949] mt-2">
              Unfortunately, no "SABAY-SABAY!!!"
            </p>
            <p className="text-sm text-[#014949] mt-2">May 25, 2022 09:19 PM</p>
          </div>
        </span>

        <div className="w-full flex justify-center">
          <button className=" mt-20 btn border-none py-2 px-12  rounded-md text-white  font-semibold bg-gradient-to-r from-[#1CBADA] to-[#02DBB6] ">
            Read More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
