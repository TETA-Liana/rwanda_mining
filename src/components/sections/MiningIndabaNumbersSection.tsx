import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface NumberItem {
  id: number;
  icon: string;
  number: string;
  title: string;
}

const numberData: NumberItem[] = [
  {
    id: 1,
    icon: "/icon-number-1.png",
    number: "1,450+",
    title: "Mining company executives",
  },
  {
    id: 2,
    icon: "/icon-number-2.png",
    number: "1300+",
    title: "Global Investors",
  },
  {
    id: 3,
    icon: "/icon-number-3.png",
    number: "1,400+",
    title: "Government officials",
  },
  {
    id: 4,
    icon: "/icon-number-4.png",
    number: "625+",
    title: "Speakers",
  },
  {
    id: 5,
    icon: "/icon-number-5.png",
    number: "10,500+",
    title: "Overall delegate attendance",
  },
];

const MiningIndabaNumbersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = numberData.length;
  const totalSlides = totalItems - itemsPerPage + 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Mining Indaba in Numbers
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full text-[#5cb030] hover:text-[#4a9b25] focus:outline-none bg-transparent"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className={`flex transition-transform duration-500 ease-in-out gap-x-8`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${(numberData.length / itemsPerPage) * 100}%`,
              }}
            >
              {numberData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center text-center flex-shrink-0 w-1/4 px-2"
                >
                  <div className="w-36 h-36 rounded-full bg-brandGreen flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={`Icon for ${item.title}`}
                      className="h-36 w-36 rounded-full"
                    />
                  </div>
                  <p className="text-3xl font-bold text-[#5cb030] mb-1">
                    {item.number}
                  </p>
                  <p className="text-gray-800 text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full text-[#5cb030] hover:text-[#4a9b25] focus:outline-none bg-transparent ml-4"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiningIndabaNumbersSection;
