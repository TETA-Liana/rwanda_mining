import React from "react";

import FooterSection from "../../../components/sections/FooterSection";
import MiningIndabaNumbersSection from "../MiningIndabaNumbersSection";

/**
 * The following changes are for the top section only, to match the provided image:
 * - Add a green header bar with large white text
 * - Center all content in a white rounded card with shadow
 * - Use large, bold, centered heading
 * - Center all text and the yellow button
 * - Add padding and spacing to match the image
 */

const MiningIndabaForInvestors: React.FC = () => {
  const handleRegisterInterest = () => {
    alert("Register Interest clicked! Implement your logic here.");
  };

  return (
    <>
      {/* Green header bar */}
      <div className="w-full bg-[#7bc043] py-4 text-center">
        <h1
          className="text-5xl font-bold text-white"
          style={{
            fontFamily: "Montserrat, Arial, sans-serif",
            letterSpacing: "1px",
          }}
        >
          Mining Indaba for Investors
        </h1>
      </div>
      {/* White card with shadow and rounded corners */}
      <div className="flex justify-center items-center py-10 bg-[#fcfcf7]">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-6xl w-full px-8 py-10 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{
              fontFamily: "Montserrat, Arial, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            Now more than ever, Africa’s mining sector attracts mining
            investment companies seeking lucrative opportunities
          </h2>
          <p
            className="mb-4 text-lg"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            In today's mining investment landscape, future-proofing is
            paramount, and making an investment decision requires a holistic
            approach. Mining investment companies must consider
            production-driven profits, responsible governance practices,
            environmental impact, social engagement, and a stable regulatory
            landscape.
          </p>
          <p
            className="mb-4 text-lg"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            Mining Indaba is the ultimate gateway to discovering high-potential
            projects, de-risking investments, and building powerful alliances
            across Africa’s dynamic mining landscape. Mining Indaba connects
            mining investment companies with major and mid-tier mining
            companies, juniors, and emerging producers. The 2026 theme
            highlights collaboration as the new frontier of mining success.
            Investors can forge strategic partnerships with governments,
            operators, and financiers. In short: Mining Indaba 2026 is where
            investors go to see the future of mining, shape meaningful
            partnerships, and position capital where it counts most.
          </p>
          <p
            className="mb-8 text-lg"
            style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
          >
            Register your interest for Mining Indaba 2026, which will take place
            from 9 -12 February in Cape Town, and be among the first to receive
            important event updates.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleRegisterInterest}
              className="bg-yellow-300 text-black font-bold px-6 py-2 rounded hover:bg-yellow-400 transition-colors mt-2 mb-2 shadow"
              style={{
                minWidth: "170px",
                fontFamily: "Montserrat, Arial, sans-serif",
                letterSpacing: "1px",
              }}
            >
              REGISTER INTEREST
            </button>
          </div>
        </div>
      </div>

      {/* The rest of the page remains unchanged */}
      <div className="container space-y-12">
        <MiningIndabaNumbersSection />

        {/* Why Attend Section */}
        <section className="why-attend-section space-y-8 mt-12">
          <h2>Why attend Mining Indaba?</h2>
          <div className="why-attend-items flex flex-col md:flex-row gap-8">
            <div className="why-attend-item flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
              <div
                className="image w-full h-32 bg-cover bg-center rounded"
                style={{ backgroundImage: "url(/companies.png)" }}
              ></div>
              <h3>Meet Mining Companies</h3>
              <p>
                Mining Indaba brings together the largest gathering of mining
                companies with African and international assets. From juniors to
                majors, company leaders attend to spotlight new and existing
                projects. It’s the key opportunity for investors and financiers
                to connect directly with executives and explore real investment
                opportunities.
              </p>
              <button className="view-btn bg-[#64a63a] text-white px-4 py-2 rounded hover:bg-[#5cb030] transition-colors">
                VIEW MINING COMPANIES
              </button>
            </div>
            <div className="why-attend-item flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
              <div
                className="image w-full h-32 bg-cover bg-center rounded"
                style={{ backgroundImage: "url(/investors.png)" }}
              ></div>
              <h3>Meet Investors and Financiers</h3>
              <p>
                There are plenty of opportunities to explore potential
                partnerships, joint ventures, to engage in deal-making
                discussions, negotiate investment terms, and form strategic
                alliances, all to capitalise on the emerging opportunities in
                the mining sector.
              </p>
            </div>
            <div className="why-attend-item flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
              <div
                className="image w-full h-32 bg-cover bg-center rounded"
                style={{ backgroundImage: "url(/network.png)" }}
              ></div>
              <h3>Network with industry leaders</h3>
              <p>
                Mining Indaba gathers a diverse array of global industry leaders
                from mining companies, national & international governments, and
                industry professionals for 4 days in Cape Town, hosting several
                dedicated networking receptions providing an unparalleled access
                for investors to network, forge new connections, and build
                fruitful relationships with key stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Village Lounge */}

        <section className="testimonials-section space-y-8 mt-12">
          <h2>2025 Attendee Testimonials</h2>
          <div className="testimonials-items flex flex-col md:flex-row gap-8">
            <div className="testimonial-item flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
              <div
                className="video w-full h-48 bg-cover bg-center rounded"
                style={{ backgroundImage: "url(/who-ttends-2.jpg)" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Testimonial 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
              <p>
                "There are a lot of mining organisations with different amazing
                stands, giving you a phenomenal opportunity to network."
              </p>
              <p className="author">
                Oletilwe Ramashala
                <br />
                Head of Business Development & Strategic Partnerships
                <br />
                Sanlam Corporate
              </p>
            </div>
            <div className="testimonial-item flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
              <div
                className="video w-full h-48 bg-cover bg-center rounded"
                style={{ backgroundImage: "url(/path/to/testimonial2.jpg)" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual YouTube video ID
                  title="Testimonial 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
              <p>
                "Exploration booths were more accessible, had quality and
                diverse names, and were based in diverse parts of the
                continent."
              </p>
              <p className="author">
                Bereket A. Berhe
                <br />
                Managing Director, Mining Analyst
                <br />
                Beacon Securities Limited
              </p>
            </div>
          </div>
        </section>

        {/* Join Us Section
        <section className="join-us-section">
          <h2>Join Us at Mining Indaba 2026</h2>
          <p>
            The premier meeting place for African and global mining leaders, it is all set to be an unmissable experience, shaping the future of African mining. Register your interest
            today and stay ahead in this dynamic industry!
          </p>
          <button onClick={handleRegisterInterest} className="register-btn">REGISTER INTEREST</button>
        </section> */}

        {/* Financial Powerhouses and Commodity Interest */}
        <section className="data-section space-y-6 mt-12">
          <div className="data-table bg-white rounded-lg shadow-md p-6">
            <h3>
              Discover the Financial Powerhouses who attended Mining Indaba 2025
            </h3>
            <p>
              Gain insight into the diverse categories of financial
              professionals who drive investment in African mining at Mining
              Indaba 2025. These key players, including financial investors,
              private equity firms, asset managers, hedge funds, sovereign
              wealth funds, and royalty/streaming companies, are shaping the
              future of mining finance, project funding, and deal-making across
              the continent.
            </p>
            <table className="w-full mt-4 mb-4 border border-gray-200">
              <thead>
                <tr>
                  <th className="border-b p-2">Sector/Asset Management</th>
                  <th className="border-b p-2">2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Investment/Asset Management</td>
                  <td className="p-2">225</td>
                </tr>
                <tr>
                  <td className="p-2">Corporate & Institutional Banking</td>
                  <td className="p-2">216</td>
                </tr>
                <tr>
                  <td className="p-2">Investment Holding Company</td>
                  <td className="p-2">135</td>
                </tr>
                <tr>
                  <td className="p-2">Development Finance Institution</td>
                  <td className="p-2">114</td>
                </tr>
                <tr>
                  <td className="p-2">Private Equity</td>
                  <td className="p-2">88</td>
                </tr>
                <tr>
                  <td className="p-2">Trading</td>
                  <td className="p-2">62</td>
                </tr>
                <tr>
                  <td className="p-2">Family Office</td>
                  <td className="p-2">51</td>
                </tr>
                <tr>
                  <td className="p-2">Other (Please specify)</td>
                  <td className="p-2">20</td>
                </tr>
                <tr>
                  <td className="p-2">Qualified Private Investor</td>
                  <td className="p-2">20</td>
                </tr>
                <tr>
                  <td className="p-2">Hedge Fund</td>
                  <td className="p-2">19</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="data-table bg-white rounded-lg shadow-md p-6">
            <h3>
              Investor Interest in the Top 15 Trending Commodities at Mining
              Indaba 2025
            </h3>
            <p>
              Explore the hottest commodities driving investment in African
              mining at Mining Indaba 2025. These sectors, from battery metals
              and critical minerals to precious metals and bulk commodities,
              attract institutional investors, private equity, sovereign wealth
              funds, and mining financiers looking to capitalise on the energy
              transition, infrastructure demand, and global supply chains.
            </p>
            <table className="w-full mt-4 mb-4 border border-gray-200">
              <thead>
                <tr>
                  <th className="border-b p-2">Commodities</th>
                  <th className="border-b p-2">2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Copper</td>
                  <td className="p-2">824</td>
                </tr>
                <tr>
                  <td className="p-2">Gold</td>
                  <td className="p-2">705</td>
                </tr>
                <tr>
                  <td className="p-2">Lithium</td>
                  <td className="p-2">568</td>
                </tr>
                <tr>
                  <td className="p-2">Manganese</td>
                  <td className="p-2">475</td>
                </tr>
                <tr>
                  <td className="p-2">Iron ore</td>
                  <td className="p-2">464</td>
                </tr>
                <tr>
                  <td className="p-2">Cobalt</td>
                  <td className="p-2">431</td>
                </tr>
                <tr>
                  <td className="p-2">Nickel</td>
                  <td className="p-2">418</td>
                </tr>
                <tr>
                  <td className="p-2">PGMs</td>
                  <td className="p-2">410</td>
                </tr>
                <tr>
                  <td className="p-2">Rare Earths</td>
                  <td className="p-2">358</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="chart-section space-y-6 mt-12">
          <h3>Investment Size</h3>
          <p>
            Investor Capital Trends at Mining Indaba 2025: Typical Investment
            Sizes Discover the scale of capital flowing into African mining.
            From junior mining funding to major project financing, investors
            attending the event manage diverse portfolios, ranging from
            early-stage investments to multi-billion-dollar deals. Whether
            backing exploration projects, mine expansions, or strategic
            acquisitions, these financial powerhouses play a key role in shaping
            the future of mining investment, deal structuring, and capital
            markets in the sector.
          </p>
          <div className="chart-placeholder flex justify-center">
            <img
              src="/graph1.png"
              alt="Graph image"
              style={{ width: "850px" }}
            ></img>
          </div>
        </section>

        <section
          className="chart-section space-y-6 mt-12"
          style={{ paddingTop: "16rem" }}
        >
          <h3>Mining Company Type</h3>
          <p>
            Investor Interest by Mining Company Type at Mining Indaba 2025
            Explore where investment is flowing across the mining value chain.
            From early-stage exploration to junior mining, mid-tier producers,
            and major mining companies, investors target diverse opportunities.
            Whether backing critical minerals, battery metals, or bulk
            commodities, these financial powerhouses in attendance fuel mine
            development, expansion projects, and strategic acquisitions across
            Africa.
          </p>
          <div
            className="chart-placeholder flex justify-center"
            style={{ marginBottom: "200px" }}
          >
            <img src="/picture.png" />
          </div>
        </section>

        {/* FAQ and Featured Articles */}
      </div>
      <FooterSection />
    </>
  );
};

export default MiningIndabaForInvestors;
