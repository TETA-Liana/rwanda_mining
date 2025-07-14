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
<<<<<<< HEAD
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#004F71] to-[#ADD8E6]">
        Rwanda Mining Week 2025: Tuesday Highlights
=======
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#64a63a] to-[#d4ed31]">
        Tuesday Highlights
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
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">Key Moments & Insights from Rwanda Mining Week 2025</h2>
            <p className="text-sm leading-relaxed mb-8">
              Tuesday at Rwanda Mining Week 2025, held on 4 December 2025, was packed with transformative discussions on policy, investment, and sustainable mining. Key sessions explored Rwanda’s mineral export potential, the role of technology in mining innovation, and strategies for value-added processing, setting the stage for the remaining days of impactful conversations.
            </p>
            <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">REGISTER INTEREST FOR 2026</button>
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">Key Moments & Insights from Mining Indaba 2025</h2>
            <p className="text-sm leading-relaxed mb-8">
              Get up to speed with the biggest moments from Tuesday at Mining Indaba 2025. From thought-provoking keynotes to dynamic panel discussions, explore the insights and trends shaping the future of mining. With two more days of groundbreaking conversations ahead, stay tuned for what's next!
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
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Content Highlights</h2>
          <div className="flex flex-wrap -mx-4">
<<<<<<< HEAD
            {/* Content Item 1: Policy and Innovation */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont1} alt="Policy and Innovation" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Policy as a Catalyst for Mining Innovation</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Experts discussed how Rwanda’s mining policies can drive technological innovation, focusing on streamlining regulations to support downstream beneficiation and sustainable practices.
=======
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont1} alt="Lithium and graphite" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Is policy a blocker to technology and innovation?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  It's widely acknowledged that African countries export raw minerals without processing them locally. Policies rarely encourage downstream beneficiation, which could drive industrialization and technological innovation. Africa has the potential to leverage its vast mineral resources to become a global tech powerhouse, but mining policies need to be reoriented toward long-term innovation and sustainability.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Content Item 2: Commodity Outlook */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont2} alt="Commodity Outlook" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Rwanda’s Commodity Outlook: Gold, Lithium, and Coltan</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    This session highlighted Rwanda’s growing role in supplying critical minerals like gold, lithium, and coltan, leveraging the African Continental Free Trade Area to enhance domestic value retention.
=======
            {/* Content Item 2: The Dealmakers Den */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont2} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Commodity outlook - an African perspective</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Growing demand for energy transition metals presents an opportunity for Africa and initiatives like the African Continental Free Trade Area should enable African countries build supply chains and retain more value domestically. Gold demand remains strong as global economic uncertainty drives demand and platinum, cobalt, lithium and nickel share the podium as the green energy transition gathers momentum.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Content Item 3: Permitting Process */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont3} alt="Permitting Process" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Streamlining Rwanda’s Mining Permitting Process</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The session explored digital solutions for transparent and efficient mining permit processes, addressing challenges in manual systems to enhance Rwanda’s investment climate.
=======
            {/* Content Item 3: Water, forests, nature */}
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Cont3} alt="Water, forests, nature" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Transforming governments' permitting process - can the dream become reality?</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Transforming African governments' mining permit processes is crucial to ensuring transparency, efficiency and sustainability. Manual systems are often slow, opaque, and prone to corruption so there is an urgent need to develop online portals for mining permit applications, renewals, and status tracking.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
            <img src={HaHoImage} alt="Tuesday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-l-lg" />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#004F71] items-stretch p-5 h-[350px] rounded-r-lg">
            <h2 className="text-2xl font-bold mb-4">Networking Reception at Kigali Heights</h2>
            <p className="text-sm leading-relaxed mb-8">
              Attendees enjoyed a vibrant networking reception at Kigali Heights, featuring locally sourced Rwandan coffee and cocktails. This event fostered connections among industry leaders, investors, and policymakers, with more networking opportunities planned for the coming days.
