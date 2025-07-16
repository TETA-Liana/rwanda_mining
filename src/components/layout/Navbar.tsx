import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const navigation = [
  {
    label: "About",
    children: [
      { label: "About Mining Indaba", to: "/about/mining-indaba" },
      {
        label: "Highlights",
        to: "/about/highlights",
        children: [
          { label: "Thursday Highlights", to: "/about/highlights/thursday" },
          { label: "Wednesday Highlights", to: "/about/highlights/wednesday" },
          { label: "Tuesday Highlights", to: "/about/highlights/tuesday" },
          { label: "Monday Highlights", to: "/about/highlights/monday" },
          { label: "Sunday Highlights", to: "/about/highlights/sunday" },
        ],
      },
    ],
  },
  { label: "Testimonials", to: "/testimonials" },
  {
    label: "Exhibitor or Sponsor",
    children: [
      { label: "Why Exhibit or Sponsor", to: "/exhibit-sponsor/why" },
      { label: "Client Zone", to: "/client-zone" },
    ],
  },
  { label: "Content Hub", to: "/content-hub" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40 mt-8">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between py-4 shadow-lg">
        {/* Left: Logo & Event Info */}
        <div className="flex items-center justify-between w-full md:w-auto px-4">
          <img
            className="h-20 w-auto"
            src="/master.png"
            alt="Mining Indaba"
          />
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 text-[#2563eb]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Right: Buttons & Nav Links */}
        <div
          className={`flex flex-col md:flex-col md:items-end gap-4 w-full md:w-auto px-4 ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          {/* Buttons */}
          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <Link
              to="/exhibit-sponsor/why"
              className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide"
            >
              EXHIBIT OR SPONSOR
            </Link>
            <Link
              to="/register-interest"
              className="bg-[#d4ed31] hover:bg-[#d4ed31] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide"
            >
              REGISTER INTEREST
            </Link>
          </div>
          {/* Nav Links */}
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-full md:w-auto mt-4 md:mt-0">
            {/* Home Icon Link */}
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded text-base font-medium text-[#2563eb] hover:text-[#1e40af] transition-colors"
            >
              {/* Inline SVG for solid blue home icon */}
              <svg
                className="h-5 w-5"
                fill="#2563eb"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 12l9-9 9 9v7a2 2 0 01-2 2h-3a2 2 0 01-2-2v-4h-2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z" />
              </svg>
            </Link>
            {/* NavDropdown Components */}
            {navigation.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
