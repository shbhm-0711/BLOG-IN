import React from "react";

import { PiSunFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { NAV_LINKS } from "../../constants";
import { switchTheme } from "../../app/authSlice";

function Header() {
  const status = useSelector((state) => state.status);
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  return (
    <nav className="px-5 py-3">
      <ul className="flex justify-between">
        <li className="mx-3 my-2">
          <Link to={"/"}>
            <img
              className="w-32"
              style={{ filter: isDarkMode ? "invert(1)" : "" }}
              src="/rachoGramLogo.png"
              alt="Racho Gram Logo"
            />
          </Link>
        </li>
        <div className="flex justify-around">
          {NAV_LINKS.map((item) => {
            // condition to show sign up button or not
            return !item.auth || !status ? (
              <li
                key={item.id}
                className={`mx-3 my-2 px-4 py-2 ${
                  item.style
                    ? "bg-slate-300 text-black rounded-lg mx-0 border border-gray-300 hover:bg-black hover:text-white transition-all"
                    : ""
                }`}
              >
                <Link to={item.to}>
                  <span>{item.name}</span>
                </Link>
              </li>
            ) : null;
          })}
          <div
            className="mx-3 my-auto text-4xl cursor-pointer  "
            onClick={() => {
              dispatch(switchTheme());
            }}
          >
            {isDarkMode ? <PiSunFill /> : <BiSolidMoon />}
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
