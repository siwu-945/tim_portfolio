import React from 'react';
import { useNavigate } from 'react-router-dom';

const InteractiveImage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        src="/home.jpg"
        alt="Interactive Background"
        className="w-full h-auto"
      />
      <div
        className="absolute hover:bg-blue-500/50 cursor-pointer"
        style={{
          top: '33%', // Adjust based on image dimensions
          left: '30%',
          width: '40%', // Adjust to cover the clickable area
          height: '15%',
        }}
        onClick={() => navigate('/projects')}
        title="Projects"
      />
      <div
        className="absolute hover:bg-blue-500/50 cursor-pointer"
        style={{
          top: '53%',
          left: '15%',
          width: '20%',
          height: '18%',
        }}
        onClick={() => navigate('/photograph')}
        title="Photography"
      />
    <div
        className="absolute hover:bg-blue-500/50 cursor-pointer"
        style={{
          top: '48%',
          left: '50%',
          width: '20%',
          height: '8%',
        }}
        onClick={() => navigate('/photograph')}
        title="Photography"
      />
    </div>
  );
};

export default InteractiveImage;
