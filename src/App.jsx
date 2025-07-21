import React, { useState } from "react";
import "./App.css"; 
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden rounded-2xl">
      <Navbar/>
      {/* Gradient Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
  <div className="w-[180vw] h-[120vh] bg-gradient-to-tr from-[#893aba] to-[#4b73e0] rounded-3xl blur-[80px] opacity-80 translate-y-1/2"></div>
</div>


      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-40 px-4">
        <h1 className="text-5xl font-extrabold leading-snug">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6143d9] to-[#7f19df]">
            Personalized
          </span>{' '}
          Care for Your <br /> Speech & Hearing.
        </h1>
        <p className="text-lg text-gray-600 mt-8">
          Empowering better communication through <br className="hidden md:block" />
          expert care and cutting-edge tech.
        </p>
      </div>
    </div>
  );
}


export default App;
