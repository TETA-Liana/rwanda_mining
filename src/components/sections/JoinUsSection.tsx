import React from "react";

const JoinUsSection = () => {
  return (
    <section
      className="py-16 text-white text-center"
      style={{ background: "linear-gradient(to bottom, #2563eb, #60a5fa)" }}
    >
      <div className="container">
        <h2 className="text-4xl font-bold mb-4">
          Join Us at Mining Indaba 2026
        </h2>
        <p className="text-lg mb-8 px-4 ">
          Mining Indaba 2026 is where African and global mining leaders connect
          and shape the future. Exhibit, <br />
          sponsor, or register your interest today—don't miss out!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#2563eb] hover:bg-[#1e3a8a] text-white px-6 py-2 rounded-md font-semibold uppercase tracking-wide">
            EXHIBIT OR SPONSOR
          </button>
          <button className="bg-[#60a5fa] hover:bg-[#2563eb] text-black px-6 py-2 rounded-md font-semibold uppercase tracking-wide shadow-sm">
            REGISTER INTEREST
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
