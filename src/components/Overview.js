import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  const sections = [
    {
      title: 'About Me',
      description: 'Learn more about who I am and what I do.',
      link: '/about',
    },
    {
      title: 'Projects',
      description: 'Check out some of the exciting projects I’ve worked on.',
      link: '/projects',
    },
    {
      title: 'Photography',
      description: 'Explore my collection of captured moments.',
      link: '/photograph',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{section.title}</h3>
            <p className="text-gray-300 mb-6">{section.description}</p>
            <Link
              to={section.link}
              className="text-blue-400 font-semibold hover:text-blue-500 transition"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
