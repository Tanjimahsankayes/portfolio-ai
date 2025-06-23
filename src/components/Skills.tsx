import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'HTML/CSS'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Express', 'RESTful APIs', 'Responsive Design'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: 'Database & Backend',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Database Design', 'API Development'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Mobile UI/UX', 'Cross-platform Development'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Server,
      title: 'Tools & Technologies',
      skills: ['Git/GitHub', 'VS Code', 'Docker', 'Linux', 'Agile Methodology'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Material Design', 'User Experience'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Continuous Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              As a Computer Science student, I'm constantly expanding my skill set and staying 
              updated with the latest technologies and industry trends. I believe in the power 
              of continuous learning and hands-on practice to master new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;