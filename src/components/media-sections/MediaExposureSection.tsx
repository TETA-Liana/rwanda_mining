import React from 'react';
<<<<<<< HEAD
import Image from "../../../public/media-expo.png";
=======
import Image from "../../../public/media-expo.png"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd

const MediaExposureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-5 px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-4">
        {/* Left Column - Text */}
        <div className="lg:w-1/2">
<<<<<<< HEAD
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

=======
          <h2 className="text-3xl font-bold text-[#0f172a]">Media Exposure</h2>
          <p className="mt-4 text-[#0f172a]">
            Mining Indaba attracts significant media attention globally, positioning it as a key event for industry news and insights. The event provides a platform for companies, governments, and stakeholders to share developments, discuss challenges, and highlight opportunities within the African mining sector. This high level of exposure ensures that discussions and agreements made at Mining Indaba resonate with a wide audience, influencing perceptions and driving investment.
          </p>
          <div className='mt-10'>
            <button className='bg-[#d4ed31] rounded-sm'>CONTACT US</button>
          </div>
        </div>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
        {/* Right Column - Image */}
        <div className="lg:w-1/2">
          <img
            src={Image}
<<<<<<< HEAD
            alt="Rwanda Mining Week"
=======
            alt="Media Exposure"
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
            className="rounded-lg shadow-xl w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default MediaExposureSection;
=======
export default MediaExposureSection; 
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
