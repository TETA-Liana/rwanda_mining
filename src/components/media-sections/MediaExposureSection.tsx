import React from 'react';
import Image from "../../../public/media-expo.png";

const MediaExposureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-5 px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-4">
        {/* Left Column - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#0f172a]">Media Exposure</h2>
          <p className="mt-4 text-[#0f172a]">
            Mining Indaba attracts significant media attention globally, positioning it as a key event for industry news and insights. The event provides a platform for companies, governments, and stakeholders to share developments, discuss challenges, and highlight opportunities within the African mining sector. This high level of exposure ensures that discussions and agreements made at Mining Indaba resonate with a wide audience, influencing perceptions and driving investment.
          </p>
          <div className='mt-10'>
            <button className='bg-[#d4ed31] rounded-sm'>CONTACT US</button>
          </div>
        </div>
        {/* Right Column - Image */}
        <div className="lg:w-1/2">
          <img
            src={Image}
            alt="Media Exposure"
            className="rounded-lg shadow-xl w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaExposureSection;
