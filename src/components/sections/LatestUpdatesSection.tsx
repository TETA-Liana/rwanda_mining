import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface UpdateItem {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const updateData: UpdateItem[] = [
  {
    id: 1,
    image: '/latest-1.jpg',
    title: 'Mining Indaba Country Showcases',
    description: 'Country Showcases are a cornerstone of Mining Indaba\'s intergovernmental agenda. These dedicated, high-impact platforms help elevate Africa\'s most dynamic mining nations onto the global stage. These 90-minute sessions are curated opportunities for governments and partners to present their vision, progress, and prospects directly to a room of senior investors, financiers, and global operators.',
    buttonLabel: 'LEARN MORE',
  },
  {
    id: 2,
    image: '/latest-2.png',
    title: 'Download the 2026 Exhibitor Brochure',
    description: 'Discover the opportunities to showcase your brand at Africa\'s largest mining investment event – Mining Indaba 2026!',
    buttonLabel: 'DOWNLOAD THE BROCHURE',
  },
  {
    id: 3,
    image: '/latest-3.jpg',
    title: 'Post Event Report',
    description: 'The official Mining Indaba 2025 Post-Event Report is now live! This exclusive report offers an in-depth look at the industry\'s most influential gathering, highlighting the key people, discussions, and opportunities that defined Mining Indaba 2025.',
    buttonLabel: 'DOWNLOAD THE REPORT',
  },
  {
    id: 4,
    image: '/latest-4.jpg',
    title: 'MI25 Companies Attended',
    description: 'Discover the complete list of companies that attended Mining Indaba 2025',
    buttonLabel: 'Download now',
  },
];

const LatestUpdatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = updateData.length;
  const totalSlides = totalItems - itemsPerPage + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest updates</h2>
        <div className="flex items-center justify-center">
          <button onClick={prevSlide} className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent mr-4">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex overflow-hidden w-full">
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
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">{item.description}</p>
                    <div className="mt-auto">
                      <button className="bg-[#d4ed31] hover:bg-[#d4ed31] text-black px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm">
                        {item.buttonLabel}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent ml-4">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Dots */}
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
      </div>
    </section>
  );
};

export default LatestUpdatesSection; 