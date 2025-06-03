import React, { useState, useEffect } from 'react';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
    image: '/articles-1.png',
    date: '29 May 2025',
    category: 'Market News',
    title: 'Valterra Platinum makes its debut on the JSE',
    description: 'Valterra Platinum, formerly known as Anglo American Platinum, commenced trading on the Johannesburg Stock Exchange (JSE)...',
    buttonLabel: 'Read More',
  },
  {
    id: 2,
    image: '/articles-2.png',
    date: '27 May 2025',
    category: 'Market News',
    title: 'Power Players in Mining',
    description: 'Paulo Castellari: Eramet has announced the formal appointment of Paulo Castellari as its new CEO.',
    buttonLabel: 'Read More',
  },
  {
    id: 3,
    image: '/articles-3.png',
    date: '23 May 2025',
    category: 'Market News',
    title: 'In conversation with Minister of Petroleum, Mines and Geology, Chad',
    description: 'Chad\'s mining minister on investment, critical minerals, and sustainable development shaping the sector\'s role in national growth...',
    buttonLabel: 'Read More',
  },
  {
    id: 4,
    image: '/articles-4.png',
    date: '21 May 2025',
    category: 'Market News',
    title: 'DMPR releases Critical Minerals Strategy, and amended MPRDA',
    description: 'The Department of Mineral and Petroleum Resources (DMPR) has welcomed Cabinet\'s approval of South Africa\'s Critical Minerals and...',
    buttonLabel: 'Read More',
  },
  {
    id: 5,
    image: '/articles-5.png',
    date: '[Date 5]',
    category: '[Category 5]',
    title: '[Article 5 Title]',
    description: '[Article 5 Description]',
    buttonLabel: 'Read More',
  },
   {
    id: 6,
    image: '/articles-6.png',
    date: '[Date 6]',
    category: '[Category 6]',
    title: 'Power Players in Mining',
    description: '[Article 6 Description]',
    buttonLabel: 'Read More',
  },
   {
    id: 7,
    image: '/articles-7.png',
    date: '[Date 7]',
    category: '[Category 7]',
    title: '[Article 7 Title]',
    description: '[Article 7 Description]',
    buttonLabel: 'Read More',
  },
   {
    id: 8,
    image: '/articles-8.png',
    date: '[Date 8]',
    category: '[Category 8]',
    title: 'Power Players in Mining',
    description: '[Article 8 Description]',
    buttonLabel: 'Read More',
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

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalSlides]); // Depend on totalSlides for useEffect

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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Articles</h2>
        <div className="flex items-center justify-center">
          <button onClick={prevSlide} className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {articlesData.map((item) => (
                <div key={item.id} className="flex flex-col flex-shrink-0 w-1/3 border rounded-lg shadow-md overflow-hidden mx-3">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  </div>
                  <div className="bg-[#55952c] h-12 text-white text-md font-semibold uppercase px-3 flex items-center justify-between">
                    <span>{item.date}</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="flex flex-col p-4 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">{item.description}</p>
                    <div className="mt-auto">
                    <button
  className="bg-[#5cb030] text-white px-6 py-2 font-medium text-base flex items-center gap-2 clip-path-[polygon(10%_0%,_90%_0%,_100%_50%,_90%_100%,_10%_100%,_0%_50%)]"
>
  <ArrowRightIcon className="h-5 w-5" />
  Read more
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

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className="mx-1 focus:outline-none bg-transparent border-none p-0"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-2.5 w-2.5 rounded-full border-2 border-[#5cb030] ${
                  currentIndex === index ? 'bg-[#5cb030]' : 'bg-transparent'
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#5cb030] hover:bg-[#55952c] text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wide text-sm">
            VIEW ALL ARTICLES
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection; 