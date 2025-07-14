import React, { useState, useEffect } from 'react';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ArticleItem {
  id: number;
<<<<<<< HEAD
  image: string;
=======
  imagePath: string;
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  date: string;
  category: string;
  title: string;
  description: string;
<<<<<<< HEAD
  buttonLabel: string;
}

const articlesData: ArticleItem[] = [
  {
    id: 1,
    image: '/rwanda/mining2.png',
    date: '4 Dec 2024',
    category: 'Event News',
    title: 'Rwanda Mining Week Opens with Keynote Addresses',
    description:
      'Rwanda Mining Week 2024 kicked off with inspiring speeches from government leaders and industry pioneers focusing on sustainable mining development.',
    buttonLabel: 'Read More',
  },
  {
    id: 2,
    image: '/rwanda/mining7.png',
    date: '5 Dec 2024',
    category: 'Investment',
    title: 'Investment Opportunities at Rwanda Mining Week',
    description:
      'Explore new investment projects and partnerships unveiled at Rwanda Mining Week, highlighting critical mineral supply chains in the region.',
    buttonLabel: 'Read More',
  },
  {
    id: 3,
    image: '/rwanda/mining8.png',
    date: '6 Dec 2024',
    category: 'Innovation',
    title: 'Technology Advances Spotlighted at Rwanda Mining Week',
    description:
      'Discover the latest innovations and technologies enhancing safety and efficiency in Rwanda’s mining sector showcased during the event.',
    buttonLabel: 'Read More',
  },
  {
    id: 4,
    image: '/rwanda/mining9.png',
    date: '6 Dec 2024',
    category: 'Community',
    title: 'Sustainable Mining and Community Development',
    description:
      'Sessions focused on the integration of community development goals with mining operations to ensure inclusive economic growth in Rwanda.',
    buttonLabel: 'Read More',
  },
  {
    id: 5,
    image: '/articles-5.png',
    date: 'Upcoming',
    category: 'Announcements',
    title: 'Rwanda Mining Week 2025 Dates Announced',
    description:
      'Mark your calendars for Rwanda Mining Week 2025, promising expanded forums and new opportunities for stakeholders across the industry.',
    buttonLabel: 'Read More',
  },
  {
    id: 6,
    image: '/articles-6.png',
    date: 'Upcoming',
    category: 'Policy',
    title: 'Rwanda Mining Regulatory Updates',
    description:
      'Stay informed on the latest regulatory changes impacting mining operations and investments shared at Rwanda Mining Week.',
    buttonLabel: 'Read More',
  },
  {
    id: 7,
    image: '/articles-7.png',
    date: 'Upcoming',
    category: 'Partnerships',
    title: 'New Public-Private Partnerships Formed',
    description:
      'Rwanda Mining Week 2024 facilitated important partnerships between government, investors, and communities to boost the sector.',
    buttonLabel: 'Read More',
  },
  {
    id: 8,
    image: '/articles-8.png',
    date: 'Upcoming',
    category: 'Education',
    title: 'Training and Capacity Building Initiatives',
    description:
      'Highlighting programs launched during Rwanda Mining Week aimed at enhancing skills and knowledge in the mining workforce.',
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

    return () => clearInterval(interval);
=======
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
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
  return (
    <section className="py-16 bg-white mx-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#004F71] mb-12">Featured Articles</h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full text-[#004F71] hover:text-[#002f44] focus:outline-none bg-transparent mr-4"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
=======

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
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            </svg>
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
<<<<<<< HEAD
              {articlesData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col flex-shrink-0 w-1/3 border rounded-lg shadow-md overflow-hidden mx-3"
                >
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  </div>
                  <div className="bg-[#004F71] h-12 text-white text-md font-semibold uppercase px-3 flex items-center justify-between">
                    <span>{item.date}</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="flex flex-col p-4 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm flex-grow">{item.description}</p>
                    <div className="mt-auto">
                      <button
                        className="bg-[#004F71] hover:bg-[#002f44] text-white px-6 py-2 font-medium text-base flex items-center gap-2 clip-path-[polygon(10%_0%,_90%_0%,_100%_50%,_90%_100%,_10%_100%,_0%_50%)] transition-colors duration-300"
                      >
                        <ArrowRightIcon className="h-5 w-5" />
                        Read more
                      </button>
=======
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
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <button
            onClick={nextSlide}
            className="p-2 rounded-full text-[#004F71] hover:text-[#002f44] focus:outline-none bg-transparent ml-4"
            aria-label="Next Slide"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

=======
          <button onClick={nextSlide} className="p-2 rounded-full text-brandGreen hover:text-brandGreen-dark focus:outline-none bg-transparent ml-4">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className="mx-1 focus:outline-none bg-transparent border-none p-0"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
<<<<<<< HEAD
                className={`h-2.5 w-2.5 rounded-full border-2 border-[#004F71] ${
                  currentIndex === index ? 'bg-[#004F71]' : 'bg-transparent'
=======
                className={`h-2.5 w-2.5 rounded-full border-2 border-[#5cb030] ${
                  currentIndex === index ? 'bg-[#5cb030]' : 'bg-transparent'
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                }`}
              ></div>
            </button>
          ))}
        </div>
<<<<<<< HEAD

        <div className="flex justify-center mt-12">
          <button className="bg-[#004F71] hover:bg-[#002f44] text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wide text-sm transition-colors duration-300">
=======
        <div className="flex justify-center mt-12">
          <button className="bg-[#5cb030] hover:bg-[#55952c] text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wide text-sm">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            VIEW ALL ARTICLES
          </button>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default FeaturedArticlesSection;
=======
export default FeaturedArticlesSection; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
