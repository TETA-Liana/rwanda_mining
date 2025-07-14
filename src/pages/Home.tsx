import HeroSection from '../components/sections/HeroSection'
import StrongerTogetherSection from '../components/sections/StrongerTogetherSection'
import AdvisoryTeamSection from '../components/sections/AdvisoryTeamSection'
import BePartOfMiningIndabaSection from '../components/sections/BePartOfMiningIndabaSection'
import MiningIndabaNumbersSection from '../components/sections/MiningIndabaNumbersSection'
import WhoAttendsSection from '../components/sections/WhoAttendsSection'
import JoinUsSection from '../components/sections/JoinUsSection'
import LatestUpdatesSection from '../components/sections/LatestUpdatesSection'
import FeaturedArticlesSection from '../components/sections/FeaturedArticlesSection'
import FooterSection from '../components/sections/FooterSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StrongerTogetherSection />
      <AdvisoryTeamSection />
      <BePartOfMiningIndabaSection />
      <MiningIndabaNumbersSection />
      <WhoAttendsSection />
      <JoinUsSection />
      <LatestUpdatesSection />
      <FeaturedArticlesSection />
      <FooterSection />
    </div>
  )
}

export default Home 