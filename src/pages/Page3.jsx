import React from 'react';

export default function Page3() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white overflow-hidden">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#3b0a6e]">
        Find Your Voice with <br />
        <span className="bg-gradient-to-r from-[#6d28d9] to-[#3b82f6] text-transparent bg-clip-text">
          Personalized Speech Therapy
        </span>
      </h1>

      {/* Illustration */}
      <div className="mt-10 mb-8">
        <img
          src="/public/3.png" // Replace with your correct image path
          alt="Speech Therapy Illustration"
          className="w-[280px] sm:w-[350px] md:w-[420px] mx-auto"
        />
      </div>

      {/* Subtext */}
      <p className="text-gray-700 text-base sm:text-lg max-w-md">
        Tailored therapy for clearer speech and confident expression.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-8 flex-wrap justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-[#e75480] to-[#6d28d9] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-[#6d28d9] to-[#e75480] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
          Learn More
        </button>
      </div>
      {/* Gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
  <div className="w-[80vw] h-[40vw] bg-gradient-to-tr from-[#a020f0] to-[#6d0dcd] blur-[120px] opacity-40 rounded-full" />
</div>




    </div>
  );
}
