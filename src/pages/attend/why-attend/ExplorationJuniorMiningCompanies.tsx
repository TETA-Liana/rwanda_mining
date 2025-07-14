import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Why1 from "../../../../public/why-attend-ext-1.jpg";
import Why2 from "../../../../public/why-attend-ext-2.jpg";
import Gallery1 from "../../../../public/investors/inve-1.png";
import Gallery2 from "../../../../public/investors/inve-2.png";
import Gallery3 from "../../../../public/investors/inve-3.png";
import Gallery4 from "../../../../public/investors/inve-4.png";
import Gallery5 from "../../../../public/investors/inve-5.png";
import Gallery6 from "../../../../public/investors/inve-6.png";
import Gallery7 from "../../../../public/investors/inve-7.png";
import Gallery8 from "../../../../public/investors/inve-8.png";
import Gallery9 from "../../../../public/investors/inve-9.png"; 
import Gallery10 from "../../../../public/investors/inve-10.png";
import Gallery11 from "../../../../public/investors/inve-11.png";
import Gallery12 from "../../../../public/investors/inve-12.png";
import Pie from "../../../../public/pie.png";
import FooterSection from '../../../components/sections/FooterSection';
import FeaturedArticlesSection from '../../../components/sections/FeaturedArticlesSection';

const ExplorationJuniorMiningCompanies = () => {

  interface GalleryMember {
    id: number;
    image: string;
  }

  const images = [
    'inve-1.png',
    'inve-2.png',
    'inve-3.png',
    'inve-4.png',
    'inve-5.png',
    'inve-6.png',
    'inve-7.png',
    'inve-8.png',
    'inve-9.png',
    'inve-10.png',
    'inve-11.png',
    'inve-12.png'
  ];

  const galleryImageImports = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9, 
    Gallery10, 
    Gallery11, 
    Gallery12
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const membersPerPage = 4;
  const totalSlides = Math.ceil(images.length / membersPerPage);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalSlides]); // Re-run effect if totalSlides changes

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const galleryMembers: GalleryMember[] = galleryImageImports.map((image, index) => ({
    id: index + 1,
    image: image,
  }));
  
  interface GalleryMemberCardProps {
    member: GalleryMember;
  }
  
  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member}) => {
  
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
          <img src={member.image} alt="Gallery Image" className="w-full h-full object-cover" />
      </div>
    );
  };

  const cardWidth = 256;
  const gapWidth = 24;
  const slideDistance = (cardWidth + gapWidth) * membersPerPage;

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-60 bg-gradient-to-r from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold mt-16">Rwanda Mining Week for Junior Miners</h1>
      </div>

      {/* Connect with Investors Section */}
      <section  className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Connect with Investors at Rwanda Mining Week 2026: Opportunities for Junior Mining Companies</h2>
        <p className="text-lg mb-8">
          Rwanda Mining Week is the premier platform for networking, deal-making, and discussing the latest trends and challenges in Rwanda’s mining sector. This event offers unparalleled opportunities for
          junior mining and exploration companies to forge connections, advance projects, and explore financing opportunities. Gain critical insights into market trends, emerging technologies, and regulatory updates shaping Rwanda’s $1.75 billion mineral export industry.
          <br /><br />
          Interested in attending Rwanda Mining Week 2026?
        </p>
        <button className="bg-[#ADD8E6] hover:bg-[#004F71] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
          REGISTER INTEREST
        </button>
      </section>

      {/* Why attend Rwanda Mining Week Section */}
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Why attend Rwanda Mining Week?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Showcase Projects */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why1} alt="Showcase Projects" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Showcase Projects to a Global Audience</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The Exploration Showcase provides dedicated booths for junior mining companies with Rwandan assets to exhibit their projects. This platform elevates your visibility, connects you with global investors, and facilitates partnerships to advance your projects in Rwanda’s growing mining sector.
                  </p>
                </div>
                <div className="px-14 pb-10">
                  <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">LEARN MORE</button>
                </div>
              </div>
            </div>

            {/* Content Item 2: Meet Investors */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why2} alt="Meet Investors" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Meet Investors and Financiers</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Rwanda Mining Week attracts a diverse group of investors, including private equity firms, institutional investors, and high-net-worth individuals focused on mining opportunities. Utilize the Business Matchmaking platform to schedule meetings with financiers to secure investment and fuel your company’s growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investors who attended */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Investors Who Attended</h2>
          <div className="flex items-center justify-center gap-8">
            <button onClick={prevSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#ADD8E6] focus:outline-none bg-transparent">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div className="flex overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-x-6"
                style={{ transform: `translateX(${-currentIndex * slideDistance}px)` }}
              >
                {galleryMembers.map((member) => (
                  <GalleryMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
            <button onClick={nextSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#ADD8E6] focus:outline-none bg-transparent">
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
                  className={`h-3 w-3 rounded-full border-2 border-[#004F71] ${currentIndex === index ? 'bg-[#004F71]' : 'bg-transparent'}`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="container mx-3 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">2025 Attendee Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Dn3kxK8m-Os"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"Rwanda Mining Week is a unique platform for Africa. It brings together key stakeholders under one roof to drive the future of mining."</p>
            <h4 className="font-semibold text-lg">Raadiyah Emam</h4>
            <p className="text-gray-600">Head of Investor Relations</p>
            <p className="text-gray-600">Anith Resources Ltd</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/QMIwkLSQl0U"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"The diversity of projects and opportunities showcased here is truly remarkable."</p>
            <h4 className="font-semibold text-lg">Adrian O'Brien</h4>
            <p className="text-gray-600">VP - Business Development & Communications</p>
            <p className="text-gray-600">Midnight Sun Mining</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Ks_V6luQuOQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"The event offers a broad spectrum of connections, from investors to suppliers, creating valuable new leads for our projects."</p>
            <h4 className="font-semibold text-lg">James Philip</h4>
            <p className="text-gray-600">COO</p>
            <p className="text-gray-600">Thor Explorations</p>
          </div>
        </div>
      </section>

      {/* Top reasons why Juniors Attend Rwanda Mining Week Section */}
      <section className="container mr-18 px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top Reasons Why Juniors Attend Rwanda Mining Week</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="flex-shrink-0 w-2/5">
            <img src={Pie} alt="Reasons Pie Chart" />
          </div>
          <div className="text-left max-w-md w-3/5">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts (32%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#004F71]"></span> Raise Capital (19%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#ADD8E6]"></span> Attend Content Sessions (18%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#a0a0a0]"></span> Source Investment Opportunities & Acquisitions (31%)</li>
            </ul>
          </div>
        </div>
        <p className="text-xl mt-12 mb-8 text-start mx-12">
          <h1 className="font-bold text-3xl">Connect with Capital. Discover Opportunity. Drive Growth.</h1>
          <br />
          Rwanda Mining Week is where junior miners turn opportunities into action. Whether you aim to <span className="font-bold">raise capital</span>, <span className="font-bold">attract new investors</span>, or explore
          <span className="font-bold">strategic partnerships and acquisitions</span>, the platform delivers. Connect directly with financiers, industry leaders, and policymakers to propel your projects forward.
        </p>
      </section>

      {/* Join Us Section */}
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #004F71, #ADD8E6)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Rwanda Mining Week 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The leading platform for advancing Rwanda’s sustainable mining sector. Join global and local leaders to shape the future of mining in Rwanda. Register your interest today to stay at the forefront of this dynamic industry!
          </p>
          <button className="bg-[#004F71] text-white text-sm font-bold py-2 px-4 rounded hover:bg-[#ADD8E6] transition duration-300">REGISTER INTEREST</button>
        </div>
      </div>

      {/* Featured Articles Section */}
      <FeaturedArticlesSection />

      {/* Discover more Rwanda Mining Week Section */}
      <section className="container mx-2 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Discover More Rwanda Mining Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mining companies attending */}
          <div className="bg-[#004F71] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mining Companies Attending</h3>
              <p className="mb-6">Explore the list of mining companies registered to attend Rwanda Mining Week 2025.</p>
            </div>
            <button className="bg-[#ADD8E6] text-sm text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              BROWSE THE LIST
            </button>
          </div>

          {/* Explorers Showcase */}
          <div className="bg-[#004F71] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Explorers Showcase</h3>
              <p className="mb-6">The Explorers Showcase offers a dedicated space for private or listed exploration companies with Rwandan assets to present their projects to global investors.</p>
            </div>
            <button className="bg-[#ADD8E6] text-sm text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              LEARN MORE
            </button>
          </div>

          {/* Meet the Advisory Board */}
          <div className="bg-[#004F71] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Meet the Advisory Board</h3>
              <p className="mb-6">Get to know the distinguished members of our 2026 Advisory Board, guiding the future of Rwanda Mining Week.</p>
            </div>
            <button className="bg-[#ADD8E6] text-sm text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              MEET THE BOARD
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ExplorationJuniorMiningCompanies;