"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) =>
    pathname === path
      ? "text-yellow-400 font-semibold underline underline-offset-4"
      : "text-white";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/skills", text: "Skills" },
    { href: "/projects", text: "Projects" },
    { href: "/work-experience", text: "Work Experience" },
    { href: "/my-library", text: "My Library" },
    { href: "/my-mindset", text: "My Mindset" },
    { href: "/my-books", text: "My Books" },
    { href: "/", text: "My Learning List 🔒" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          {/* Hamburger button - using onClick instead of relying on DaisyUI's tabIndex */}
          <button
            type="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          
          {/* Dropdown menu controlled by our state */}
          <ul
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link 
                  href={link.href} 
                  className={isActive(link.href)}
                  onClick={closeMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-white">
          DD
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal text-lg">
          {navLinks.map((link) => (
            <li key={link.text}>
              <Link href={link.href} className={isActive(link.href)}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://docs.google.com/document/d/1qaOGJb2Pb86bN2J_wgu-Q06MwXSBStNNDNJwHT4gGWU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Resume
        </a>
      </div>
    </div>
  );
}