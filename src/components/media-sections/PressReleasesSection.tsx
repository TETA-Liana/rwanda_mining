import React, { useState, useEffect } from 'react';

const pressReleasesData = [
  { id: 1, image: '/path/to/your/images/@press-releases-1.png', title: 'Press Release 1 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 1.' },
  { id: 2, image: '/path/to/your/images/@press-releases-2.png', title: 'Press Release 2 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 2.' },
  { id: 3, image: '/path/to/your/images/@press-releases-3.png', title: 'Press Release 3 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 3.' },
  { id: 4, image: '/path/to/your/images/@press-releases-4.png', title: 'Press Release 4 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 4.' },
  { id: 5, image: '/path/to/your/images/@press-releases-5.png', title: 'Press Release 5 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 5.' },
  { id: 6, image: '/path/to/your/images/@press-releases-6.png', title: 'Press Release 6 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 6.' },
  { id: 7, image: '/path/to/your/images/@press-releases-7.png', title: 'Press Release 7 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 7.' },
  { id: 8, image: '/path/to/your/images/@press-releases-8.png', title: 'Press Release 8 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 8.' },
  { id: 9, image: '/path/to/your/images/@press-releases-9.png', title: 'Press Release 9 Title', date: 'Month DD, YYYY', description: 'Brief description of press release 9.' },
];

const PressReleasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (pressReleasesData.length - itemsPerPage + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (pressReleasesData.length - itemsPerPage + 1)) % (pressReleasesData.length - itemsPerPage + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto-slide every 8 seconds
    return () => clearInterval(interval);
  }, [currentIndex]); // Restart interval when currentIndex changes

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0f172a] text-center">Press Releases</h2>
        <div className="relative mt-10">
          <div className="flex overflow-hidden" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
            {pressReleasesData.map((release) => (
              <div key={release.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-[#0f172a]">{release.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{release.date}</p>
                    <p className="mt-4 text-gray-700 flex-grow">{release.description}</p>
                    {/* Add a read more button or link if needed */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 ml-4"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 mr-4"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PressReleasesSection; 