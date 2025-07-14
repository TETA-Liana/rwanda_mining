import React from 'react';

const WhosAttendingSection = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Who's attending?</h2>
        <p className="text-gray-700 mb-6">
          Discover the caliber of attendees at Mining Indaba! Join industry leaders, top executives, and representatives from over 115 countries. Connect with influential figures shaping the future of mining and explore unparalleled networking opportunities.
        </p>
        <button className="bg-[#64a63a] hover:bg-[#5cb030] text-white font-bold px-6 py-3 rounded text-sm shadow-md uppercase tracking-wide">
          DISCOVER COMPANIES REGISTERED TO ATTEND
        </button>
      </div>
    </div>
  );
};

export default WhosAttendingSection; 