import React from "react";

import logo from "../assets/rachoGramLogo.png";

function SplashPage() {
  return (
    <div className="min-h-screen flex  justify-center items-center ">
      <div>
        {/* <span className="text-8xl">रचोgram</span> */}
        {/* <img className="fill-white w-96 " src={img} alt="App Name" /> */}
        <img
          className=" w-96 "
          style={{ filter: "invert(1) " }}
          src={logo}
          alt="App Name"
        />
        <div className="loader-line"></div>
      </div>
    </div>
  );
}

export default SplashPage;
