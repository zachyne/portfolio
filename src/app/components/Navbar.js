"use client"; // Required in Next.js App Router for using useState

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger and close icons

export default function Navbar() {
  const [active, setActive] = useState(null); // Track the clicked link
  const [menuOpen, setMenuOpen] = useState(false); // Track menu visibility

  const handleClick = (path) => {
    setActive(path); // Set active link when clicked
    setMenuOpen(false); // Close menu after clicking a link (optional)
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-20 py-4 shadow-md">
      {/* Logo */}
      <div className="font-black text-md">
        <Link href="/">ZACHYNE</Link>
      </div>

      {/* Hamburger Menu Button - Visible on Small Screens */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />} {/* Toggle icon */}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center">
        <ul className="flex list-none gap-5">
          {["/about", "/projects", "/blogs", "/kdramas"].map((path) => (
            <li key={path}>
              <Link
                href={path}
                onClick={() => handleClick(path)}
                className={`px-3 py-1 rounded transition ${
                  active === path ? "bg-gray-800 text-white" : "hover:bg-gray-500"
                }`}
              >
                {path.replace("/", "")} {/* Converts "/about" to "ABOUT" */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation - Shown when menuOpen is true */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#080808] shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["/about", "/projects", "/blogs", "/kdramas"].map((path) => (
              <li key={path}>
                <Link
                  href={path}
                  onClick={() => handleClick(path)}
                  className={`block px-4 py-2 rounded transition ${
                    active === path ? "bg-gray-800 text-white" : "hover:bg-gray-500"
                  }`}
                >
                  {path.replace("/", "").toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Dark Mode Toggle Placeholder */}
      <div className="hidden md:block">DARK</div>
    </div>
  );
}
