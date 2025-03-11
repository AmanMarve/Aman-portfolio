import React from 'react';
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaExternalLinkAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import GaneshServices from '../assets/GaneshService.png';
import RaybanUI from '../assets/RayBan BG.png';
import WeatherApp from '../assets/Wheater App.png';
import Quotation from '../assets/Quotation.png'
import '../index.css';

const projectsData = [
  {
    title: "Quotation Generator",
    description: "I developed a Quotation Generator application to simplify the daily quotation creation process for a friend who needed to generate multiple quotations efficiently.",
    techs: [
      <FaReact className="text-blue-500 text-2xl" />,
      <RiTailwindCssFill className="text-blue-500 text-2xl" />,
    ],
    link: "https://quotation-app-mini.netlify.app/",
    status: 'Completed',
    image: Quotation
  },
  {
    title: "Ganesh Services",
    description: "E-commerce application with admin panel. Built with MERN and TailwindCSS. My first project created independently.",
    techs: [
      <FaReact className="text-blue-500 text-2xl" />,
      <RiTailwindCssFill className="text-blue-500 text-2xl" />,
      <SiExpress className="text-yellow-700 text-2xl" />,
      <FaNodeJs className="text-green-700 text-2xl" />,
      <SiMongodb className="text-green-700 text-2xl" />
    ],
    link: "https://ganesh-roservices.netlify.app/",
    status: 'Completed',
    image: GaneshServices
  },
  {
    title: "React Weather App",
    description: "A weather app created while learning how to use APIs and other web technologies.",
    techs: [
      <FaReact className="text-blue-500 text-2xl" />,
      <FaJs className="text-yellow-500 text-2xl" />,
      <FaCss3Alt className="text-blue-600 text-2xl" />
    ],
    link: "https://weather-appaman.netlify.app/",
    status: 'Completed',
    image: WeatherApp
  },
  {
    title: "RayBan Concept UI",
    description: "A conceptual UI for RayBan, created using HTML, CSS, and SheryJs library for practice.",
    techs: [
      <FaHtml5 className="text-orange-600 text-2xl" />,
      <FaCss3Alt className="text-blue-600 text-2xl" />,
      <FaJs className="text-yellow-500 text-2xl" />
    ],
    link: "https://amanmarve.github.io/Rayban-website/",
    status: 'Completed',
    image: RaybanUI
  }
];

const ProjectCard = ({ project }) => (
  <div className="border border-gray-700 shadow-lg rounded-lg md:w-1/3 bg-transparent transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col dark:border-gray-600 dark:bg-[rgba(255,255,255,0.1)]">
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="w-full h-32 object-cover rounded-t-lg"
    />
    <div className="flex flex-col justify-between p-4 flex-grow">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{project.title}</h2>
      <p
        id="status-badge"
        className={`p-2 w-24 rounded-lg text-black font-semibold dark:text-white ${project.status === 'Upcoming' ? 'bg-red-500 bg-opacity-30' : 'bg-green-500 bg-opacity-30 backdrop-blur-lg'}`}
      >
        {project.status}
      </p>
      <p className="text-start mt-4 mb-4 text-gray-800 dark:text-gray-300">{project.description}</p>
      <a
        href={project.link}
        className="border border-gray-800 text-black dark:text-white px-4 py-2 rounded-lg mb-4 flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors duration-300 dark:border-gray-600 dark:hover:bg-gray-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt className="mr-2" /> View Project
      </a>
      <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Technologies Used</h3>
      <div className="flex space-x-2 mb-4">
        {project.techs}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-start min-h-screen py-8 border-t border-gray-800 dark:border-gray-600">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">My Projects</h1>
      <p className="text-lg italic mb-12 text-gray-900 dark:text-gray-400">Here are some of my recent works.</p>
      <div className="flex flex-wrap p-4 justify-center gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <p className='text-xl font-semibold text-gray-900 mt-8 dark:text-gray-400'>
          I have more projects created during my <span className='text-[#BB3CCF]'>current role</span>. <br />
          i would like to talk more about that!
        </p>
      </div>

    </div>
  );
};

export default Projects;
