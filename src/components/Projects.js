import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A short description of Project 1.',
    image: '/assets/photography/river.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A short description of Project 2.',
    image: '/assets/photography/river.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A short description of Project 3.',
    image: '/assets/photography/river.jpg',
  },
];

const Projects = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto p-8">
        {/* Page Header */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore some of the projects I have worked on.
        </p>

        {/* Project Frames */}
        <div className="flex flex-col items-center space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-4/5 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              {/* Project Description */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
