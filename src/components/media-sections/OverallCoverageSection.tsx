import React from 'react';
import Icon1 from "../../../public/icon-1.png";
import Icon2 from "../../../public/icon-2.png";
import Icon3 from "../../../public/icon-3.png";

const OverallCoverageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-10 px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#0f172a]">2025 Total Overall Coverage</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 flex items-center justify-center text-white text-2xl">
              <img src={Icon1} alt="Icon 1" />
            </div>
            <p className="mt-4 text-2xl font-bold text-[#5cb030]">2525</p>
            <p className="mt-2 text-sm text-gray-600">
              Total coverage clip count across print, <br/> online, broadcast (radio & TV) and onsite.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 flex items-center justify-center text-white text-2xl">
            <img src={Icon2} alt="Icon 1" />
            </div>
            <p className="mt-4 text-4xl font-bold text-[#5cb030]">1.2 Billion</p>
            <p className="mt-2 text-sm text-gray-600">
              Total audience reach.
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 flex items-center justify-center text-white text-2xl">
            <img src={Icon3} alt="Icon 1" />
            </div>
            <p className="mt-4 text-4xl font-bold text-[#5cb030]">398</p>
            <p className="mt-2 text-sm text-gray-600">
              Media that attended.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverallCoverageSection; 