import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              I am a Full Stack Developer specializing in WordPress and modern JavaScript ecosystems.
              With expertise in both traditional CMS and cutting-edge web technologies, I create
              powerful, scalable web solutions that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700">
              My technical foundation combines WordPress development with modern frameworks like React
              and Next.js, allowing me to build everything from custom WordPress themes to full-stack
              web applications. I prioritize security, performance, and clean code in every project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">WordPress</h3>
              <p className="text-gray-600">WordPress, WooCommerce, Elementor, WPML</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Frontend</h3>
              <p className="text-gray-600">React JS, Next JS, TailwindCSS</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">Backend</h3>
              <p className="text-gray-600">Node JS, Express JS, PostgreSQL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">DevOps & Tools</h3>
              <p className="text-gray-600">AWS, Vercel, CPanel, Postman, CLI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
