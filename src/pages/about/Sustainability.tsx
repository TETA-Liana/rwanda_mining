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
<<<<<<< HEAD

const Sustainability = () => {
=======
const Sustainability = () => {

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  const membersPerPage = 4;
  const totalSlides = Math.ceil(images.length / membersPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
<<<<<<< HEAD
    }, 10000);

    return () => clearInterval(interval);
  }, [totalSlides]);
=======
    }, 10000); 

    return () => clearInterval(interval); 
  }, [totalSlides]); 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
<<<<<<< HEAD

=======
  
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  const galleryMembers: GalleryMember[] = galleryImageImports.map((image, index) => ({
    id: index + 1,
    image: image,
  }));
<<<<<<< HEAD

  interface GalleryMemberCardProps {
    member: GalleryMember;
  }

  const GalleryMemberCard: React.FC<GalleryMemberCardProps> = ({ member }) => {
    return (
      <div className="relative rounded-lg shadow-md text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 h-48 flex-shrink-0 transition-colors duration-300 overflow-hidden">
        <img src={member.image} alt="Gallery Image" className="w-full h-full object-cover" />
=======
  
  interface GalleryMemberCardProps {
    member: GalleryMember;
  }
  
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
    <div>
<<<<<<< HEAD
      <div className="h-48 bg-gradient-to-r from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold mt-14">Rwanda Mining Week Sustainability</h1>
      </div>
=======
    <div className="h-48 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold mt-14">Sustainability Initiatives</h1>
    </div>

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      {/* Our Commitments Text Section */}
      <div className="container mx-10 py-8 text-start">
        <p className="text-lg text-gray-700 leading-relaxed">
<<<<<<< HEAD
          Rwanda Mining Week, held from 4-6 December 2024, showcased Rwanda’s commitment to sustainable mining practices, emphasizing environmental stewardship, responsible sourcing, and community empowerment. By integrating innovative technologies and fostering partnerships, the event drives sustainable growth in Rwanda’s mining sector.[](https://www.primature.gov.rw/news-detail/pm-ngirente-officiated-the-opening-ceremony-of-rwanda-mining-week-2024)
        </p>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>
=======
          Mining Indaba's commitment to sustainability is evident in its efforts to reduce its environmental footprint, promote circularity in its products and processes, and deliver innovative solutions that improve the quality of life. By investing in sustainable practices and collaborating with industry partners, Mining Indaba is driving positive change within the event industry.
        </p>
      </div>

      <div className='h-3 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] '></div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      {/* Our Commitments Section */}
      <div className="py-12 bg-gray-100">
        <div className="container pl-10">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Our Commitments</h2>
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
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
=======
            {/* Commitment Item 1: Advancing New Solutions */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div  className="flex-col items-center text-start">
                {/* Icon Placeholder */}
                <div className="text-6xl text-green-600 mb-4">
                  <img src={Comm1} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Advancing New Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Our goal is to offer sustainable products that enhance customer value, reduce carbon footprints, reduce waste, and increase safety through investments in new sustainable solutions.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>

            {/* Commitment Item 2: Initiatives and Engagement */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                {/* Icon Placeholder */}
                <div className="text-6xl text-green-600 mb-4">
                <img src={Comm2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Initiatives and Engagement</h3>
                <p className="text-gray-600 mb-4">
                  Our commitment extends beyond compliance, focusing on fostering knowledge and providing innovative solutions to ensure safe product use and minimize environmental impact.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
              </div>
            </div>

            {/* Commitment Item 3: People, Communities & Collaboration */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="flex-col items-center text-start">
                {/* Icon Placeholder */}
                <div className="text-6xl text-green-600 mb-4">
                <img src={Comm3} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">People, Communities & Collaboration</h3>
                <p className="text-gray-600 mb-4">
                  We strive to empower communities, foster faster collaborations, and implement sustainable practices, ensuring lasting environmental and social impact.
                </p>
                <button className="mt-auto bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">LEARN MORE</button>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Rwanda Mining Week 2024 highlighted the transition from artisanal to mechanized mining, with initiatives like the three-year national mineral exploration campaign targeting gold and lithium. These efforts reduce environmental impact through efficient resource extraction and modern technology.[](https://www.rmb.gov.rw/updates/news-detail/how-rwandas-mining-sector-is-powering-towards-the-nst-2-usd-217-billion-goal)
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                The event showcased Rwanda’s investment in value-added processing, such as the Power X Refinery in Bugesera District, Africa’s only vertically integrated facility for refining tantalum and niobium, promoting sustainable industrialization and reducing raw mineral exports.[](https://rmb.gov.rw/updates/news-detail/rwandas-critical-minerals-for-the-green-transition)
=======
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Since 2022, we have partnered with innovative exhibition stand builders, Jane&Paul, who specialise in creating sustainable exhibition infrastructure.
                <br/><br/>
                Their flat-pack and modular designs boast a low carbon footprint in both transportation and packaging, allowing for reuse at each show. The primary construction material used is sustainably sourced South African Pine, known for its natural durability and ability to store carbon, making it an ideal choice for reducing environmental impact in the construction industry. Employing a CNC cut joining mechanism ensures precise assembly, eliminates the need for standard fasteners like screws or nails, and facilitates efficient flat-packing and reusability of the units.
              </p>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Along with adopting ScanDisplay's fabric shell scheme solution for stands, we also selected lightweight panels that, in keeping with our sustainable practices, lower carbon emissions and improve transport convenience. Following the event, exhibitors can store their graphic walls with ScanDisplay for reuse, promoting resource conservation, waste reduction, and furthering our sustainability objectives. The sustainable approach to improving our exhibition includes the use of reusable carpet tiles, significantly reducing waste compared to traditional single-use carpets typically found at exhibitions. By integrating digital screens and signage throughout the event space, we also lessened the dependence on freestanding banners, strengthening our sustainability efforts.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </p>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
<div className="py-12">
  <div className="container pl-10">
    <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Advancing New Solutions</h2>
    <div className="flex flex-wrap -mx-4">
      {/* Left Column */}
      <div className="w-full md:w-1/3 px-4 mb-8">
      <img src={Adva1}/>
      </div>
      {/* Right Column */}
      <div className="w-full md:w-1/3 px-4 mb-8">
      <img src={Adva2}/>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <img src={Adva3}/>
      </div>
    </div>
  </div>
</div>

<div className='h-3 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] '></div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      {/* Initiatives and Engagement Section */}
      <div className="py-12">
        <div className="container mx-auto px-14">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Initiatives and Engagement</h2>
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
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
=======
            {/* Left Column: Donating magazine collateral */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Donating magazine collateral</h3>
                <p className="text-gray-600 leading-relaxed">
                  The team intended to prohibit printed collateral, but media partners supplied popular magazines. After the event, surplus magazines were donated to Silverleaf School in Dunoon, which received recycling funds and utilised them to purchase seeds and plant vegetables which fed 750 children.
                </p>
              </div>
            </div>
            {/* Right Column: Recycling graphics */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recycling graphics</h3>
                <p className="text-gray-600 leading-relaxed">
                  The team attempts to keep all signage information generic so that the images can be reused year after year. Any graphics that cannot be reused, such as sponsor walls or graphics with outdated logos, are donated to Sealand Gear, a Cape Town-based maker of repurposed outdoor bags and apparel. Sealand repurposes leftover fabric to make inners for their responsibly made bags.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>
=======
      <div className='h-3 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] '></div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      {/* People, Communities & Collaboration Section */}
      <div className="py-12">
        <div className="container mx-auto px-14">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">People, Communities & Collaboration</h2>
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
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
=======
            {/* Left Column: Supporting Township */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporting Township</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hyve has been purchasing delegate bags from Township® since 2018. Township is a Fair-Trade social company that promotes women's economic development in South African township communities. They support five cooperatives that employ 45 women in the Cape Town townships of Khayelitsha and Manenberg. All of the Township's items are manufactured from eco-friendly textiles such as jute, cotton, or recycled PET from plastic bottles.
                </p>
              </div>
            </div>
            {/* Right Column: Supporting Kidz Positive */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Supporting Kidz Positive</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kidz Positive serves as an income generation initiative, empowering mothers and caregivers of children impacted by HIV/AIDS to earn a livelihood. Workers collect raw materials weekly, either from home or at the local office in Cape Town, as shown in the images below. This year, Kidz Positive manufactured notebooks, pens, and ministerial folders for our delegates, essential tools for them to engage effectively in their roles.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>

      {/* Ranked Section */}
      <section className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg px-14">
        <h2 className="text-4xl font-bold mb-6">Driving Rwanda’s Mining Sector Growth</h2>
        <p className="text-lg mb-8">
          Rwanda’s mining sector achieved $1.75 billion in mineral export earnings in 2024, a significant step toward the NST-2 goal of $2.17 billion by 2029. Rwanda Mining Week 2024 played a key role in showcasing investment opportunities and sustainable practices.[](https://www.rmb.gov.rw/updates/news-detail/how-rwandas-mining-sector-is-powering-towards-the-nst-2-usd-217-billion-goal)
        </p>
        <button className="bg-[#004F71] text-white font-bold px-8 py-3 rounded text-xs shadow-md uppercase tracking-wide transition-colors">
=======
      <div className='h-3 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] '></div>


      {/* Ranked Section */}
      <section  className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg px-14">
        <h2 className="text-4xl font-bold mb-6">Ranked among the top 100 most sustainable companies of 2024</h2>
        <p className="text-lg mb-8">
        In 2024, 9 of our Mining Indaba clients ranked among the top 100 most sustainable companies of 2024! Congratulations to Schneider Electric, SGS, Siemens, Hitachi, McKinsey, WSP, Microsoft, Newmont, and Epiroc for their leadership in sustainability and positive impact on the planet.
        </p>
        <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-xs shadow-md uppercase tracking-wide transition-colors">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
            <div className="flex overflow-hidden w-full">
=======
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

<<<<<<< HEAD
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
=======

      {/* Masonwabe Educare Centre Section */}
      <div className="p-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Masonwabe Educare Centre (Breadline Africa)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In partnership with Breadline Africa, Hyve Group have funded the reconstruction of the Masonwabe Educare Centre in Gugulethu, Cape Town, providing a safe, hygienic, and inspirational learning environment for 74 children. The newly constructed Early Childhood Development (ECD) facility was built using carbon-negative building technology called BRC (Biomass-Recycled Insulating Concrete), which is known for its multiple environmental benefits:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
            <li>95% recycled or waste material per m²</li>
            <li>Saves 20l of water per m² per day when compared to traditional brick and mortar</li>
            <li>3.1ha of indigenous ecosystems are restored per 43m² structure</li>
            <li>Can sequester up to 250kg CO2e per m² in the construction phase. Breadline Africa can provide the necessary Environmental Product Declaration (EPD)</li>
            <li>3-hour fire rated wall panels</li>
            <li>Maintaining an ambient temperature of 21°C and requiring no additional heating or cooling in the South African climate</li>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </ul>
        </div>
      </div>

<<<<<<< HEAD
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #004F71, #ADD8E6)' }}>
=======
                  {/* Featured Projects and Impact Section */}
                  <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #5cb030, #d4ed31)' }}>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Featured Projects and Impact</h2>
        </div>
      </div>
<<<<<<< HEAD

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
=======
      

      {/* Township Sustainable Bags Section */}
      <div className="p-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Township Sustainable Bags in Partnership with Hyve Group</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Bags made out of recycled PET from bottles collected in south Africa.</li>
                <li>Bags are made out of natural cotton locally sourced from South African countries.</li>
                <li>Bags produced in women-owned cooperatives based in township communities.</li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>4 cooperatives</li>
                <li>25 women</li>
                <li>34,000 hours</li>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </ul>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className='h-3 bg-gradient-to-r from-[#004F71] to-[#ADD8E6]'></div>
=======
      <div className='h-3 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] '></div>

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      <div className="py-12">
        <div className="container mx-auto px-14">
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
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
=======
            {/* Left Column: Supporting Township */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recycling Stage Sets</h3>
                <p className="text-gray-600 leading-relaxed">
                We work with Gearhouse to implement a sustainable approach by storing and reusing elements of our stage sets. This eco-conscious practice significantly reduces our carbon footprint while promoting resource efficiency. By extending the lifespan of stage materials through reuse, we minimize waste and contribute to a greener event industry. This commitment to sustainability underscores our dedication to environmental responsibility and sets a positive example for future events.
                </p>
              </div>
            </div>
            {/* Right Column: Supporting Kidz Positive */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vegetarian Food at the Event</h3>
                <p className="text-gray-600 leading-relaxed">
                At Mining Indaba 2025, all food is sustainably sourced and local. We also design our menus to be 70% vegetarian. This approach significantly reduces our environmental footprint by minimizing transportation emissions and supporting local farmers. Replacing the meat offering at the event reduces methane which contributes to climate change. Making this change reduces the GHG emissions of all the individuals attending the event by hundreds throughout the weeks event.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
          <div className="flex items-center justify-center gap-8">
            <button onClick={prevSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#55952c] focus:outline-none bg-transparent">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <div className="flex overflow-hidden w-full">
=======
          {/* Placeholder for partner logos */}
          <div className="flex items-center justify-center gap-8">
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
            <button onClick={nextSlide} className="p-2 rounded-full text-[#004F71] hover:text-[#55952c] focus:outline-none bg-transparent">
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
    </div>
  );
};

export default Sustainability;