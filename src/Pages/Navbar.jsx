// src/components/Navbar.js
import React from "react";
import Logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="bg-white p-4  fixed top-0 left-0 right-0 z-10">
      <div className="ml-5">
        <div className="flex items-center">
          <img src={Logo} alt="icon" className="w-15 h-12" />
          <div className="text-5xl font-bold mb-2 text-yellow-500 ml-2">
            AutoGo
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
