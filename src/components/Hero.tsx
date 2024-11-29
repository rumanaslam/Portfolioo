import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/pic.png)] bg-right lg:bg-[15%] bg-cover"
      style={{
        backgroundSize: '38%',
        backgroundPosition: 'right 100px top 100px',
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4 sm:px-8 md:px-12">
        {/* Left column */}
        <div className="flex justify-start items-center">
          <div className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[83px] font-bold leading-tight text-white">
            <p data-aos="zoom-out-down">Welcome!</p>
            <p data-aos="zoom-out-down">Let's Explore</p>
            <p data-aos="zoom-out-down">My Work Together.</p>
          </div>
        </div>

        {/* Empty right column (for large screens) */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Hero;
