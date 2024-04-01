"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 px-8 z-50">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={50} width={100} />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center md:justify-center flex-1">
  <Link href="/">
    <a className="px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Home</a> {/* Added hover effect and transition */}
  </Link>
  <Link href="/docs">
    <a className="px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Docs</a> {/* Added hover effect and transition */}
  </Link>
  <Link href="/demo">
    <a className="px-4 text-gray-800 hover:text-blue-600 transition-colors duration-200">Demo</a> {/* Added hover effect and transition */}
  </Link>
</nav>

      {/* Learn More Button */}
      <Link href="/learn-more" className="hidden md:block backdrop-blur-3xl p-2 px-4 rounded bg-white">
        Learn More
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Hamburger Icon */}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-full right-0 w-full md:w-auto bg-white p-4 flex flex-col md:hidden`}
      >
        <Link href="/">Home</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/learn-more">Learn More</Link>
      </div>
    </header>
  );
};

export default Navbar;
