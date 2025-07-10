import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ExhibitOrSponsorWhy from "./pages/exhibit-or-sponsor-why";
import ExhibitorBrochure2026 from "./pages/exhibitor-brochure-2026";
import WhoAttended2025Sponsors from "./pages/who-attended-2025-sponsors";
import WhoAttended2025Exhibitors from "./pages/who-attended-2025-exhibitors";
import Testimonials from "./pages/Testimonials";
import Enquire from "./pages/Enquire";
import ClientZone from "./pages/ClientZone";
import PostEventReport2025 from "./pages/PostEventReport2025";
import RegisterInterest from "./pages/RegisterInterest";

import MiningIndaba from "./pages/about/MiningIndaba";
import Team from "./pages/about/mining-indaba/Team";
import MediaPage from "./pages/about/media/MediaPage";
import PartnersPage from "./pages/about/partners/PartnersPage";
import Sustainability from "./pages/about/Sustainability";
import Highlights from "./pages/about/Highlights";
import ThursdayHighlights from "./pages/about/highlights/ThursdayHighlights";
import WednesdayHighlights from "./pages/about/highlights/WednesdayHighlights";
import TuesdayHighlights from "./pages/about/highlights/TuesdayHighlights";
import MondayHighlights from "./pages/about/highlights/MondayHighlights";
import SundayHighlights from "./pages/about/highlights/SundayHighlights";
import Contact from "./pages/about/Contact";
import ExplorationJuniorMiningCompanies from "./pages/attend/why-attend/ExplorationJuniorMiningCompanies";
import MajorsMidTiers from "./pages/attend/why-attend/MajorsMidTiers";
import MiningServiceProviders from "./pages/attend/why-attend/MiningServiceProviders";
import Governments from "./pages/attend/why-attend/Governments";
import MiningIndabaForInvestors from "./pages/attend/why-attend/Investors";
import MiningIndabaForDownstreamBuyers from "./pages/attend/why-attend/Dowstream";

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/exhibit-sponsor/why"
            element={<ExhibitOrSponsorWhy />}
          />
          <Route
            path="/exhibit-sponsor/why/2026-exhibitor-brochure"
            element={<ExhibitorBrochure2026 />}
          />
          <Route
            path="/exhibit-sponsor/who-attended-in-2025/sponsors"
            element={<WhoAttended2025Sponsors />}
          />
          <Route
            path="/exhibit-sponsor/who-attended-in-2025/exhibitors"
            element={<WhoAttended2025Exhibitors />}
          />
          <Route
            path="/exhibit-sponsor/testimonials"
            element={<Testimonials />}
          />
          <Route path="/exhibit-sponsor/enquire" element={<Enquire />} />
          <Route path="/exhibit-sponsor/client-zone" element={<ClientZone />} />
          <Route
            path="/2025-post-event-report"
            element={<PostEventReport2025 />}
          />
          <Route path="/register-interest" element={<RegisterInterest />} />
          <Route path="/about/mining-indaba" element={<MiningIndaba />} />
          <Route path="/about/mining-indaba/team" element={<Team />} />
          <Route path="/about/partners" element={<PartnersPage />} />
          <Route path="/about/media" element={<MediaPage />} />
          <Route path="/about/sustainability" element={<Sustainability />} />
          <Route path="/about/highlights" element={<Highlights />} />
          <Route
            path="/about/highlights/thursday"
            element={<ThursdayHighlights />}
          />
          <Route
            path="/about/highlights/wednesday"
            element={<WednesdayHighlights />}
          />
          <Route
            path="/about/highlights/tuesday"
            element={<TuesdayHighlights />}
          />
          <Route
            path="/about/highlights/monday"
            element={<MondayHighlights />}
          />
          <Route
            path="/about/highlights/sunday"
            element={<SundayHighlights />}
          />
          <Route path="/about/contact" element={<Contact />} />
          <Route
            path="/attend/why-attend/exploration-junior"
            element={<ExplorationJuniorMiningCompanies />}
          />
          <Route
            path="/attend/why-attend/majors-mid-tiers"
            element={<MajorsMidTiers />}
          />
          <Route
            path="/attend/why-attend/mining-service-providers"
            element={<MiningServiceProviders />}
          />
          <Route
            path="/attend/why-attend/governments"
            element={<Governments />}
          />
          <Route
            path="/attend/why-attend/investors"
            element={<MiningIndabaForInvestors />}
          />
          <Route
            path="/attend/why-attend/downstream-buyers"
            element={<MiningIndabaForDownstreamBuyers />}
          />
        </Routes>
      </Layout>

      {/* Fixed Chat Icon Placeholder */}
      <div className="fixed bottom-6 right-6 bg-[#64a63a] text-white rounded-full p-3 shadow-lg cursor-pointer">
        {/* Placeholder for chat icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4.911 2a2.25 2.25 0 0 0-2.105 2.541L5.003 18.75H6.75a.75.75 0 0 0 0-1.5H5.318l-1.17-11.697L7.438 4.5H16.5a.75.75 0 0 0 0-1.5H7.183c-.224 0-.447.04-.662.12L3.611 1.823a2.25 2.25 0 0 0-1.5-.623ZM17.25 6a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0V6ZM20.25 6a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0V6ZM16.5 18.75h-2.25a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5Z" />
        </svg>
      </div>
    </Router>
  );
}

export default App;
