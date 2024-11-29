import React from 'react';

const ProjectsDiagonal = () => {
  const projects = [
    {
      title: 'Simple Calculator',
      description:
        'A user-friendly calculator built with TypeScript and JavaScript. It handles basic arithmetic operations with a clean interface.',
      technologies: ['TypeScript', 'JavaScript', 'Node.js'],
      icon: '🧮',
    },
    {
      title: 'To-Do List',
      description:
        'A dynamic to-do list app designed with simplicity, allowing users to manage tasks efficiently using TypeScript and CSS.',
      technologies: ['HTML', 'CSS', 'TypeScript'],
      icon: '✅',
    },
    {
      title: 'Resume Builder',
      description:
        'An online resume builder offering real-time customization and downloadable templates for professionals.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      icon: '📄',
    },
    {
      title: 'Multi-Page Website',
      description:
        'A responsive multi-page website developed using Next.js and styled with Tailwind CSS, showcasing modern design and navigation.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      icon: '🌐',
    },
    {
      title: 'Dynamic Resume Builder',
      description:
        'A dynamic resume builder with form validation, live preview, and downloadable templates, crafted with Next.js and TypeScript.',
      technologies: ['Next.js', 'TypeScript', 'CSS'],
      icon: '🖋️',
    },
  ];

  return (
    <div className="relative bg-[#AA5486] py-20 text-white overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-pattern-waves opacity-10 pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-white">
          My Work
        </h2>
        {/* Projects Grid with Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative max-w-sm p-8 bg-white/10 backdrop-blur-md text-white rounded-xl shadow-lg transform hover:-translate-y-3 hover:scale-105 transition-all border border-white/20"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-[#AA5486] w-14 h-14 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-3xl">{project.icon}</span>
              </div>
              {/* Project Title */}
              <h3 className="text-2xl font-bold mt-6 mb-4 text-center text-white group-hover:text-white">
                {project.title}
              </h3>
              {/* Description */}
              <p className="text-base text-center mb-6 text-white group-hover:text-gray-100 transition-colors">
                {project.description}
              </p>
              {/* Technologies */}
              <div className="flex justify-center flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FFFFFF] text-[#AA5486] text-sm font-mono px-3 py-1 rounded-full border border-[#AA5486]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 group-hover:blur-md group-hover:opacity-20 transition-all bg-white/20 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiagonal;
