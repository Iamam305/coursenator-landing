import React, {  useEffect, useState } from "react";

import Layout from "../components/Layout";
import { SearchFilter } from "../Helpers/SearchFilter";

const SearchCourse = () => {

  const [searchRes, setSearchRes] = useState([]);
  const [SearchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    setLoading(true)
    const getData =  setTimeout(() => {
      SearchFilter(SearchTerm).then((res) => setSearchRes(res)).then(setLoading(false));
    }, 1000);

    return () => clearTimeout(getData)

  }, [SearchTerm])
  

  return (
    <div>
      <Layout>
        <div className="py-20">
          <h2 className="text-[#014949] text-5xl text-center">
            Search Among 10000+ Free Courses
          </h2>
          <input
            type="text"
            placeholder="Search Courses"
            className="input input-bordered w-full my-10"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        <div>
        {
          (searchRes && SearchTerm) ? searchRes?.map((res, i) => (
            <h2 className="text-[#014949] text-xl my-2 border-b p-2" key={i}>{i+1}. {res.name}</h2>
          )):(
           <p className="text-center text-xs">search for free courses</p> )
        
        }

        {SearchTerm && loading?(
           <h2 className="text-[#014949] text-4xl text-center">
           Loading...
         </h2>
        ):""}

       
      
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SearchCourse;
