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
import Footer from '../../../components/sections/FooterSection';

const MajorsMidTiers = () => {

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
        <h1 className="text-white text-4xl font-bold mt-16">Mining Indaba for Majors & Mid-tiers</h1>
      </div>

      {/* Connect with Investors Section */}
      <section  className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Showcase your brand to 10,000+ attendees at Mining Indaba: a must for mining companies in Africa</h2>
        <p className="text-lg mb-8">
        Mining Indaba enables direct engagement with African ministers, senior government officials, and industry leaders, providing a unique opportunity to discuss policy issues, regulatory changes, and legal frameworks impacting the mining sector. With exclusive access to the Investment Lounge, mining companies in Africa will also benefit from exciting networking opportunities. This event further provides a platform to deliver key messaging that enhances awareness and external perception, driving increased share value.
        </p>
        <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-sm text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
          REGISTER INTEREST
        </button>
      </section>

      {/* Why attend Mining Indaba Section */}
      <div className='mx-12'>
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Why attend Mining Indaba?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why1} alt="Lithium and graphite" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Meet Government Officials</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  In 2025, Mining Indaba hosted over 58 Ministers and 1400+ government officials. The Indaba provides a unique opportunity to engage with government officials, regulators, and policymakers to discuss key policy issues, regulatory changes, and legal frameworks impacting the mining sector.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why2} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Explore the Exhibition Hall</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  The exhibition hall houses a vast number of service providers showcasing cutting-edge technologies, equipment, and services, aiming to provide an overview of how their services can enhance efficiency, productivity, safety, and sustainability of developing and operating mines.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 3: The Dealmakers Den */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why3} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Hear from Industry Leaders</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Gain valuable intelligence and best practices from top mining executives, government officials, and industry leaders sharing their perspectives, strategies, and insights through thought-provoking panels, presentations and showcases.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 4: The Dealmakers Den */}
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why4} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Discover Networking Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Mining Indaba gathers a diverse array of global industry leaders from mining companies, national & international governments, and industry professionals for 4 days in Cape Town, hosting several dedicated networking receptions providing an unparalleled access for investors to network, forge new connections, and build fruitful relationships with key stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Major and Mid-tier Mining Companies Section */}
      {/* Investors who attended */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Major and Mid-tier Mining Companies who attended in the past</h2>
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
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">2025 Attendee Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
              <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/watch?v=vmyDZFlAZiM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">What makes this an ideal platform is the diversity of thought and interaction. We all share the same challenges, and we can find common solutions. If we collaborate and work together, we can come to solutions but if we are not present nobody knows what we can do.</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  <span className="font-bold">Kavita Pema</span><br/> VP of Sustainability<br/>AECI
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
              <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/watch?v=p-wL1PM8grI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">"What impressed me most was the energy, enthusiasm, and sense that we were really about to go into the next cycle and that Africa could take that and grow for itself."</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  <span className="font-bold">Catherine Raw</span><br/>Chief Development Officer<br/>BHP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top reasons why Mid-tiers Attend Mining Indaba */}
      <section className="container mr-18 px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top reasons why Mid-tiers Attend Mining Indaba</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="flex-shrink-0 w-2/5">
            <img src={Pie} alt="Reasons Pie Chart" />
          </div>
          <div className="text-left max-w-md w-3/5">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#64a63a]"></span> Attend Content Sessions</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#d4ed31]"></span> Meet Existing Supliers</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#a0a0a0]"></span> Meet Existing Client</li>
            </ul>
          </div>
        </div>
        <p className="text-xl mt-12 mb-8 text-start mx-12">
          <h1 className="font-bold text-3xl">Grow your network. Strengthen relationships. Stay ahead.</h1>
          <br />
          Mid-tier miners attend Mining Indaba to <span className="font-bold">build new contacts, connect with existing clients and suppliers</span>, and gain insights from the most pressing conversations. Whether you want to scale, optimise, or solidify your presence, Mining Indaba offers the right environment to engage, learn, and lead.
        </p>
      </section>


      {/* Top reasons why Majors Attend Mining Indaba */}
      <section className="container mr-18 px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top reasons why Majors Attend Mining Indaba</h2>
        <p className="text-xl mt-12 mb-8 text-start mx-12">
          <h1 className="font-bold text-3xl">Lead the conversation. Elevate your brand. Shape the future.</h1>
          <br />
          For major mining companies, Mining Indaba is more than an event—it's a platform to <span className="font-bold">amplify brand visibility</span>, engage with key stakeholders, and stay ahead of industry trends. With unparalleled networking, rich content, and an influential audience, this is where majors show up to make an impact and drive the agenda.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          <div className="flex-shrink-0 w-2/5">
            <img src={Pie2} alt="Reasons Pie Chart" />
          </div>
          <div className="text-left max-w-md w-3/5">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#64a63a]"></span> Attendt Contestant Sessions</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#d4ed31]"></span> Build Brand Awareness</li>
            </ul>
          </div>
        </div>
          <div className='mt-16'>
            <button className='bg-[#64a63a] rounded-sm text-sm text-white py-3 px-8 hover:bg-[#55952c]'>VIEW AGENDA</button>
          </div>
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

      <Footer/>
    </div>
  );
};

export default MajorsMidTiers; 