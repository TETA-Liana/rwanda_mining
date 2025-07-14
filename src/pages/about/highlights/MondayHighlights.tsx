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
  
<<<<<<< HEAD
  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member }) => {
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
        <img src={member.image} alt="Gallery Image" className="w-full h-full object-cover" />
=======
  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member}) => {
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
          <img src={member.image} alt="Gallery Image" className="w-full h-full object-cover" />
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      </div>
    );
  };

  const cardWidth = 256;
  const gapWidth = 24;
  const slideDistance = (cardWidth + gapWidth) * membersPerPage;

  return (
    <div className="pt-20">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#004F71] to-[#ADD8E6]">
        Rwanda Mining Week 2025: Monday Highlights
=======
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#64a63a] to-[#d4ed31]">
        Monday Highlights
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      </div>

      {/* Nested Highlight Navlinks */}
      <div className="flex justify-center space-x-4 py-8 bg-white mb-8">
<<<<<<< HEAD
        <Link to="/about/highlights/sunday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">SUNDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/monday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">MONDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/tuesday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">TUESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/wednesday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">WEDNESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/thursday" className="text-sm bg-[#ADD8E6] text-black font-bold py-2 px-4 rounded hover:bg-[#004F71] hover:text-white transition duration-300">THURSDAY HIGHLIGHTS</Link>
=======
        <Link to="/about/highlights/sunday" className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">SUNDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/monday" className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">MONDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/tuesday" className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">TUESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/wednesday" className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">WEDNESDAY HIGHLIGHTS</Link>
        <Link to="/about/highlights/thursday" className="text-sm bg-[#d4ed31] text-black font-bold py-2 px-4 rounded hover:bg-[#d4ed31] hover:text-black transition duration-300">THURSDAY HIGHLIGHTS</Link>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      </div>

      {/* Key Moments & Insights Section */}
      <div className="text-white mx-12 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4">Monday at Rwanda Mining Week 2025 kicked off with a vision for sustainable mining!</h2>
            <p className="text-md leading-relaxed mb-8">
              The day launched with an inspiring Opening Ceremony, featuring Rwanda’s Minister of State for Mining, setting the stage for a week of innovation and collaboration. Key discussions on sustainable mining practices and the launch of new exploration initiatives for gold and lithium energized attendees. A dynamic start to an impactful week!
            </p>
            <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">REGISTER INTEREST FOR 2026</button>
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-3xl font-bold mb-4">Monday at Mining Indaba 2025 set the stage for an exciting week ahead!</h2>
            <p className="text-md leading-relaxed mb-8">
            The day began with a powerful Opening Ceremony, bringing energy and momentum to the event. The launch of Disruptive Discussions sparked thought-provoking conversations, while the rest of the content programmes followed. What a dynamic start to the week - watch this space for more updates!
            </p>
            <button className="bg-[#d4ed31] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#d4ed31] transition duration-300">REGISTER INTEREST FOR 2026</button>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/oEUGmvLwqQc"
<<<<<<< HEAD
                title="Day One Highlights Rwanda Mining Week 2025"
=======
                title="Day One Highlights Mining Indaba 2025"
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
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Content Highlights</h2>
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
            {/* Content Item 1 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont1} alt="Sustainable Mining" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Advancing Sustainable Mining in Rwanda</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This session explored Rwanda’s transition from artisanal to mechanized mining, focusing on sustainable practices to reduce environmental impact. Panelists discussed the role of technology, government policies, and community engagement in achieving a $2.17 billion mineral export target by 2029.
=======
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont1} alt="Lithium and graphite" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Future-Proofing African mining today - Uncovering the Top 5 elements for success</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Dreams of streamlined downstream value addition can be turned into reality. This session explored combined roles of governments, investors, indigenous communities, adopters of technology and managed risk and the vast opportunities to future proof mining in Africa.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Content Item 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont2} alt="Value-Added Processing" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Value-Added Processing: Rwanda’s Path to Industrialization</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The session highlighted Rwanda’s Power X Refinery in Bugesera, Africa’s only vertically integrated tantalum and niobium refinery. Discussions centered on how value-added processing can drive sustainable industrialization and reduce reliance on raw mineral exports.
=======
            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont2} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">The Global Investor Commission on Mining 2030 - Historic legacies addressed and positive legacies created</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  The Global Investor Commission on Mining 2030 aims to shape a socially and environmentally responsible mining sector by 2030 and clarified finance's role in achieving this. Through its workstream on addressing historic legacies and creating positive ones, the Commission helped define "legacy" and how to frame future efforts.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
            <div className='mx-12 mt-14'>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">How do we future-proof African communities from the effects of climate change?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Key points from this session included how miners can implement water recycling systems, transition to renewable energy sources, restore mined lands with vegetation and integrate climate modelling into planning and operational risk management.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Content Item 2 */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Climate-Smart Mining Solutions</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Experts discussed implementing water recycling systems, renewable energy adoption, and land restoration to mitigate climate change impacts in Rwanda’s mining sector, aligning with national environmental goals.
=======
            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Critical for who – how producers can flip the script on critical minerals</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Critical minerals are vital to Africa's energy security and development. Top tier panelists explained how Africa's energy security depends on how these resources are managed and integrated into local energy strategies.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
            <img src={InteraImage1} alt="Monday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-l-lg"/>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#004F71] items-stretch p-5 h-[350px] rounded-r-lg">
            <h2 className="text-3xl font-bold my-4">Maximizing Rwanda’s Mineral Potential</h2>
            <p className="text-md leading-relaxed mb-8">
              This session, sponsored by the Rwanda Mines, Petroleum and Gas Board, explored strategies for local beneficiation, renewable energy integration, and regional collaboration to ensure Rwanda’s minerals drive sustainable economic growth and global trade.
=======
            <img src={InteraImage1} alt="Wednesday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-l-lg"/>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#64a63a] items-stretch p-5 h-[350px] rounded-r-lg">
            <h2 className="text-3xl font-bold my-4">Maximising Africa's critical minerals endowment, sponsored by African Finance Corporation</h2>
            <p className="text-md leading-relaxed mb-8">
            Africa can maximise its critical minerals by fostering local beneficiation, developing renewable energy industries, and leveraging regional collaboration to negotiate fair trade terms. Prioritizing domestic energy projects, technology transfer, and equitable financing ensures sustainability and global impact.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            </p>
          </div>
        </div>
      </div>

      <div className="text-white pt-12 mx-10 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-3xl font-bold mb-4 mt-16">Innovative Technologies for Sustainable Mining</h2>
            <p className="text-md leading-relaxed mb-8">
              An interactive workshop showcased cutting-edge technologies, including digital monitoring systems and energy-efficient equipment, enabling participants to explore solutions tailored to Rwanda’s mining sector.
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-3xl font-bold mb-4 mt-16">Game-changing Technologies, sponsored by Microsoft</h2>
            <p className="text-md leading-relaxed mb-8">
            An immersive, hands-on workshop where participants can try out new technologies and configure their own Industrial Copilots relevant to their mining persona.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            </p>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
<<<<<<< HEAD
            <img src={InteraImage2} alt="Monday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
=======
            <img src={InteraImage2} alt="Wednsday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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

<<<<<<< HEAD
=======
      
      {/* Tomorrow's Content Highlights Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Tomorrow's Content Highlights</h2>
          <div className="space-y-8">
            {/* Event 1 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Tuesday 04 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>09:00 - 10:00</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">What needs to change to harness the full potential of ASM?</h3>
              <p className="text-gray-600 leading-relaxed">
                Session sponsored by EPRM
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>What worked, what didn't and want needs to change to ensure the artisanal and small-scale mining sector formalizes and professionalizes across the continent</li>
                <li>How to pivot from pilot projects and short-lived interventions to sector wide change</li>
                <li>Zooming in on the Ivorian gold sector and the Congolese cobalt sector, the panel will discuss what impact at scale could look like, if the right investments are made into the sector.</li>
              </ul>
            </div>

            {/* Event 2 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Tuesday 04 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>09:30 - 11:00</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshop 3 - Industrialising Africa</h3>
              <p className="text-gray-600 leading-relaxed">
                Unlocking potential: Value addition and industrial transformation in Africa
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Session 1: High Level Panel Discussion on the Challenges and Opportunities of Industrializing Africa's through Minerals
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Session 2: Practical level Discussions on the Challenges and Opportunities of Industrializing Africa's through Minerals
              </p>
            </div>

            {/* Event 3 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Tuesday 04 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>09:45 - 10:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Industrialising Africa - what will it take to increase investment in midstream and downstream manufacturing facilities?</h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Why this government objective?</li>
                <li>Unpacking enabling conditions for mining companies and international players to foray into local value addition for critical energy transition minerals</li>
                <li>Understanding the perspectives of battery and electric vehicles manufacturers to better understand midstream opportunities and actions needed to unlock those segments</li>
                <li>The role of private sector and state-owned enterprises in implementing the vision of governments to transform domestic mining sectors to deliver greater value addition</li>
              </ul>
            </div>

            {/* Event 4 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Tuesday 04 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>10:00 - 10:45</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Is policy a blocker to technology and innovation?</h3>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>What is the importance of government policies in supporting technological innovation?</li>
                <li>Why is policy not keeping pace with the rate of technological advancement?</li>
                <li>Can collaboration between governments, businesses, and academia to drive technological advancements.</li>
              </ul>
            </div>

            {/* Event 5 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Tuesday 04 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>11:30 - 12:00</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Commodity Roundtables - Graphite, Lithium and Rare Earth Elements</h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in an open dialogue discussion with industry peers about current trends, challenges, and opportunities. Expect to gain valuable insights into market forecasts, risk management strategies, and the impact of global economic factors on commodity prices.
              </p>
            </div>
            {/* Event 6 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Tuesday 04 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>13:00 - 14:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshop 4 - Prioritising health and safety</h3>
              <p className="text-gray-600 leading-relaxed">
                Mining and Zero harm: Achieving the goal
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The main goal of the workshop is to stimulate an open discussion about the challenges the mining industry is facing related to health and safety; how they can maintain a right to operate and attract further investment within this context; how to drive improvement; and how new thinking and new technologies can help to sustainably reduce the number, frequency and severity of accidents in mines across Africa.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The session will open with a panel discussion that will discuss how mining operations are evolving, how this has augmented risk, as well as the challenges and opportunities that companies have in improving their health and safety systems and practices. This will be followed by roundtable discussions where participants will delve more deeply into specific challenges that miners are facing, with a focus on pragmatic solutions:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Effectively managing safety during M&A</li>
                <li>Managing and positively influencing contractors, sub-contractors and value chain partners (artisanal & small-scale miners)</li>
                <li>Technology and AI are seen as the silver bullet for improve safety performance, but what actually works and what data and monitoring strategies and frameworks are necessary to introduce new tech/AI effectively</li>
                <li>Engaging and building capabilities of employees; providing a safe working environment for all demographics</li>
                <li>Cultivating the right cultural context for safety</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#64a63a] text-white font-bold py-3 px-8 rounded hover:bg-[#55952c] transition duration-300">VIEW AGENDA</button>
          </div>
        </div>
      </div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      {/* Celebrating Our Incredible Sponsors and Exhibitors Section */}
      <div className="text-white py-12 mx-10 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-3xl font-bold mb-4 mt-8">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-md leading-relaxed mb-8">
              Day one of Rwanda Mining Week 2025 showcased leading sponsors and exhibitors, including Power X Refinery, Rwanda Mines, Petroleum and Gas Board, and global partners driving sustainable mining innovation in Rwanda.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#004F71] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
              <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">VIEW SPONSORS</button>
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-3xl font-bold mb-4 mt-8">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-md leading-relaxed mb-8">
            Wrapping up yet another productive day at Mining Indaba, we’re thrilled to showcase some exceptional sponsors and exhibitors, including Kanona Power Company Limited, AECI Mining, JOGMEC, Liebherr Africa, Rawbank SA, and many more.
            </p>
            <div className="flex space-x-4">
            <button className="bg-white text-[#55952c] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
            <button className="bg-[#d4ed31] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#d4ed31] transition duration-300">VIEW SPONSORS</button>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 mb-8 flex items-stretch rounded-r-lg">
<<<<<<< HEAD
            <img src={CelebImage} alt="Monday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
=======
            <img src={CelebImage} alt="Wednsday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
=======


>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    </div>
  );
};

<<<<<<< HEAD
export default MondayHighlights;
=======
export default MondayHighlights; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
