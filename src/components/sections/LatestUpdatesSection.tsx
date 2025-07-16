import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface UpdateItem {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  reportUrl?: string;
}

const LatestUpdatesSection = () => {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 3;

  useEffect(() => {
    setLoading(true);
    fetch('/api/updates')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch updates');
        const data = await res.json();
        // Map backend updates to UpdateItem[]
        const mapped: UpdateItem[] = (data as any[]).slice(0, 8).map((u) => ({
          id: u.id,
          image: u.imagePath ? `/api/updates/image/${encodeURIComponent(u.imagePath)}` : '/articles-1.png',
          title: u.title,
          description: u.description,
          buttonLabel: u.reportPath ? 'Download Report' : 'Learn More',
          reportUrl: u.reportPath ? `/api/updates/report/${encodeURIComponent(u.reportPath.split('/').pop() || u.reportPath)}` : undefined,
        }));
        setUpdates(mapped);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching updates');
        setUpdates([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const totalItems = updates.length;
  const totalSlides = Math.max(totalItems - itemsPerPage + 1, 1);

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
        <h2 className="text-4xl font-bold text-center text-[#2563eb] mb-12">
          Latest Updates
        </h2>
        {loading ? (
          <div className="text-center text-blue-700 py-10 text-lg">Loading updates...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 text-lg">{error}</div>
        ) : updates.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-lg">No updates found.</div>
        ) : (
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full text-[#2563eb] hover:text-[#1e3a8a] focus:outline-none bg-transparent mr-4"
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex overflow-hidden w-full max-w-6xl">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {updates
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
                        onError={e => (e.currentTarget.src = '/articles-1.png')}
                      />
                    </div>
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-semibold text-[#2563eb] mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        {item.reportUrl ? (
                          <a href={item.reportUrl} download target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#60a5fa] hover:bg-[#2563eb] text-black px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm transition-colors duration-300">
                              {item.buttonLabel}
                            </button>
                          </a>
                        ) : (
                          <button className="bg-[#60a5fa] hover:bg-[#2563eb] text-black px-4 py-2 rounded-md font-semibold uppercase tracking-wide text-sm transition-colors duration-300">
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
                className={`h-3 w-3 rounded-full border-2 border-[#2563eb] ${
                  currentIndex === index ? "bg-[#2563eb]" : "bg-transparent"
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
