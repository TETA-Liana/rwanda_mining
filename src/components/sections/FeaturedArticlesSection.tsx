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
  link?: string;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }
  // fallback: just return the string
  return dateStr;
}

const FeaturedArticlesSection = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 3;

  useEffect(() => {
    setLoading(true);
    fetch('/api/articles')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch articles');
        const data = await res.json();
        // Map backend articles to ArticleItem[]
        const mapped: ArticleItem[] = (data as any[]).slice(0, 8).map((a) => ({
          id: a.id,
          image: a.imagePath ? `/api/articles/image/${encodeURIComponent(a.imagePath)}` : '/articles-1.png',
          date: formatDate(a.releaseDate),
          category: 'General', // No category in model, fallback
          title: a.title,
          description: a.description,
          buttonLabel: 'Read More',
          link: a.link,
        }));
        setArticles(mapped);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching articles');
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const totalItems = articles.length;
  const totalSlides = Math.max(totalItems - itemsPerPage + 1, 1);

  useEffect(() => {
    if (totalItems === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 8000);
    return () => clearInterval(interval);
  }, [totalSlides, totalItems]);

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
        {loading ? (
          <div className="text-center text-blue-700 py-10 text-lg">Loading articles...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 text-lg">{error}</div>
        ) : articles.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-lg">No articles found.</div>
        ) : (
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
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {articles
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
                        onError={e => (e.currentTarget.src = '/articles-1.png')}
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
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white px-6 py-2 font-medium text-base flex items-center gap-2 transition-colors duration-300">
                              <ArrowRightIcon className="h-5 w-5" />
                              {item.buttonLabel}
                            </button>
                          </a>
                        ) : (
                          <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white px-6 py-2 font-medium text-base flex items-center gap-2 transition-colors duration-300">
                            <ArrowRightIcon className="h-5 w-5" />
                            {item.buttonLabel}
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
            className="p-2 rounded-full text-[#2563eb] hover:text-[#1e3a8a] focus:outline-none bg-transparent ml-4"
            aria-label="Next Slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        )}
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
