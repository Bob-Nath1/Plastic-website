import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Topbar({ isHome }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/" className="font-bold text-blue-950 text-2xl">
          {isHome ? "PlasticLoop" : "Home"}
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-1 bg-black rounded ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-1 bg-black rounded ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-1 bg-black rounded ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 font-bold text-[#1F2833]">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 bg-white p-4 font-bold">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/login" onClick={closeMenu}>Login</Link>
          <Link to="/register" onClick={closeMenu}>Register</Link>
        </div>
      )}
    </header>
  )
}