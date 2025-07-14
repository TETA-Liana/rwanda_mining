import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface AttendeeSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const attendeeData: AttendeeSlide[] = [
  {
    id: 1,
    image: 'rwanda/mining2.png',
    title: 'Artisanal and Small-Scale Miners',
    description: 'Access training, innovation, and opportunities to professionalize operations. Rwanda Mining Week empowers local miners to collaborate, learn, and grow through inclusive platforms.',
    buttonLabel: 'WHY SMALL-SCALE MINERS SHOULD ATTEND',
  },
  {
    id: 2,
    image: 'rwanda/mining4.png',
    title: 'Government and Policy Leaders',
    description: 'Shape the future of mining policy and governance. Engage with public and private stakeholders on strategies for sustainable, inclusive mining development.',
    buttonLabel: 'WHY POLICYMAKERS SHOULD ATTEND',
  },
  {
    id: 3,
    image: 'rwanda/mining5.png',
    title: 'Investors and Financial Institutions',
    description: 'Discover investment opportunities across Rwanda’s growing mineral value chains, including exploration, processing, and critical minerals.',
    buttonLabel: 'WHY INVESTORS SHOULD ATTEND',
  },
  {
    id: 4,
    image: 'rwanda/mining6.png',
    title: 'Technology and Innovation Providers',
    description: 'Showcase cutting-edge tools that drive responsible and efficient mining. Collaborate on digital transformation, safety, and environmental innovation.',
    buttonLabel: 'WHY TECH INNOVATORS SHOULD ATTEND',
  },
  {
    id: 5,
    image: 'rwanda/mining9.png',
    title: 'Academia and Research Institutions',
    description: 'Contribute expertise to national mining strategy, present research, and foster capacity-building across geology, sustainability, and value addition.',
    buttonLabel: 'WHY ACADEMICS SHOULD ATTEND',
  },
  {
    id: 6,
    image: 'rwanda/mining1.png',
    title: 'Development Partners and NGOs',
    description: 'Support inclusive mining policies and sustainable community development. Collaborate on gender equality, ESG, and responsible sourcing goals.',
    buttonLabel: 'WHY DEVELOPMENT PARTNERS SHOULD ATTEND',
  },
];

const WhoAttendsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = attendeeData.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const currentSlideData = attendeeData[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Who Attends Rwanda Mining Week?</h2>
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center overflow-hidden w-full">
            {/* Text Content (Left) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentSlideData.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{currentSlideData.description}</p>
                <button className="bg-[#004F71] hover:bg-[#00384f] text-white text-sm px-2 py-2 rounded-sm font-semibold uppercase tracking-wide self-center mb-4">
                  {currentSlideData.buttonLabel}
                </button>
              </div>

              {/* Arrows below text and button */}
              <div className="flex gap-2 mt-4 justify-center">
                <button onClick={prevSlide} className="p-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none">
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button onClick={nextSlide} className="p-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none">
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Image (Right) */}
            <div className="w-full md:w-1/2">
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAttendsSection;
