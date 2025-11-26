import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../assets/brands/amazon.png";
import brand2 from "../assets/brands/amazon_vector.png";
import brand3 from "../assets/brands/casio.png";
import brand4 from "../assets/brands/moonstar.png";
import brand5 from "../assets/brands/randstad.png";
import brand6 from "../assets/brands/star.png";
import brand7 from "../assets/brands/start_people.png";
import brand8 from "../assets/live-tracking.png";
import brand9 from "../assets/safe-delivery.png";
import brand10 from "../assets/tiny-deliveryman.png";

const Brands = () => {
  return (
    <div className="md:mx-20 px-5 py-7">
      <h3 className="text-center text-2xl font-bold my-5">
        We've helped thousands of sales teams
      </h3>
      <Marquee>
        <div className="flex justify-between items-center gap-10">
          <div>
            <img className="ml-10" src={brand2} alt="" />
          </div>
          <div>
            <img className="" src={brand3} alt="" />
          </div>
          <div>
            <img className="mt-3" src={brand1} alt="" />
          </div>
          <div>
            <img className="" src={brand4} alt="" />
          </div>
          <div>
            <img className="" src={brand5} alt="" />
          </div>
          <div>
            <img className="" src={brand6} alt="" />
          </div>
          <div>
            <img className="" src={brand7} alt="" />
          </div>
        </div>
      </Marquee>

      <div className="border-1 border-dashed border-gray-300 w-full my-20"></div>

      <div className="bg-white border-1 border-gray-300 rounded-2xl md:p-8 p-5 mt-7">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
          <div>
            <img src={brand8} alt="" />
          </div>

          <div className="border-l border-dashed h-32 hidden md:block"></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-bold text-2xl">Live Parcel Tracking</h1>
            <p>
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-1 border-gray-300 rounded-2xl md:p-8 p-5 mt-7">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
          <div>
            <img src={brand9} alt="" />
          </div>

          <div className="border-l border-dashed h-32 hidden md:block"></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-bold text-2xl">100% Safe Delivery</h1>
            <p>
              We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-1 border-gray-300 rounded-2xl md:p-8 p-5 mt-7">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
          <div>
            <img className="md:w-[158px] md:h-24" src={brand10} alt="" />
          </div>

          <div className="border-l border-dashed h-32 hidden md:block"></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-bold text-2xl">24/7 Call Center Support</h1>
            <p>
              Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
