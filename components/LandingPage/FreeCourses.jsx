import Image from 'next/image';
import React from 'react'

const arr = [1, 2, 3];

const FreeCourses = () => {
  return (
    <div className='py-20'>
        <h2 className='text-[#046664] text-5xl font-bold'>100% Free</h2>
        <p className='p-2 text-lg text-[#046664]'>Free online courses from the world&apos;s top universities and companies.</p>

        <div className=" flex flex-wrap justify-around items-center md:px-28 py-10 ">
      {arr?.map((course, index) => (
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

      <div className='w-full flex justify-center'>

      <button className=" mt-20 btn border-none py-2 px-8  rounded-md text-white  font-semibold bg-gradient-to-r from-[#1CBADA] to-[#02DBB6] ">
        Browse Free courses
      </button>
      </div>

      </div>


    </div>
  )
}

export default FreeCourses