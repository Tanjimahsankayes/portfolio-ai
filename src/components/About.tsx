import React from 'react';
import { User, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, passions, and aspirations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <User className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm Tanjim Ahsan Kayes, a dedicated Computer Science and Technology student 
                  currently in my 5th semester at Barguna Polytechnic Institute. I'm passionate 
                  about technology and constantly seeking opportunities to learn and grow in 
                  the ever-evolving field of computer science.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <Heart className="w-10 h-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold mb-2">What I Love</h4>
                <p className="text-gray-700">
                  Programming, problem-solving, and exploring new technologies. I enjoy 
                  working on projects that challenge my creativity and technical skills.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                <Target className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="text-xl font-semibold mb-2">My Goals</h4>
                <p className="text-gray-700">
                  To become a skilled software developer and contribute to innovative 
                  solutions that make a positive impact on society and technology.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-2xl max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  "I believe that continuous learning and dedication are the keys to success 
                  in technology. Every challenge is an opportunity to grow, and every project 
                  is a chance to make something meaningful."
                </p>
                <p className="text-blue-600 font-semibold mt-4">- Tanjim Ahsan Kayes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;