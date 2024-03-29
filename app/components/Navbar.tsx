"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between p-4 px-8 z-50">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={50} width={100} />
      </Link>
      <nav className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/demo">Demo</Link>
      </nav>
      <Link
        href="/learn-more"
        className="backdrop-blur-3xl p-2 px-4 rounded bg-white"
      >
        Learn More
      </Link>
    </header>
  );
};

export default Navbar;
