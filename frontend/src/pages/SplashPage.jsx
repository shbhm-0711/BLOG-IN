import React from "react";
import { useSelector } from "react-redux";

import logo from "../assets/rachoGramLogo.png";

function SplashPage() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <div
      className={`min-h-screen flex  justify-center items-center ${
        isDarkMode ? "theme-dark" : ""
      }  bg-skin-fill`}
    >
      <div>
        {/* <span className="text-8xl">रचोgram</span> */}
        {/* <img className="fill-white w-96 " src={img} alt="App Name" /> */}
        <img
          className=" w-96 "
          style={{ filter: isDarkMode ? "invert(1)" : "" }}
          src={logo}
          alt="App Name"
        />
        <div className="loader-line"></div>
      </div>
    </div>
  );
}

export default SplashPage;
