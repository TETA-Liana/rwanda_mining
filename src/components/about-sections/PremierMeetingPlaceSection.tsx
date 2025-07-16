import React from "react";
import { useNavigate } from "react-router-dom";

const PremierMeetingPlaceSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column: Video */}
          <div className="w-full md:w-1/2">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
            >
              <iframe
                src="https://www.youtube.com/embed/WsfCO1IsGjE"
                className="absolute top-0 left-0 w-full h-full shadow-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Right Column: Text and Buttons */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-4xl font-bold mb-6 text-[#000000]">
              The premier meeting place for Rwanda Mining Week.
            </h2>
            <p className="text-gray-700 mb-6 text-[#000000]">
              Rwanda Mining Week is held at the Kigali Convention Center and the
              Kigali Conference and Exhibition Village. Specifically, the 6th
              edition of the event in 2023 took place at the Kigali Convention
              Center, according to the Prime Minister's office. The 5th edition
              in 2022 was held at the Kigali Conference and Exhibition Village.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-[#60a5fa] hover:bg-[#2563eb] text-black font-bold px-6 py-3 rounded text-sm shadow-md uppercase tracking-wide"
                onClick={() => navigate("/register-interest")}
              >
                REGISTER INTEREST
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-[#2563eb]"></div>
    </>
  );
};

export default PremierMeetingPlaceSection;
