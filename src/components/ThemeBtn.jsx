import React, { useEffect } from "react";

const ThemeBtn = () => {
  const toggleTheme = (id) => {
    const circle = document.querySelector(".circle");
    if (id === "th-btn-1") {
      document.documentElement.classList.remove("th-2");
      document.documentElement.classList.remove("th-3");
      circle.classList.remove("translate-x-7");
      circle.classList.remove("translate-x-14");
      circle.classList.add("translate-x-0");
    } else if (id === "th-btn-2") {
      document.documentElement.classList.remove("th-3");
      document.documentElement.classList.add("th-2");
      circle.classList.remove("translate-x-14");
      circle.classList.remove("translate-x-0");
      circle.classList.add("translate-x-7");
    } else if (id === "th-btn-3") {
      document.documentElement.classList.remove("th-2");
      document.documentElement.classList.add("th-3");
      circle.classList.remove("translate-x-7");
      circle.classList.remove("translate-x-0");
      circle.classList.add("translate-x-14");
    }
  };
  return (
    <div className="flex">
      <p
        className="self-end uppercase text-lg font-semibold mr-4
       text-white"
      >
        Theme
      </p>
      <div>
        <div className="theme-nums">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="theme-btn cursor-auto">
          <span className="circle"></span>
          <button
            id="th-btn-1"
            onClick={(e) => {
              toggleTheme(e.target.id);
            }}
          ></button>
          <button
            id="th-btn-2"
            onClick={(e) => {
              toggleTheme(e.target.id);
            }}
          ></button>
          <button
            id="th-btn-3"
            onClick={(e) => {
              toggleTheme(e.target.id);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ThemeBtn;
