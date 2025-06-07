import React from 'react';
import AboutHeroSection from '../../components/about-sections/AboutHeroSection';
import PremierMeetingPlaceSection from '../../components/about-sections/PremierMeetingPlaceSection';
import OurVisionSection from '../../components/about-sections/OurVisionSection';
import DriveSustainableSection from '../../components/about-sections/DriveSustainableSection';
import WhosAttendingSection from '../../components/about-sections/WhosAttendingSection';
import MiningInvestmentSection from '../../components/about-sections/MiningInvestmentSection';
import FAQSection from '../../components/about-sections/FAQSection';
import Footer from '../../components/sections/FooterSection'

const MiningIndaba = () => {
  return (
    <div>
      <AboutHeroSection />
      <PremierMeetingPlaceSection />
      <div className='bg-[#f5f7f6]'>
        <OurVisionSection />
        <DriveSustainableSection />
        <WhosAttendingSection />
        <MiningInvestmentSection />
        <FAQSection />
        <Footer/>
      </div>
    </div>
  );
};

export default MiningIndaba; 