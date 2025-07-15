import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

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
    image: "rwanda/mining2.png",
    title: "Rwanda Mining Week Country Showcases",
    description:
      "Experience dedicated platforms showcasing Rwanda’s mining progress and investment opportunities, attracting global industry leaders and investors.",
    buttonLabel: "LEARN MORE",
  },
  {
    id: 2,
    image: "rwanda/mining3.png",
    title: "Download the 2024 Exhibitor Brochure",
    description:
      "Explore how to present your brand and innovations at Rwanda Mining Week — the region’s leading mining investment event.",
    buttonLabel: "DOWNLOAD THE BROCHURE",
  },
  {
    id: 3,
    image: "rwanda/mining5.png",
    title: "Post Event Report 2023",
    description:
      "Review key insights and outcomes from Rwanda Mining Week 2023, featuring industry highlights and future growth strategies.",
    buttonLabel: "DOWNLOAD THE REPORT",
  },
  {
    id: 4,
    image: "rwanda/mining6.png",
    title: "Participating Companies",
    description:
      "Discover the leading companies driving innovation and investment at Rwanda Mining Week 2024.",
    buttonLabel: "DOWNLOAD NOW",
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
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#5cb030] mb-12">
          Latest Updates
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full text-[#5cb030] hover:text-[#4ca026] focus:outline-none bg-transparent mr-4"
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex overflow-hidden w-full max-w-6xl">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {updateData
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col flex-shrink-0 w-1/3 px-3"
                  >
                    <div className="mb-4 rounded-t-lg overflow-hidden shadow-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-[#5cb030] mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <button className="bg-[#d4ed31] hover:bg-[#c0d82c] text-black px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm transition-colors duration-300">
                          {item.buttonLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full text-[#5cb030] hover:text-[#4ca026] focus:outline-none bg-transparent ml-4"
            aria-label="Next Slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

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
                  currentIndex === index ? "bg-[#5cb030]" : "bg-transparent"
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
