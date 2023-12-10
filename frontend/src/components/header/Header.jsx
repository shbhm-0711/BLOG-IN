import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";

function Header() {
  return (
    <nav className="px-5 py-3">
      <ul className="flex justify-between">
        <li className="mx-3 my-2">
          <Link to={"/"}>
            <img
              className="w-32"
              style={{ filter: "invert(1)" }}
              src="/rachoGramLogo.png"
              alt="Racho Gram Logo"
            />
          </Link>
        </li>
        <div className="flex justify-around">
          {NAV_LINKS.map((item, index, arr) => {
            return (
              <li
                key={item.id}
                className={`mx-3 my-2 px-4 py-2 ${
                  index === arr.length - 1
                    ? "bg-slate-300 text-black rounded-lg mx-0 border border-gray-300 hover:bg-black hover:text-white transition-all"
                    : ""
                }`}
              >
                <Link to={item.to}>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
}

export default Header;
