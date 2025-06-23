import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic journey and achievements in Computer Science and Technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            {/* Current Education */}
            <div className="relative mb-12">
              <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              
              <div className="ml-20">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Current
                    </span>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Diploma in Computer Science & Technology
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Barguna Polytechnic Institute</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    Currently pursuing my diploma in Computer Science and Technology, 
                    focusing on software development, database management, and modern 
                    programming technologies. Currently in 5th semester with strong 
                    academic performance.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Subjects</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Programming Fundamentals</li>
                        <li>• Database Management Systems</li>
                        <li>• Web Development</li>
                        <li>• Software Engineering</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Current Focus</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Advanced Programming</li>
                        <li>• Project Development</li>
                        <li>• System Analysis & Design</li>
                        <li>• Industrial Training Prep</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Goals */}
            <div className="relative">
              <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              
              <div className="ml-20">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Future Goals
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Continuing Education & Career Development
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Academic Goals</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Complete diploma with excellence</li>
                        <li>• Pursue Bachelor's in Computer Science</li>
                        <li>• Specialize in Software Development</li>
                        <li>• Obtain industry certifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Career Aspirations</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Full-stack Developer</li>
                        <li>• Software Engineer</li>
                        <li>• Technical Team Lead</li>
                        <li>• Technology Entrepreneur</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;