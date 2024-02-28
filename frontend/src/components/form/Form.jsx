import React from "react";

import wlcImg from "../../assets/welcome.jpeg";
import Input from "./Input";
import Button from "./Button";
import { useSelector } from "react-redux";

function Form() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={` overflow-hidden rounded-bl-3xl rounded-tr-3xl ${
        isDarkMode ? "border-white" : " bg-skin-button-accent border-black"
      }  flex border border-solid   m-auto sm:w-[60rem]`}
    >
      <div className=" flex-1 ">
        <img
          className="flex-1 object-fill"
          src={wlcImg}
          alt="welcome to Blog In"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-4">
        <div className=" flex flex-col m-2 text-lg">
          <span className="text-xl font-bold text-skin-base">
            Log in your account{" "}
          </span>
          <span>to Rachogram to explore blogs</span>
        </div>
        <Input name={"Username"} type={"text"} />
        <Input name={"Email"} type={"email"} />
        <Input name={"Password"} type={"password"} />
        <div className=" h-14 flex flex-col-reverse">
          <Button type="submit">Submit</Button>
        </div>
        <p className=" flex space-x-2 ">
          <span>{"Don't have a account"}</span>
          <button className="font-bold underline hover:text-purple-300">
            {" "}
            Register
          </button>
        </p>
      </div>
    </form>
  );
}

export default Form;
