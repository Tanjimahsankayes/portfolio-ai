import React from 'react';
import { ExternalLink, Github, Plus } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS showcasing my skills and projects.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
      github: '#',
      live: '#',
      status: 'completed'
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, courses, and academic performance with a clean interface.',
      technologies: ['JavaScript', 'HTML/CSS', 'Local Storage'],
      github: '#',
      live: '#',
      status: 'in-progress'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application that provides real-time weather information with location-based services.',
      technologies: ['React', 'Weather API', 'CSS3'],
      github: '#',
      live: '#',
      status: 'planned'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my work, including completed projects and upcoming developments
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-all duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Add More Projects Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-dashed border-blue-200 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">More Projects Coming Soon</h3>
              <p className="text-gray-600 text-sm">
                I'm constantly working on new projects and learning new technologies. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Project Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              Each project represents a learning opportunity and a step forward in my development journey. 
              I focus on writing clean, maintainable code and creating user-friendly interfaces that solve 
              real-world problems. Every project teaches me something new about programming, design, 
              and problem-solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;