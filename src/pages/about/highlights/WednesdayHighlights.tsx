import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Gallery1 from "../../../../public/gallery-1.jpg";
import Gallery2 from "../../../../public/gallery-2.jpg";
import Gallery3 from "../../../../public/gallery-3.jpg";
import Gallery4 from "../../../../public/gallery-4.jpg";
import Gallery5 from "../../../../public/gallery-5.jpg";
import Gallery6 from "../../../../public/gallery-6.jpg";
import Gallery7 from "../../../../public/gallery-7.jpg";
import Gallery8 from "../../../../public/gallery-8.jpg";
import Cont1 from "../../../../public/weds-content-1.jpg";
import Cont2 from "../../../../public/weds-content-2.jpg";
import Cont3 from "../../../../public/weds-content-3.jpg";
import CelebImage from "../../../../public/weds-celeb.jpg";
import Footer from "../../../components/sections/FooterSection";

const WednesdayHighlights = () => {
  interface GalleryMember {
    id: number;
    image: string;
  }

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
  const totalSlides = Math.ceil(galleryImageImports.length / membersPerPage);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds
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

  const galleryMembers: GalleryMember[] = galleryImageImports.map(
    (image, index) => ({
      id: index + 1,
      image: image,
    })
  );

  interface GalleryMemberCardProps {
    member: GalleryMember;
  }

  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member }) => {
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
        <img
          src={member.image}
          alt="Gallery Image"
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  const cardWidth = 256;
  const gapWidth = 24;
  const slideDistance = (cardWidth + gapWidth) * membersPerPage;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#60a5fa]">
        Wednesday Highlights
      </div>

      {/* Nested Highlight Navlinks */}
      <div className="flex justify-center space-x-4 py-8 bg-white mb-8">
        <Link
          to="/about/highlights/sunday"
          className="text-sm bg-[#2563eb] text-white font-bold py-2 px-4 rounded hover:bg-[#1e40af] transition duration-300"
        >
          SUNDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/monday"
          className="text-sm bg-[#2563eb] text-white font-bold py-2 px-4 rounded hover:bg-[#1e40af] transition duration-300"
        >
          MONDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/tuesday"
          className="text-sm bg-[#2563eb] text-white font-bold py-2 px-4 rounded hover:bg-[#1e40af] transition duration-300"
        >
          TUESDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/wednesday"
          className="text-sm bg-[#2563eb] text-white font-bold py-2 px-4 rounded hover:bg-[#1e40af] transition duration-300"
        >
          WEDNESDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/thursday"
          className="text-sm bg-[#2563eb] text-white font-bold py-2 px-4 rounded hover:bg-[#1e40af] transition duration-300"
        >
          THURSDAY HIGHLIGHTS
        </Link>
      </div>

      {/* Highlights & Takeaways Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#2563eb] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">
              Highlights & Takeaways from Wednesday at Mining Indaba 2025
            </h2>
            <p className="text-sm leading-relaxed mb-8">
              Catch up on the most impactful moments from Wednesday at Mining
              Indaba 2025! From insightful keynotes to engaging panel talks,
              discover the ideas and trends driving the African mining industry
              forward. With just one more day of transformative discussions,
              there's still so much to look forward to—stay connected!
            </p>
            <button className="bg-[#2563eb] text-white font-bold p-2 text-xs rounded hover:bg-[#1e40af] transition duration-300">
              REGISTER INTEREST FOR 2026
            </button>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/oEUGmvLwqQc"
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

      {/* Content Highlights Section */}
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Content Highlights
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Cont1}
                  alt="Lithium and graphite"
                  className="h-78 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Lithium and graphite: What is Africa's true potential for
                    filling the long-term EV battery gap?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    How can industry support downstream battery manufacturing
                    opportunities in-country? By expediting the introduction of
                    new lithium and graphite mines in Africa requires a holistic
                    approach that combines regulatory reform, infrastructure
                    development, access to capital, technological innovation,
                    skilled labor, and community engagement.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Cont2}
                  alt="The Dealmakers Den"
                  className="h-78 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    The Dealmakers Den
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our Dealmakers Den series has concluded for the year.
                    Congratulations to Turaco Gold and Pasofino Gold! Both
                    companies and their projects captured the attention of our
                    investor panel, highlighting that West Africa continues to
                    present top investment opportunities, even amidst recent
                    political developments.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 3: Water, forests, nature */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Cont3}
                  alt="Water, forests, nature"
                  className="h-78 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Water, forests, nature: pathways for mining to future-proof
                    African environments.
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Through investment in sustainable water management,
                    reforestation, land restoration, carbon offset programs, and
                    responsible mining practices, the industry can help preserve
                    Africa's ecosystems. By integrating environmental
                    stewardship into operations and partnering with local
                    communities, companies can help protect forests, improve
                    water quality, and support the broadest regeneration of
                    ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Gallery
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full text-[#2563eb] hover:text-[#1e40af] focus:outline-none bg-transparent"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Slideshow container */}
            <div className="flex overflow-hidden w-full">
              {/* Inner container holding all cards with horizontal gap */}
              <div
                className="flex transition-transform duration-500 ease-in-out gap-x-6"
                style={{
                  transform: `translateX(${-currentIndex * slideDistance}px)`,
                }}
              >
                {galleryMembers.map((member) => (
                  <GalleryMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full text-[#2563eb] hover:text-[#1e40af] focus:outline-none bg-transparent"
            >
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
                  className={`h-3 w-3 rounded-full border-2 border-[#2563eb] ${
                    currentIndex === index ? "bg-[#2563eb]" : "bg-transparent"
                  }`}
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
          <div className="w-full md:w-1/2 mb-8 bg-[#2563eb] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4">
              Celebrating Our Incredible Sponsors and Exhibitors
            </h2>
            <p className="text-sm leading-relaxed mb-8">
              Wrapping up yet another productive day at Mining Indaba, we’re
              thrilled to showcase some exceptional sponsors and exhibitors,
              including Kanona Power Company Limited, AECI Mining, JOGMEC,
              Liebherr Africa, Rawbank SA, and many more.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#2563eb] font-bold p-2 text-xs rounded transition duration-300">
                VIEW EXHIBITORS
              </button>
              <button className="bg-[#2563eb] text-white font-bold p-2 text-xs rounded hover:bg-[#1e40af] transition duration-300">
                VIEW SPONSORS
              </button>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img
              src={CelebImage}
              alt="Wednsday Highlights"
              className="h-[350px] w-[550px] shadow-xl rounded-r-lg"
            />
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(to bottom, #2563eb, #60a5fa)" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Join Us at Mining Indaba 2026
          </h2>
          <p className="text-sm leading-relaxed mb-8">
            The premier meeting place for African and global mining leaders. It
            is all set to be an unmissable experience, shaping the future of
            African mining.
            <br /> Register your interest today and stay ahead in this dynamic
            industry!
          </p>
          <button className="bg-[#2563eb] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">
            REGISTER INTEREST
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WednesdayHighlights;
