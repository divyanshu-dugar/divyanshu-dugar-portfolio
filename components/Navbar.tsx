"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut, easeIn } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    pathname === path
      ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30"
      : "text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/skills", text: "Skills" },
    { href: "/projects", text: "Projects" },
    { href: "/work-experience", text: "Experience" },
    { href: "/blogs", text: "Blogs" },
    { href: "/my-library", text: "Library" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,  // ✔ function (valid)
      },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: easeIn,   // ✔ function (valid)
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-lg">DD</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 border-2 border-blue-500/30 rounded-xl"
              ></motion.div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl">Divyanshu</span>
              <div className="flex items-center space-x-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                />
                <span className="text-slate-400 text-xs">Welcome to my Portfolio Webpage</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl mx-1 ${isActive(link.href)}`}
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://docs.google.com/document/d/1qaOGJb2Pb86bN2J_wgu-Q06MwXSBStNNDNJwHT4gGWU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📄
              </motion.div>
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden" ref={dropdownRef}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="bg-slate-800/50 p-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border border-slate-700 backdrop-blur-sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? "✕" : "☰"}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.text}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-xl ${isActive(link.href)}`}
                      onClick={closeMenu}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.div
                  variants={itemVariants}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4 border-t border-slate-800"
                >
                  <a
                    href="https://docs.google.com/document/d/1qaOGJb2Pb86bN2J_wgu-Q06MwXSBStNNDNJwHT4gGWU/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                    onClick={closeMenu}
                  >
                    <span>📄</span>
                    <span>View Resume</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated background effect when scrolled */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 pointer-events-none"
        />
      )}
    </motion.nav>
  );
}