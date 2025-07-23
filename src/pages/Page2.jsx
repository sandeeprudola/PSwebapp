import { Home, Search, LogIn, Menu } from "lucide-react";

export default function Page2() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#e3d1fc] via-white to-[#e9dcff] flex flex-col items-center justify-start overflow-hidden rounded-[2rem] shadow-xl border border-gray-200">
      
      {/* Navbar */}
      <nav className="w-[95%] mt-4 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full shadow-md flex justify-between items-center z-10 border border-white/30">
        <img src="/your-logo.png" alt="Logo" className="h-10" />

        <div className="flex gap-6 text-gray-700">
          <Home className="w-5 h-5" />
          <Search className="w-5 h-5" />
          <LogIn className="w-5 h-5" />
          <Menu className="w-5 h-5" />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-20 z-10">
        {/* Heading with gradient word */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
          Rediscover the <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-transparent bg-clip-text">Sounds</span> of <br />
          Life.
        </h1>

        {/* Image in center */}
        <div className="relative my-6">
          <img src="/hearing-device.png" alt="Hearing Devices" className="h-32 sm:h-40 object-contain mx-auto" />
        </div>

        {/* Subtext */}
        <p className="text-gray-700 text-md sm:text-lg max-w-xl">
          Book a hearing test today and explore personalized care powered by modern audiology
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-[#a020f0] to-[#e75480] rounded-full shadow-lg text-white font-semibold transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-[#e75480] to-[#a020f0] rounded-full shadow-lg text-white font-semibold transition-transform duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Background Glow Ellipse */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div className="w-[120vw] h-[60vh] bg-gradient-to-tr from-[#893aba] to-[#4b73e0] rounded-full blur-[100px] opacity-70"></div>
      </div>
    </div>
  );
}
