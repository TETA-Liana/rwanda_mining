import React from 'react';
import { Link } from 'react-router-dom';

const MiningServiceProviders = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-60 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Mining Indaba for Mining Service Providers</h1>
      </div>

      {/* Connect with Mining Companies Section */}
      <section className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Connect with Mining Companies at Mining Indaba 2026: Opportunities for Mining Service Providers</h2>
        <p className="text-lg mb-8">
          Mining Indaba is the ultimate networking, deal-making, and discussion forum for the industry's current trends and challenges. This event offers unparalleled opportunities for
          mining service providers to form connections, discuss project progression and explore financing opportunities. Additional value lies in
          gaining valuable insights into market trends, new technologies, and regulatory changes affecting the mining sector.
          <br /><br />
          Interested in attending Mining Indaba 2026?
        </p>
        <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
          REGISTER INTEREST
        </button>
      </section>

      {/* Why attend Mining Indaba Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why attend Mining Indaba?</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Showcase projects block */}
          <div className="flex-1 text-center">
            <img src="/images/why-attend-1.png" alt="Showcase projects" className="w-full h-auto mb-6 rounded-lg shadow-lg" />
            <h3 className="text-2xl font-semibold mb-4">Showcase projects to a global audience</h3>
            <p className="text-gray-700 mb-6">
              Dedicated space with booths for exploration companies with African assets to exhibit their projects. Taking part in the Explorers Showcase enables exploration
              companies to raise their profile, increase visibility, and showcase their projects to a
              global audience, gaining access to Mining Indaba's elite network of dealmakers to
              raise finance and find the right partner to advance their projects.
            </p>
            <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
              LEARN MORE
            </button>
          </div>

          {/* Meet Investors and Financiers block */}
          <div className="flex-1 text-center">
            <img src="/images/why-attend-2.png" alt="Meet Investors" className="w-full h-auto mb-6 rounded-lg shadow-lg" />
            <h3 className="text-2xl font-semibold mb-4">Meet Investors and Financiers</h3>
            <p className="text-gray-700 mb-6">
              Mining Indaba is attended by a diverse array of investors, including private equity
              firms, sovereign wealth fund, institutional investors, automotives and high-net-worth
              individuals that are mandated to invest funds directly into mining companies.
              Through the Business Matchmaking platform, attendees can set-up meetings with
              investors and financiers to attract investment capital and explore financing options
              to support their growth initiatives.
            </p>
            <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">2025 Attendee Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/gL_3wQYl_5w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"Mining Indaba is a very different platform. It's Africa for Africa. We have everyone under one roof."</p>
            <h4 className="font-semibold text-lg">Raadiyah Emam</h4>
            <p className="text-gray-600">Head of Investor Relations</p>
            <p className="text-gray-600">Anith Resources Ltd</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/E-0tY_Rk-0s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"It was just incredible to see the depth of projects and everything going on."</p>
            <h4 className="font-semibold text-lg">Adrian O'Brien</h4>
            <p className="text-gray-600">VP - Business Development & Communications</p>
            <p className="text-gray-600">Midnight Sun Mining</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/zL_1M5cK-m0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"There's a good diversity of people here. It's not just people from one sector - it is quite a broader spectrum. I have met with investors, potential new suppliers, some product suppliers who have been very interesting and certainly some new leads."</p>
            <h4 className="font-semibold text-lg">James Philip</h4>
            <p className="text-gray-600">COO</p>
            <p className="text-gray-600">Thor Explorations</p>
          </div>
        </div>
      </section>

      {/* Top reasons why Juniors Attend Mining Indaba Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">Top reasons why Mining Service Providers Attend Mining Indaba</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="flex-shrink-0">
            <img src="/images/pie-chart.png" alt="Reasons Pie Chart" className="w-80 h-auto" />
          </div>
          <div className="text-left max-w-md">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-black"></span> Network & Make New Contacts (32%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#64a63a]"></span> Raise Capital (19%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-[#d4ed31]"></span> Attend Content Sessions (18%)</li>
              <li className="flex items-center gap-3"><span className="w-5 h-5 bg-gray-500"></span> Source Investment Opportunities & Acquisitions (31%)</li>
            </ul>
          </div>
        </div>
        <p className="text-xl mt-12 mb-8">
          <span className="font-bold">Connect with capital. Discover opportunity. Drive growth.</span>
          <br />
          Mining Indaba is where mining service providers come to get deals moving. Whether you're looking to <span className="font-bold">raise capital</span>, <span className="font-bold">attract new investors</span>, or explore
          <span className="font-bold">strategic partnerships and acquisitions</span>, the opportunities are real and within reach. With direct access to financiers, industry leaders, and
        </p>
      </section>

      {/* Discover more Mining Indaba Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Discover more Mining Indaba</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mining companies attending */}
          <div className="bg-[#64a63a] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mining companies attending</h3>
              <p className="mb-6">Discover the list of mining companies that registered to attend Mining Indaba 2025.</p>
            </div>
            <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              BROWSE THE LIST
            </button>
          </div>

          {/* Explorers Showcase */}
          <div className="bg-[#64a63a] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Explorers Showcase</h3>
              <p className="mb-6">Explorers Showcase is a dedicated space for private/unlisted or listed exploration companies with African assets to showcase their projects at Mining Indaba.</p>
            </div>
            <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              LEARN MORE
            </button>
          </div>

          {/* Meet the Advisory Board */}
          <div className="bg-[#64a63a] text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Meet the Advisory Board</h3>
              <p className="mb-6">Alongside the theme, we are honoured to introduce the distinguished members of our 2026 Advisory Board and Committees.</p>
            </div>
            <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-6 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors self-start">
              MEET THE BOARD
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiningServiceProviders; 