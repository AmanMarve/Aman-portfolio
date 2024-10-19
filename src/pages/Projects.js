import React from 'react';
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaExternalLinkAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import GaneshServices from '../assets/GaneshService.png'
import RaybanUI from '../assets/RayBan BG.png'
import WeatherApp from '../assets/Wheater App.png'
import '../index.css'

const projectsData = [
  {
    title: "Ganesh Services",
    description: "Upcoming Ecommerce app with CRUD operations designed for business purposes.",
    techs: [<FaReact className="text-blue-500 text-2xl" />, <RiTailwindCssFill className="text-blue-500 text-2xl" />, <SiExpress className="text-yellow-700 text-2xl" />, <FaNodeJs className="text-green-700 text-2xl" />, <SiMongodb className="text-green-700 text-2xl" />],
    link: "#upcoming",
    status: 'Upcoming',
    image: GaneshServices
  },
  {
    title: "React Weather App",
    description: "Created a weather app while learning how to use API and other technologies.",
    techs: [<FaReact className="text-blue-500 text-2xl" />, <FaJs className="text-yellow-500 text-2xl" />, <FaCss3Alt className="text-blue-600 text-2xl" />],
    link: "https://weather-appaman.netlify.app/",
    status: 'Completed',
    image: WeatherApp
  },
  {
    title: "RayBan Concept UI",
    description: "Created using HTML, CSS, JS, and SheryJs library for better practices.",
    techs: [<FaHtml5 className="text-orange-600 text-2xl" />, <FaCss3Alt className="text-blue-600 text-2xl" />, <FaJs className="text-yellow-500 text-2xl" />],
    link: "https://amanmarve.github.io/Rayban-website/",
    status: 'Completed',
    image: RaybanUI
  }
];

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-start min-h-screen py-8 border-t border-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-white">My Projects</h1>
      <p className="text-lg italic mb-12 text-gray-300">Here are some of my recent works.</p>
      <div className="flex flex-wrap p-4 justify-center gap-12">
        {projectsData.map((project, index) => (
          <div key={index} className="border border-gray-700 shadow-lg rounded-lg md:w-1/3 h- bg-transparent transition-transform duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="flex flex-col justify-between p-4 flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>
              <p id='status-badge' className={`p-2 w-24 rounded-lg text-white ${project.status === 'Upcoming' ? 'bg-[rgba(255,0,0,0.2)]' : 'bg-[rgba(0,255,0,0.1)] backdrop-blur-lg'}`}>
                {project.status}
              </p>
              <p className="text-start mt-4 mb-4 text-gray-200">{project.description}</p>
              <a href={project.link} className="border border-gray-800 text-white px-4 py-2 rounded-lg mb-4 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                <FaExternalLinkAlt className="mr-2" /> View Project
              </a>
              <h3 className="text-lg font-semibold mb-2 text-white">Technologies Used</h3>
              <div className="flex space-x-2 mb-4">
                {project.techs}
              </div>
            </div>
          </div>
        ))}
        <p className='text-xl font-semibold '>There are more projects that i created in my <span className='text-xl font-semibold text-[#BB3CCF]'>current role</span> <br /> i would like to talk more about that.</p>
      </div>
    </div>
  );
};

export default Projects;
