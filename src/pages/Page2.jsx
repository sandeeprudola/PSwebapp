import { Home, Search, LogIn, Menu } from "lucide-react";

export default function Page2() {
  return (
    <div className="relative min-h-screen pb-[30vw] w-full overflow-hidden">
      
      {/* Animated Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-6xl px-6 py-3 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/20 flex justify-between items-center z-50 animate-fade-in">
  
      <div className="flex items-center h-12">
  <img 
    src="pslogo.png" 
    alt="PS Speech and Hearing Clinic" 
    className="h-full pt-1.5 pr-1.5 w-auto object-contain scale-[2.5] sm:scale-[3] origin-left" 
    style={{ maxWidth: 'none' }}
  />
</div>



  {/* Icon Section */}
  <div className="flex gap-6 text-gray-800">
    {[Home, Search, LogIn, Menu].map((Icon, i) => (
      <Icon
        key={i}
        className="w-5 h-5 hover:scale-125 hover:text-[#a020f0] transition-all duration-200"
      />
    ))}
  </div>
</nav>


      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 pt-28 sm:pt-36 z-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Rediscover the <span className="bg-gradient-to-r from-[#ff00cc] to-[#3333ff] text-transparent bg-clip-text">Sounds</span> of <br />
          Life.
        </h1>

        {/* Image */}
        <div className="relative my-6">
          <img 
            src="https://azurecdn.widex.com/-/media/widex/global/images/products/allure/2306-widex-d-ric-rdt-doubletechblack-s-receiver-hearing-aid.png?rev=70d156892122462090cb61e8764af7f9&extension=webp&hash=A2288AC1E1BCC5A841BEFCE50CB9EE00
" 
            alt="Hearing Devices" 
            className="h-28 sm:h-40 md:h-48 object-contain mx-auto" 
          />
        </div>

        {/* Subtext */}
        <p className="text-gray-700 text-base sm:text-lg max-w-md sm:max-w-xl">
          Book a hearing test today and explore personalized care powered by modern audiology
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8">
          <button className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-[#a020f0] to-[#e75480] rounded-full shadow-lg text-white font-semibold transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
          <button className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-[#e75480] to-[#a020f0] rounded-full shadow-lg text-white font-semibold transition-transform duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Top Background Ellipse */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="w-[150vw] h-[150vw] sm:w-[120vw] sm:h-[100vw] blur-[100px] rounded-b-full opacity-30 " />
      </div>

      {/* Bottom Glow Ellipse (optional) */}
      {/* 
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-0 pointer-events-none">
        <div className="w-[120vw] h-[60vw] bg-gradient-to-tr from-[#A020F0] to-[#E75480] rounded-t-full blur-[100px] opacity-30" />
      </div> 
      */}
    </div>
  );
}
