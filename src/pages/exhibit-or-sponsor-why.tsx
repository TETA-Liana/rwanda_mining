import React, { useState, useRef } from "react";
<<<<<<< HEAD
import FooterSection from "../components/sections/FooterSection";
=======
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
import {
  UsersIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  NewspaperIcon,
  MegaphoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
<<<<<<< HEAD
const stats = [
  {
    value: "2,500+",
=======

// Define the statistics data
const stats = [
  {
    value: "10,500+",
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    label: "Attendees",
    icon: UsersIcon,
  },
  {
<<<<<<< HEAD
    value: "50+",
=======
    value: "120+",
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    label: "Countries represented",
    icon: GlobeAltIcon,
  },
  {
<<<<<<< HEAD
    value: "500+",
=======
    value: "1450+",
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    label: "Mining company executives",
    icon: BuildingOffice2Icon,
  },
  {
<<<<<<< HEAD
    value: "300+",
    label: "Investors",
    icon: UsersIcon, // Consider replacing with a more specific icon if available
  },
  {
    value: "150",
    label: "Speakers",
    icon: AcademicCapIcon,
  },
  {
    value: "30%",
    label: "Female speaker representation",
    icon: UsersIcon, // Consider replacing with a gender-specific icon if available
  },
  {
    value: "1,000+",
    label: "Pieces of press coverage",
    icon: NewspaperIcon,
  },
  {
    value: "Over 50 million",
    label: "PR total audience reach",
    icon: MegaphoneIcon,
=======
    value: "1300+",
    label: "Global Investors",
    icon: UsersIcon, // Using UsersIcon as HandshakeIcon is not available
  },
  {
    value: "625",
    label: "Speakers",
    icon: AcademicCapIcon, // Placeholder, choose appropriate icon
  },
  {
    value: "40%",
    label: "Female speaker representation",
    icon: UsersIcon, // Placeholder, choose appropriate icon
  },
  {
    value: "2500+",
    label: "Pieces of press coverage",
    icon: NewspaperIcon, // Placeholder, choose appropriate icon
  },
  {
    value: "Over 1 billion",
    label: "PR total audience reach",
    icon: MegaphoneIcon, // Placeholder, choose appropriate icon
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  },
];

const ExhibitOrSponsorWhy = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 4;
  const itemWidth = 250; // Approximate width of each stat item including spacing
<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
  };
<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
  };
<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
  return (
    <>
      {/* Inject styles to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
<<<<<<< HEAD
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12" style={{paddingTop:'100px'}}>
        {/* Left Column: Text Content and Button */}
        <div className="flex-1" >
          <h2 className="text-4xl font-bold mb-6" >
            Seize the Opportunity: Exhibit or Sponsor Rwanda Mining Week 2026!
          </h2>
          <p className="text-lg mb-4">
            Join over 2,500 regional and global leaders at Rwanda Mining Week 2026 — where the
            theme "Stronger Together: Progress Through Partnerships" highlights the power of
            collaboration to advance Rwanda’s $1.75 billion mining sector.
          </p>
          <p className="text-lg mb-8">
            Exhibiting or sponsoring positions your brand at the forefront of Rwanda’s mining
            industry, showcasing how your business drives progress through innovative solutions
            and partnerships. Don’t miss the chance to connect, expand, and shape the future of
            mining in Rwanda.
          </p>
          <button className="bg-[#004F71] hover:bg-[#003a54] text-white font-bold px-4 py-2 rounded text-lg shadow-md uppercase tracking-wide">
            EXHIBIT OR SPONSOR
          </button>
        </div>
=======

      {/* Blue gradient bar at the top */}
      <div className="w-full py-6 bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#a7e0ff] text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Download our 2026 Exhibitor Brochure
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column: Text Content and Button */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Seize the Opportunity: Exhibit or Sponsor Mining Indaba 2026!
          </h2>
          <p className="text-lg mb-4">
            Join over 10,500 global leaders at Mining Indaba 2026 — where the
            theme &quot;Stronger Together: Progress Through Partnerships&quot;
            highlights the power of unity and collaboration to tackle the mining
            sector&apos;s biggest challenges.
          </p>
          <p className="text-lg mb-8">
            Exhibiting or sponsoring puts your brand at the forefront of
            industry innovation, showing the world how your business drives
            progress through collective solutions. Don&apos;t miss the chance to
            build partnerships, expand your reach, and shape the future of
            mining.
          </p>
          <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-4 py-2 rounded text-lg shadow-md uppercase tracking-wide">
            EXHIBIT OR SPONSOR
          </button>
        </div>

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
        {/* Right Column: Video Embed */}
        <div className="flex-1 aspect-video w-full md:w-1/2">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
<<<<<<< HEAD
            src="https://www.youtube.com/embed/placeholder" // Replace with Rwanda Mining Week video
            title="Rwanda Mining Week 2026 Promotional Video"
=======
            src="https://www.youtube.com/embed/7yWlWyr4_dU"
            title="Mining Indaba 2026"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
<<<<<<< HEAD
      {/* Blue line above stats */}
      <div className="bg-gradient-to-r from-[#004F71] to-[#ADD8E6] h-2 w-full"></div>
=======

      {/* Green line above stats */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] h-2 w-full"></div>

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
<<<<<<< HEAD
            className="absolute left-0 z-10 p-2 rounded-full bg-[#004F71] shadow-md flex items-center justify-center cursor-pointer"
            onClick={handlePrev}
            aria-label="Previous statistics"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          {/* Icons and Stats Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center text-center overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-8 w-full hide-scrollbar"
=======
            className="absolute left-0 z-10 p-2 rounded-full bg-[#2563eb] shadow-md hidden lg:flex items-center justify-center cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          {/* Icons and Stats Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center text-center overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-8 w-full hide-scrollbar"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 min-w-[25%] snap-start stat-item"
              >
<<<<<<< HEAD
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
                  {stat.icon && <stat.icon className="text-white w-12 h-12" />}
                </div>
                <div className="text-3xl font-bold text-[#004F71]">
=======
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2563eb] to-[#3b82f6] flex items-center justify-center">
                  {/* Use the imported icon component */}
                  {stat.icon && <stat.icon className="text-white w-12 h-12" />}
                </div>
                <div className="text-3xl font-bold text-[#2563eb]">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
<<<<<<< HEAD
            className="absolute right-0 z-10 p-2 rounded-full bg-[#004F71] shadow-md flex items-center justify-center cursor-pointer"
            onClick={handleNext}
            aria-label="Next statistics"
=======
            className="absolute right-0 z-10 p-2 rounded-full bg-[#2563eb] shadow-md hidden lg:flex items-center justify-center cursor-pointer"
            onClick={handleNext}
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Blue line below stats */}
      <div className="bg-gradient-to-r from-[#004F71] to-[#ADD8E6] h-2 w-full"></div>
=======
      {/* Green line below stats */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] h-2 w-full"></div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
<<<<<<< HEAD
          <img
            src="/exhibit-or-sponsor/WhoWeAre.png" // Replace with actual image path
            alt="Rwanda Mining Week Event Image"
=======
          {/* Placeholder for Image - Please provide the image path */}
          <img
            src="/exhibit-or-sponsor/WhoWeAre.png"
            alt="Mining Indaba Event Image"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Who We Are Text Block */}
