import React from "react";
import { useSelector } from "react-redux";

import Img from "./../../assets/cover.png";
import logo from "./../../assets/rachoGramLogo.png";
import { NavLink } from "react-router-dom";

function Welcome() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <div className="  h-[80vh] w-full flex justify-between  items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-3xl">Welcome</span>
        <span className=" text-2xl ">to</span>
        <img
          src={logo}
          className="w-56"
          style={{ filter: isDarkMode ? "invert(1)" : "" }}
          alt=""
        />
        <NavLink to={"/feed"} className="btn rounded-md">
          Explore Yourself
        </NavLink>
      </div>
      <img className="h-[80vh]" src={Img} alt="" />
    </div>
  );
}

export default Welcome;
