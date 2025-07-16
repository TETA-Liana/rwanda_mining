import React, { useState, useEffect } from "react";
import Footer from "../../components/sections/FooterSection";

// Sample highlight data (replace with backend data when available)
const highlightData = [
  {
    day: "Monday",
    image: "/mon-high.jpg",
    title: "Monday Highlight Title",
    description: "This is a sample highlight description for Monday.",
  },
  {
    day: "Tuesday",
    image: "/tues-high.jpg",
    title: "Tuesday Highlight Title",
    description: "This is a sample highlight description for Tuesday.",
  },
  {
    day: "Wednesday",
    image: "/weds-high.jpg",
    title: "Wednesday Highlight Title",
    description: "This is a sample highlight description for Wednesday.",
  },
  {
    day: "Thursday",
    image: "/gallery-1.jpg",
    title: "Thursday Highlight Title",
    description: "This is a sample highlight description for Thursday.",
  },
  {
    day: "Sunday",
    image: "/sun-cont-1.jpg",
    title: "Sunday Highlight Title",
    description: "This is a sample highlight description for Sunday.",
  },
];

interface HighlightCardProps {
  day: string;
  image: string;
  title: string;
  description: string;
}

function HighlightCard({ day, image, title, description }: HighlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row items-start gap-6 max-w-3xl mx-auto">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md border"
        />
      </div>
      <div className="flex-1">
        <div className="mb-2 text-sm font-semibold text-blue-700">{day}</div>
        <div className="mb-2 text-lg font-bold text-gray-900">{title}</div>
        <div className="text-gray-700">{description}</div>
      </div>
    </div>
  );
}

const Highlights = () => {
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
        {highlightData.map((highlight, idx) => (
          <HighlightCard key={idx} {...highlight} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Highlights;
