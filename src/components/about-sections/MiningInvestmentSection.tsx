import React from "react";

const MiningInvestmentSection = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">121 Mining Investment</h2>
        <p className="text-gray-700 mb-4">
          Following the 2022 acquisition, 121 Mining Investment Cape Town is the
          only officially endorsed partner investment event of Mining Indaba. As
          the official partner, the two events will provide a week of unmatched
          networking, insights, and business development opportunities for the
          African mining and investment communities.
        </p>
        <p className="text-gray-700 mb-6">
          Aside from their partner event, 121 Group also offers the 121 Investor
          Engagement Programme. This provides tailored, unparalleled access to
          the industry's largest global investor network year-round. The
          programme aims to cultivate meaningful connections between companies
          and investors to help the mining industry thrive. It cuts through the
          noise and consistently showcases your story to the right investors.
        </p>
        <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white font-bold px-6 py-3 rounded text-sm shadow-md uppercase tracking-wide">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default MiningInvestmentSection;
