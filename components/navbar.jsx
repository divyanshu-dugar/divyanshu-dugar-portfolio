"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
          >
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className={isActive(link.href)}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
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
