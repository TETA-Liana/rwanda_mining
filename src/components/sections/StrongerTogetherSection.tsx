import { BookmarkIcon, ShareIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const StrongerTogetherSection = () => {
  const videoId = 'vmzKqa5ZmXs'; // Do not change — video stays the same
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <section className="py-16 bg-white">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Video */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full shadow-xl"
              src={embedUrl}
              title="Rwanda Mining Week 2024"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-4xl font-bold mb-6 text-[#000000]">
            &ldquo;Rwanda Mining Week 2024: Mining for Community Development&rdquo;
          </h2>
          <p className="mb-4 text-[#000000]">
            From <span className="font-bold">4–6 December 2024</span>, Rwanda will host the 7<sup>th</sup> edition of Rwanda Mining Week in Kigali. 
            Themed <span className="italic">“Mining for Community Development”</span>, the event will bring together stakeholders to explore sustainable, inclusive growth in the mining sector.
          </p>
          <p className="mb-4 text-[#000000]">
            <span className="font-bold">Our approach:</span> The week will feature mining site visits, forums, exhibitions, and investment talks aimed at improving safety, environmental responsibility, and social impact in mining operations.
          </p>
          <p className="mb-6 text-[#000000]">
            <span className="font-bold">Our goal:</span> To promote responsible mining through community-centered practices, modern technologies, and strategic partnerships—ensuring that all Rwandans benefit from the country’s natural resources.
          </p>
          <button className="bg-[#004F71] hover:bg-[#55952c] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide self-start">
            WHAT&apos;S NEXT
          </button>
        </div>
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-8 right-16">
        <div className="bg-[#5cb030] rounded-full p-3 shadow-lg cursor-pointer">
          <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default StrongerTogetherSection;
