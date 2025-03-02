"use client"; // Required in Next.js App Router for using useState

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(null); // Track the clicked link

  const handleClick = (path) => {
    setActive(path); // Set active link when clicked
  };

  return (
    <div className="flex items-center justify-between px-20">
      <div className="font-black text-md">
        <Link href="/">ZACHYNE</Link>
      </div>
      
      <nav className="flex items-center m-5 justify-center">
        <ul className="flex list-none gap-5">
          <li>
                <Link
                href="/about"
                onClick={() => handleClick("/about")}
                className={`px-3 py-1 rounded transition ${
                    active === "/about" ? "bg-gray-800 text-white" : "hover:bg-gray-500"
                }`}
                >
              About
                </Link>
          </li>
          <li>
                <Link
                href="/projects"
                onClick={() => handleClick("/projects")}
                className={`px-3 py-1 rounded transition ${
                    active === "/projects" ? "bg-gray-800 text-white" : "hover:bg-gray-500"
                }`}
                >
                Projects
                </Link>
          </li>
          <li>
                <Link
                href="/blogs"
                onClick={() => handleClick("/blogs")}
                className={`px-3 py-1 rounded transition ${
                    active === "/blogs" ? "bg-gray-800 text-white" : "hover:bg-gray-500"
                }`}
                >
                Blogs
                </Link>
          </li>
          <li>
            <Link
              href="/kdramas"
              onClick={() => handleClick("/kdramas")}
              className={`px-3 py-1 rounded transition ${
                active === "/kdramas" ? "bg-gray-800 text-white" : "hover:bg-gray-500"
              }`}
            >
              Kdramas
            </Link>
          </li>
        </ul>
      </nav>
      <div>DARK</div>
    </div>
  );
}
