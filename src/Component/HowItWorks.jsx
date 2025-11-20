import React from "react";
import vanImg from '../assets/bookingIcon.png'

const HowItWorks = () => {
  return (
    <div className="md:py-10 md:px-16 p-5">
      <h3 className="text-2xl mb-3 font-bold">How it Work</h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5">
        
        <div className="bg-white border-1 border-gray-300 p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div><img src={vanImg} alt="" /></div>
            <h3 className="text-lg font-bold my-4">Booking Pick & Drop</h3>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className="bg-white border-1 border-gray-300 p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div><img src={vanImg} alt="" /></div>
            <h3 className="text-lg font-bold my-4">Cash On Delivery</h3>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className="bg-white border-1 border-gray-300 p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div><img src={vanImg} alt="" /></div>
            <h3 className="text-lg font-bold my-4">Delivery Hub</h3>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className="bg-white border-1 border-gray-300 p-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
            <div><img src={vanImg} alt="" /></div>
            <h3 className="text-lg font-bold my-4">Booking SME & Corporate</h3>
            <p>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
