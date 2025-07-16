import {
  BookmarkIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const StrongerTogetherSection = () => {
  const embedUrl = "https://www.youtube.com/embed/rEoO5DLQ0ZY";

  return (
    <section className="py-16 bg-white relative">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Video */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full shadow-xl"
              src={embedUrl}
              title="Mining Indaba Theme 2026"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-4xl font-bold mb-6 text-[#000000]">
            &ldquo;Stronger together: Progress through partnerships&rdquo;
          </h2>
          <p className="mb-4 text-[#000000]">
          The theme for this year is " Mining for Community Development." This aims at reflecting and strategizing on how best mining operations and benefits must be placed at the heart of communities’ wealth and health while mitigating environmental footprints.
          </p>
          <p className="mb-4 text-[#000000]">
            <span className="font-bold">Our reality:</span> As an industry we
            are Stronger together when breaking down silos and working
            collaboratively.
          </p>
          <p className="mb-6 text-[#000000]">
            <span className="font-bold">Our mission:</span> The objectives of Rwanda Mining Week 2024 are as follows:

i. To showcase the Rwandan mineral endowments and the entire mineral value chain

ii. To discuss best practices to enhance sustainability and mining impact on communities.

iii. To create space for networking, partnerships, and collaborations necessary to drive Rwanda’s mining sector growth.
          </p>
          <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide self-start">
            WHAT&apos;S NEXT
          </button>
        </div>
      </div>

      {/* Chat Icon (positioned absolutely) */}
      <div className="absolute bottom-8 right-16">
        <div className="bg-[#2563eb] rounded-full p-3 shadow-lg cursor-pointer">
          <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default StrongerTogetherSection;
