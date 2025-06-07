import React from 'react';
import MediaHeroSection from '../../../components/media-sections/MediaHeroSection';
import MediaExposureSection from '../../../components/media-sections/MediaExposureSection';
import OverallCoverageSection from '../../../components/media-sections/OverallCoverageSection';
import AttendingMediaSection from '../../../components/media-sections/AttendingMediaSection';
import PressReleasesSection from '../../../components/media-sections/PressReleasesSection';
import FooterSection from "../../../components/sections/FooterSection"

const MediaPage = () => {
  return (
    <div>
      <MediaHeroSection />
      <MediaExposureSection />
      <OverallCoverageSection />
      <AttendingMediaSection />
      <PressReleasesSection />
      <FooterSection />
    </div>
  );
};

export default MediaPage; 