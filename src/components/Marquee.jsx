import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/signia.png",
    "/widex.png",
    "/hearcom.png",
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;