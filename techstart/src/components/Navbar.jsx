import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-white text-[#131e2b] p-2 rounded-xl"
      : "p-2 hover:text-gray-300";

  return (
    <>
      <div className="flex justify-between items-center p-5 bg-[#131e2b] sticky top-0 text-white text-xl font-semibold z-50">
        <h1>TechStart</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-between items-center gap-4">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="contact" className={linkClasses}>
            Contact
          </NavLink>
          <NavLink to="about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="cart" className={linkClasses}>
            Cart
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            // Close (X) icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-700 flex flex-col items-center gap-4 py-4 md:hidden transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <NavLink onClick={() => setIsOpen(false)} to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="contact"
            className={linkClasses}
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="about"
            className={linkClasses}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            to="cart"
            className={linkClasses}
          >
            Cart
          </NavLink>
        </ul>
      </div>

      <div className="p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
