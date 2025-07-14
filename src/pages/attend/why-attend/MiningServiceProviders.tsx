import React from 'react';
import { Link } from 'react-router-dom';
import Why1 from "../../../../public/why-attend-min-1.jpg";
import Why2 from "../../../../public/why-attend-min-2.jpg";
import Why3 from "../../../../public/why-attend-min-3.jpg";
import Why4 from "../../../../public/why-attend-min-4.jpg";
import FeaturedArticlesSection from '../../../components/sections/FeaturedArticlesSection';
import FooterSection from '../../../components/sections/FooterSection';

const MiningServiceProviders = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-60 bg-gradient-to-r from-[#004F71] to-[#ADD8E6] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold mt-16">Rwanda Mining Week for Service Providers</h1>
      </div>

      {/* Connect with Investors Section */}
      <section className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Connect with Mining Leaders at Rwanda Mining Week 2026: Opportunities for Service Providers</h2>
        <p className="text-lg mb-8">
          Rwanda Mining Week is the premier platform for networking, deal-making, and engaging with the latest trends and challenges in Rwanda’s $1.75 billion mineral export industry. This event offers unparalleled opportunities for service providers and equipment companies to connect with mining companies, discuss project opportunities, and explore partnerships. Gain critical insights into market trends, innovative technologies, and regulatory updates shaping Rwanda’s mining sector.
          <br /><br />
          Interested in attending Rwanda Mining Week 2026?
        </p>
        <button className="bg-[#ADD8E6] hover:bg-[#004F71] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
          REGISTER INTEREST
        </button>
      </section>

      {/* Why Attend Rwanda Mining Week Section */}
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Why Attend Rwanda Mining Week?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Business Development and Partnerships */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why1} alt="Business Development and Partnerships" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Business Development and Partnerships</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Forging partnerships is key to growth in Rwanda’s mining sector. Service providers can network with mining companies, investors, and stakeholders to identify new clients, projects, and collaboration opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: Showcase Products and Services */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why2} alt="Showcase Products and Services" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Showcase Products and Services</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Display your innovative products, technologies, and expertise to a targeted audience. From advanced mining equipment to software solutions, Rwanda Mining Week offers a platform to highlight your value and differentiate from competitors.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 3: Access to Market Insights */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why3} alt="Access to Market Insights" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Access to Market Insights</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The conference program provides in-depth insights into trends, challenges, and opportunities in Rwanda’s mining industry. Service providers gain valuable market intelligence and regulatory updates to inform strategic decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 4: Networking Opportunities */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why4} alt="Networking Opportunities" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Networking Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Rwanda Mining Week unites mining companies, investors, government officials, and industry experts. Service providers can connect with decision-makers and potential clients to build lasting partnerships in Rwanda’s mining ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="container mx-3 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">2025 Attendee Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/da4IBP0Heqw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"Rwanda Mining Week brings together the entire mining ecosystem. The organization and positive energy make it a must-attend event for service providers."</p>
            <h4 className="font-semibold text-lg">AnneMarie Viljoen</h4>
            <p className="text-gray-600">Marketing and Brand Manager</p>
            <p className="text-gray-600">Komatsu</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/0wtoG5QfXdU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"This event is a unique opportunity to showcase our solutions and connect with current and future clients in Rwanda’s dynamic mining sector."</p>
            <h4 className="font-semibold text-lg">Japie Du Plessis</h4>
            <p className="text-gray-600">Managing Director</p>
            <p className="text-gray-600">Murray & Roberts</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/mcsH1ihdrxw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="italic text-gray-700 mb-4">"Rwanda Mining Week is the ideal place to network and gain insights into the critical minerals space in the region."</p>
            <h4 className="font-semibold text-lg">Anastasia Kuskova</h4>
            <p className="text-gray-600">CEO and Co-Founder</p>
            <p className="text-gray-600">Sirius</p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #004F71, #ADD8E6)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Rwanda Mining Week 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The leading platform for advancing Rwanda’s sustainable mining sector. Join global and local leaders to shape the future of mining in Rwanda. Register your interest today to stay at the forefront of this dynamic industry!
          </p>
          <button className="bg-[#004F71] text-white text-sm font-bold py-2 px-4 rounded hover:bg-[#ADD8E6] transition duration-300">REGISTER INTEREST</button>
        </div>
      </div>

      {/* Featured Articles Section */}
      <FeaturedArticlesSection />
      <FooterSection />
    </div>
  );
};

export default MiningServiceProviders;