<<<<<<< HEAD
        <div className="flex-1 bg-[#004F71] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Rwanda Mining Week is the premier platform for advancing Rwanda’s mining industry.
            We bring together regional and global leaders, investors, and innovators to foster
            partnerships, drive investment, and promote sustainable growth in Rwanda’s $1.75
            billion mineral export sector. More than an event, we are a catalyst for progress,
            connecting ideas and stakeholders to shape a thriving mining future.
=======
        <div className="flex-1 bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          {/* Please replace this with the full descriptive text from the website */}
          <p className="text-lg leading-relaxed">
            Investing in African Mining Indaba is where the world comes together
            to shape the future of African mining. Since 1994, we have been a
            driving force for investment, innovation, and collaboration,
            bringing together industry leaders, investors, and changemakers.
            More than just an event, we are a catalyst for growth, connecting
            people and ideas that will transform the mining sector and create
            lasting impact.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column (on desktop): Our Mission Text Block */}
<<<<<<< HEAD
        <div className="flex-1 bg-[#004F71] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to unlock the potential of Rwanda’s mining sector by fostering
            collaboration, attracting investment, and promoting sustainable practices. We aim
            to create opportunities that benefit communities, drive economic growth, and ensure
            a lasting impact through meaningful connections and innovative solutions.
