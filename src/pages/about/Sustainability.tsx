import Comm1 from "../../../public/comm-sus-1.png";
import Comm2 from "../../../public/comm-sus-2.png";
import Comm3 from "../../../public/comm-sus-3.png";
import Adva1 from "../../../public/advancing-new-solutions-1.png";
import Adva2 from "../../../public/advancing-new-solutions-2.png";
import Adva3 from "../../../public/advancing-new-solutions-3.jpg";
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Gallery1 from "../../../public/investors/inve-1.png";
import Gallery2 from "../../../public/investors/inve-2.png";
import Gallery3 from "../../../public/investors/inve-3.png";
import Gallery4 from "../../../public/investors/inve-4.png";
import Gallery5 from "../../../public/investors/inve-5.png";
import Gallery6 from "../../../public/investors/inve-6.png";
import Gallery7 from "../../../public/investors/inve-7.png";
import Gallery8 from "../../../public/investors/inve-8.png";
import Gallery9 from "../../../public/investors/inve-9.png";
import Gallery10 from "../../../public/investors/inve-10.png";
import Gallery11 from "../../../public/investors/inve-11.png";
import Gallery12 from "../../../public/investors/inve-12.png";

const Sustainability = () => {
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
    <div>
      <div className="h-48 bg-gradient-to-r from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold mt-14">Rwanda Mining Week Sustainability</h1>
      </div>

      {/* Our Commitments Text Section */}
      <div className="container mx-10 py-8 text-start">
        <p className="text-lg text-gray-700 leading-relaxed">
          Rwanda Mining Week, held from 4-6 December 2024, showcased Rwanda’s commitment to sustainable mining practices, emphasizing environmental stewardship, responsible sourcing, and community empowerment. By integrating innovative technologies and fostering partnerships, the event drives sustainable growth in Rwanda’s mining sector.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
        </p>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>

      {/* Our Commitments Section */}
      <div className="py-12 bg-gray-100">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Commitments</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                <div className="text-6xl text-green-600 mb-4">
                  <img src={Comm1} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Mining Practices</h3>
                <p className="text-gray-600 mb-4">
                  Rwanda Mining Week promotes environmentally friendly mining techniques, focusing on reducing carbon footprints, minimizing waste, and ensuring ethical sourcing of minerals like coltan and gold.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
                </p>
                <button className="mt-auto bg-[#ADD8E6] text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                <div className="text-6xl text-green-600 mb-4">
                  <img src={Comm2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Empowerment</h3>
                <p className="text-gray-600 mb-4">
                  The event fosters local community development by creating job opportunities and supporting artisanal miners through training and access to modern equipment.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
                </p>
                <button className="mt-auto bg-[#ADD8E6] text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                <div className="text-6xl text-green-600 mb-4">
                  <img src={Comm3} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Partnerships</h3>
                <p className="text-gray-600 mb-4">
                  Collaborating with international stakeholders, Rwanda Mining Week advances responsible mineral supply chains, aligning with global standards like OECD Due Diligence Guidance.[](https://rmb.gov.rw/updates/news-detail/rwandas-critical-minerals-for-the-green-transition)
                </p>
                <button className="mt-auto bg-[#ADD8E6] text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advancing New Solutions Section */}
      <div className="py-12">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Advancing New Solutions</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Rwanda Mining Week 2024 highlighted the transition from artisanal to mechanized mining, with initiatives like the three-year national mineral exploration campaign targeting gold and lithium. These efforts reduce environmental impact through efficient resource extraction and modern technology.[](https://www.rmb.gov.rw/updates/news-detail/how-rwandas-mining-sector-is-powering-towards-the-nst-2-usd-217-billion-goal)
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                The event showcased Rwanda’s investment in value-added processing, such as the Power X Refinery in Bugesera District, Africa’s only vertically integrated facility for refining tantalum and niobium, promoting sustainable industrialization and reducing raw mineral exports.[](https://rmb.gov.rw/updates/news-detail/rwandas-critical-minerals-for-the-green-transition)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Advancing New Solutions</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src={Adva1} />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src={Adva2} />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <img src={Adva3} />
            </div>
          </div>
        </div>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>

      {/* Initiatives and Engagement Section */}
      <div className="py-12">
        <div className="container mx-auto px-14">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Initiatives and Engagement</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Equipment Donation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rwanda Mining Week facilitated the donation of modern mining equipment to artisanal miners, enhancing productivity while reducing environmental degradation, aligning with Rwanda’s sustainable mining goals.[](https://allafrica.com/stories/202505080134.html)
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Training Programs</h3>
                <p className="text-gray-600 leading-relaxed">
                  The event included workshops to train miners on sustainable practices and safety standards, empowering local communities and ensuring compliance with international responsible sourcing frameworks.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>

      {/* People, Communities & Collaboration Section */}
      <div className="py-12">
        <div className="container mx-auto px-14">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">People, Communities & Collaboration</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporting Local Miners</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rwanda Mining Week supports artisanal miners by providing access to markets and technology, fostering economic inclusion and sustainable livelihoods in mining communities.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">International Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  The event fosters partnerships with global organizations to ensure ethical mineral trade, aligning with initiatives like the Responsible Minerals Initiative and promoting transparency.[](https://rmb.gov.rw/updates/news-detail/rwandas-critical-minerals-for-the-green-transition)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>

      {/* Ranked Section */}
      <section className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg px-14">
        <h2 className="text-4xl font-bold mb-6">Driving Rwanda’s Mining Sector Growth</h2>
        <p className="text-lg mb-8">
          Rwanda’s mining sector achieved $1.75 billion in mineral export earnings in 2024, a significant step toward the NST-2 goal of $2.17 billion by 2029. Rwanda Mining Week 2024 played a key role in showcasing investment opportunities and sustainable practices.[](https://www.rmb.gov.rw/updates/news-detail/how-rwandas-mining-sector-is-powering-towards-the-nst-2-usd-217-billion-goal)
        </p>
        <button className="bg-[#004F71] text-white font-bold px-8 py-3 rounded text-xs shadow-md uppercase tracking-wide transition-colors">
          VIEW ARTICLE
        </button>
      </section>

      {/* The Slide Show Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            <button onClick={prevSlide} className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent">
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

      {/* Environmental Restoration Section */}
      <div className="p-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Environmental Restoration Initiatives</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In alignment with Rwanda’s sustainability goals, Rwanda Mining Week supports initiatives like the Nyungwe–Ruhango Corridor restoration project, funded by a $9 million grant from the Global Environment Facility, to rehabilitate ecosystems and promote climate-smart land management.[](https://worldbank.org/en/news/press-release/2025/07/03/rwanda-afe-to-restore-ecosystems-and-boost-climate-resilience-in-the-nyungwe-ruhango-corridor)
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
            <li>Rehabilitation of 2,162 hectares of forests and wetlands</li>
            <li>Sustainable land management across 8,931 hectares of farmland</li>
            <li>Income-generating activities benefiting over 289,000 people</li>
            <li>Addressing climate risks like floods and landslides</li>
          </ul>
        </div>
      </div>

      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #004F71, #ADD8E6)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Featured Projects and Impact</h2>
        </div>
      </div>

      {/* Sustainable Mining Technology Section */}
      <div className="p-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Sustainable Mining Technology</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Adoption of energy-efficient mining equipment to reduce emissions</li>
                <li>Use of digital technologies for real-time environmental monitoring</li>
                <li>Mechanized mining to minimize ecological disruption</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>26 new exploration sites targeted in 2024/25</li>
                <li>$1.3 billion revenue projected for 2024/25 fiscal year</li>
                <li>Focus on gold, lithium, and coltan deposits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>

      <div className="py-12">
        <div className="container mx-auto px-14">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ethical Sourcing Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rwanda Mining Week promotes compliance with global frameworks like the OECD Due Diligence Guidance, ensuring minerals are sourced responsibly and transparently, reducing conflict risks.[](https://rmb.gov.rw/updates/news-detail/rwandas-critical-minerals-for-the-green-transition)
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Training Centers</h3>
                <p className="text-gray-600 leading-relaxed">
                  The event supports the establishment of training centers for miners, offering education on sustainable practices and safety, enhancing local capacity and economic resilience.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Partners</h2>
          <div className="flex items-center justify-center gap-8">
            <button onClick={prevSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#55952c] focus:outline-none bg-transparent">
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
            <button onClick={nextSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#55952c] focus:outline-none bg-transparent">
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
    </div>
  );
};

export default Sustainability;