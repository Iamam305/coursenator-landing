import Head from 'next/head'
import Image from 'next/image'
import FreeCourses from '../components/LandingPage/FreeCourses'
import Hero from '../components/LandingPage/Hero'
import LatestBlogs from '../components/LandingPage/LatestBlogs'
import Layout from '../components/layout'
import Providers from '../components/LandingPage/Providers'
import TopCourse from '../components/LandingPage/TopCourse'


export default function Home() {
  return ( 
    <>
    <Layout>
      <div>
      <Hero/>
      <Providers/>
      <TopCourse/>
      <FreeCourses/>
      <LatestBlogs/>
      </div>
    </Layout>
    
    </>
  )
}
