import React, { useState, useRef } from "react";
import TopBar from "../components/layout/TopBar";
import FooterSection from "../components/sections/FooterSection";

const ExhibitOrSponsorWhy = () => {
  return (
    <>
      <TopBar />
      <div className="pt-[112px]"></div>
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

      {/* Blue gradient bar at the top */}
      <div className="w-full py-6 bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#a7e0ff] text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Why Exhibit Or Sponsor in Rwanda mining Week
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column: Text Content and Button */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Be Part of Rwanda Mining Week: Exhibit or Sponsor!
          </h2>
          <p className="text-lg mb-4">
            Rwanda Mining Week is the premier platform for connecting with East
            Africa's rapidly growing mining sector. Join industry leaders,
            government officials, and innovators as we drive sustainable
            development, investment, and collaboration in Rwanda's vibrant
            mining industry.
          </p>
          <p className="text-lg mb-8">
            Exhibiting or sponsoring at Rwanda Mining Week puts your brand at
            the center of opportunity—showcasing your solutions, building
            strategic partnerships, and gaining visibility among key
            stakeholders. Don't miss your chance to shape the future of mining
            in Rwanda and beyond.
          </p>
          <a href="/register-interest">
            <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-4 py-2 rounded text-lg shadow-md uppercase tracking-wide">
              EXHIBIT OR SPONSOR
            </button>
          </a>
        </div>
        {/* Right Column: Video Embed */}
        <div className="flex-1 aspect-video w-full md:w-1/2">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/rEoO5DLQ0ZY"
            title="Rwanda Mining Week"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Blue line above partners */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] h-2 w-full"></div>

      {/* Partners Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/logos/anglo-american.png"
                alt="Anglo American"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/logos/bhp.png"
                alt="BHP"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/logos/barrick.png"
                alt="Barrick"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/logos/gold-fields.png"
                alt="Gold Fields"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/logos/impala-platinum.png"
                alt="Impala Platinum"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/logos/ivanhoe-mines.png"
                alt="Ivanhoe Mines"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blue line below partners */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] h-2 w-full"></div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          <img
            src="/rmw-4.png"
            alt="Mining Indaba Event Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Who We Are Text Block */}
        <div className="flex-1 bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Rwanda Mining Week is where East Africa's mining future takes shape.
            We bring together the region's most influential mining leaders,
            government officials, investors, and innovators to drive sustainable
            development and investment in Rwanda's rapidly growing mining
            sector. More than just a conference, we are the premier platform for
            building partnerships, showcasing innovation, and creating
            opportunities that will transform mining in Rwanda and across East
            Africa.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-12">
        {/* Left Column (on desktop): Our Mission Text Block */}
        <div className="flex-1 bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to unlock the full potential of African mining by
            inspiring investment, fostering partnerships and championing
            responsible growth. We believe in the power of collaboration to
            drive innovation, create opportunities and build a sustainable
            future. Through bold conversations and meaningful connections, we
            are shaping an industry that benefits communities, economies, and
            generations to come.
          </p>
        </div>

        {/* Right Column (on desktop): Image */}
        <div className="flex-1 w-full">
          <img
            src="/rmw-5.png"
            alt="Mining Indaba Mission Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Button between sections */}
      <div className="container mx-auto px-4 py-8 text-center">
        <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
          EXHIBIT OR SPONSOR
        </button>
      </div>

      {/* Why Exhibit or Sponsor Cards Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why exhibit or sponsor?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-1image.png"
                alt="Card image 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Access top executives & policymakers
                </h3>
                <p className="text-gray-700 text-base">
                  Meet face-to-face with senior leaders and decision-makers from
                  across the mining industry. Build relationships with key
                  stakeholders that can open doors to new opportunities.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-2image.png"
                alt="Card image 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Boost brand visibility on a global stage
                </h3>
                <p className="text-gray-700 text-base">
                  Gain worldwide exposure through extensive media coverage and a
                  highly engaged audience. Increase your brand recognition and
                  credibility across 122 countries.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-3image.png"
                alt="Card image 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Generate high-value leads & drive business growth
                </h3>
                <p className="text-gray-700 text-base">
                  Directly engage with potential clients, partners, and
                  investors. Turn conversations into actionable opportunities
                  that lead to new contracts and collaborations.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/exhibit-or-sponsor/card-4image.png"
                alt="Card image 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Position your brand as an industry leader
                </h3>
                <p className="text-gray-700 text-base">
                  Demonstrate your commitment to the mining sector and stay
                  ahead of industry trends. Enhance your company's reputation
                  while attracting influential partners and investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Mining Indaba Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="flex-1 w-full">
          <img
            src="/rmw-6.png"
            alt="Sponsor Mining Indaba Image"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column: Sponsor Text Block */}
        <div className="flex-1 bg-[#2563eb] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Sponsor Rwanda Mining Week
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Position your brand at the center of East Africa’s mining
            transformation at Rwanda Mining Week. Choose from a range of
            impactful sponsorship opportunities—from high-visibility branding
            and digital promotions to exclusive networking events and thought
            leadership sessions. Connect directly with government officials, and
            we’ll help you create a tailored sponsorship package that maximizes
            your impact and visibility at Rwanda Mining Week.
          </p>
          <a href="/register-interest">
            <button className="bg-white hover:bg-gray-200 text-[#2563eb] font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide">
              ENQUIRE TODAY
            </button>
          </a>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ExhibitOrSponsorWhy;
