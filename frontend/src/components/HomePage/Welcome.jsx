import React from "react";

import Img from "./../../assets/cover.png";
import logo from "./../../assets/rachoGramLogo.png";

function Welcome() {
  return (
    <div className="  h-[80vh] w-full flex justify-between  items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-3xl">Welcome</span>
        <span className=" text-2xl ">to</span>
        <img
          src={logo}
          className="w-56"
          style={{ filter: "invert(1)" }}
          alt=""
        />
      </div>
      <img className="h-[80vh]" src={Img} alt="" />
    </div>
  );
}

export default Welcome;
