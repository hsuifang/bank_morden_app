import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const NavbarItems = ({ isMobile = false }) => {
  return (
    <ul
      className={`list-none ${
        isMobile ? "flex-col" : "sm:flex hidden"
      } justify-end items-center flex-1`}
    >
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-white ${
            isMobile && index === navLinks.length - 1 ? "mr-0" : "mb-4"
          } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
        >
          <a key={nav.id} href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="boobank" className="w-[124px] h-[32px]" />
      <NavbarItems ulStyle="" />

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <NavbarItems isMobile={true} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
