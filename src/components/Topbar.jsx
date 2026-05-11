import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Topbar({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link to="/" className="font-bold text-blue-950 text-2xl">
          PlasticLoop
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-1 bg-black rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`w-6 h-1 bg-black rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-6 h-1 bg-black rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-3 font-bold text-[#1F2833]">
          <Link to="/">Home</Link>
          <>
  <Link to="/login">
    Login
  </Link>

  <Link to="/register">
    Register
  </Link>
</>
        </nav>
      </div>

      {/* Mobile Dropdown Menu (shows only when clicked) */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 bg-white p-4 font-bold text-[#1F2833]">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          <Link to="/login">Login</Link>

<Link to="/register" className="ml-2">
  Register
</Link>
        </div>
      )}
    </header>
  );
}
