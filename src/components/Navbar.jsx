import { useState } from "react";

import { close, logo, menu } from "../assets/index.js";
import { navLinks } from "../constants.js";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden sm:flex gap-10 justify-end items-center flex-1">
        {navLinks.map((nav) => {
          return (
            <li
              key={nav.id}
              className="font-poppins font-normal text-[16px] text-white cursor-pointer"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={
            toggle
              ? "p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar"
              : "hidden"
          }
          onClick={() => setToggle(false)}
        >
          <ul className="list-none flex flex-col gap-5 justify-end items-center flex-1">
            {navLinks.map((nav) => {
              return (
                <li
                  key={nav.id}
                  className="font-poppins font-normal text-[16px] text-white cursor-pointer"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
