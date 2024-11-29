import React, { useState } from 'react';
import { BsMenuAppFill } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold">Ruman Aslam</div>
        
        {/* Desktop Menu */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <BsMenuAppFill
          className="md:hidden cursor-pointer"
          size={30}
          onClick={toggleMenu} // Toggle the mobile menu
        />

      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#AA5486] py-4 text-white`}>
        <ul className="space-y-4 text-center">
          <li><a href="#hero" className="block">Home</a></li>
          <li><a href="#about" className="block">About</a></li>
          <li><a href="#projects" className="block">Projects</a></li>
          <li><a href="#skills" className="block">Skills</a></li>
          <li><a href="#contact" className="block">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
