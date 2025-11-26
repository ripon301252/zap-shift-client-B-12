import React from "react";
import { NavLink, Outlet } from "react-router";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white border border-gray-300 rounded-2xl my-6 md:my-12 p-6 md:p-16">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold">
        About Us
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages <br className="hidden md:block" /> 
        to business shipments — we deliver on time, every time.
      </p>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-10 mb-4 md:mb-5 text-sm md:text-base">

        <NavLink
          to="story"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Story
        </NavLink>

        <NavLink
          to="mission"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Mission
        </NavLink>

        <NavLink
          to="success"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Success
        </NavLink>

        <NavLink
          to="team"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Team & Others
        </NavLink>

      </div>

      {/* Nested Routes Render */}
      <Outlet />
    </div>
  );
};

export default AboutUs;
