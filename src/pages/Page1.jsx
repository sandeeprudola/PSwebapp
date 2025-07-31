import React from 'react';
import therapyImg from '/public/hero1.png'; // add your image here

const Page1 = () => {
  return (
    <>

      <div className="relative min-h-screen w-full pt-20 pb-[30vw] flex flex-col items-center justify-center">
        {/* Mobile-only Gradient Waterfall Background */}
        <div className="sm:hidden fixed top-0 left-0 w-full h-full  bg-gradient-to-b from-[#ffccff] via-[#e5ccff] to-[#ccccff] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center  md:pt-24 px-6 md:px-12">


          {/* Illustration for mobile only */}
          <img
            src={therapyImg}
            alt="Therapy"
            className="w-[90%] max-w-xs mb-0 sm:hidden"
          />

          {/* Heading */}
          <h1 className="text-[1.8rem] mb-2 sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">
              Personalized
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-[#1f0452]">
              Care for Your <br className="hidden sm:block" /> Speech & Hearing.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 sm:mt-6">
            "Empowering better communication through expert care & technology."
          </p>

          {/* Buttons */}
          <div className="flex flex-row sm:flex-row justify-center items-center gap-4 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-[#771eae] to-[#a91fc5] rounded-full shadow-lg text-white font-semibold transition-transform duration-300 hover:scale-105">
              Sign Up
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-[#a91fc5] to-[#771eae] rounded-full shadow-lg text-white font-semibold transition-transform duration-300 hover:scale-105">
              Login
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="mt-10 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-[#333]">
              <span className="text-[#1f0452]">Trusted</span>{' '}
              <span className="text-[#771eae]">By</span>
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
              <img src="/brands/signia.png" alt="Signia" className="h-10 sm:h-12 md:h-14" />
              <img src="/brands/widex.png" alt="Widex" className="h-10 sm:h-12 md:h-14" />
              <img src="/brands/hearcom.png" alt="Hear.com" className="h-10 sm:h-12 md:h-14" />
            </div>

            {/* Google Review Card */}
            <div className=" text-white p-4 rounded-2xl shadow-xl mt-6 w-[90%] max-w-sm mx-auto">
              <p className="text-sm font-medium">Arvind Jain</p>
              <p className="text-yellow-400 text-sm">★★★★★</p>
              <p className="text-xs mt-1">
                I'm very happy after purchasing hearing aid from PS Speech & Hearing Clinic...
              </p>
              <img src="/brands/google-logo.png" alt="Google" className="h-6 mt-3 mx-auto" />
            </div>
          </div>
        </div>

        {/* Gradient Ellipse Background */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0 pointer-events-none">
          <div className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] bg-gradient-to-tr from-[#A020F0] to-[#6d0dcd] blur-[100px] rounded-full opacity-30" />
        </div>
      </div>
    </>
  );
};

export default Page1;
