import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  message: string;
  youtubeLink?: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/testimonials')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        setTestimonials(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching testimonials');
        setTestimonials([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Spacer to ensure bar is not covered by navbar */}
      <div className="h-8 w-full"></div>
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] py-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hear from Rwanda Mining Week community
        </h1>
      </div>

      {/* Descriptive text */}
      <div className="container mx-auto px-4 py-8 text-center text-lg text-gray-700">
        <p>
          Hear from our past attendees as they describe their Rwanda Mining Week
          experience.
        </p>
      </div>

      {/* Blue dividing line */}
      <div className="bg-[#2563eb] h-2 w-full"></div>

      {/* Testimonials Section Title */}
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          2025 Attendee Testimonials
        </h2>
      </div>

      {/* Rwanda Mining Week Testimonials */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-blue-700 py-10 text-lg">Loading testimonials...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 text-lg">{error}</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-lg">No testimonials found.</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={t.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              {t.youtubeLink ? (
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={t.youtubeLink}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title={`Rwanda Mining Week Testimonial ${idx + 1}`}
                  ></iframe>
                </div>
              ) : null}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-gray-700 italic mb-4">{`"${t.message}"`}</p>
                <div>
                  <p className="font-semibold text-[#2563eb]">{t.name}</p>
                  {t.role && <p className="text-sm text-gray-600">{t.role}</p>}
                  {t.company && <p className="text-sm text-gray-600">{t.company}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Join Us section */}
      <div className="bg-gradient-to-r from-[#2563eb] to-[#60a5fa] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us at Rwanda Mining Week
          </h2>
          <p className="text-lg mb-8">
            Be part of Rwanda Mining Week and connect with industry leaders,
            innovators, and policymakers shaping the future of mining in Rwanda.
            Register your interest today to stay informed about event updates,
            opportunities, and more!
          </p>
          <button className="bg-[#60a5fa] hover:bg-[#2563eb] text-black font-bold px-8 py-3 rounded text-base shadow-md uppercase tracking-wide">
            REGISTER INTEREST
          </button>
        </div>
      </div>

      {/* 2025 Exhibitor Highlights Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
          Rwanda Mining Week Highlights
        </h2>
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 bg-[#2563eb] p-8 text-white">
            <h2 className=" text-2xl md:text-3xl font-bold mb-4">
              Rwanda Mining Week 2025: New Tin Processing Plant Launched
            </h2>
            <p className="text-white mb-4 ">
              During Rwanda Mining Week 2025, a state-of-the-art tin processing
              plant was inaugurated in Kigali, marking a significant milestone
              for Rwanda’s mining sector. The facility is expected to boost
              local value addition and create new jobs in the industry.
            </p>
            <button className="bg-white border border-[#2563eb] text-[#2563eb] font-bold px-6 py-2 rounded text-base hover:bg-[#2563eb] hover:text-white transition-colors duration-300">
              READ MORE
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/rmw-1.png"
              alt="Rwanda Mining Week Highlights"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Strategic Partnership Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/rmw-2.png"
              alt="Strategic Partnership"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 bg-[#2563eb] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Strategic partnership agreement between Rwanda Mining Association
              and Kigali Gold Refinery
            </h2>
            <p className="text-lg mb-4">
              Present in Kigali for the 2025 edition of Rwanda Mining Week, Jean
              Bosco, Managing Director of Rwanda Mining Association met Aline
              Uwimana, Project Coordinator of Kigali Gold Refinery, to sign a
              strategic partnership agreement between the two organizations.
            </p>
            <button className="bg-white border border-white text-[#2563eb] font-bold px-6 py-2 rounded text-base hover:bg-gray-100 transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Joint Development Agreement Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 bg-[#2563eb] p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Joint Development Agreement (JDA) among Rwanda Mines, Petroleum
              and Gas Board, University of Rwanda, and Rwanda Mining Association
            </h2>
            <p className="text-lg mb-4">
              Signed at Rwanda Mining Week, the Joint Development Agreement
              (JDA) between Rwanda Mines, Petroleum and Gas Board, University of
              Rwanda, and Rwanda Mining Association makes a significant step
              towards developing sustainable mining practices and local value
              chains in Rwanda.
            </p>
            <button className="bg-white border border-white text-[#2563eb] font-bold px-6 py-2 rounded text-base hover:bg-gray-100 transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/rmw-3.png"
              alt="Joint Development Agreement"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Other Testimonials Section */}
      {/* ... existing code ... */}
    </>
  );
};

export default Testimonials;
