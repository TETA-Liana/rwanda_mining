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
<<<<<<< HEAD
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
=======
      <div className="relative h-60 bg-gradient-to-r from-[#64a63a] to-[#d4ed31] flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold mt-16">Mining Indaba for Junior Miners</h1>
      </div>

      {/* Connect with Investors Section */}
      <section  className="container text-center border-2 rounded-md mx-auto p-5 my-12 mx-10 max-w-6xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Connect with Investors at Mining Indaba 2026: Opportunities for Junior Mining Companies</h2>
        <p className="text-lg mb-8">
          Mining Indaba is the ultimate networking, deal-making, and discussion forum for the industry's current trends and challenges. This event offers unparalleled opportunities for
          junior mining companies and exploration mining companies to form connections, discuss project progression and explore financing opportunities. Additional value lies in
          gaining valuable insights into market trends, new technologies, and regulatory changes affecting the mining sector.
          <br /><br />
          Interested in attending Mining Indaba 2026?
        </p>
        <button className="bg-[#d4ed31] hover:bg-[#cbe02b] text-black font-bold px-8 py-3 rounded text-lg shadow-md uppercase tracking-wide transition-colors">
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          REGISTER INTEREST
        </button>
      </section>

<<<<<<< HEAD
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
=======
      {/* Why attend Mining Indaba Section */}
      <div className='mx-12'>
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Why attend Mining Indaba?</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Content Item 1: Lithium and graphite */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why1} alt="Lithium and graphite" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Business Development and Partnerships</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Building relationships and forging partnerships is essential for growth in the mining sector. Service providers and equipment companies can engage in networking, identify potential clients and projects, and explore collaborations with mining companies, investors, and other industry stakeholders.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>

            {/* Content Item 2: Showcase Products and Services */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
<<<<<<< HEAD
                <img src={Why2} alt="Showcase Products and Services" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Showcase Products and Services</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Display your innovative products, technologies, and expertise to a targeted audience. From advanced mining equipment to software solutions, Rwanda Mining Week offers a platform to highlight your value and differentiate from competitors.
=======
                <img src={Why2} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Showcase Products and Services</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Showcase your products, technologies, and expertise to a highly targeted audience. From the latest innovations in mining equipment to software solutions and professional services, Mining Indaba provides a prime opportunity to demonstrate your value propositions and stand out from competitors.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>
<<<<<<< HEAD

            {/* Content Item 3: Access to Market Insights */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why3} alt="Access to Market Insights" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Access to Market Insights</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The conference program provides in-depth insights into trends, challenges, and opportunities in Rwanda’s mining industry. Service providers gain valuable market intelligence and regulatory updates to inform strategic decisions.
=======
            {/* Content Item 3: Access to Market Insights */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why3} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Access to Market Insights</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  The comprehensive conference program covers key trends, challenges, and opportunities shaping the African mining industry. Attending the event enables service providers and professional service companies to acquire valuable market insights, industry intelligence, and regulatory updates crucial for informing business strategies and decision-making processes.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>
<<<<<<< HEAD

            {/* Content Item 4: Networking Opportunities */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why4} alt="Networking Opportunities" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Networking Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Rwanda Mining Week unites mining companies, investors, government officials, and industry experts. Service providers can connect with decision-makers and potential clients to build lasting partnerships in Rwanda’s mining ecosystem.
=======
            {/* Content Item 4: Networking Opportunities */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-[#f8faf7] rounded-lg shadow-md h-full flex flex-col">
                <img src={Why4} alt="The Dealmakers Den" className="h-78 w-full object-cover rounded-t-lg" />
                <div className="px-14 py-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-6">Networking Opportunities</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                  Mining Indaba serves as a platform that unites key stakeholders, investors, mining companies, government representatives, and industry experts from around the world. For service providers and equipment companies, this presents invaluable networking opportunities to connect with potential clients, partners, and decision-makers in the African mining sector.
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      {/* Testimonials Section */}
      <section className="container mx-3 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">2025 Attendee Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
<<<<<<< HEAD
                src="https://www.youtube.com/embed/da4IBP0Heqw"
=======
                src="https://www.youtube.com/watch?v=da4IBP0Heqw"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
<<<<<<< HEAD
            <p className="italic text-gray-700 mb-4">"Rwanda Mining Week brings together the entire mining ecosystem. The organization and positive energy make it a must-attend event for service providers."</p>
=======
            <p className="italic text-gray-700 mb-4">"Anybody who is anybody in Mining in Africa is here. The show this year is really good, it's been really well organised, that created a very positive vibe, it's worked really well, compliments to you guys."</p>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            <h4 className="font-semibold text-lg">AnneMarie Viljoen</h4>
            <p className="text-gray-600">Marketing and Brand Manager</p>
            <p className="text-gray-600">Komatsu</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
<<<<<<< HEAD
                src="https://www.youtube.com/embed/0wtoG5QfXdU"
=======
                src="https://www.youtube.com/watch?v=0wtoG5QfXdU"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
<<<<<<< HEAD
            <p className="italic text-gray-700 mb-4">"This event is a unique opportunity to showcase our solutions and connect with current and future clients in Rwanda’s dynamic mining sector."</p>
=======
            <p className="italic text-gray-700 mb-4">"It's not every day you get you get the whole of the mining industry in one spot. It's a good opportunity to showcase what we do and network with our clients and possible future clients. Having a presence is important because these are our cilents and if they are familiar with our brand then they reach out when they have projects to get off the ground."</p>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            <h4 className="font-semibold text-lg">Japie Du Plessis</h4>
            <p className="text-gray-600">Managing Director</p>
            <p className="text-gray-600">Murray & Roberts</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="w-full h-48 mb-4">
              <iframe
                className="w-full h-full rounded-lg"
<<<<<<< HEAD
                src="https://www.youtube.com/embed/mcsH1ihdrxw"
=======
                src="https://www.youtube.com/watch?v=mcsH1ihdrxw"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
<<<<<<< HEAD
            <p className="italic text-gray-700 mb-4">"Rwanda Mining Week is the ideal place to network and gain insights into the critical minerals space in the region."</p>
            <h4 className="font-semibold text-lg">Anastasia Kuskova</h4>
            <p className="text-gray-600">CEO and Co-Founder</p>
            <p className="text-gray-600">Sirius</p>
=======
            <p className="italic text-gray-700 mb-4">"Super insightful event and everyone's here – also this is the best place to meet people, build a network in the critical minerals space, in the region."</p>
            <h4 className="font-semibold text-lg">Anastasia Kuskova</h4>
            <p className="text-gray-600">Sirius</p>
            <p className="text-gray-600">CEO and Co-Founder</p>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      
            {/* Join Us Section */}
            <div className="py-16 text-white text-center" style={{ background: 'linear-gradient(to bottom, #5cb030, #d4ed31)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us at Mining Indaba 2026</h2>
          <p className="text-sm leading-relaxed mb-8">
            The premier meeting place for African and global mining leaders. It is all set to be an unmissable experience, shaping the future of African mining.<br/> Register your interest today and stay ahead in this dynamic industry!
          </p>
          <button className="bg-[#55952c] text-white text-sm font-bold py-2 px-4 rounded transition duration-300">REGISTER INTEREST</button>
        </div>
      </div>

      
      {/* Featured Articles Section */}
      <FeaturedArticlesSection />
      <FooterSection/>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
    </div>
  );
};

<<<<<<< HEAD
export default MiningServiceProviders;
=======
export default MiningServiceProviders; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
