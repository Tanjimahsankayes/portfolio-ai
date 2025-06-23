import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TAK
            </div>
            <p className="text-gray-400 mt-2">Computer Science & Technology Student</p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-2 text-red-400" /> by Tanjim Ahsan Kayes
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {currentYear} All rights reserved. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;