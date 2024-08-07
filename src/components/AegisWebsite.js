import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';

const AegisWebsite = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(newSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

Got it! Let's modify the project section to create a sliding card layout with interactive project cards. Here's the updated `sections` array with the modified project section:

```javascript
const sections = [
  {
    id: 'intro',
    content: (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Aegis
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empowering Businesses with Intelligent Solutions
        </motion.p>
        <motion.div
          className="w-32 h-32 rounded-full bg-white"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    ),
  },
  {
    id: 'about',
    content: (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-teal-400 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">What We Do</h2>
          <div className="flex items-center">
            <div className="w-1/2 pr-8">
              <p className="text-lg mb-4">
                We specialize in building cutting-edge AI solutions:
              </p>
              <ul className="list-disc list-inside">
                <li>Retrieval-Augmented Generation (RAG) systems</li>
                <li>AI agents for task automation</li>
                <li>Custom AI integrations for businesses</li>
                <li>AI strategy consulting</li>
              </ul>
            </div>
            <div className="w-1/2">
              <motion.div
                className="w-64 h-64 bg-white rounded-lg shadow-lg"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-6xl text-blue-500">
                  AI
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'projects',
    content: (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-500 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Our Projects</h2>
          <div className="flex overflow-x-scroll space-x-8 p-4">
            {[1, 2, 3, 4].map((project) => (
              <motion.div
                key={project}
                className="relative min-w-[300px] h-64 bg-white rounded-lg shadow-lg p-6 text-gray-800 cursor-pointer"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
                style={{ perspective: 1000 }}
              >
                <div className="absolute inset-0 backface-hidden flex items-center justify-center">
                  <img
                    src={`https://via.placeholder.com/300x200?text=Project+${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                    Project {project}
                  </h3>
                </div>
                <div className="absolute inset-0 backface-hidden rotateY-180 flex items-center justify-center text-center bg-white p-6 rounded-lg">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'contact',
    content: (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-500 to-pink-500 text-white">
        <div className="max-w-md w-full mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 rounded text-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded text-gray-800"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-2 rounded text-gray-800"
            />
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full p-2 rounded text-gray-800"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-pink-500 py-2 rounded font-bold flex items-center justify-center"
            >
              Send <Send className="ml-2" size={20} />
            </button>
          </form>
        </div>
      </div>
    ),
  },
];


export default AegisWebsite;
