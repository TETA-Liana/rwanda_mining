import React, { useState, useEffect } from "react";
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Story = {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  powerPlayer?: boolean;
  image?: string;
};

const FeaturedStories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 4;

  // Sample data for featured stories
  const allStories: Story[] = [
    {
      id: 5,
      date: "20 May 2025",
      category: "Market News",
      title: "Takalani Randima: UMS Shaft Sinkers",
      excerpt:
        "Takalani Randima stands as a pioneering figure in the mining industry. She is the current Managing Director of UMS Shaft...",
      featured: true,
      powerPlayer: true,
      image: "/articles-5.png",
    },
    {
      id: 1,
      date: "05 Jun 2025",
      category: "Market News",
      title:
        "European Union adds 13 new critical minerals for supply chain resilience",
      excerpt:
        "The European Union (EU) has taken a significant step toward strengthening its supply chain resilience and reducing dependency on external...",
      featured: true,
      image: "/articles-1.png",
    },
    {
      id: 2,
      date: "20 May 2025",
      category: "Market News",
      title:
        "In Conversation with Minister of Petroleum & Mineral Resources, Egypt",
      excerpt:
        "Egypt's mining minister on reforms, sustainability, and investment driving the sector's role in national development and global energy...",
      featured: true,
      image: "/articles-2.png",
    },
    {
      id: 3,
      date: "19 May 2025",
      category: "Market News",
      title:
        "South Africa's Eskom indicates positive outlook for winter period",
      excerpt:
        "Earlier this year Eskom CEO, Dan Marokane, discussed the evolving relationship between Eskom and South Africa's mining industry at Mining...",
      featured: true,
      powerPlayer: true,
      image: "/articles-3.png",
    },
    {
      id: 4,
      date: "13 May 2025",
      category: "Market News",
      title: "South32 secures CEO designate",
      excerpt:
        "South32 has announced that Matthew Daley will join the company as Deputy CEO on 2 February 2026 and will assume the role of CEO when Graham...",
      featured: true,
      powerPlayer: true,
      image: "/articles-8.png",
    },
    {
      id: 7,
      date: "13 May 2025",
      category: "Market News",
      title: "South32 secures CEO designate",
      excerpt:
        "South32 has announced that Matthew Daley will join the company as Deputy CEO on 2 February 2026 and will assume the role of CEO when Graham...",
      featured: true,
      powerPlayer: true,
      image: "/articles-2.png",
    },
    {
      id: 0,
      date: "13 May 2025",
      category: "Market News",
      title: "South32 secures CEO designate",
      excerpt:
        "South32 has announced that Matthew Daley will join the company as Deputy CEO on 2 February 2026 and will assume the role of CEO when Graham...",
      featured: true,
      powerPlayer: true,
      image: "/articles-5.png",
    },
    {
      id: 6,
      date: "13 May 2025",
      category: "Market News",
      title: "South32 secures CEO designate",
      excerpt:
        "South32 has announced that Matthew Daley will join the company as Deputy CEO on 2 February 2026 and will assume the role of CEO when Graham...",
      featured: true,
      powerPlayer: true,
      image: "/articles-6.png",
    },
    {
      id: 8,
      date: "13 May 2025",
      category: "Market News",
      title: "South32 secures CEO designate",
      excerpt:
        "South32 has announced that Matthew Daley will join the company as Deputy CEO on 2 February 2026 and will assume the role of CEO when Graham...",
      featured: true,
      powerPlayer: true,
      image: "/articles-1.png",
    },
    {
      id: 9,
      date: "13 May 2025",
      category: "Market News",
      title: "South32 secures CEO designate",
      excerpt:
        "South32 has announced that Matthew Daley will join the company as Deputy CEO on 2 February 2026 and will assume the role of CEO when Graham...",
      featured: true,
      powerPlayer: true,
      image: "/articles-8.png",
    },
  ];

  const filteredStories = allStories.filter((story) => story.featured);

  const getCurrentStories = () => {
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    return filteredStories.slice(indexOfFirstStory, indexOfLastStory);
  };

  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white p-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Featured Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getCurrentStories().map((story) => (
          <div
            key={story.id}
            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {story.image && (
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="bg-green-600 text-white p-2 flex justify-between items-center">
              <span className="text-sm font-medium">
                {story.date} | {story.category}
              </span>
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                #{String(story.id).padStart(3, "0")}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 p-4">
              {story.title}
            </h3>
            <p className="text-gray-600 text-sm p-4">{story.excerpt}</p>
            <a
              href="#"
              className="block w-36 h-12 bg-green-600 text-white text-sm font-medium text-center leading-12 rounded-lg hover:bg-green-700 transition-colors mx-4 mb-4 clip-polygon-10-0-90-0-100-50-90-100-10-100-0-50 pt-3"
            >
              {/* <FontAwesomeIcon icon={faArrowRight} className="mr-2" /> */}
              <span className="mr-2">→</span> Read more
            </a>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <span
              key={page}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentPage === page
                  ? "bg-white border-2 border-green-600 opacity-50"
                  : "bg-green-600"
              }`}
              onClick={() => paginate(page)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedStories;
