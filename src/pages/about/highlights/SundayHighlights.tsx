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
import Image from "../../../../public/sunday-takeaway.jpg";
import cont1 from "../../../../public/sun-cont-1.jpg";
import cont2 from "../../../../public/sun-cont-2.jpg";
import cont3 from "../../../../public/sun-cont-3.png";
import cont4 from "../../../../public/sun-cont-4.jpg";
import cont5 from "../../../../public/sun-cont-5.jpg";
import cont6 from "../../../../public/sun-cont-6.png";
import Footer from "../../../components/sections/FooterSection";

const SundayHighlights = () => {
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
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#64a63a] to-[#d4ed31]">
        Sunday Highlights
      </div>

      {/* Nested Highlight Navlinks */}
      <div className="flex justify-center space-x-4 py-8 bg-white mb-8">
        <Link
          to="/about/highlights/sunday"
          className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300"
        >
          SUNDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/monday"
          className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300"
        >
          MONDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/tuesday"
          className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300"
        >
          TUESDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/wednesday"
          className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300"
        >
          WEDNESDAY HIGHLIGHTS
        </Link>
        <Link
          to="/about/highlights/thursday"
          className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300"
        >
          THURSDAY HIGHLIGHTS
        </Link>
      </div>

      {/* Sunday Highlights Section (Main Content) */}
      <div className="text-white pb-12 mx-10 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4 mt-12">Sunday Highlights</h2>
            <p className="text-md leading-relaxed mb-8">
              The Ministerial Symposium began with a strong foundation of
              leadership and vision for the future of African mining. Interested
              in joining us from tomorrow? It's not too late! Register now and
              secure your seat.
            </p>
            <button className="bg-[#d4ed31] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#d4ed31] transition duration-300">
              REGISTER INTEREST FOR 2026
            </button>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img
              src={Image}
              alt="Sunday Highlights"
              className="h-[350px] w-[550px] shadow-xl rounded-r-lg"
            />
          </div>
        </div>
      </div>

      {/* Content Highlights - 1 Section */}
      <div className="p-10">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Content Highlights
          </h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Welcome Address */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={cont1}
                  alt="Welcome Address"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Welcome Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed py-5">
                    Frans Baleni, Executive Board Chairman of Investing in
                    African Mining Indaba, delivered the Welcome Address,
                    officially setting the stage for the day.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: National Address */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={cont2}
                  alt="National Address"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    National Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed py-5">
                    The Welcome Address was followed by the National Address
                    from Hon. Gwede Mantashe, Minister of Mineral and Petroleum
                    Resources, Republic of South Africa, followed by opening
                    remarks by H.E. Albert Muchanga, Commissioner for Economic
                    Development, Trade, Tourism, Industry and Minerals (ETIM),
                    African Union Commission.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 3: Opening Remarks */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={cont3}
                  alt="Opening Remarks"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Opening Remarks
                  </h3>
                  <p className="text-gray-600 leading-relaxed py-5">
                    H.E. Albert Muchanga, Commissioner for Economic Development,
                    Trade, Tourism, Industry and Minerals (ETIM), African Union
                    Commission, delivered the Opening Remarks, kicking off key
                    discussions. He emphasized the need for Africa to invest in
                    its mining capacity, value addition, and human capital,
                    stating that exporting minerals while importing poverty must
                    change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Highlights - 2 Section */}
      <div className="px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Forging a United African Mining Front */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={cont4}
                  alt="Welcome Address"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Forging a United African Mining Front
                  </h3>
                  <p className="text-gray-600 leading-relaxed py-5">
                    Collaboration for sustainable development focused on the
                    need for Africa to position itself as a unified global
                    source of PGMs while ensuring mutual benefit. They
                    emphasised balancing national and continental interests to
                    future-proof the industry through value addition and
                    pragmatic action. Discussions highlighted the importance of
                    local transformation, regional infrastructure, strong global
                    partnerships, and investment frameworks that drive
                    industrialisation and a resilient, value-adding mineral
                    chain.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: Transforming Africa’s Mining Future */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={cont5}
                  alt="National Address"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Transforming Africa’s Mining Future – A Game-Changing
                    Partnership!
                  </h3>
                  <p className="text-gray-600 leading-relaxed py-5">
                    Hyve Events SA and DMPR have officially strengthened their
                    collaboration to solidify Mining Indaba as the leading
                    platform for policy, investment, and sustainable growth in
                    African mining. This partnership will drive impactful
                    discussions, regional cooperation, and socio-economic
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 3: Closing Remarks */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img
                  src={cont6}
                  alt="Opening Remarks"
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Closing Remarks
                  </h3>
                  <p className="text-gray-600 leading-relaxed py-5">
                    As the closing speaker of this year’s symposium, Mzila
                    Mthenjane, CEO of Minerals Council South Africa capped our
                    day of collaborative and regional integration focus with a
                    poignant summary, “In God we trust, Africa will do the
                    rest."
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
              className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent"
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
              className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent"
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
                  className={`h-3 w-3 rounded-full border-2 border-[#5cb030] ${
                    currentIndex === index ? "bg-[#5cb030]" : "bg-transparent"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tomorrow's Content Highlights Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Tomorrow's Content Highlights
          </h2>
          <div className="space-y-8">
            {/* Event 1 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Monday 03 February</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>09:00 - 09:10</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Investing In African Mining Indaba 2025 Opening Ceremony
                performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join us for the highly anticipated inaugural ceremony which sets
                the stage for the week ahead.
              </p>
            </div>
            {/* Event 2 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Monday 03 February</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>15:15 - 16:15</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                How do we future-proof African communities from the effects of
                climate change?
              </h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>
                  How is climate instability affecting African mining and
                  African mining communities?
                </li>
                <li>
                  What solutions are miners, governments, local leaders adopting
                  to support climate change adaptation in mining communities?
                </li>
                <li>
                  How can a pursuit of co-benefits in miners' community
                  development and national policy efforts build greater
                  resilience to a changing climate? (case studies)
                </li>
              </ul>
            </div>
            {/* Event 3 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Monday 03 February</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>15:45 - 16:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Evolving African policy and value - developing a mutually
                beneficial mineral blueprint
              </h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>
                  Are measures to restrict exports of raw minerals increasing
                  local value addition?
                </li>
                <li>
                  Why are producers increasingly leveraging their minerals
                  towards securing greater local content and participation in
                  domestic mining activities from foreign players?
                </li>
                <li>
                  Looking at the long-standing regional development protocols,
                  how can partners support sustainable investments into local
                  mining value chains whilst also promoting transparent &
                  equitable policy?
                </li>
              </ul>
            </div>
            {/* Event 4 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📅</span>
                <span>Monday 03 February</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>16:35 - 17:20</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Future-Proofing African mining today - Uncovering the Top 5
                elements for success
              </h3>
              <ol className="list-decimal list-inside text-gray-600 leading-relaxed ml-4">
                <li>
                  <span className="font-semibold">The government factor:</span>{" "}
                  A landscape that offers investment-friendly options for
                  increased infrastructure development spend, improved
                  permitting processes and downstream value-addition is the
                  dream. Can it be turned into reality?
                </li>
                <li>
                  <span className="font-semibold">The investment factor:</span>{" "}
                  Future demand for metals has never looked brighter, but are
                  investors willing to provide the required capital at every
                  stage of the mining life cycle?
                </li>
                <li>
                  <span className="font-semibold">The community factor:</span>{" "}
                  Mining means job creation and economic opportunities, but is
                  that enough to win the support of local communities for new
                  projects?
                </li>
                <li>
                  <span className="font-semibold">The talent factor:</span>{" "}
                  Artificial intelligence holds the future to technology
                  adoption in mining - is tomorrow's mining generation prepared
                  at a tertiary education level for this, and what does their
                  integration with the existing workforce look like?
                </li>
                <li>
                  <span className="font-semibold">The market factor:</span> Are
                  downstream buyers ready to play their part, including buying
                  critical minerals from "risky" jurisdictions?
                </li>
              </ol>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#64a63a] text-white font-bold py-3 px-8 rounded hover:bg-[#55952c] transition duration-300">
              VIEW AGENDA
            </button>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(to bottom, #5cb030, #d4ed31)" }}
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
          <button className="bg-[#55952c] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">
            REGISTER INTEREST
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SundayHighlights;
