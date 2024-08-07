import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';

const LandingPage = () => {
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

  return (
    <div className="w-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <NavDots currentSection={currentSection} />
    </div>
  );
};

const Section1 = () => (
  <div className="h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center z-10"
    >
      <h1 className="text-6xl font-bold text-white mb-4">NextGen AI Solutions</h1>
      <p className="text-xl text-gray-200">Empowering businesses with cutting-edge AI technology</p>
    </motion.div>
    <AnimatedBackground />
    <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" size={32} />
  </div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          width: Math.random() * 5 + 'px',
          height: Math.random() * 5 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

const Section2 = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
        <p className="text-lg text-gray-600">
          We specialize in leveraging AI to solve complex business challenges. Our services include:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Custom AI solution development</li>
          <li>Machine learning model optimization</li>
          <li>AI strategy consulting</li>
          <li>Data analytics and insights</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <AIVisualization />
      </div>
    </div>
  </div>
);

const AIVisualization = () => (
  <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{
        background: [
          'linear-gradient(0deg, #4338ca, #3b82f6)',
          'linear-gradient(120deg, #3b82f6, #10b981)',
          'linear-gradient(240deg, #10b981, #4338ca)',
          'linear-gradient(360deg, #4338ca, #3b82f6)',
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
    >
      <motion.div
        className="w-16 h-16 bg-white rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  </div>
);

const Section3 = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'AI-Driven Customer Insights', description: 'Developed a machine learning model to analyze customer behavior for a Fortune 500 company.' },
          { title: 'Predictive Maintenance System', description: 'Implemented an IoT-based AI solution for predictive maintenance in manufacturing.' },
          { title: 'Natural Language Processing Tool', description: 'Created a custom NLP tool for automated content moderation for a social media platform.' },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Section4 = () => {
  const [formData, setFormData] = useState({ firstName: '', email: '', company: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send Message
            <Send className="ml-2" size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

const NavDots = ({ currentSection }) => (
  <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-2">
    {[0, 1, 2, 3].map((index) => (
      <motion.div
        key={index}
        className={`w-3 h-3 rounded-full ${currentSection === index ? 'bg-white' : 'bg-gray-400'}`}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
      />
    ))}
  </div>
);

export default LandingPage;
