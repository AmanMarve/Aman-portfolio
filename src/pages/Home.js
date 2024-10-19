import React, { useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../index.css';
import Sticker from '../assets/sticker.svg';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";

const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer...', 'MERN Stack Developer...'],
    loop: {},
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: false, // Whether animation should happen only once
      mirror:true,
    });
  }, []);

  return (
    <div className='min-h-screen'>
      <div
        id="home"
        className="home-container mt-6 md:mt-[3rem] flex -mb-10 flex-col md:flex-row items-start justify-start relative px-4"
        data-aos="fade-up" // AOS animation applied here
      >
        <img
          src={Sticker}
          alt='sticker'
          className='absolute z-0 w-[25%] mx-5 md:mx-5 h-auto max-w-[200px] md:w-[12%] md:h-auto md:max-w-none filter invert-[0.1]'
          data-aos="fade-right" // AOS animation applied here
        />
        <div className='relative z-10 home-text flex items-start flex-col md:items-start md:w-3/2 mx-8 md:mx-20 mt-5'>
          <p
            className='text-xl font-semibold md:text-3xl text-[#bb3ccf] text-center md:text-left'
            data-aos="fade-left" // AOS animation applied here
          >
            Hi there!👋 I'm
          </p>
          <h1
            className='text-[2.6rem] md:-mt-10 lg:text-[6rem] font-bold text-left md:text-left'
            data-aos="fade-down" // AOS animation applied here
          >
            Aman Marve.
          </h1>
          <p
            className='text-[1rem] w-[110%] md:-mt-6 md:text-2xl font-thin mt-2 text-start md:text-left'
            data-aos="fade-up" // AOS animation applied here
          >
            A passionate <span className='text-green-700 font-bold'>
              {text}
            </span>
            <Cursor />
          </p>
          <br />
        </div>
      </div>
      <div
        id='last-div'
        className='flex mt-[8rem] md:mt-[6.6rem] md:gap-[25rem] flex-col md:flex-row justify-center items-center md:items-start'
        data-aos="fade-up" // AOS animation applied here
      >
        <div className='mb-6 -mx-4 md:mb-0'>
          <ul className='md:text-[17px] items-start p-2 w-[150%] text-[14px] font-thin'>
            <li>🚀Currently specializing in Frontend (ReactJs).</li>
            <li>⚡Web Developer Intern at <span className='text-[#BB3CCF] font-semibold'>"Sapalogy Pvt Ltd"</span>.</li>
          </ul>
        </div>
        <div>
          <p
            className='font-bold md:text-[xl] text-[15px] text-gray-400 mb-8 md:mb-6 text-center md:text-right'
            data-aos="fade-right" // AOS animation applied here
          >
            My skills
          </p>
          <div
            className="flex -mt-5 flex-wrap justify-center md:justify-between space-x-5 md:space-x-3"
            data-aos="fade-left" // AOS animation applied here
          >
            <FaReact className="text-4xl mb-2 text-blue-500" />
            <FaHtml5 className="text-4xl mb-2 text-orange-600" />
            <FaCss3Alt className='text-4xl mb-2 text-blue-700' />
            <FaJs className="text-4xl mb-2 text-yellow-400" />
            <RiTailwindCssFill className='text-4xl mb-2 text-[#2DCDBA]' />
            <FaNodeJs className="text-4xl mb-2 text-green-500" />
            <SiExpress className="text-4xl mb-2" />
            <SiMongodb className="text-4xl mb-2 text-green-500" />
            <SiPostgresql className="text-4xl mb-2 text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;