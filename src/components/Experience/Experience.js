import React from 'react';

const ExperienceCard = ({ role, company, period, description, technologies }) => (
  <div className="relative pl-8 pb-12 border-l-2 border-blue-600 last:pb-0">
    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px]"></div>
    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
      <h3 className="text-xl font-bold text-gray-900">{role}</h3>
      <p className="text-lg text-blue-600 mb-2">{company}</p>
      <p className="text-sm text-gray-500 mb-4">{period}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Infinity Solutions",
      period: "March 2022 - Present",
      description: "Developing and maintaining web applications, implementing new features, and ensuring optimal performance.",
      technologies: ["React", "Node.js", "JavaScript", "PHP"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
