import React from "react";

const brands = [
  { name: "Signia", logo: "/brands/signia.png" },
  { name: "Phonak", logo: "/brands/phonak.png" },
  { name: "Resound", logo: "/brands/resound.png" },
  { name: "Starkey", logo: "/brands/starkey.png" },
  { name: "Oticon", logo: "/brands/oticon.png" },
  { name: "Widex", logo: "/brands/widex.png" },
];

export default function TrustedBrandsScroller() {
  return (
    <div className="relative w-full overflow-hidden py-16 bg-gradient-to-b from-white via-[#f7f0ff] to-[#ece0ff]">
      {/* Center Heading */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="px-6 py-2 bg-white shadow-md rounded-full text-gray-800 font-medium text-sm sm:text-base">
          Trusted by Industry-Leading Brands
        </div>
      </div>

      {/* Vertical Scroller */}
      <div className="h-48 overflow-hidden relative flex flex-col items-center">
        <div className="animate-scroll-up space-y-10">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex justify-center items-center w-full opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top & Bottom Fades */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
