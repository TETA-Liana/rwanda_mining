import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Gallery1 from "../../../../public/gallery-1.jpg";
import Gallery2 from "../../../../public/gallery-2.jpg";
import Gallery3 from "../../../../public/gallery-3.jpg";
import Gallery4 from "../../../../public/gallery-4.jpg";
import Gallery5 from "../../../../public/gallery-5.jpg";
import Gallery6 from "../../../../public/gallery-6.jpg";
import Gallery7 from "../../../../public/gallery-7.jpg";
import Gallery8 from "../../../../public/gallery-8.jpg";
import Cont1 from "../../../../public/tues-content-1.jpg";
import Cont2 from "../../../../public/tues-content-2.jpg";
import Cont3 from "../../../../public/tues-content-3.jpg";
import HaHoImage from "../../../../public/tues-happy-hour.jpg"
import CelebImage from "../../../../public/tues-celeb.jpg";
import Footer from "../../../components/sections/FooterSection"

const TuesdayHighlights = () => {

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
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#004F71] to-[#ADD8E6]">
        Rwanda Mining Week 2025: Tuesday Highlights
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
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">Key Moments & Insights from Rwanda Mining Week 2025</h2>
            <p className="text-sm leading-relaxed mb-8">
              Tuesday at Rwanda Mining Week 2025, held on 4 December 2025, was packed with transformative discussions on policy, investment, and sustainable mining. Key sessions explored Rwanda’s mineral export potential, the role of technology in mining innovation, and strategies for value-added processing, setting the stage for the remaining days of impactful conversations.
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
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Content Highlights</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Policy and Innovation */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont1} alt="Policy and Innovation" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Policy as a Catalyst for Mining Innovation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Experts discussed how Rwanda’s mining policies can drive technological innovation, focusing on streamlining regulations to support downstream beneficiation and sustainable practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: Commodity Outlook */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont2} alt="Commodity Outlook" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Rwanda’s Commodity Outlook: Gold, Lithium, and Coltan</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This session highlighted Rwanda’s growing role in supplying critical minerals like gold, lithium, and coltan, leveraging the African Continental Free Trade Area to enhance domestic value retention.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 3: Permitting Process */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont3} alt="Permitting Process" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Streamlining Rwanda’s Mining Permitting Process</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The session explored digital solutions for transparent and efficient mining permit processes, addressing challenges in manual systems to enhance Rwanda’s investment climate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Hour Section */}
      <div className="text-white py-12 rounded-lg overflow-hidden">
        <div className="container mx-auto flex flex-wrap items-center gap-0">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex">
            <img src={HaHoImage} alt="Tuesday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-l-lg" />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#004F71] items-stretch p-5 h-[350px] rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4">Networking Reception at Kigali Heights</h2>
            <p className="text-sm leading-relaxed mb-8">
              Attendees enjoyed a vibrant networking reception at Kigali Heights, featuring locally sourced Rwandan coffee and cocktails. This event fostered connections among industry leaders, investors, and policymakers, with more networking opportunities planned for the coming days.
            </p>
          </div>
        </div>
      </div>

      {/* Tomorrow's Content Highlights Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Tomorrow's Content Highlights</h2>
          <div className="space-y-8">
            {/* Event 1 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>09:00 - 10:00</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unlocking Rwanda’s Mining Potential: Streamlining Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                A discussion with industry leaders on how unified mining standards can enhance Rwanda’s mineral sector, focusing on sustainability, transparency, and global competitiveness.
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Adapting global standards to Rwanda’s mining context</li>
                <li>Key feedback from stakeholders on proposed standards</li>
                <li>Milestones for implementing unified standards by 2026</li>
              </ul>
            </div>

            {/* Event 2 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>10:05 - 10:50</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Financing Rwanda’s Mining Revolution</h3>
              <p className="text-gray-600 leading-relaxed">
                A panel of regional and international investors explores how financing strategies, including public-private partnerships, are driving Rwanda’s mining sector growth and sustainability.
              </p>
            </div>

            {/* Event 3 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>13:00 - 14:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshop: Critical Minerals for Rwanda’s Energy Transition</h3>
              <p className="text-gray-600 leading-relaxed">
                This workshop examines Rwanda’s role in supplying critical minerals for the global energy transition, focusing on lithium and coltan.
              </p>
              <h4 className="font-bold text-gray-700 mt-4 mb-2">Working Group Sessions</h4>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Policy frameworks for critical mineral development</li>
                <li>Investment strategies for mineral processing</li>
                <li>Building sustainable supply chains for battery production</li>
                <li>Collaborating with global OEMs for mineral supply</li>
                <li>Enhancing Rwanda’s industrial strategy through mining</li>
              </ul>
            </div>

            {/* Event 4 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>14:00 - 15:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Showcase: Rwanda’s Gold Mining Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                A deep dive into Rwanda’s gold mining sector, highlighting new exploration projects, investment opportunities, and sustainable practices driving growth.
              </p>
            </div>

            {/* Event 5 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>16:00 - 17:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Showcase: Lithium Exploration in Rwanda</h3>
              <p className="text-gray-600 leading-relaxed">
                An overview of Rwanda’s emerging lithium sector, focusing on geological mapping, investment incentives, and partnerships to support global demand for battery minerals.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#004F71] text-white font-bold py-3 px-8 rounded hover:bg-[#ADD8E6] transition duration-300">VIEW AGENDA</button>
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
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4 mt-16">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-sm leading-relaxed mb-8">
              Day two of Rwanda Mining Week 2025 featured outstanding sponsors and exhibitors, including Power X Refinery, Rwanda Mines, Petroleum and Gas Board, and global partners driving sustainable mining innovation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#004F71] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
              <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">VIEW SPONSORS</button>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img src={CelebImage} alt="Tuesday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
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

export default TuesdayHighlights;