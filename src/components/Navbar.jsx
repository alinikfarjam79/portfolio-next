"use client";

import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full  bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-32">
        <div className="text-2xl font-bold">Portfolio</div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <span
                onClick={() => scrollToSection("home")}
                className="relative text-black font-medium hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 cursor-pointer"
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("about")}
                className="relative text-black font-medium hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 cursor-pointer"
              >
                About
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("skills")}
                className="relative text-black font-medium hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 cursor-pointer"
              >
                Skills
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("projects")}
                className="relative text-black font-medium hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 cursor-pointer"
              >
                Projects
              </span>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <span
              onClick={() => scrollToSection("home")}
              className="text-black font-medium cursor-pointer"
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection("about")}
              className="text-black font-medium cursor-pointer"
            >
              About
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection("skills")}
              className="text-black font-medium cursor-pointer"
            >
              Skills
            </span>
          </li>
          <li>
            <span
              onClick={() => scrollToSection("projects")}
              className="text-black font-medium cursor-pointer"
            >
              Projects
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
