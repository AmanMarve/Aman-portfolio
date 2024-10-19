import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800, // Adjust the duration to your liking
      easing: 'ease-in-out', // Customize the easing
    });
  }, []);

  const handleResume = () => {
    const pdfUrl = "Aman_marve_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Aman_marve_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast('Resume Downloaded', {
      icon: '📑',
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-4'>
      <Toaster />
      <nav id='navbar' className="navbar border-b border-gray-700 backdrop-blur-md p-2 w-full">
        <div className="container mx-auto flex justify-between items-center" data-aos="fade-down">
          <div id='logo' className="text-3xl lg:text-5xl text-[rgba(255,255,255,0.7)] font-semibold">Aman Marve</div>
          <div className="hidden font-semibold items-center md:flex space-x-9" data-aos="fade-right">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <h4>
              <a onClick={handleResume} href="#resume">Resume</a>
            </h4>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 p-4" data-aos="fade-up">
            <a onClick={toggleMenu} href="#home">Home</a>
            <a onClick={toggleMenu} href="#about">About</a>
            <a onClick={toggleMenu} href="#projects">Projects</a>
            <a onClick={toggleMenu} href="#contact">Contact</a>
            <a className='text-red-00' onClick={() => { toggleMenu(); handleResume(); }} href="#resume">Resume</a>
          </div>
        )}
      </nav>
    </div>
  );
  
};

export default Navbar;
