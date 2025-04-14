import React from 'react';

const ProjectCard = ({ title, description, demoLink }) => (
  <div className="p-8 hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 last:border-b-0">
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        {demoLink && (
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-200 group"
          >
            <span className="mr-2">View Project</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
      {description && (
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      )}
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Georgian Mosaics",
      description: "A project supported by the Ministry of Culture, Sports and Youth of Georgia, documenting Soviet-era Georgian mosaic art. The main goal is to inventory and preserve 20th century mosaics throughout Georgia. Georgian mosaics are distinguished by their unique folkloric elements, historical motifs, and features of postmodern art.",
      demoLink: "https://georgianmosaics.com/"
    },
    {
      title: "Paradisi",
      description: "Official distributor website showcasing premium sports and fashion brands including EA7 EMPORIO ARMANI, NEW BALANCE, PEAK SPORT, ICEPEAK/LUHTA, and COLMAR in Georgia.",
      demoLink: "https://paradisi.ge"
    },
    {
      title: "Art Edu",
      description: "Founded in 1922, Tbilisi State Academy of Art is housed in a historic 1850s building renowned for its Mirror Halls and unique blend of European and oriental architectural styles. As the first higher arts institution in Georgia and the Caucasus, it has been a cornerstone of artistic education for over a century. Today, the Academy continues its legacy through five diverse faculties: Fine Arts, Architecture, Design, Media Art, and Restoration/Art History and Theory.",
      demoLink: "https://art.edu.ge"
    },
    {
      title: "Bidspace",
      description: "An innovative auction platform designed for event ticket purchases, allowing users to bid on and secure tickets for their desired events through a dynamic bidding system.",
      demoLink: "https://bidspace.ge"
    },
    {
      title: "Win-Win",
      description: "A specialized e-commerce platform designed for salons and various establishments, providing a comprehensive online marketplace for business-to-business transactions.",
      demoLink: "https://win-win.ge"
    },
    {
      title: "Geomart",
      description: "A versatile e-commerce platform catering to diverse consumer needs, offering a wide range of products and services tailored to meet various customer preferences.",
      demoLink: "https://geomart.ge"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my most significant work showcasing various technologies and solutions
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden divide-y divide-gray-100">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
