"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 px-8 z-50">
      <Link href="/" passHref>
        <Image src="/logo.png" alt="Logo" height={50} width={100} />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center md:justify-center flex-1">
        <Link href="/" passHref>
          <span className="cursor-pointer px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Home</span>
        </Link>
        <Link href="/docs" passHref>
  <span className="cursor-pointer px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Docs</span>
</Link>
        <Link href="/demo" passHref>
          <span className="cursor-pointer px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Demo</span>
        </Link>
      </nav>

      {/* Learn More Button */}
      <Link href="/learn-more" passHref>
        <span className="cursor-pointer hidden md:block backdrop-blur-3xl p-2 px-4 rounded bg-white">Learn More</span>
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-full right-0 w-full md:w-auto bg-white shadow-md flex-col md:hidden`}
      >
        <Link href="/" passHref>
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Home</span>
        </Link>
        <Link href="/docs" passHref>
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Docs</span>
        </Link>
        <Link href="/demo" passHref>
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Demo</span>
        </Link>
        <Link href="/learn-more" passHref>
          <span className="cursor-pointer block p-4 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors duration-300">Learn More</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
