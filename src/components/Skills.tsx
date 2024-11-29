import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa'; // Importing icons

const Skills = () => {
  return (
    <div id="skills" className="bg-[#AA5486] py-16">
      <div className="container mx-auto text-center">
        {/* Title and Description */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" >
            Technologies I Work With
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto">
          <p>
  I&apos;m a passionate web developer skilled in modern technologies like HTML,
  CSS, JavaScript, and TypeScript. I enjoy building responsive, interactive
  websites and am constantly learning new tools to improve my craft.
</p>

          </p>
        </div>

        {/* Skills Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center text-white">
          <div className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaHtml5 className="text-5xl text-[#e34f26]" />
            <p className="mt-2 text-lg font-medium">HTML</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaCss3Alt className="text-5xl text-[#1572B6]" />
            <p className="mt-2 text-lg font-medium">CSS</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaJs className="text-5xl text-[#F7DF1E]" />
            <p className="mt-2 text-lg font-medium">JavaScript</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaReact className="text-5xl text-[#61DAFB]" />
            <p className="mt-2 text-lg font-medium">React.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaNodeJs className="text-5xl text-[#68A063]" />
            <p className="mt-2 text-lg font-medium">Node.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transform transition duration-300">
            <FaGithub className="text-5xl text-white" />
            <p className="mt-2 text-lg font-medium">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
