import React, { useState, useRef } from "react";
import FooterSection from "../components/sections/FooterSection";
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
const stats = [
  {
    value: "2,500+",
    label: "Attendees",
    icon: UsersIcon,
  },
  {
    value: "50+",
    label: "Countries represented",
    icon: GlobeAltIcon,
  },
  {
    value: "500+",
    label: "Mining company executives",
    icon: BuildingOffice2Icon,
  },
  {
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
  },
];

const ExhibitOrSponsorWhy = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 4;
  const itemWidth = 250; // Approximate width of each stat item including spacing
  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
  };
  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -itemWidth * itemsPerPage,
        behavior: "smooth",
      });
    }
  };
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
        {/* Right Column: Video Embed */}
        <div className="flex-1 aspect-video w-full md:w-1/2">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/placeholder" // Replace with Rwanda Mining Week video
            title="Rwanda Mining Week 2026 Promotional Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Blue line above stats */}
      <div className="bg-gradient-to-r from-[#004F71] to-[#ADD8E6] h-2 w-full"></div>
      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
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
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 min-w-[25%] snap-start stat-item"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
                  {stat.icon && <stat.icon className="text-white w-12 h-12" />}
                </div>
                <div className="text-3xl font-bold text-[#004F71]">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-10 p-2 rounded-full bg-[#004F71] shadow-md flex items-center justify-center cursor-pointer"
            onClick={handleNext}
            aria-label="Next statistics"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Blue line below stats */}
      <div className="bg-gradient-to-r from-[#004F71] to-[#ADD8E6] h-2 w-full"></div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          <img
            src="/exhibit-or-sponsor/WhoWeAre.png" // Replace with actual image path
            alt="Rwanda Mining Week Event Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Who We Are Text Block */}
        <div className="flex-1 bg-[#004F71] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Rwanda Mining Week is the premier platform for advancing Rwanda’s mining industry.
            We bring together regional and global leaders, investors, and innovators to foster
            partnerships, drive investment, and promote sustainable growth in Rwanda’s $1.75
            billion mineral export sector. More than an event, we are a catalyst for progress,
            connecting ideas and stakeholders to shape a thriving mining future.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column (on desktop): Our Mission Text Block */}
        <div className="flex-1 bg-[#004F71] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to unlock the potential of Rwanda’s mining sector by fostering
            collaboration, attracting investment, and promoting sustainable practices. We aim
            to create opportunities that benefit communities, drive economic growth, and ensure
            a lasting impact through meaningful connections and innovative solutions.
          </p>
        </div>

        {/* Right Column (on desktop): Image */}
        <div className="flex-1 w-full">
          <img
            src="/exhibit-or-sponsor/OurMission.png" // Replace with actual image path
            alt="Rwanda Mining Week Mission Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Button between sections */}
      <div className="container mx-auto px-4 py-8 text-center">
        <button className="bg-[#004F71] hover:bg-[#003a54] text-white font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
          EXHIBIT OR SPONSOR
        </button>
      </div>

      {/* Why Exhibit or Sponsor Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Exhibit or Sponsor?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-1image.png" // Replace with actual image path
                alt="Access top executives"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Access Top Executives & Policymakers
                </h3>
                <p className="text-gray-700 text-base">
                  Engage directly with senior leaders and decision-makers in Rwanda’s mining
                  industry. Build relationships with key stakeholders to unlock new opportunities.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-2image.png" // Replace with actual image path
                alt="Boost brand visibility"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Boost Brand Visibility in Rwanda
                </h3>
                <p className="text-gray-700 text-base">
                  Gain regional exposure through extensive media coverage and a targeted audience.
                  Enhance your brand’s credibility across Rwanda’s mining ecosystem.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-3image.png" // Replace with actual image path
                alt="Generate high-value leads"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Generate High-Value Leads & Drive Growth
                </h3>
                <p className="text-gray-700 text-base">
                  Connect with potential clients, partners, and investors. Turn interactions into
                  actionable opportunities for contracts and collaborations.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-4image.png" // Replace with actual image path
                alt="Position as industry leader"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Position Your Brand as an Industry Leader
                </h3>
                <p className="text-gray-700 text-base">
                  Showcase your commitment to Rwanda’s mining sector and stay ahead of trends.
                  Enhance your reputation while attracting influential partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Rwanda Mining Week Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          <img
            src="/exhibit-or-sponsor/sponsor-mining.png" // Replace with actual image path
            alt="Sponsor Rwanda Mining Week Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Sponsor Text Block */}
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
            ENQUIRE TODAY
          </button>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Latest Updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Update Card 1: Exhibitor Brochure */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/download-2026-exhibitor.png" // Replace with actual image path
                alt="Exhibitor Brochure Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Download the 2026 Exhibitor Brochure
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Discover opportunities to showcase your brand at Rwanda’s premier mining
                  investment event — Rwanda Mining Week 2026!
                </p>
                <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
                  DOWNLOAD THE BROCHURE
                </button>
              </div>
            </div>

            {/* Update Card 2: Post Event Report */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/post-event.png" // Replace with actual image path
                alt="Post Event Report Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Post Event Report
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  The official Rwanda Mining Week 2025 Post Event Report is now live! This report
                  offers an in-depth look at Rwanda’s most influential mining gathering,
                  highlighting key discussions and opportunities.
                </p>
                <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
                  DOWNLOAD THE REPORT
                </button>
              </div>
            </div>

            {/* Update Card 3: Companies Attended */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/mining-Indaba.png" // Replace with actual image path
                alt="Companies Attended Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Companies Attended
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Discover the complete list of companies that attended Rwanda Mining Week 2025.
                </p>
                <button className="bg-[#ADD8E6] hover:bg-[#88c4d0] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
                  DOWNLOAD NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection/>
    </>
  );
};
export default ExhibitOrSponsorWhy;