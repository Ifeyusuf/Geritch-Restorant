import React from 'react';
import Navbar from "../components/navbar/Navbar";
import {Heading, About, Special,Chef, Intro, Laurel, Gallery, Findus} from "../container/home/index";
import Footer from "../container/footer/Footer"

const Home = () => {
  return (
    <>
  <Navbar/>
  <Heading/>
  <About/>
  <Special/>
  <Chef/>
  <Intro/>
  <Laurel/>
  <Gallery/>
  <Findus/>
  <Footer/>
    </>
  )
}

export default Home