=======
        <div className="flex-1 bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          {/* Please replace this with the full descriptive text from the website */}
          <p className="text-lg leading-relaxed">
            Our mission is to unlock the full potential of African mining by
            inspiring investment, fostering partnerships and championing
            responsible growth. We believe in the power of collaboration to
            drive innovation, create opportunities and build a sustainable
            future. Through bold conversations and meaningful connections, we
            are shaping an industry that benefits communities, economies, and
            generations to come.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </p>
        </div>

        {/* Right Column (on desktop): Image */}
        <div className="flex-1 w-full">
<<<<<<< HEAD
          <img
            src="/exhibit-or-sponsor/OurMission.png" // Replace with actual image path
            alt="Rwanda Mining Week Mission Image"
=======
          {/* Placeholder for Image - Please provide the image path */}
          <img
            src="/exhibit-or-sponsor/OurMission.png"
            alt="Mining Indaba Mission Image"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Button between sections */}
      <div className="container mx-auto px-4 py-8 text-center">
<<<<<<< HEAD
        <button className="bg-[#004F71] hover:bg-[#003a54] text-white font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
=======
        <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          EXHIBIT OR SPONSOR
        </button>
      </div>

      {/* Why Exhibit or Sponsor Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
<<<<<<< HEAD
            Why Exhibit or Sponsor?
=======
            Why exhibit or sponsor?
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<<<<<<< HEAD
              <img
                src="/exhibit-or-sponsor/card-1image.png" // Replace with actual image path
                alt="Access top executives"
=======
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/card-1image.png"
                alt="Card image 1"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
<<<<<<< HEAD
                  Access Top Executives & Policymakers
                </h3>
                <p className="text-gray-700 text-base">
                  Engage directly with senior leaders and decision-makers in Rwanda’s mining
                  industry. Build relationships with key stakeholders to unlock new opportunities.
=======
                  Access top executives & policymakers
                </h3>
                <p className="text-gray-700 text-base">
                  Meet face-to-face with senior leaders and decision-makers from
                  across the mining industry. Build relationships with key
                  stakeholders that can open doors to new opportunities.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<<<<<<< HEAD
              <img
                src="/exhibit-or-sponsor/card-2image.png" // Replace with actual image path
                alt="Boost brand visibility"
=======
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/card-2image.png"
                alt="Card image 2"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
<<<<<<< HEAD
                  Boost Brand Visibility in Rwanda
                </h3>
                <p className="text-gray-700 text-base">
                  Gain regional exposure through extensive media coverage and a targeted audience.
                  Enhance your brand’s credibility across Rwanda’s mining ecosystem.
=======
                  Boost brand visibility on a global stage
                </h3>
                <p className="text-gray-700 text-base">
                  Gain worldwide exposure through extensive media coverage and a
                  highly engaged audience. Increase your brand recognition and
                  credibility across 122 countries.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<<<<<<< HEAD
              <img
                src="/exhibit-or-sponsor/card-3image.png" // Replace with actual image path
                alt="Generate high-value leads"
=======
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/card-3image.png"
                alt="Card image 3"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
<<<<<<< HEAD
                  Generate High-Value Leads & Drive Growth
                </h3>
                <p className="text-gray-700 text-base">
                  Connect with potential clients, partners, and investors. Turn interactions into
                  actionable opportunities for contracts and collaborations.
=======
                  Generate high-value leads & drive business growth
                </h3>
                <p className="text-gray-700 text-base">
                  Directly engage with potential clients, partners, and
                  investors. Turn conversations into actionable opportunities
                  that lead to new contracts and collaborations.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<<<<<<< HEAD
              <img
                src="/exhibit-or-sponsor/card-4image.png" // Replace with actual image path
                alt="Position as industry leader"
=======
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/card-4image.png"
                alt="Card image 4"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
<<<<<<< HEAD
                  Position Your Brand as an Industry Leader
                </h3>
                <p className="text-gray-700 text-base">
                  Showcase your commitment to Rwanda’s mining sector and stay ahead of trends.
                  Enhance your reputation while attracting influential partners.
=======
                  Position your brand as an industry leader
                </h3>
                <p className="text-gray-700 text-base">
                  Demonstrate your commitment to the mining sector and stay
                  ahead of industry trends. Enhance your company's reputation
                  while attracting influential partners and investors.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Sponsor Rwanda Mining Week Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          <img
            src="/exhibit-or-sponsor/sponsor-mining.png" // Replace with actual image path
            alt="Sponsor Rwanda Mining Week Image"
=======
      {/* Sponsor Mining Indaba Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          {/* Placeholder for Image - Please provide the image path */}
          <img
            src="/exhibit-or-sponsor/sponsor-mining.png"
            alt="Sponsor Mining Indaba Image"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Sponsor Text Block */}
