import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Why1 from "../../../../public/why-attend-maj-1.jpg";
import Why2 from "../../../../public/why-attend-maj-2.jpg";
import Why3 from "../../../../public/why-attend-maj-3.jpg";
import Why4 from "../../../../public/why-attend-maj-4.jpg";
import Pie from "../../../../public/pie-maj-1.png";
import Pie2 from "../../../../public/pie-maj-2.png";
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
import FeaturedArticlesSection from '../../../components/sections/FeaturedArticlesSection';
import FooterSection from '../../../components/sections/FooterSection';

const MajorsMidTiers = () => {

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
      <div className="relative h-60 bg-gradient-to-r from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold mt-16">Rwanda Mining Week for Majors & Mid-tiers</h1>
      </div>

      {/* Connect with Investors Section */}
      <section  className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Showcase Your Brand at Rwanda Mining Week 2026: A Must for Mining Companies</h2>
        <p className="text-lg mb-8">
          Rwanda Mining Week offers a prime opportunity for major and mid-tier mining companies to engage directly with Rwandan ministers, senior government officials, and industry leaders. Discuss critical policy issues, regulatory updates, and legal frameworks shaping Rwanda’s $1.75 billion mineral export industry. Leverage exclusive access to the Investment Lounge for high-impact networking and deliver key messaging to enhance brand visibility and drive stakeholder value.
        </p>
        <button className="bg-[#ADD8E6] hover:bg-[#004F71] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
          REGISTER INTEREST
        </button>
      </section>

      {/* Why attend Rwanda Mining Week Section */}
      <div className='mx-12'>
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Why Attend Rwanda Mining Week?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Meet Government Officials */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why1} alt="Meet Government Officials" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Meet Government Officials</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    In 2025, Rwanda Mining Week hosted over 20 ministers and 500+ government officials. Engage directly with policymakers and regulators to discuss policies, regulatory changes, and frameworks impacting Rwanda’s mining sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: Explore the Exhibition Hall */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why2} alt="Explore the Exhibition Hall" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Explore the Exhibition Hall</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The exhibition hall showcases innovative technologies, equipment, and services from leading providers, offering solutions to enhance efficiency, safety, and sustainability in Rwanda’s mining operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 3: Hear from Industry Leaders */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why3} alt="Hear from Industry Leaders" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Hear from Industry Leaders</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Gain insights from top mining executives, government officials, and industry leaders through thought-provoking panels, presentations, and showcases focused on Rwanda’s mining future.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 4: Discover Networking Opportunities */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why4} alt="Discover Networking Opportunities" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Discover Networking Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Rwanda Mining Week brings together global and regional industry leaders, government officials, and professionals for dedicated networking receptions, fostering connections and partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Major and Mid-tier Mining Companies Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Major and Mid-tier Mining Companies Who Attended</h2>
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
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">2025 Attendee Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Testimonial 1 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="w-full h-48 mb-4">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/vmyDZFlAZiM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">The diversity of thought and collaboration at Rwanda Mining Week is unmatched. It’s where we address shared challenges and find innovative solutions together.</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold">Kavita Pema</span><br/>VP of Sustainability<br/>AECI
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="w-full h-48 mb-4">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/p-wL1PM8grI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">The energy and enthusiasm at Rwanda Mining Week signal a new growth cycle for the region’s mining sector.</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    <span className="font-bold">Catherine Raw</span><br/>Chief Development Officer<br/>BHP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Reasons Why Mid-tiers Attend Rwanda Mining Week */}
      <section className="container mr-18 px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top Reasons Why Mid-tiers Attend Rwanda Mining Week</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="flex-shrink-0 w-2/5">
            <img src={Pie} alt="Reasons Pie Chart" />
          </div>
          <div className="text-left max-w-md w-3/5">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#004F71]"></span> Attend Content Sessions</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#ADD8E6]"></span> Meet Existing Suppliers</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#a0a0a0]"></span> Meet Existing Clients</li>
            </ul>
          </div>
        </div>
        <p className="text-xl mt-12 mb-8 text-start mx-12">
          <h1 className="font-bold text-3xl">Grow Your Network. Strengthen Relationships. Stay Ahead.</h1>
          <br />
          Mid-tier miners attend Rwanda Mining Week to <span className="font-bold">build new contacts, connect with existing clients and suppliers</span>, and gain insights from critical industry discussions. Whether you aim to scale, optimize, or solidify your presence in Rwanda’s $1.75 billion mining sector, this event provides the ideal environment to engage, learn, and lead.
        </p>
      </section>

      {/* Top Reasons Why Majors Attend Rwanda Mining Week */}
      <section className="container mr-18 px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top Reasons Why Majors Attend Rwanda Mining Week</h2>
        <p className="text-xl mt-12 mb-8 text-start mx-12">
          <h1 className="font-bold text-3xl">Lead the Conversation. Elevate Your Brand. Shape the Future.</h1>
          <br />
          For major mining companies, Rwanda Mining Week is a strategic platform to <span className="font-bold">amplify brand visibility</span>, engage with key stakeholders, and stay ahead of industry trends. With unparalleled networking, rich content, and an influential audience, this is where majors make an impact and drive Rwanda’s mining agenda.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="flex-shrink-0 w-2/5">
            <img src={Pie2} alt="Reasons Pie Chart" />
          </div>
          <div className="text-left max-w-md w-3/5">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#004F71]"></span> Attend Content Sessions</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#ADD8E6]"></span> Build Brand Awareness</li>
            </ul>
          </div>
        </div>
        <div className='mt-16'>
          <button className='bg-[#004F71] rounded-sm text-sm text-white py-3 px-8 hover:bg-[#ADD8E6]'>VIEW AGENDA</button>
        </div>
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

      <FooterSection />
    </div>
  );
};

export default MajorsMidTiers;