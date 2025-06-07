import React from 'react';

const OverallCoverageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#0f172a]">2025 Total Overall Coverage</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
              Icon 1
            </div>
            <p className="mt-4 text-4xl font-bold text-[#5cb030]">2525</p>
            <p className="mt-2 text-sm text-gray-600">
              Total coverage clip count across print, online, broadcast (radio & TV) and onsite.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
              Icon 2
            </div>
            <p className="mt-4 text-4xl font-bold text-[#5cb030]">1.2 Billion</p>
            <p className="mt-2 text-sm text-gray-600">
              Total audience reach.
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white text-2xl">
              Icon 3
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