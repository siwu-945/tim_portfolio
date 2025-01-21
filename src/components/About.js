import React from 'react';

const About = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto p-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>

        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          {/* Headshot */}
          <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden mb-6 shadow-lg">
            <img
              src="/assets/photography/headshot.webp" // Replace with your actual headshot
              alt="Headshot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Hello! I’m <span className="font-semibold text-gray-800">[Your Name]</span>, a 
            <span className="font-semibold text-gray-800"> [your profession]</span> passionate about creating innovative solutions that make a difference. 
            With experience in <span className="text-blue-500">[specific expertise/field]</span>, I specialize in <span className="text-blue-500">[specific skills]</span>.
            <br />
            <br />
            My mission is to bring creativity and problem-solving to every project I work on. I’m constantly seeking to grow, learn, and contribute to meaningful endeavors.
            Feel free to connect—I’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
