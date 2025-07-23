import React, { useState } from "react";
import "./App.css"; 
import Navbar from "./components/Navbar";
import Page2 from "./pages/Page2";

function App() {
  return (
  <div className="relative min-h-screen bg-white overflow-hidden rounded-2xl">
      <Navbar/>
      {/* Gradient Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -z-0">
      <div className="w-[140vw] h-[120vh] bg-gradient-to-tr from-[#893aba] to-[#4b73e0] rounded-full blur-[100px]  opacity-80 translate-y-1/2"></div>
      </div>


      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-40 px-4">
        <h1 className="text-5xl font-extrabold leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6143d9] to-[#7f19df]">
            Personalized
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-[#1f0452]">Care for Your <br /> Speech & Hearing.</span>
        </h1>
        <p className="text-lg text-gray-600 mt-8">
          Empowering better communication through <br className="hidden md:block" />
          expert care and cutting-edge tech.
        </p>
      {/* gradient buttons */}
        <div className="flex justify-center items-center gap-6 mt-8 z-1">
      <button className="px-8 py-3 bg-gradient-to-r from-[#771eae] to-[#a91fc5] rounded-full shadow-md text-white font-semibold transition-transform duration-300 hover:scale-105">
        Get Started
      </button>
      <button className="px-8 py-3 bg-gradient-to-r from-[#a91fc5] to-[#771eae] rounded-full shadow-md text-white font-semibold transition-transform duration-300 hover:scale-105">
      Learn More
      </button>
    </div>
    </div>

      {/* page 2 */}

      {/* <Page2></Page2> */}
      


    </div>
  );
}


export default App;
