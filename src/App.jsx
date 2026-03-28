import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './index.css';
import Partical_BG from './components/Partical_BG'
import Cursor from './components/Cursor'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Loader from './components/Loader';
import Scroll_Indicator from './components/Scroll_Indicator'
import SmoothCursor from './components/SmoothCursor'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Partical_BG/>
      <SmoothCursor/>
      <Loader/>


      <Navbar/>
      <Scroll_Indicator/>

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </>
  )
};

export default App;
