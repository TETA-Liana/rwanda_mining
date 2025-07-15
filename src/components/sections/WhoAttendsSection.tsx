import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    image: "/who-ttends-1.jpg",
    title: "Exploration and Junior Mining Companies",
    description:
      "Mining companies can benefit significantly from attending, as they will gain valuable insights into market trends, new technologies, and regulatory changes affecting the mining sector and connections to help propel their businesses forward.",
    buttonLabel: "WHY JUNIOR MINING COMPANIES SHOULD ATTEND",
  },
  {
    id: 2,
    image: "/who-ttends-2.jpg",
    title: "Mining Service Providers",
    description:
      "Mining Indaba provides a unique platform to establish your presence in the African mining market and expand your business opportunities. Click below to find out more.",
    buttonLabel: "WHY MINING SERVICE PROVIDERS SHOULD ATTEND",
  },
  {
    id: 3,
    image: "/who-ttends-3.jpg",
    title: "Governments",
    description:
      "Mining Indaba is the premier platform for showcasing Africa's rich mineral potential. By participating, government leaders has the opportunity to attract direct investment into their mining sectors, which stimulates economic growth, creates jobs, and fosters further infrastructure development and capacity building.",
    buttonLabel: "WHY GOVERNMENTS SHOULD ATTEND",
  },
  {
    id: 4,
    image: "/who-ttends-4.jpg",
    title: "Investors",
    description:
      "With our focus on fostering dialogue and highlighting projects that meet specific criteria, we strive to connect investors with opportunities that best suit their goals and objectives. Join us as we bring together industry leaders and experts to explore potential ventures in the mining sector.",
    buttonLabel: "WHY INVESTORS SHOULD ATTEND",
  },
  {
    id: 5,
    image: "/who-ttends-5.jpg",
    title: "Downstream buyers",
    description:
      "Mining Indaba supports downstream buyers understand Africa's critical minerals wealth potential while navigating geopolitical and regulatory risks and infrastructure limitations.",
    buttonLabel: "WHY DOWNSTREAM BUYERS SHOULD ATTEND",
  },
  {
    id: 6,
    image: "/who-ttends-6.jpg",
    title: "Major & Mid-tier Mining companies",
    description:
      "Mining Companies will gain access to a platform to form long-term alliances with juniors and government officials and enhance asset portfolios through one-on-one meetings. With exclusive access to the Investment Lounge, mining companies will also benefit from exciting networking opportunities.",
    buttonLabel: "WHY MINING COMPANIES SHOULD ATTEND",
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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Who Attends?
        </h2>
        <div className="flex items-center justify-center">
          {/* Slideshow Content */}
          <div className="flex flex-col md:flex-row items-center overflow-hidden w-full">
            {/* Text Content (Left) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between items-center text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {currentSlideData.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentSlideData.description}
                </p>
                <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white text-sm px-2 py-2 rounded-sm font-semibold uppercase tracking-wide self-center mb-4">
                  {currentSlideData.buttonLabel}
                </button>
              </div>
              {/* Arrows below text and button */}
              <div className="flex gap-2 mt-4 justify-center">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 focus:outline-none"
                >
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
