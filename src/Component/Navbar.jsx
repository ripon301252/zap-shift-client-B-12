import React from "react";
import logoImg from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut().catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/sendParcel"
          className={({ isActive }) =>
            isActive
              ? "text-[#6c5f29] font-bold underline underline-offset-4"
              : "text-gray-700"
          }
        >
          Send Parcel
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/coverage"
              className={({ isActive }) =>
                isActive
                  ? "text-[#6c5f29] font-bold underline underline-offset-4"
                  : "text-gray-700"
              }
            >
              Coverage
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/myParcels"
              className={({ isActive }) =>
                isActive
                  ? "text-[#6c5f29] font-bold underline underline-offset-4"
                  : "text-gray-700"
              }
            >
              My Parcels
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-[#6c5f29] font-bold underline underline-offset-4"
                  : "text-gray-700"
              }
            >
             Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto py-3">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile menu button */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="w-8" src={logoImg} alt="logo" />
            <span className="text-xl font-bold">ZapShift</span>
          </Link>
        </div>

        {/* CENTER (Desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <button onClick={handleLogout} className="btn btn-sm">
              Sign Out
            </button>
          ) : (
            <Link to="login" className="btn btn-sm">
              Sign In
            </Link>
          )}

          <div className="flex items-center">
            <Link to="/rider" className="btn bg-[#caeb66] btn-sm">
              Be a rider
            </Link>
            <FaArrowRight className="bg-[#361c1c] p-2 text-3xl rounded-full -rotate-45 cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
