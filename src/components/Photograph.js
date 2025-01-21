import React from 'react';

const Photograph = () => {
  const photos = [
    { id: 1, src: '/assets/photography/sea.jpg', alt: 'Photo 1' },
    { id: 2, src: '/assets/photography/sea.jpg', alt: 'Photo 1' },
    { id: 3, src: '/assets/photography/sea.jpg', alt: 'Photo 1' },
    { id: 4, src: '/assets/photography/sea.jpg', alt: 'Photo 1' },
    { id: 5, src: '/assets/photography/sea.jpg', alt: 'Photo 1' },
    { id: 6, src: '/assets/photography/sea.jpg', alt: 'Photo 1' },
  ];

  return (
    <div className="pt-16">
      <div className="container mx-auto p-8">
        {/* Page Header */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Photography
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A collection of moments captured through my lens.
        </p>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-lg shadow-lg group transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-96 object-cover group-hover:opacity-90 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photograph;
