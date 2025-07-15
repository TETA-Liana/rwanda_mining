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
    'gallery-1.jpg',
    'gallery-2.jpg',
    'gallery-3.jpg',
    'gallery-4.jpg',
    'gallery-5.jpg',
    'gallery-6.jpg',
    'gallery-7.jpg',
    'gallery-8.jpg',
    'gallery-9.jpg',
    'gallery-10.jpg',
    'gallery-11.jpg',
    'gallery-12.jpg'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 10000);
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
      <div className="relative h-60 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold mt-16">Mining Indaba for Junior Miners</h1>
      </div>

      {/* Connect with Investors Section */}
      <section className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Connect with Investors at Mining Indaba 2026: Opportunities for Junior Mining Companies</h2>
        <p className="text-lg mb-8">
          Mining Indaba is the ultimate networking, deal-making, and discussion forum for the industry's current trends and challenges. This event offers unparalleled opportunities for
          junior mining companies and exploration mining companies to form connections, discuss project progression and explore financing opportunities. Additional value lies in
          gaining valuable insights into market trends, new technologies, and regulatory changes affecting the mining sector.
          <br /><br />
          Interested in attending Mining Indaba 2026?
        </p>
        <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
          REGISTER INTEREST
        </button>
      </section>

      {/* Why attend Mining Indaba Section */}
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Why attend Mining Indaba?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why1} alt="Lithium and graphite" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Showcase projects to a global audience</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Dedicated space with booths for exploration companies with African assets to exhibit their projects. Taking part in the Explorers Showcase enables exploration companies to raise their profile, increase visibility, and showcase their projects to a global audience, gaining access to Mining Indaba's elite network of dealmakers to raise finance or find the right partner to advance their projects.
                  </p>
                </div>
                <div className="px-14 pb-10">
                  <button className="bg-[#d4ed31] text-gray-800 font-bold p-2 text-xs rounded transition duration-300">LEARN MORE</button>
                </div>
              </div>
            </div>

            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why2} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Meet Investors and Financiers</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Mining Indaba is attended by a diverse array of investors, including private equity firms, sovereign wealth fund, institutional investors, automotives and high-net-worth individuals that are mandated to invest funds directly into mining companies. Through the Business Matchmaking platform, attendees can set-up meetings with investors and financiers to attract investment capital and explore financing options to support their growth initiatives.
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
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Investors who attended</h2>
          <div className="flex items-center justify-center gap-8">
            <button onClick={prevSlide} className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Slideshow container */}
            <div className="flex overflow-hidden w-full">
              {/* Inner container holding all cards with horizontal gap */}
              <div
                className="flex transition-transform duration-500 ease-in-out gap-x-6"
                style={{ transform: `translateX(${-currentIndex * slideDistance}px)` }}
              >
                {galleryMembers.map((member) => (
                  <GalleryMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
            <button onClick={nextSlide} className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent">
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
                  className={`h-3 w-3 rounded-full border-2 border-[#5cb030] ${currentIndex === index ? 'bg-[#5cb030]' : 'bg-transparent'}`}
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
            <p className="italic text-gray-700 mb-4">"Mining Indaba is a very different platform. It's Africa for Africa. We have everyone under one roof."</p>
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
            <p className="italic text-gray-700 mb-4">"It was just incredible to see the depth of projects and everything going on."</p>
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
            <p className="italic text-gray-700 mb-4">"There's a good diversity of people here. It's not just people from one sector - it is quite a broader spectrum. I have met with investors, potential new suppliers, some product suppliers who have been very interesting and certainly some new leads."</p>
            <h4 className="font-semibold text-lg">James Philip</h4>
            <p className="text-gray-600">COO</p>
            <p className="text-gray-600">Thor Explorations</p>
          </div>
        </div>
      </section>

      {/* Top reasons why Juniors Attend Mining Indaba Section */}
      <section className="container mr-18 px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top reasons why Juniors Attend Mining Indaba</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="flex-shrink-0 w-2/5">
            <img src={Pie} alt="Reasons Pie Chart" />
          </div>
          <div className="text-left max-w-md w-3/5">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts (32%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#64a63a]"></span> Raise Capital (19%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#d4ed31]"></span> Attend Content Sessions (18%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#a0a0a0]"></span> Source Investment Opportunities & Acquisitions (31%)</li>
            </ul>
          </div>
        </div>
        <p className="text-xl mt-12 mb-8 text-start mx-12">
          <h1 className="font-bold text-3xl">Connect with capital. Discover opportunity. Drive growth.</h1>
          <br />
          Mining Indaba is where junior miners come to get deals moving. Whether you're looking to <span className="font-bold">raise capital</span>, <span className="font-bold">attract new investors</span>, or explore
          <span className="font-bold">strategic partnerships and acquisitions</span>, the opportunities are real and within reach. With direct access to financiers, industry leaders, and
        </p>
      </section>

      {/* Join Us Section */}
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #5cb030, #d4ed31)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Mining Indaba 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The premier meeting place for African and global mining leaders. It is all set to be an unmissable experience, shaping the future of African mining.<br/> Register your interest today and stay ahead in this dynamic industry!
          </p>
          <button className="bg-[#55952c] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">REGISTER INTEREST</button>
        </div>
      </div>

      {/* Featured Articles Section */}
      <FeaturedArticlesSection />

      {/* Discover more Mining Indaba Section */}
      <section className="container mx-2 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Discover more Mining Indaba</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mining companies attending */}
          <div className="bg-[#55952c] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mining companies attending</h3>
              <p className="mb-6">Discover the list of mining companies that registered to attend Mining Indaba 2025.</p>
            </div>
            <button className="bg-[#d4ed31] text-sm text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              BROWSE THE LIST
            </button>
          </div>

          {/* Explorers Showcase */}
          <div className="bg-[#55952c] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Explorers Showcase</h3>
              <p className="mb-6">Explorers Showcase is a dedicated space for private/unlisted or listed exploration companies with African assets to showcase their projects at Mining Indaba.</p>
            </div>
            <button className="bg-[#d4ed31] text-sm text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              LEARN MORE
            </button>
          </div>

          {/* Meet the Advisory Board */}
          <div className="bg-[#55952c] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Meet the Advisory Board</h3>
              <p className="mb-6">Alongside the theme, we are honoured to introduce the distinguished members of our 2026 Advisory Board and Committees.</p>
            </div>
            <button className="bg-[#d4ed31] text-sm text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
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
