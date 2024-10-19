import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-[100%] border-t border-gray-800 bottom-0 py-4 flex flex-col items-center">
      <p className="mb-2 mt-4">Designed and Developed by Aman Marve.</p>
      <p>Built With</p>
      <div className="flex items-center space-x-2">
        <FaReact className="text-blue-500 text-2xl" />
        <span>React</span> &nbsp; &
        <SiTailwindcss className="text-teal-400 text-2xl" />
        <span>Tailwind CSS</span>
      </div>
    </footer>
  );
};

export default Footer;
