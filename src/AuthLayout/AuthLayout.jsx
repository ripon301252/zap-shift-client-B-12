import React from "react";
import logoImg from "../assets/logo.png";
import authImg from "../assets/authImage.png";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Link to={`/`} className="flex relative ml-3">
        <div>
          <img className="w-7 absolute -mt-4 -ml-5" src={logoImg} alt="" />
        </div>
        <h3 className="text-2xl font-bold mb-16">ZapShift</h3>
      </Link>
      <div className="flex justify-between items-center px-36">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
