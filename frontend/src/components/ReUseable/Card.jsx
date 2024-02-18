import React from "react";

function Card({ children, theme, minW }) {
  const minWidth = `w-${minW}rem`;
  return (
    <span
      className={`rounded-xl border-2 p-5 ${
        theme === "light"
          ? "bg-white border-slate-800"
          : "border-white bg-slate-800"
      } ${minW && "w-[30rem]"} shadow-md `}
    >
      {children}
    </span>
  );
}

export default Card;
