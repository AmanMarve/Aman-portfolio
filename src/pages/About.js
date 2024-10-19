import React from 'react';
import Profile from '../assets/About-img.jpg';

import '../index.css';

const About = () => {

  return (
    <div className='border-t border-gray-700'>
      <h1 className="text-4xl font-bold mt-8 mb-8 text-center md:text-center">About Me</h1>
      <div id="about" className="flex md:-mt-20 gap-10 flex-col md:flex-row items-center justify-start min-h-screen p-8 md:p-16">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <img src={Profile} className="rounded-full w-40 h-40 md:ml-28 md:w-72 md:h-72 object-cover" alt="About Me" />
            <p className='md:text-left p-2 text-xl font-bold text-gray-500 mt-4'>
              <span className='text-white'>Software Developer</span> with expertise in Frontend and Backend development, also experienced in working with top service-based teams.
            </p>
          </div>
        </div>
        <hr className='md:bg-white md:h-[20rem] md:w-[.5px]' />
        <div className="md:w-[100] -mt-5 md:-mt-20 md:ml-8">
          <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">🎓Education</h2>
          <ul className="space-y-4">
            <li className="md:text-[20px] font-medium text-gray-400">
              <span className="text-white">Master of Computer Application (MCA)</span> <br />
              <span className="text-gray-500">Gondwana University, 2023 - Pursuing</span>
            </li>
            <li className="md:text-[20px] font-medium text-gray-400">
              <span className="text-white">Bachelor of Science (B.Sc) in Information Technology</span> <br />
              <span className="text-gray-500">Gondwana University, 2019 - 2022</span>
            </li>
            <li className="md:text-[20px] font-medium text-gray-400">
              <span className="text-white">Higher Secondary Certificate (HSC)</span> <br />
              <span className="text-gray-500">Nagpur Divisional Board, 2017 - 2019</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
