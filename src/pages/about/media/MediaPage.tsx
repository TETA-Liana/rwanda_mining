import React from 'react';
import MediaHeroSection from '../../../components/media-sections/MediaHeroSection';
import MediaExposureSection from '../../../components/media-sections/MediaExposureSection';
import OverallCoverageSection from '../../../components/media-sections/OverallCoverageSection';
import AttendingMediaSection from '../../../components/media-sections/AttendingMediaSection';
import FooterSection from "../../../components/sections/FooterSection"
import FeaturedArticlesSection from '../../../components/sections/FeaturedArticlesSection';

const MediaPage = () => {
  return (
    <div>
      <MediaHeroSection />
      <MediaExposureSection />
      <OverallCoverageSection />
      <AttendingMediaSection />
      <FeaturedArticlesSection/>
      <FooterSection />
    </div>
  );
};

export default MediaPage; 