import React, { useState } from "react";
import locationImg from "../assets/location-merchant.png";

const Priority = () => {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <div className="lg:py-16 lg:px-24">
      <div className="bg-[#03373d] rounded-2xl flex lg:flex-row flex-col-reverse items-center p-5 lg:p-12">
        <div className="">
          <h1 className="text-4xl text-white font-extrabold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-sm text-white my-5">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex lg:flex-row flex-col gap-5">
            <button
              onClick={() => setActiveButton(1)}
              className={`btn btn-outline border-1 border-[#caeb66] rounded-full 
          ${
            activeButton === 1
              ? "bg-[#caeb66] text-[#361c1c]"
              : "text-[#caeb66] hover:bg-[#caeb66] hover:text-[#361c1c]"
          }`}
            >
              Become a Merchant
            </button>
            <button
              onClick={() => setActiveButton(2)}
              className={`btn btn-outline border-1 border-[#caeb66] rounded-full 
          ${
            activeButton === 2
              ? "bg-[#caeb66] text-[#361c1c]"
              : "text-[#caeb66] hover:bg-[#caeb66] hover:text-[#361c1c]"
          }`}
            >
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div>
          <img src={locationImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Priority;
