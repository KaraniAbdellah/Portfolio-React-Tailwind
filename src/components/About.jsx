import React from "react";
import { FaLinkedin, FaGithub, FaFlickr, FaInstagram } from "react-icons/fa";
import Perfil from "../assets/Saly-13.png";

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-24 ${darkMode ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 sm:w-full xl:1/3">
            <div className="avatar">
              <div style={{ borderRadius: "67% 33% 61% 39% / 47% 30% 70% 53%" }} className="sm:w-80 md:w-96 " data-aos="zoom-in-down">
                <img src={Perfil} alt="Profile" />
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 md:pl-12 my-8 ${darkMode ? "text-white" : "text-black"}`}>
            <p className="text-4xl font-extrabold border-b-4 inline border-primary">About Me</p>
            <div data-aos="fade-right">
            <p className="my-8">
              <span>
                I am currently studying at Sultan Moulay Slimane University. I am pursuing my studies in the field of Computer Science, and I am passionate about coding and technology. My academic journey is focused on both theoretical knowledge and practical applications in software development and web technologies.
              </span>
            </p>
            <p className="mb-4">
              My interests also include building projects related to web development, programming languages, and algorithms. I am always eager to learn new tools and frameworks that can improve my skills and enhance my projects. I believe in the power of continuous learning and practical experience.
            </p>
            <p className="mb-4">
              Apart from my studies, I actively participate in university activities and collaborate with fellow students on various tech-related projects. I look forward to applying my knowledge in real-world scenarios and contributing to the development of innovative solutions in the tech industry.
            </p>


              <div className="divider" data-aos="zoom-in"></div>
              <p className="mb-4" data-aos="zoom-in">
                lets connect:   
              </p>
            </div>
            <div className="flex mt-4 gap-4" data-aos="zoom-in-down">
              <a
                href="https://www.linkedin.com/in/abdellah-karani-965928294/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:scale-125 duration-500 hover:drop-shadow-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-8 h-8 hover:text-primary" />
              </a>
              <a
                href="https://github.com/KaraniAbdellah"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:scale-125 duration-500 hover:drop-shadow-xl"
                aria-label="GitHub"
              >
                <FaGithub className="w-8 h-8 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
