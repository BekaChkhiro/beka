import React from 'react';

const ProjectCard = ({ title, description, technologies, image, demoLink, githubLink }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="h-48 bg-gray-200">
      {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {demoLink && (
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Live Demo
          </a>
        )}
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      image: "/path-to-image.jpg",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/yourusername/project"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/path-to-image.jpg",
      demoLink: "https://demo.example.com",
      githubLink: "https://github.com/yourusername/project"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
