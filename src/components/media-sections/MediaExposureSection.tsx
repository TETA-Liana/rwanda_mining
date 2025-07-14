import React from 'react';
import Image from "../../../public/media-expo.png";

const MediaExposureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-5 px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-4">
        {/* Left Column - Text */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-[#004F76]">Rwanda Mining Week</h2>
          <p className="mt-4 text-[#004F76]">
            Rwanda Mining Week serves as a major platform to showcase the country’s mining sector, attract investments, and encourage partnerships in sustainable resource development. It brings together government officials, investors, researchers, and miners to share innovations, policy updates, and success stories that are shaping Rwanda’s mineral future. The event boosts media visibility for local and international stakeholders contributing to the region’s mining progress.
          </p>
          <div className="mt-10">
            <button className="bg-[#ADD8E6] hover:bg-[#9ccede] text-black font-semibold px-6 py-2 rounded-sm transition">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2">
          <img
            src={Image}
            alt="Rwanda Mining Week"
            className="rounded-lg shadow-xl w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaExposureSection;
