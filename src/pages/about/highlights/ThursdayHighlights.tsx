import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from "../../../components/sections/FooterSection"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
<<<<<<< HEAD
=======
import Image1 from "../../../../public/thursday-content-1.jpg";
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
import CelebImage from "../../../../public/celeb-image.jpg"

const ThursdayHighlights = () => {

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
  
<<<<<<< HEAD
  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member }) => {
=======
  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member}) => {
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
          <img src={member.image} alt="Gallery Image" className="w-full h-full object-cover" />
      </div>
    );
  };

  const cardWidth = 256;
  const gapWidth = 24;
  const slideDistance = (cardWidth + gapWidth) * membersPerPage;

  // Calculate visible members for current slide
  const getVisibleMembers = () => {
    const start = currentIndex * membersPerPage;
    const end = Math.min(start + membersPerPage, galleryMembers.length);
    return galleryMembers.slice(start, end);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#004F71] to-[#ADD8E6]">
        Rwanda Mining Week 2025: Thursday Highlights
=======
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#64a63a] to-[#d4ed31]">
        Thursday Highlights
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      </div>

      {/* Nested Highlight Navlinks */}
      <div className="flex justify-center space-x-4 bt-8 bg-white my-8">
<<<<<<< HEAD
        <Link to="/about/highlights/sunday" className="text-sm bg-[#ADD8E6] text-black font-bold p-2 rounded hover:bg-[#004F71] hover:text-white transition duration-300">SUNDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/monday" className="text-sm bg-[#ADD8E6] text-black font-bold p-2 rounded hover:bg-[#004F71] hover:text-white transition duration-300">MONDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/tuesday" className="text-sm bg-[#ADD8E6] text-black font-bold p-2 rounded hover:bg-[#004F71] hover:text-white transition duration-300">TUESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/wednesday" className="text-sm bg-[#ADD8E6] text-black font-bold p-2 rounded hover:bg-[#004F71] hover:text-white transition duration-300">WEDNESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/thursday" className="text-sm bg-[#ADD8E6] text-black font-bold p-2 rounded hover:bg-[#004F71] hover:text-white transition duration-300">THURSDAY HIGHLIGHTS</Link>
=======
        <Link to="/about/highlights/sunday" className="text-sm bg-[#d4ed31] text-black font-bold p-2 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">SUNDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/monday" className="text-sm bg-[#d4ed31] text-black font-bold p-2 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">MONDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/tuesday" className="text-sm bg-[#d4ed31] text-black font-bold p-2 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">TUESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/wednesday" className="text-sm bg-[#d4ed31] text-black font-bold p-2 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">WEDNESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/thursday" className="text-sm bg-[#d4ed31] text-black font-bold p-2 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">THURSDAY HIGHLIGHTS</Link>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      </div>

      {/* Highlights & Takeaways Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto gap-0 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">Highlights & Takeaways from Thursday at Rwanda Mining Week 2025</h2>
            <p className="text-sm leading-relaxed mb-8">
              The final day of Rwanda Mining Week 2025, held on 6 December 2025, concluded with impactful sessions on youth empowerment and sustainability. The Young Miners Programme connected emerging professionals with industry leaders to discuss career paths and innovation. The Sustainability Summit emphasized Rwanda’s commitment to eco-friendly mining, closing the event with a focus on sustainable growth and community development.
            </p>
            <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">REGISTER INTEREST FOR 2026</button>
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">Highlights & Takeaways from Thursday at Mining Indaba 2025</h2>
            <p className="text-sm leading-relaxed mb-8">
              The final day of Mining Indaba 2025 wrapped up with the Young Leaders Programme and the Sustainability Series, reinforcing the industry's commitment to the future. The Young Leaders Programme brought together aspiring mining professionals and industry veterans to discuss career pathways, innovation, and leadership in the sector. Meanwhile, the Sustainability Series continued into the event's final day. These sessions closed the event on a forward-thinking note, emphasising talent development and sustainable growth in African mining.
            </p>
            <button className="bg-[#d4ed31] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#d4ed31] transition duration-300">REGISTER INTEREST FOR 2026</button>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
<<<<<<< HEAD
                src="https://youtu.be/rEoO5DLQ0ZY"
                title="Rwanda Mining Week 2025 Highlights"
=======
                src="https://www.youtube.com/embed/elg4ujpzVuo"
                title="Mining Indaba 2025 Highlights"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Content Highlights</h2>
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
            {/* Content Item 1: Leadership Panel */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image1} alt="Leadership Panel" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Leadership Panel: Inspiring the Next Generation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Rwanda’s mining leaders shared insights on their career journeys, mentorship, and strategies for fostering innovation in the sector during a moderated discussion.
=======
            {/* Content Item 1: Leadership: Fireside Chat with CEOs */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image1} alt="Leadership: Fireside Chat with CEOs" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Leadership: Fireside Chat with CEOs</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    African mining leaders took part in a moderated discussion, sharing personal insights on their academic backgrounds, early influences, and mentors.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Content Item 2: Youth Perspectives */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image2} alt="Youth Perspectives" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Youth Perspectives: Shaping Rwanda’s Mining Future</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Young professionals engaged in a dynamic discussion on sustainable mining practices and the role of innovation in addressing environmental and social challenges.
=======
            {/* Content Item 2: Voices of the Future: Young Professionals Perspectives on the Controversies Surrounding African Mining */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image2} alt="Voices of the Future: Young Professionals Perspectives on the Controversies Surrounding African Mining" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Voices of the Future: Young Professionals Perspectives on the Controversies Surrounding African Mining</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Young professionals explored their perspectives on Africa's mining industry and engaged in a thought-provoking discussion with Dr. Mali Kitlaw.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 3: Opening Address */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image3} alt="Opening Address" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Opening Address</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
<<<<<<< HEAD
                    The Young Miners Programme began with a keynote address by a senior official from the Rwanda Mines, Petroleum and Gas Board, highlighting opportunities for youth in mining.
=======
                    The Young Leaders Programme opened with an opening address by Timothy Schultz, Partner and SA Energy & Resources Lead, Brunswick Group.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Content Item 4: Responsible Sourcing */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image4} alt="Responsible Sourcing" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsible Sourcing: Building Transparent Supply Chains</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This session explored Rwanda’s efforts to align with OECD Due Diligence Guidance, addressing challenges in supply chain transparency for minerals like coltan and gold.
=======
            {/* Content Item 4: Transparency from the ground up: emerging approaches for connecting mines to the supply chain for more credible due diligence */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Image4} alt="Transparency from the ground up" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparency from the ground up: emerging approaches for connecting mines to the supply chain for more credible due diligence</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The session explored challenges in implementing the OECD Due Diligence Guidance for Responsible Mineral Supply Chains, particularly the systemic issues in information flow despite a decade of audit systems and regulations.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Gallery</h2>
          <div className="flex items-center justify-center gap-8">
<<<<<<< HEAD
            <button onClick={prevSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#ADD8E6] focus:outline-none bg-transparent">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div className="flex overflow-hidden w-full">
=======
            <button onClick={prevSlide} className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Slideshow container */}
            <div className="flex overflow-hidden w-full">
              {/* Inner container holding all cards with horizontal gap */}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              <div
                className="flex transition-transform duration-500 ease-in-out gap-x-6"
                style={{ transform: `translateX(${-currentIndex * slideDistance}px)` }}
              >
                {galleryMembers.map((member) => (
                  <GalleryMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
<<<<<<< HEAD
            <button onClick={nextSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#ADD8E6] focus:outline-none bg-transparent">
=======
            <button onClick={nextSlide} className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
                  className={`h-3 w-3 rounded-full border-2 border-[#004F71] ${currentIndex === index ? 'bg-[#004F71]' : 'bg-transparent'}`}
=======
                  className={`h-3 w-3 rounded-full border-2 border-[#5cb030] ${currentIndex === index ? 'bg-[#5cb030]' : 'bg-transparent'}`}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-sm leading-relaxed mb-8">
              Rwanda Mining Week 2025 concluded with remarkable support from sponsors and exhibitors, including Power X Refinery, Rwanda Mines, Petroleum and Gas Board, and global partners advancing sustainable mining practices.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#004F71] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
              <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">VIEW SPONSORS</button>
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-sm leading-relaxed mb-8">
            Mining Indaba 2025 has been extraordinary! We’re thrilled to be showcasing some exceptional sponsors and exhibitors, this year. Click below to discover the line-up. 
            </p>
            <div className="flex space-x-4">
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
            <button className="bg-[#d4ed31] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#d4ed31] transition duration-300">VIEW SPONSORS</button>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <img src={CelebImage} alt="Thursday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
          </div>
        </div>
      </div>

      {/* Join Us Section */}
<<<<<<< HEAD
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #004F71, #ADD8E6)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Rwanda Mining Week 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The leading platform for advancing Rwanda’s sustainable mining sector. Join global and local leaders to shape the future of mining in Rwanda. Register your interest today to stay at the forefront of this dynamic industry!
          </p>
          <button className="bg-[#004F71] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">REGISTER INTEREST</button>
=======
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #5cb030, #d4ed31)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Mining Indaba 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The premier meeting place for African and global mining leaders. It is all set to be an unmissable experience, shaping the future of African mining.<br/> Register your interest today and stay ahead in this dynamic industry!
          </p>
          <button className="bg-[#55952c] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">REGISTER INTEREST</button>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
        </div>
      </div>

      <Footer/>
    </div>
  );
};

<<<<<<< HEAD
export default ThursdayHighlights;
=======
export default ThursdayHighlights; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
