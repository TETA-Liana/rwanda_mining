import React from 'react';

const PremierMeetingPlaceSection = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column: Video */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                src="https://www.youtube.com/embed/oEUGmvLwqQc"
                className="absolute top-0 left-0 w-full h-full shadow-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Right Column: Text and Buttons */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-4xl font-bold mb-6 text-[#000000]">The premier meeting place for African and global mining leaders.</h2>
            <p className="text-gray-700 mb-6 text-[#000000]">
              Since its inception in 1994, the Investing in African Mining Indaba conference has become a pivotal event for mining professionals, investors, and industry leaders looking to capitalise on the vast opportunities in Africa's mining sector. With a focus on fostering long-term economic growth and sustainability, the event serves as a premier meeting place for networking, deal-making, and discussions on topics such as technological advancements in mining, sustainable mining practices, and investment opportunities in African mining projects. As the event continues to grow in size and influence, it remains a crucial platform for shaping the future of mining on the African continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#64a63a] hover:bg-[#5cb030] text-white font-bold px-6 py-3 rounded text-sm shadow-md uppercase tracking-wide">
                WHY ATTEND MI26
              </button>
              <button className="bg-[#d4ed31] hover:bg-[#c7d42d] text-black font-bold px-6 py-3 rounded text-sm shadow-md uppercase tracking-wide">
                REGISTER INTEREST
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-[#64a63a]"></div>
    </>
  );
};

export default PremierMeetingPlaceSection; 