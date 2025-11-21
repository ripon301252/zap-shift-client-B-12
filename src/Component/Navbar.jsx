import React from "react";
import logoImg from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link, NavLink } from "react-router";


const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/services`}>Services</NavLink>
      </li>
      <li>
        <NavLink to={`/about`}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={`/coverage`}>Coverage</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar max-w-7xl mx-auto pt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <Link to={`/`} className="flex relative -mr-10">
            <img className="w-7 absolute -mt-3 " src={logoImg} alt="" />
            <a className="btn btn-ghost text-xl">ZapShift</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn mr-3">Login</a>
          <a className="btn ">Be a rider</a>
          <FaArrowRight className="bg-[#361c1c] p-2 text-4xl rounded-full -rotate-45 cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
