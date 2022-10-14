import Head from "next/head";
import Image from "next/image";
import FreeCourses from "../components/LandingPage/FreeCourses";
import Hero from "../components/LandingPage/Hero";
import LatestBlogs from "../components/LandingPage/LatestBlogs";
import Layout from "../components/Layout";
import CourseProviders from "../components/LandingPage/CourseProviders";
import TopCourse from "../components/LandingPage/TopCourse";
import {  useEffect, useState } from "react";


export default function Home() { 



  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <div>
          <Hero />
          <CourseProviders />
          <TopCourse />
          <FreeCourses />
          <LatestBlogs />
        </div>
      </Layout>
    </>
  );
}
