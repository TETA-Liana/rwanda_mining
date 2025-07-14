import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Gallery1 from "../../../../public/gallery-1.jpg";
import Gallery2 from "../../../../public/gallery-2.jpg";
import Gallery3 from "../../../../public/gallery-3.jpg";
import Gallery4 from "../../../../public/gallery-4.jpg";
import Gallery5 from "../../../../public/gallery-5.jpg";
import Gallery6 from "../../../../public/gallery-6.jpg";
import Gallery7 from "../../../../public/gallery-7.jpg";
import Gallery8 from "../../../../public/gallery-8.jpg";
import Cont1 from "../../../../public/mon-content-1.jpg";
import Cont2 from "../../../../public/mon-content-2.jpg";
import InteraImage1 from "../../../../public/mon-intera-1.jpg";
import InteraImage2 from "../../../../public/mon-intera-2.jpg";
import CelebImage from "../../../../public/mon-celeb.jpg";
import Footer from "../../../components/sections/FooterSection";

const MondayHighlights = () => {
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
  
  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member }) => {
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
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#004F71] to-[#ADD8E6]">
        Rwanda Mining Week 2025: Monday Highlights
      </div>

      {/* Nested Highlight Navlinks */}
      <div className="flex justify-center space-x-4 py-8 bg-white mb-8">
        <Link to="/about/highlights/sunday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">SUNDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/monday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">MONDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/tuesday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">TUESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/wednesday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">WEDNESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/thursday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">THURSDAY HIGHLIGHTS</Link>
      </div>

      {/* Key Moments & Insights Section */}
      <div className="text-white mx-12 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4">Monday at Rwanda Mining Week 2025 kicked off with a vision for sustainable mining!</h2>
            <p className="text-md leading-relaxed mb-8">
              The day launched with an inspiring Opening Ceremony, featuring Rwanda’s Minister of State for Mining, setting the stage for a week of innovation and collaboration. Key discussions on sustainable mining practices and the launch of new exploration initiatives for gold and lithium energized attendees. A dynamic start to an impactful week!
            </p>
            <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">REGISTER INTEREST FOR 2026</button>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/oEUGmvLwqQc"
                title="Day One Highlights Rwanda Mining Week 2025"
                className="h-[350px] w-[550px] shadow-xl rounded-r-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Content Highlights Section */}
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Content Highlights</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont1} alt="Sustainable Mining" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Advancing Sustainable Mining in Rwanda</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This session explored Rwanda’s transition from artisanal to mechanized mining, focusing on sustainable practices to reduce environmental impact. Panelists discussed the role of technology, government policies, and community engagement in achieving a $2.17 billion mineral export target by 2029.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont2} alt="Value-Added Processing" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Value-Added Processing: Rwanda’s Path to Industrialization</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The session highlighted Rwanda’s Power X Refinery in Bugesera, Africa’s only vertically integrated tantalum and niobium refinery. Discussions centered on how value-added processing can drive sustainable industrialization and reduce reliance on raw mineral exports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-12 mt-14'>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Empowering Artisanal Miners for Sustainability</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This session outlined strategies to support Rwanda’s artisanal miners through training, modern equipment, and market access, ensuring sustainable livelihoods while minimizing environmental degradation.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Climate-Smart Mining Solutions</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Experts discussed implementing water recycling systems, renewable energy adoption, and land restoration to mitigate climate change impacts in Rwanda’s mining sector, aligning with national environmental goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Section */}
      <div className="text-white py-12 rounded-lg overflow-hidden">
        <div className="container mx-auto flex flex-wrap items-center gap-0">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex">
            <img src={InteraImage1} alt="Monday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-l-lg"/>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#004F71] items-stretch p-5 h-[350px] rounded-r-lg">
            <h2 className="text-3xl font-bold my-4">Maximizing Rwanda’s Mineral Potential</h2>
            <p className="text-md leading-relaxed mb-8">
              This session, sponsored by the Rwanda Mines, Petroleum and Gas Board, explored strategies for local beneficiation, renewable energy integration, and regional collaboration to ensure Rwanda’s minerals drive sustainable economic growth and global trade.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white pt-12 mx-10 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-3xl font-bold mb-4 mt-16">Innovative Technologies for Sustainable Mining</h2>
            <p className="text-md leading-relaxed mb-8">
              An interactive workshop showcased cutting-edge technologies, including digital monitoring systems and energy-efficient equipment, enabling participants to explore solutions tailored to Rwanda’s mining sector.
            </p>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img src={InteraImage2} alt="Monday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Gallery</h2>
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


      {/* Celebrating Our Incredible Sponsors and Exhibitors Section */}
      <div className="text-white py-12 mx-10 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-3xl font-bold mb-4 mt-8">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-md leading-relaxed mb-8">
              Day one of Rwanda Mining Week 2025 showcased leading sponsors and exhibitors, including Power X Refinery, Rwanda Mines, Petroleum and Gas Board, and global partners driving sustainable mining innovation in Rwanda.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#004F71] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
              <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">VIEW SPONSORS</button>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img src={CelebImage} alt="Monday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #004F71, #ADD8E6)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Rwanda Mining Week 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The leading platform for advancing Rwanda’s sustainable mining sector. Join global and local leaders to shape the future of mining in Rwanda. Register your interest today to stay at the forefront of this dynamic industry!
          </p>
          <button className="bg-[#004F71] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">REGISTER INTEREST</button>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default MondayHighlights;