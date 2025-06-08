import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = () => {
  return (
    <div className="pt-40">
      {/* Hero Section */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#64a63a] to-[#d4ed31]">
      Event Highlights
      </div>

      {/* Introductory Text Section */}
      <div className="py-12 mx-10">
        <div className="container py-5 text-center border-2 rounded-md">
          <p className="text-md text-black leading-relaxed max-w-4xl mx-auto">
            This year's conference marked a significant shift by placing indigenous peoples and local communities at the forefront of our discussions, acknowledging their vital role in shaping the industry's future.<br/>
            For the first time, representatives from these groups actively participated in key sessions, offering their perspectives on sustainable and equitable mining practices. Indaba represents a commitment to inclusivity, sustainability, and strategic collaboration, aiming to position Africa's mining industry for a resilient and prosperous future.<br/>
            The conference further addressed the complex geopolitical landscape affecting Africa's mining sector. Discussions emphasized the continent's strategic decisions between engaging with the U.S., under President Trump's protectionist policies, or aligning with the China-led BRICS group. This choice is crucial for Africa's mineral-rich countries as they navigate global mineral demand driven by the energy transition.
          </p>
        </div>
      </div>

      {/* Thursday Highlights Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-4xl font-bold mb-4">Thursday Highlights</h2>
            <p className="text-lg leading-relaxed mb-8">
              As Mining Indaba comes to a close, we're looking back at an incredible week of connections, innovations, and industry-shaping insights. Don't miss the key takeaways from the final day!
            </p>
            <Link to="/about/highlights/thursday" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 inline-block">VIEW HIGHLIGHTS</Link>
          </div>
          {/* Right Column: Video */}
          <div className="w-full md:w-1/2 px-4 mb-8">
             {/* Image Placeholder */}
             <div className="bg-gray-300 h-60 w-full flex items-center justify-center text-gray-700 text-xl">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Wednesday Highlights Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
           {/* Left Column: Image */}
           <div className="w-full md:w-1/2 px-4 mb-8">
             {/* Image Placeholder */}
             <div className="bg-gray-300 h-60 w-full flex items-center justify-center text-gray-700 text-xl">
              Image Placeholder
            </div>
          </div>
          {/* Right Column: Text and Button */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-4xl font-bold mb-4">Wednesday Highlights</h2>
            <p className="text-lg leading-relaxed mb-8">
              Another impactful day at Mining Indaba with engaging sessions and valuable connections. Catch up on the top takeaways!
            </p>
            <Link to="/about/highlights/wednesday" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 inline-block">VIEW HIGHLIGHTS</Link>
          </div>
        </div>
      </div>

      {/* Tuesday Highlights Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-4xl font-bold mb-4">Tuesday Highlights</h2>
            <p className="text-lg leading-relaxed mb-8">
              An eventful day filled with thought-provoking discussions and industry insights! Explore the highlights and key moments that shaped the conversations.
            </p>
            <Link to="/about/highlights/tuesday" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 inline-block">VIEW HIGHLIGHTS</Link>
          </div>
           {/* Right Column: Image */}
           <div className="w-full md:w-1/2 px-4 mb-8">
             {/* Image Placeholder */}
             <div className="bg-gray-300 h-60 w-full flex items-center justify-center text-gray-700 text-xl">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Monday Highlights Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
           {/* Left Column: Image */}
           <div className="w-full md:w-1/2 px-4 mb-8">
             {/* Image Placeholder */}
             <div className="bg-gray-300 h-60 w-full flex items-center justify-center text-gray-700 text-xl">
              Image Placeholder
            </div>
          </div>
          {/* Right Column: Text and Button */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-4xl font-bold mb-4">Monday Highlights</h2>
            <p className="text-lg leading-relaxed mb-8">
              What an incredible start to Mining Indaba it was. Click below to watch the highlights video and read the summaries of some of the key sessions.
            </p>
            <Link to="/about/highlights/monday" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 inline-block">VIEW HIGHLIGHTS</Link>
          </div>
        </div>
      </div>

      {/* Sunday Highlights Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center -mx-4">
          {/* Left Column: Text and Button */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-4xl font-bold mb-4">Sunday Highlights</h2>
            <p className="text-lg leading-relaxed mb-8">
              The 2025 Ministerial Symposium provided a platform for fostering partnerships and driving conversations on local beneficiation and resource legislation to empower Africa's mineral endowment, artisanal mining, and safety.
            </p>
            <Link to="/about/highlights/sunday" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 inline-block">VIEW HIGHLIGHTS</Link>
          </div>
           {/* Right Column: Image */}
           <div className="w-full md:w-1/2 px-4 mb-8">
             {/* Image Placeholder */}
             <div className="bg-gray-300 h-60 w-full flex items-center justify-center text-gray-700 text-xl">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* 2025 Gallery Section */}
      <div className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">2025 Gallery</h2>
          {/* Gallery Placeholder */}
          <div className="bg-gray-300 h-96 flex items-center justify-center text-gray-700 text-xl mb-8">
            Image Gallery Placeholder
          </div>
          <button className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800 transition duration-300">VIEW GALLERY</button>
        </div>
      </div>

      {/* Programme, Speakers & Ministerial Presence Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Programme, Speakers & Ministerial Presence</h2>
          <div className="flex flex-wrap -mx-4">
            {/* 2025 Content Agenda */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2025 Content Agenda</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Discover what topics were discussed at Mining Indaba 2025.
                  </p>
                  <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">DISCOVER THE 2025 AGENDA</button>
                </div>
              </div>
            </div>

            {/* 2025 Speakers */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2025 Speakers</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Explore who spoke at Mining Indaba 2025.
                  </p>
                  <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">EXPLORE THE SPEAKER LIST</button>
                </div>
              </div>
            </div>

            {/* 2025 Ministers Attended */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">2025 Ministers Attended</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Explore the government presence at Mining Indaba 2025.
                  </p>
                  <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">GOVERNMENT PRESENCE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section: Investment Village, Critical Minerals, Community */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Investment Village */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Village</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Investment Village at Mining Indaba 2025 was the ultimate hub for investors and mining companies to connect, learn, and grow in the mining industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Critical Minerals */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Critical Minerals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2025, the event addressed a pivotal question not many dare to ask: "What minerals are critical for Africa, and why?" As a continent rich in resources, the minerals essential to building Africa's economic wealth and prosperity surpass the global definition.
                  </p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                 {/* Image Placeholder */}
                 <div className="bg-gray-300 h-48 w-full rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In 2025, Mining Indaba, for the first time, recognised and acknowledged one of the African mining sector's most important stakeholder groups - mining communities, civil society, and indigenous people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;