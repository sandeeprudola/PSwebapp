import React from 'react';

const Page1 = () => {
  return (
    <>  
      <div className="relative items-center pt-20 min-h-screen pb-[30vw] w-full">
        
        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-28 md:pt-40 px-6 md:px-12">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#3333ff]">
              Personalized
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-[#1f0452]">
              Care for Your <br className="hidden sm:block" /> Speech & Hearing.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mt-6 md:mt-8">
            Empowering better communication through <br className="hidden md:block" />
            expert care and cutting-edge tech.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-6 md:mt-8 z-1">
            <button className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-[#771eae] to-[#a91fc5] rounded-full shadow-md text-white font-semibold transition-transform duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-[#a91fc5] to-[#771eae] rounded-full shadow-md text-white font-semibold transition-transform duration-300 hover:scale-105">
              Learn More
            </button>
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
