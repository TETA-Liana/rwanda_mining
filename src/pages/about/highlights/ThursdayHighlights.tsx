import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "../../../components/sections/FooterSection";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image1 from "../../../../public/thursday-content-1.jpg";
import Image2 from "../../../../public/thursday-content-2.jpg";
import Image3 from "../../../../public/thursday-content-3.jpg";
import Image4 from "../../../../public/thursday-content-4.jpeg";
import Gallery1 from "../../../../public/gallery-1.jpg";
import Gallery2 from "../../../../public/gallery-2.jpg";
import Gallery3 from "../../../../public/gallery-3.jpg";
import Gallery4 from "../../../../public/gallery-4.jpg";
import Gallery5 from "../../../../public/gallery-5.jpg";
import Gallery6 from "../../../../public/gallery-6.jpg";
import Gallery7 from "../../../../public/gallery-7.jpg";
import Gallery8 from "../../../../public/gallery-8.jpg";
import CelebImage from "../../../../public/celeb-image.jpg";

const ThursdayHighlights = () => {
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
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#93c5fd]">
        Thursday Highlights
      </div>

      {/* Nested Highlight Navlinks */}
      <div className="flex justify-center space-x-4 bt-8 bg-white my-8">
        <Link
          to="/about/highlights/sunday"
          className="text-sm bg-[#93c5fd] text-black font-bold p-2 rounded hover:bg-[#93c5fd] hover:text-black transition duration-300"
        >
          SUNDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/monday"
          className="text-sm bg-[#93c5fd] text-black font-bold p-2 rounded hover:bg-[#93c5fd] hover:text-black transition duration-300"
        >
          MONDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/tuesday"
          className="text-sm bg-[#93c5fd] text-black font-bold p-2 rounded hover:bg-[#93c5fd] hover:text-black transition duration-300"
        >
          TUESDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/wednesday"
          className="text-sm bg-[#93c5fd] text-black font-bold p-2 rounded hover:bg-[#93c5fd] hover:text-black transition duration-300"
        >
          WEDNESDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/thursday"
          className="text-sm bg-[#93c5fd] text-black font-bold p-2 rounded hover:bg-[#93c5fd] hover:text-black transition duration-300"
        >
          THURSDAY HIGHLIGHTS
        </Link>
      </div>

      {/* Highlights & Takeaways Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto gap-0 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#2563eb] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">
              Highlights & Takeaways from Thursday at Mining Indaba 2025
            </h2>
            <p className="text-sm leading-relaxed mb-8">
              The final day of Mining Indaba 2025 wrapped up with the Young
              Leaders Programme and the Sustainability Series, reinforcing the
              industry's commitment to the future. The Young Leaders Programme
              brought together aspiring mining professionals and industry
              veterans to discuss career pathways, innovation, and leadership in
              the sector. Meanwhile, the Sustainability Series continued into
              the event's final day. These sessions closed the event on a
              forward-thinking note, emphasising talent development and
              sustainable growth in African mining.
            </p>
            <button className="bg-[#93c5fd] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#93c5fd] transition duration-300">
              REGISTER INTEREST FOR 2026
            </button>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/elg4ujpzVuo"
                title="Mining Indaba 2025 Highlights"
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
      <div className="py-12">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Content Highlights
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Leadership: Fireside Chat with CEOs */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Image1}
                  alt="Leadership: Fireside Chat with CEOs"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Leadership: Fireside Chat with CEOs
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    African mining leaders took part in a moderated discussion,
                    sharing personal insights on their academic backgrounds,
                    early influences, and mentors.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 2: Voices of the Future: Young Professionals Perspectives on the Controversies Surrounding African Mining */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Image2}
                  alt="Voices of the Future: Young Professionals Perspectives on the Controversies Surrounding African Mining"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Voices of the Future: Young Professionals Perspectives on
                    the Controversies Surrounding African Mining
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Young professionals explored their perspectives on Africa's
                    mining industry and engaged in a thought-provoking
                    discussion with Dr. Mali Kitlaw.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 3: Opening Address */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Image3}
                  alt="Opening Address"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Opening Address
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The Young Leaders Programme opened with an opening address
                    by Timothy Schultz, Partner and SA Energy & Resources Lead,
                    Brunswick Group.
                  </p>
                </div>
              </div>
            </div>
            {/* Content Item 4: Transparency from the ground up: emerging approaches for connecting mines to the supply chain for more credible due diligence */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={Image4}
                  alt="Transparency from the ground up"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Transparency from the ground up: emerging approaches for
                    connecting mines to the supply chain for more credible due
                    diligence
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The session explored challenges in implementing the OECD Due
                    Diligence Guidance for Responsible Mineral Supply Chains,
                    particularly the systemic issues in information flow despite
                    a decade of audit systems and regulations.
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
              className="p-2 rounded-full text-[#2563eb] hover:text-[#3b82f6] focus:outline-none bg-transparent"
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
              className="p-2 rounded-full text-[#2563eb] hover:text-[#3b82f6] focus:outline-none bg-transparent"
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

      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#2563eb] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4">
              Celebrating Our Incredible Sponsors and Exhibitors
            </h2>
            <p className="text-sm leading-relaxed mb-8">
              Mining Indaba 2025 has been extraordinary! We’re thrilled to be
              showcasing some exceptional sponsors and exhibitors, this year.
              Click below to discover the line-up.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#3b82f6] font-bold p-2 text-xs rounded transition duration-300">
                VIEW EXHIBITORS
              </button>
              <button className="bg-[#93c5fd] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#93c5fd] transition duration-300">
                VIEW SPONSORS
              </button>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img
              src={CelebImage}
              alt="Thursday Highlights"
              className="h-[350px] w-[550px] shadow-xl rounded-r-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThursdayHighlights;