<<<<<<< HEAD
        <div className="flex-1 bg-[#004F71] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Sponsor Rwanda Mining Week 2026
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Position your brand at the heart of Rwanda’s mining conversation at Rwanda Mining
            Week 2026. With sponsorship opportunities ranging from high-visibility branding to
            exclusive networking events, you can connect with key stakeholders. Whether you aim
            to dominate exhibition spaces, host networking receptions, or create bespoke
            activations, our team will tailor a sponsorship package to elevate your presence and
            achieve your objectives.
          </p>
          <button className="bg-white hover:bg-gray-200 text-[#004F71] font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
=======
        <div className="flex-1 bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Sponsor Mining Indaba 2026
          </h2>
          {/* Please replace this with the full descriptive text from the screenshot/website */}
          <p className="text-lg leading-relaxed mb-6">
            Position your brand at the heart of the global mining conversation
            at Mining Indaba 2026. With an array of impactful sponsorship
            opportunities – from high-visibility branding such as Badge &
            Lanyard sponsorship to exclusive networking experiences like hosting
            the prestigious Welcome Party – you can connect with the people who
            matter most. Whether you're looking to dominate key spaces in the
            Exhibition Hall, Skybridge, or Lounges, or wish to create
            unforgettable moments through bespoke activations, content
            partnerships, or headline networking events, we'll help you make a
            lasting impression. Share your company's objectives with our expert
            sales team, and we'll tailor the perfect sponsorship opportunity to
            elevate your presence at Mining Indaba 2026.
          </p>
          <button className="bg-white hover:bg-gray-200 text-[#2563eb] font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            ENQUIRE TODAY
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Latest Updates Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Latest Updates
=======
      {/* Latest updates Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Latest updates
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Update Card 1: Exhibitor Brochure */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<<<<<<< HEAD
              <img
                src="/exhibit-or-sponsor/download-2026-exhibitor.png" // Replace with actual image path
=======
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/download-2026-exhibitor.png"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                alt="Exhibitor Brochure Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Download the 2026 Exhibitor Brochure
                </h3>
                <p className="text-gray-700 text-base mb-4">
<<<<<<< HEAD
                  Discover opportunities to showcase your brand at Rwanda’s premier mining
                  investment event — Rwanda Mining Week 2026!
                </p>
                <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
=======
                  Discover the opportunities to showcase your brand at Africa's
                  largest mining investment event – Mining Indaba 2026!
                </p>
                <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  DOWNLOAD THE BROCHURE
                </button>
              </div>
            </div>

            {/* Update Card 2: Post Event Report */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
<<<<<<< HEAD
              <img
                src="/exhibit-or-sponsor/post-event.png" // Replace with actual image path
=======
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/post-event.png"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                alt="Post Event Report Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Post Event Report
                </h3>
                <p className="text-gray-700 text-base mb-4">
<<<<<<< HEAD
                  The official Rwanda Mining Week 2025 Post Event Report is now live! This report
                  offers an in-depth look at Rwanda’s most influential mining gathering,
                  highlighting key discussions and opportunities.
                </p>
                <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
=======
                  The official Mining Indaba 2025 Post Event Report is now live!
                  This exclusive report offers an in-depth look at the
                  industry's most influential gathering, highlighting the key
                  people, discussions, and opportunities that defined Mining
                  Indaba 2025.
                </p>
                <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  DOWNLOAD THE REPORT
                </button>
              </div>
            </div>

<<<<<<< HEAD
            {/* Update Card 3: Companies Attended */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/mining-Indaba.png" // Replace with actual image path
=======
            {/* Update Card 3: MI25 Companies Attended */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src="/exhibit-or-sponsor/mining-Indaba.png"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                alt="Companies Attended Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
<<<<<<< HEAD
                  Companies Attended
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Discover the complete list of companies that attended Rwanda Mining Week 2025.
                </p>
                <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
=======
                  MI25 Companies Attended
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Discover the complete list of companies that attended Mining
                  Indaba 2025.
                </p>
                <button className="bg-[#ffda3a] hover:bg-[#e6c733] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  DOWNLOAD NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <FooterSection/>
    </>
  );
};
export default ExhibitOrSponsorWhy;
=======
    </>
  );
};

export default ExhibitOrSponsorWhy;
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