=======
            <img src={HaHoImage} alt="Wednesday Highlights" className="h-[350px] w-[550px] shadow-xl" />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-[#64a63a] items-stretch p-5 h-[350px]">
            <h2 className="text-2xl font-bold mb-4">Happy Hour at the Mining Indaba Wine Farm</h2>
            <p className="text-sm leading-relaxed mb-8">
            An hour of networking drinks at the Mining Indaba Wine Farm. Today, attendees enjoyed a specially selected wine, offering a taste of the surrounding South African vineyards. A different wine is featured each day, creating a unique experience. Don't miss out—it’s happening again tomorrow!
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
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
<<<<<<< HEAD
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
=======
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Wednesday 05 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>09:00 - 10:00</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unlocking Africa's Mining Potential: The Benefits of Simplifying Global Mining Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                Join the CMSI partners alongside members of the CMSI Industry and Stakeholder advisory group as we discuss the following:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li>Putting the new standard in the African context: How will a consolidated standard impact the mining industry and its stakeholders in Africa specifically?</li>
                <li>Feedback and reception so far: Following the first public consultation, what key themes have emerged from the feedback? What has the reception been from different stakeholders?</li>
                <li>What's next: How will the Initiative move forward and what are the key milestones and measure of success for 2025 and beyond?</li>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </ul>
            </div>

            {/* Event 2 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
<<<<<<< HEAD
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>10:05 - 10:50</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Financing Rwanda’s Mining Revolution</h3>
              <p className="text-gray-600 leading-relaxed">
                A panel of regional and international investors explores how financing strategies, including public-private partnerships, are driving Rwanda’s mining sector growth and sustainability.
=======
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Wednesday 05 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>10:05 - 10:50</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">The New Frontier: Treasury's Strategic Role in Africa's Mining Revolution</h3>
              <p className="text-gray-600 leading-relaxed">
                As the mining companies navigate the changing mining sector landscape, treasury function has emerged as pivotal in driving efficient trade, settlement, and risk management. This panel will bring together leading international and regional mining companies to explore how treasury teams are enabling the Africa’ mining resurgence, facilitating collaborative financing, adapting to decarbonization challenges, leveraging technology to ensure sustainable, future-proof operations across treasury function.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </p>
            </div>

            {/* Event 3 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
<<<<<<< HEAD
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
=======
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Wednesday 05 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>13:00 - 14:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshop 7 - Automotive focus session</h3>
              <p className="text-gray-600 leading-relaxed">
                The convergence of the mining and automotive sectors, and how this will shape company and countries' industrial strategies
              </p>
              <h4 className="font-bold text-gray-700 mt-4 mb-2">Working Group Sessions</h4>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed ml-4">
                <li><span className="font-semibold">Public policy:</span> Can commodity dependent countries work with the automotive sector to re think industrial policy around critical minerals?</li>
                <li><span className="font-semibold">M&A strategies:</span> What strategies are auto OEMs employing to invest in the critical minerals mining space?</li>
                <li><span className="font-semibold">Auto value chains:</span> How are OEMs securing critical metals supply in line with the energy transition agenda?</li>
                <li><span className="font-semibold">Critical minerals and energy transition:</span> How are critical minerals mining companies considering supplying the battery industry toward the energy transition?</li>
                <li><span className="font-semibold">Converging industries and Industrial strategy:</span> How are states considering investing in the auto and metals sectors to drive national competitiveness and industrialisation?</li>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </ul>
            </div>

            {/* Event 4 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
<<<<<<< HEAD
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>14:00 - 15:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Showcase: Rwanda’s Gold Mining Potential</h3>
              <p className="text-gray-600 leading-relaxed">
                A deep dive into Rwanda’s gold mining sector, highlighting new exploration projects, investment opportunities, and sustainable practices driving growth.
=======
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Wednesday 05 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>14:00 - 15:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Country Showcase - Côte d'Ivoire</h3>
              <p className="text-gray-600 leading-relaxed">
                Examination of Côte d'Ivoire's mining activity, emphasizing its growing gold production and untapped potential in nickel, manganese, and bauxite. Focus on investment-friendly policies, improved geological mapping, and infrastructure advancements driving sector growth.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Delve into how the government fosters sustainable mining practices, local community development, and Côte d'Ivoire's ambitions to become a leading mining hub in West Africa.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </p>
            </div>

            {/* Event 5 */}
            <div className="bg-[#f0f0f0] p-5 mx-8 hover:shadow-2xl">
              <div className="flex items-center text-gray-600 mb-2">
<<<<<<< HEAD
                <span className="mr-2">📅</span>
                <span>Wednesday 05 December</span>
                <span className="ml-4 mr-2">⏰</span>
                <span>16:00 - 17:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Showcase: Lithium Exploration in Rwanda</h3>
              <p className="text-gray-600 leading-relaxed">
                An overview of Rwanda’s emerging lithium sector, focusing on geological mapping, investment incentives, and partnerships to support global demand for battery minerals.
=======
                {/* Calendar Icon Placeholder */}
                <span className="mr-2">📅</span>
                <span>Wednesday 05 February</span>
                {/* Clock Icon Placeholder */}
                <span className="ml-4 mr-2">⏰</span>
                <span>16:00 - 17:30</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Country Showcase - Republic of Mozambique</h3>
              <p className="text-gray-600 leading-relaxed">
                Overview of Mozambique's mining efforts, highlighting its rich reserves of coal, graphite, and heavy mineral sands, as well as its emerging role in the global lithium supply chain.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Focus on government initiatives to attract investment, improve infrastructure, and support sustainable mining practices. Opportunities for partnerships to enhance exploration, production, and downstream processing.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
<<<<<<< HEAD
            <button className="bg-[#004F71] text-white font-bold py-3 px-8 rounded hover:bg-[#ADD8E6] transition duration-300">VIEW AGENDA</button>
=======
            <button className="bg-[#64a63a] text-white font-bold py-3 px-8 rounded hover:bg-[#55952c] transition duration-300">VIEW AGENDA</button>
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
      
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      {/* Celebrating Our Incredible Sponsors and Exhibitors Section */}
      <div className="text-white py-12 mx-5 rounded-lg">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
<<<<<<< HEAD
          <div className="w-full md:w-1/2 mb-8 bg-[#004F71] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4 mt-16">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-sm leading-relaxed mb-8">
              Day two of Rwanda Mining Week 2025 featured outstanding sponsors and exhibitors, including Power X Refinery, Rwanda Mines, Petroleum and Gas Board, and global partners driving sustainable mining innovation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-[#004F71] font-bold p-2 text-xs rounded transition duration-300">VIEW EXHIBITORS</button>
              <button className="bg-[#ADD8E6] text-gray-800 font-bold p-2 text-xs rounded hover:bg-[#004F71] transition duration-300">VIEW SPONSORS</button>
=======
          <div className="w-full md:w-1/2 mb-8 bg-[#64a63a] rounded-l-lg p-5 h-[350px] py-18">
            <h2 className="text-2xl font-bold mb-4 mt-16">Celebrating Our Incredible Sponsors and Exhibitors</h2>
            <p className="text-sm leading-relaxed mb-8">
            Day two has been extraordinary! We’re thrilled to be showcasing some exceptional sponsors and exhibitors, including Liugong, Vivo Energy, AECI, and many more.
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
            <img src={CelebImage} alt="Tuesday Highlights" className="h-[350px] w-[550px] shadow-xl rounded-r-lg" />
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
    </div>
  );
};

<<<<<<< HEAD
export default TuesdayHighlights;
=======
export default TuesdayHighlights; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
