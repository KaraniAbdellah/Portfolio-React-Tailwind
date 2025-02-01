import React from "react";
import Weather from "../assets/projects/weather_app.png";
import Vanilla from "../assets/projects/vanilla_project.png";
import Dashboard from "../assets/projects/dashboard.png";
import Static from "../assets/projects/static_blog.png";
import Startup from "../assets/projects/startup.png";


const Work = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A weather app that provides weather information by typing the name of a city. It includes features like adding to favorites and dark mode.",
      image: Weather,
      link: "https://github.com/KaraniAbdellah/weather_app",
      technologies: ["JavaScript", "Sass", "HTML5", "CSS3"],
    },
    {
      id: 2,
      title: "Vanilla Projects",
      description:
        "Vanilla projects are 30 small web projects made with HTML, CSS, JavaScript, and SASS. They focus on building different features and layouts to practice web development skills.",
      image: Vanilla,
      link: "https://github.com/KaraniAbdellah/vanilla_projects",
      technologies: ["JavaScript", "Sass", "HTML5", "CSS3"],
    },
    {
      id: 3,
      title: "Dashboard",
      description:
        "It is a simple dashboard using my own CSS framework and contains separate files for each section.",
      image: Dashboard,
      link: "https://github.com/KaraniAbdellah/Dashboard",
      technologies: ["HTML5", "CSS3"],
    },
    {
      id: 4,
      title: "Startup 404.js",
      description:
        "A project that helps people find great portfolios. It also provides inspiration for modern portfolio designs.",
      image: Startup,
      link: "https://github.com/KaraniAbdellah/startup_start",
      technologies: ["HTML5", "CSS3", "JavaScript", "Sass"],
    },
    {
      id: 5,
      title: "Static Blog",
      description:
        "aji_taaraf Welcome to aji_taaraf - the first Moroccan blog sharing the latest in IT and technology! 🌐",
      image: Static,
      link: "https://github.com/KaraniAbdellah/static_blog",
      technologies: ["HTML5"],
    },
  ];
  
  return (
    <section id="work" className={`${darkMode ? "dark:bg-zinc-900" : "bg-zinc-100"} py-24`}>
      <div className="container max-w-[1240px] mx-auto px-4">
        <h2 className={`text-4xl font-extrabold mb-4 border-b-4 inline border-primary ${darkMode ? "text-white" : "text-black"}`}>Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div className="flex justify-center" data-aos="zoom-in-down" key={project.id}>
              <div className={`card w-80 hover:scale-105 duration-500 shadow-xl ${darkMode ? "dark:bg-zinc-800" : "bg-white"} `}>
                <figure>
                  <img src={project.image} alt={project.title} />
                </figure>
                <div className="card-body">
                  <h2 className={`card-title ${darkMode ? "text-white" : "text-black"}`}>{project.title}</h2>
                  <p className={` text-xs ${darkMode ? "text-white" : "text-black"}`}>{project.description}</p>
                  <div className="card-actions justify-end">
                    <a target="_blank" rel="noopener noreferrer" href={project.link ? project.link : "#"} className="btn btn-primary text-white">
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
