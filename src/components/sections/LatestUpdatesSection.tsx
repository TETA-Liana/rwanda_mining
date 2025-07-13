import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface UpdateItem {
  id: number;
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide} 
            className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent ml-4"
            disabled={totalSlides <= 1}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Dots */}
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
      </div>
    </section>
  );
};

export default LatestUpdatesSection; 