import React, { useState, useEffect } from "react";
import Footer from "../../components/sections/FooterSection";

interface Highlight {
  id: number;
  title: string;
  description: string;
  mainImagePath?: string;
}

function HighlightCard({ day, image, title, description }: { day?: string; image: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row items-start gap-6 max-w-3xl mx-auto">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md border"
          onError={e => (e.currentTarget.src = '/gallery-1.jpg')}
        />
      </div>
      <div className="flex-1">
        {day && <div className="mb-2 text-sm font-semibold text-blue-700">{day}</div>}
        <div className="mb-2 text-lg font-bold text-gray-900">{title}</div>
        <div className="text-gray-700">{description}</div>
      </div>
    </div>
  );
}

const Highlights = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/highlights')
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch highlights');
        const data = await res.json();
        setHighlights(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching highlights');
        setHighlights([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pt-40">
      {/* Hero Section */}
      <div className="h-40 flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#93c5fd]">
        Event Highlights
      </div>

      {/* Cards Section */}
      <div className="py-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
          Event Highlights
        </h2>
        {loading ? (
          <div className="text-center text-blue-700 py-10 text-lg">Loading highlights...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 text-lg">{error}</div>
        ) : highlights.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-lg">No highlights found.</div>
        ) : (
          highlights.map((highlight, idx) => (
            <HighlightCard
              key={highlight.id}
              image={highlight.mainImagePath ? `/api/highlights/image/${encodeURIComponent(highlight.mainImagePath)}` : '/gallery-1.jpg'}
              title={highlight.title}
              description={highlight.description}
            />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Highlights;
