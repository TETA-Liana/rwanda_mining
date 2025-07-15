import {
  BookmarkIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const StrongerTogetherSection = () => {
  const videoId = "p80HK0DOprA"; // Mining Indaba 2026 theme video
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

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
            The growth of mining in Africa, across the entire ecosystem, thrives
            on collaboration &ndash; where governments, businesses, investors,
            communities, and innovators must unite. In doing so we can work
            collectively towards a common goal &ndash; building a stronger
            industry and continent, together by harnessing the power of building
            a strong mining value chain.
          </p>
          <p className="mb-4 text-[#000000]">
            <span className="font-bold">Our reality:</span> As an industry we
            are Stronger together when breaking down silos and working
            collaboratively.
          </p>
          <p className="mb-6 text-[#000000]">
            <span className="font-bold">Our mission:</span> To achieve the
            greatest progress through partnerships by unlocking transformative
            solutions. A single, aligned industry of empowered people across the
            ecosystem enables us to navigate complexities, embrace innovation,
            and secure a resilient, inclusive future for mining. United efforts
            lead to shared success!
          </p>
          <button className="bg-[#5cb030] hover:bg-[#55952c] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide self-start">
            WHAT&apos;S NEXT
          </button>
        </div>
      </div>

      {/* Chat Icon (positioned absolutely) */}
      <div className="absolute bottom-8 right-16">
        <div className="bg-[#5cb030] rounded-full p-3 shadow-lg cursor-pointer">
          <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default StrongerTogetherSection;
