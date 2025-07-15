import React from "react";
import Icon1 from "../../../public/icon-1.png";
import Icon2 from "../../../public/icon-2.png";
import Icon3 from "../../../public/icon-3.png";

const OverallCoverageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-10 px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#004F76]">
          Rwanda Mining Week Overall Coverage
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={Icon1}
                alt="Coverage Clips"
                style={{ color: "darkblue" }}
              />
            </div>
            <p className="mt-4 text-2xl font-bold text-[#004F76]">2525</p>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Total coverage clip count across print, <br /> online, broadcast
              (radio & TV) and onsite.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={Icon2}
                alt="Audience Reach"
                style={{ color: "white" }}
              />
            </div>
            <p className="mt-4 text-4xl font-bold text-[#004F76]">
              1.2 Billion
            </p>
            <p className="mt-2 text-sm text-gray-600">Total audience reach.</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={Icon3} alt="Media Attendance" />
            </div>
            <p className="mt-4 text-4xl font-bold text-[#004F76]">398</p>
            <p className="mt-2 text-sm text-gray-600">Media that attended.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverallCoverageSection;
