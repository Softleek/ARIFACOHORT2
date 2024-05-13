import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 items-center p-4">
      <Link href="/" className="container text-center mx-auto">
        <h1 className="text-white text-4xl font-semibold">Arifahub</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
