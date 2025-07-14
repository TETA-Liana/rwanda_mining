<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface UpdateItem {
  id: number;
<<<<<<< HEAD
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const updateData: UpdateItem[] = [
  {
    id: 1,
    image: 'rwanda/mining2.png',
    title: 'Rwanda Mining Week Country Showcases',
    description:
      'Experience dedicated platforms showcasing Rwanda’s mining progress and investment opportunities, attracting global industry leaders and investors.',
    buttonLabel: 'LEARN MORE',
  },
  {
    id: 2,
    image: 'rwanda/mining3.png',
    title: 'Download the 2024 Exhibitor Brochure',
    description:
      'Explore how to present your brand and innovations at Rwanda Mining Week — the region’s leading mining investment event.',
    buttonLabel: 'DOWNLOAD THE BROCHURE',
  },
  {
    id: 3,
    image: 'rwanda/mining5.png',
    title: 'Post Event Report 2023',
    description:
      'Review key insights and outcomes from Rwanda Mining Week 2023, featuring industry highlights and future growth strategies.',
    buttonLabel: 'DOWNLOAD THE REPORT',
  },
  {
    id: 4,
    image: 'rwanda/mining6.png',
    title: 'Participating Companies',
    description:
      'Discover the leading companies driving innovation and investment at Rwanda Mining Week 2024.',
    buttonLabel: 'DOWNLOAD NOW',
  },
];

const LatestUpdatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = updateData.length;
  const totalSlides = totalItems - itemsPerPage + 1;
=======
  imagePath?: string;
  title: string;
  description: string;
  reportPath?: string;
}

// Backend model mapping
interface BackendUpdate {
  id: number;
  title: string;
  description: string;
  imagePath?: string;
  reportPath?: string;
  createdAt?: string;
  updatedAt?: string;
}

const API_URL = 'http://localhost:8080/api/updates';

const LatestUpdatesSection = () => {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 3;

  // Map backend update to frontend
  const mapFromBackend = (u: BackendUpdate): UpdateItem => ({
    id: u.id,
    title: u.title,
    description: u.description,
    imagePath: u.imagePath || '',
    reportPath: u.reportPath || '',
  });

  // Load updates from backend
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data: BackendUpdate[]) => {
        setUpdates(data.map(mapFromBackend));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // Fallback to empty array if API fails
        setUpdates([]);
      });
  }, []);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '/placeholder-update.jpg'; // Fallback image
    // If it's a full path, use the file endpoint
    if (imagePath.includes('/')) {
      return `${API_URL}/file?path=${encodeURIComponent(imagePath)}`;
    }
    // If it's just a filename, use the image endpoint
    return `${API_URL}/image/${encodeURIComponent(imagePath)}`;
  };

  const getReportUrl = (reportPath: string) => {
    if (!reportPath) return null;
    // If it's a full path, use the file endpoint
    if (reportPath.includes('/')) {
      return `${API_URL}/file?path=${encodeURIComponent(reportPath)}`;
    }
    // If it's just a filename, use the report endpoint
    return `${API_URL}/report/${encodeURIComponent(reportPath)}`;
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest updates</h2>
          <div className="text-center text-gray-500">Loading updates...</div>
        </div>
      </section>
    );
  }

  if (updates.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest updates</h2>
          <div className="text-center text-gray-500">No updates available at the moment.</div>
        </div>
      </section>
    );
  }

  const totalItems = updates.length;
  const totalSlides = Math.max(1, totalItems - itemsPerPage + 1);
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

<<<<<<< HEAD
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#004F71] mb-12">
          Latest Updates
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full text-[#004F71] hover:text-[#003a54] focus:outline-none bg-transparent mr-4"
            aria-label="Previous Slide"
=======
  const visibleUpdates = updates.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest updates</h2>
        <div className="flex items-center justify-center">
          <button 
            onClick={prevSlide} 
            className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent mr-4"
            disabled={totalSlides <= 1}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

<<<<<<< HEAD
          <div className="flex overflow-hidden w-full max-w-6xl">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {updateData.map((item) => (
                <div key={item.id} className="flex flex-col flex-shrink-0 w-1/3 px-3">
                  <div className="mb-4 rounded-t-lg overflow-hidden shadow-md">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-[#004F71] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">
                      {item.description}
                    </p>
                    <div className="mt-auto">
                      <button className="bg-[#3a87ad] hover:bg-[#2a6280] text-white px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm transition-colors duration-300">
                        {item.buttonLabel}
                      </button>
=======
          <div className="flex overflow-hidden w-full">
            <div className="flex transition-transform duration-500 ease-in-out gap-x-6 w-full">
              {visibleUpdates.map((item) => (
                <div key={item.id} className="flex flex-col flex-shrink-0 w-1/3 px-3">
                  <div className="mb-4 rounded-t-lg overflow-hidden shadow-md">
                    <img 
                      src={getImageUrl(item.imagePath || '')} 
                      alt={item.title} 
                      className="w-full h-48 object-contain bg-white"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-update.jpg';
                      }}
                    />
                  </div>
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">{item.description}</p>
                    <div className="mt-auto">
                      {item.reportPath && getReportUrl(item.reportPath) ? (
                        <a 
                          href={getReportUrl(item.reportPath)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#d4ed31] hover:bg-[#d4ed31] text-black px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm"
                        >
                          DOWNLOAD REPORT
                        </a>
                      ) : (
                        <button className="bg-[#d4ed31] hover:bg-[#d4ed31] text-black px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm">
                          LEARN MORE
                        </button>
                      )}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          <button
            onClick={nextSlide}
            className="p-2 rounded-full text-[#004F71] hover:text-[#003a54] focus:outline-none bg-transparent ml-4"
            aria-label="Next Slide"
=======
          <button 
            onClick={nextSlide} 
            className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent ml-4"
            disabled={totalSlides <= 1}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Dots */}
<<<<<<< HEAD
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className="mx-1 focus:outline-none bg-transparent border-none p-0"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-3 w-3 rounded-full border-2 border-[#004F71] ${
                  currentIndex === index ? 'bg-[#004F71]' : 'bg-transparent'
                }`}
              ></div>
            </button>
          ))}
        </div>
=======
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className="mx-1 focus:outline-none bg-transparent border-none p-0"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-3 w-3 rounded-full border-2 border-[#5cb030] ${
                    currentIndex === index ? 'bg-[#5cb030]' : 'bg-transparent'
                  }`}
                ></div>
              </button>
            ))}
          </div>
        )}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default LatestUpdatesSection;
=======
export default LatestUpdatesSection; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
