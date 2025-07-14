import React from 'react';

const JoinUsSection = () => {
  return (
    <section
      className="py-16 text-white text-center"
      style={{ background: 'linear-gradient(to bottom, #004F71, #3a87ad)' }} // dark to lighter blue gradient
    >
      <div className="container">
        <h2 className="text-4xl font-bold mb-4">Join Us at Rwanda Mining Week 2024</h2>
        <p className="text-lg mb-8 px-4">
          Rwanda Mining Week runs from 4-6 December 2024 — the premier mining event in the region. 
          Connect with industry leaders, innovators, and policymakers shaping Rwanda’s mining future. 
          Exhibit, sponsor, or register your interest today — don’t miss this opportunity!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#004F71] hover:bg-[#003a54] text-white px-6 py-2 rounded-md font-semibold uppercase tracking-wide">
            EXHIBIT OR SPONSOR
          </button>
          <button className="bg-[#a6d0e4] hover:bg-[#85b9d0] text-black px-6 py-2 rounded-md font-semibold uppercase tracking-wide shadow-sm">
            REGISTER INTEREST
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
