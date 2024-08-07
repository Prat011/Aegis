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

  const projectData = [
    { title: "AI Assistant", image: "/api/placeholder/300/200", description: "An advanced AI assistant for customer support." },
    { title: "Data Analytics", image: "/api/placeholder/300/200", description: "Powerful data analytics platform for business insights." },
    { title: "Smart Home", image: "/api/placeholder/300/200", description: "Innovative smart home solutions powered by AI." },
    { title: "Health Tech", image: "/api/placeholder/300/200", description: "AI-driven health monitoring and prediction system." },
  ];

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
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-teal-400 text-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
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
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'projects',
      content: (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-500 to-yellow-400 text-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Our Projects</h2>
            <div className="relative h-96 overflow-hidden">
              <motion.div
                className="flex absolute"
                animate={{
                  x: [0, -100 * projectData.length + '%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...projectData, ...projectData].map((project, index) => (
                  <motion.div
                    key={index}
                    className="w-72 h-96 bg-white rounded-lg shadow-lg mx-4 flex-shrink-0 cursor-pointer perspective-1000"
                    whileHover={{ rotateY: 180 }}
                  >
                    <motion.div className="w-full h-full relative">
                      <div className="absolute w-full h-full backface-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-3/4 object-cover rounded-t-lg" />
                        <div className="p-4 text-center text-gray-800">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                      <div className="absolute w-full h-full backface-hidden bg-white rounded-lg flex items-center justify-center p-4 text-gray-800" style={{ transform: 'rotateY(180deg)' }}>
                        <p>{project.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
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

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {sections.map((section, index) => (
        <div key={section.id} className="snap-start h-screen">
          {section.content}
          {index < sections.length - 1 && (
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={() => window.scrollTo({ top: (index + 1) * window.innerHeight, behavior: 'smooth' })}
            >
              <ChevronDown size={32} color="white" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AegisWebsite;
