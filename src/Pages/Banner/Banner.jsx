import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  const [activeButton, setActiveButton] = useState(null);

  const banners = [banner1, banner2, banner3];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      {banners.map((banner, index) => (
        <div key={index} className="relative mt-10">
          <img src={banner} className="w-full h-auto object-cover" />

          {/* Buttons at bottom-left of image, functionality preserved */}
          <div className="absolute lg:bottom-20 bottom-7 lg:left-4 left-28 flex flex-col lg:flex-row lg:gap-4 gap-7 z-50">
            <button
              onClick={() => setActiveButton(1)}
              className={`lg:btn lg:btn-outline lg:border-2 border-1 border-[#b8ce78] rounded-full lg:px-6 lg:py-2 lg:text-lg text-[10px] md:text-xl transition-all py-1 px-2 lg:w-fit w-24 ${
                activeButton === 1
                  ? "bg-[#b8ce78] text-[#361c1c]"
                  : "hover:bg-[#caeb66] hover:text-[#361c1c]"
              }`}
            >
              Track Your Parcel
            </button>
            <button
              onClick={() => setActiveButton(2)}
              className={`lg:btn lg:btn-outline lg:border-2 border-1 border-[#b8ce78] rounded-full lg:px-6 lg:py-2 lg:text-lg text-[10px] md:text-xl transition-all py-1 px-2 lg:w-fit w-24 ${
                activeButton === 2
                  ? "bg-[#b8ce78] text-[#361c1c]"
                  : "hover:bg-[#caeb66] hover:text-[#361c1c]"
              }`}
            >
              Be A Rider
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
