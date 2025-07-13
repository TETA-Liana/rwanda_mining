import React, { useState, useEffect } from 'react';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ArticleItem {
  id: number;
  imagePath: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

interface BackendArticle {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  imagePath?: string;
  link: string;
}

const API_URL = 'http://localhost:8080/api/articles';

const FeaturedArticlesSection = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  // Map backend article to frontend
  const mapFromBackend = (a: BackendArticle): ArticleItem => ({
    id: a.id,
    imagePath: a.imagePath || '',
    date: a.releaseDate,
    category: '', // You can add a category field to the backend if needed
    title: a.title,
    description: a.description,
    link: a.link,
  });

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data: BackendArticle[]) => {
        setArticles(data.map(mapFromBackend));
      });
  }, []);

  const totalItems = articles.length;
  const totalSlides = Math.max(1, totalItems - itemsPerPage + 1);

  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 8000);
      return () => clearInterval(interval);
    }
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

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '/placeholder-article.png';
    return `${API_URL}/image/${encodeURIComponent(imagePath)}`;
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
              {articles.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
                <div key={item.id} className="flex flex-col flex-shrink-0 w-1/3 rounded-xl shadow-lg bg-white mx-2 h-full border">
                  <img src={getImageUrl(item.imagePath)} alt={item.title} className="w-full h-48 object-cover rounded-t-xl" />
                  <div className="w-full bg-[#5cb030] h-12 text-white text-md font-semibold uppercase px-4 flex items-center justify-between rounded-b-none">
                    <span>{item.date}</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="flex flex-col p-6 flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-base flex-grow">{item.description}</p>
                    <div className="mt-auto">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#5cb030] hover:bg-[#4ca026] text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 w-full"
                        style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)'}}
                      >
                        <ArrowRightIcon className="h-6 w-6" />
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent ml-4">
            <ChevronRightIcon className="w-6 h-6" />
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