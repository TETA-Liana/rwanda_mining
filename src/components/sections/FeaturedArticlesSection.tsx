import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ArticleItem {
  id: number;
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: "/rwanda/mining2.png",
    date: "4 Dec 2024",
    category: "Event News",
    title: "Rwanda Mining Week Opens with Keynote Addresses",
    description:
      "Rwanda Mining Week 2024 kicked off with inspiring speeches from government leaders and industry pioneers focusing on sustainable mining development.",
    buttonLabel: "Read More",
  },
  {
    id: 2,
    image: "/rwanda/mining7.png",
    date: "5 Dec 2024",
    category: "Investment",
    title: "Investment Opportunities at Rwanda Mining Week",
    description:
      "Explore new investment projects and partnerships unveiled at Rwanda Mining Week, highlighting critical mineral supply chains in the region.",
    buttonLabel: "Read More",
  },
  {
    id: 3,
    image: "/rwanda/mining8.png",
    date: "6 Dec 2024",
    category: "Innovation",
    title: "Technology Advances Spotlighted at Rwanda Mining Week",
    description:
      "Discover the latest innovations and technologies enhancing safety and efficiency in Rwanda’s mining sector showcased during the event.",
    buttonLabel: "Read More",
  },
  {
    id: 4,
    image: "/rwanda/mining9.png",
    date: "6 Dec 2024",
    category: "Community",
    title: "Sustainable Mining and Community Development",
    description:
      "Sessions focused on the integration of community development goals with mining operations to ensure inclusive economic growth in Rwanda.",
    buttonLabel: "Read More",
  },
  {
    id: 5,
    image: "/articles-5.png",
    date: "Upcoming",
    category: "Announcements",
    title: "Rwanda Mining Week 2025 Dates Announced",
    description:
      "Mark your calendars for Rwanda Mining Week 2025, promising expanded forums and new opportunities for stakeholders across the industry.",
    buttonLabel: "Read More",
  },
  {
    id: 6,
    image: "/articles-6.png",
    date: "Upcoming",
    category: "Policy",
    title: "Rwanda Mining Regulatory Updates",
    description:
      "Stay informed on the latest regulatory changes impacting mining operations and investments shared at Rwanda Mining Week.",
    buttonLabel: "Read More",
  },
  {
    id: 7,
    image: "/articles-7.png",
    date: "Upcoming",
    category: "Partnerships",
    title: "New Public-Private Partnerships Formed",
    description:
      "Rwanda Mining Week 2024 facilitated important partnerships between government, investors, and communities to boost the sector.",
    buttonLabel: "Read More",
  },
  {
    id: 8,
    image: "/articles-8.png",
    date: "Upcoming",
    category: "Education",
    title: "Training and Capacity Building Initiatives",
    description:
      "Highlighting programs launched during Rwanda Mining Week aimed at enhancing skills and knowledge in the mining workforce.",
    buttonLabel: "Read More",
  },
];

const FeaturedArticlesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = articlesData.length;
  const totalSlides = totalItems - itemsPerPage + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 8000); // Slide every 8 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

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
    <section className="py-16 bg-white mx-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#2563eb] mb-12">
          Featured Articles
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full text-[#2563eb] hover:text-[#1e3a8a] focus:outline-none bg-transparent mr-4"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {articlesData
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col flex-shrink-0 w-1/3 border rounded-lg shadow-md overflow-hidden mx-3"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="bg-[#2563eb] h-12 text-white text-md font-semibold uppercase px-3 flex items-center justify-between">
                      <span>{item.date}</span>
                      <span>{item.category}</span>
                    </div>
                    <div className="flex flex-col p-4 flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white px-6 py-2 font-medium text-base flex items-center gap-2 transition-colors duration-300">
                          <ArrowRightIcon className="h-5 w-5" />
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
            className="p-2 rounded-full text-[#2563eb] hover:text-[#1e3a8a] focus:outline-none bg-transparent ml-4"
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
                className={`h-2.5 w-2.5 rounded-full border-2 border-[#2563eb] ${
                  currentIndex === index ? "bg-[#2563eb]" : "bg-transparent"
                }`}
              ></div>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wide text-sm transition-colors duration-300">
            VIEW ALL ARTICLES
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
