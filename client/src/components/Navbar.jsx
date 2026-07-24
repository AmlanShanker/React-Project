import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-500">🎬 CineVerse</h1>

        <ul className="flex gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-red-500 transition">Home</li>

          <li className="cursor-pointer hover:text-red-500 transition">
            Movies
          </li>

          <li className="cursor-pointer hover:text-red-500 transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
