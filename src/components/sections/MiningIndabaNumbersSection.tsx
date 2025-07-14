import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
interface NumberItem {
  id: number;
  icon: string;
  number: string;
  title: string;
}
const numberData: NumberItem[] = [
  {
    id: 1,
    icon: '/rwanda/icon1.png',
    number: '200+',
    title: 'International mining companies',
  },
  {
    id: 2,
    icon: '/rwanda/icon2.png',
    number: '150+',
    title: 'Global investors',
  },
  {
    id: 3,
    icon: '/rwanda/icon3.png',
    number: '120+',
    title: 'Government & regulatory officials',
  },
  {
    id: 4,
    icon: '/rwanda/icon4.png',
    number: '80+',
    title: 'Speakers & panelists',
  },
  {
    id: 5,
    icon: '/rwanda/icon1.png',
    number: '1,000+',
    title: 'Total delegates',
  },
];

const RwandaMiningNumbersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalSlides = numberData.length - itemsPerPage + 1; // slides = 2

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Rwanda Mining Week: Key Figures
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-[#004F71] text-[#ffffff] focus:outline-none"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {numberData.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center flex-shrink-0 w-1/4 px-2">
                  <div className="w-36 h-36 rounded-full bg-transparent flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-36 w-36 rounded-full"
                    />
                  </div>
                  <p className="text-3xl font-bold text-[#004F71] mb-1">{item.number}</p>
                  <p className="text-gray-800 text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-[#004F71] text-[#ffffff] focus:outline-none ml-4"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RwandaMiningNumbersSection;
