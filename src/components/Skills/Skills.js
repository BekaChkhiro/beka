import React from 'react';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 80 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'PHP', level: 80 },
      { name: 'SQL', level: 85 },
    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'REST APIs', level: 85 },
    ]
  };

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Frontend</h3>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Backend</h3>
            {skills.backend.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Tools & Technologies</h3>
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
