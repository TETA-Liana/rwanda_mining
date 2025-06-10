import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Wedn from "../../../public/weds-high.jpg";
import Tues from "../../../public/tues-high.jpg";
import Mon from "../../../public/mon-high.jpg";
import Sun from "../../../public/sun-cont-1.jpg";
import Gallery1 from "../../../public/gallery-1.jpg";
import Gallery2 from "../../../public/gallery-2.jpg";
import Gallery3 from "../../../public/gallery-3.jpg";
import Gallery4 from "../../../public/gallery-4.jpg";
import Gallery5 from "../../../public/gallery-5.jpg";
import Gallery6 from "../../../public/gallery-6.jpg";
import Gallery7 from "../../../public/gallery-7.jpg";
import Gallery8 from "../../../public/gallery-8.jpg";
import Footer from "../../components/sections/FooterSection";

const Highlights = () => {

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
    'gallery-8.jpg'
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
    <div className="pt-40">
      {/* Hero Section */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#64a63a] to-[#d4ed31]">
      Event Highlights
      </div>

      {/* Introductory Text Section */}
      <div className="py-12 mx-10">
        <div className="container py-5 text-center border-2 rounded-md">
          <p className="text-md text-black leading-relaxed max-w-4xl mx-auto">
            This year's conference marked a significant shift by placing indigenous peoples and local communities at the forefront of our discussions, acknowledging their vital role in shaping the industry's future.<br/>
            For the first time, representatives from these groups actively participated in key sessions, offering their perspectives on sustainable and equitable mining practices. Indaba represents a commitment to inclusivity, sustainability, and strategic collaboration, aiming to position Africa's mining industry for a resilient and prosperous future.<br/>
            The conference further addressed the complex geopolitical landscape affecting Africa's mining sector. Discussions emphasized the continent's strategic decisions between engaging with the U.S., under President Trump's protectionist policies, or aligning with the China-led BRICS group. This choice is crucial for Africa's mineral-rich countries as they navigate global mineral demand driven by the energy transition.
          </p>
        </div>
      </div>

      {/* Thursday Highlights Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4 mt-10">Thursday Highlights</h2>
            <p className="text-md leading-relaxed mb-8">
            As Mining Indaba comes to a close, we’re looking back at an incredible week of connections, innovations, and industry-shaping insights. Don’t miss the key takeaways from the final day!
            </p>
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded hover:bg-white transition duration-300">VIEW HIGHLIGHTS</button>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/elg4ujpzVuo"
                title="Day One Highlights Mining Indaba 2025"
                className="h-[350px] w-[550px] shadow-xl rounded-r-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Wednesday Highlights Section */}
      <div className="text-white py-12 rounded-lg overflow-hidden">
        <div className="container mx-auto flex flex-wrap items-center gap-0">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex">
            <img src={Wedn} alt="Wednesday Highlights" className="h-[350px] w-[550px] shadow-xl" />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#64a63a] items-stretch p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4 mt-10">Wednesday Highlights</h2>
            <p className="text-md leading-relaxed mb-8">
            Another impactful day at Mining Indaba with engaging sessions and valuable connections. Catch up on the top takeaways!
            </p>
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded transition duration-300">VIEW HIGHLIGHTS</button>
          </div>
        </div>
      </div>

      {/* Tuesday Highlights Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4 mt-10">Tuesday Highlights</h2>
            <p className="text-md leading-relaxed mb-8">
            An eventful day filled with thought-provoking discussions and industry insights! Explore the highlights and key moments that shaped the conversations.
            </p>
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded transition duration-300">VIEW HIGHLIGHTS</button>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img src={Tues} className="h-[350px] w-[550px] shadow-xl rounded-r-lg"/>
            </div>
          </div>
        </div>
      </div>

      {/* Monday Highlights Section */}
      <div className="text-white py-12 rounded-lg overflow-hidden">
        <div className="container mx-auto flex flex-wrap items-center gap-0">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex">
            <img src={Mon} alt="Wednesday Highlights" className="h-[350px] w-[550px] shadow-xl" />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#64a63a] items-stretch p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4 mt-10">Monday Highlights</h2>
            <p className="text-md leading-relaxed mb-8">
            What an incredible start to Mining Indaba it was. Click below to watch the highlights video and read the summaries of some of the key sessions.
            </p>
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded transition duration-300">VIEW HIGHLIGHTS</button>
          </div>
        </div>
      </div>

      {/* Sunday Highlights Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl mt-10 font-bold mb-4">Sunday Highlights</h2>
            <p className="text-md leading-relaxed mb-8">
            The 2025 Ministerial Symposium provided a platform for fostering partnerships and driving conversations on local beneficiation and resource legislation to empower Africa’s mineral endowment, artisanal mining, and safety.
            </p>
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded transition duration-300">VIEW HIGHLIGHTS</button>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img src={Sun} className="h-[350px] w-[550px] shadow-xl rounded-r-lg"/>
            </div>
          </div>
        </div>
      </div>

      {/* 2025 Gallery Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">2025 Gallery</h2>
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

      {/* Programme, Speakers & Ministerial Presence Section */}
      <div className="py-12 mx-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Programme, Speakers & Ministerial Presence</h2>
          <div className="flex flex-wrap -mx-4">
            {/* 2025 Content Agenda */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2025 Content Agenda</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Discover what topics were discussed at Mining Indaba 2025.
                  </p>
                  <button className="bg-[#d4ed31] text-sm text-gray-800 font-bold py-2 px-4 rounded transition duration-300">DISCOVER THE 2025 AGENDA</button>
                </div>
              </div>
            </div>

            {/* 2025 Speakers */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2025 Speakers</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Explore who spoke at Mining Indaba 2025.
                  </p>
                  <button  className="bg-[#d4ed31] text-sm text-gray-800 font-bold py-2 px-4 rounded transition duration-300">EXPLORE THE SPEAKER LIST</button>
                </div>
              </div>
            </div>

            {/* 2025 Ministers Attended */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2025 Ministers Attended</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Explore the government presence at Mining Indaba 2025.
                  </p>
                  <button  className="bg-[#d4ed31] text-gray-800 text-sm font-bold py-2 px-4 rounded transition duration-300">GOVERNMENT PRESENCE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section: Investment Village, Critical Minerals, Community */}
      <div className="py-12 mx-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Investment Village */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Village</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Investment Village at Mining Indaba 2025 was the ultimate hub for investors and mining companies to connect, learn, and grow in the mining industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Critical Minerals */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Critical Minerals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2025, the event addressed a pivotal question not many dare to ask: "What minerals are critical for Africa, and why?" As a continent rich in resources, the minerals essential to building Africa's economic wealth and prosperity surpass the global definition.
                  </p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2025, Mining Indaba, for the first time, recognised and acknowledged one of the African mining sector's most important stakeholder groups - mining communities, civil society, and indigenous people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Highlights; 