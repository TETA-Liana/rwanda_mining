import React from 'react';
import PartnersHeroSection from '../../../components/partners-sections/PartnersHeroSection';
import PartnerListSection from '../../../components/partners-sections/PartnerListSection';
import Footer from '../../../components/sections/FooterSection';

// Import partner logos
import AssayLogo from '../../../../public/partners/assay-logo_black-copy.jpg';
import AfricanBusinessLogo from '../../../../public/partners/african-business_black.png';
import SubSaharaMiningLogo from '../../../../public/partners/sub-sahara-mining-(1).jpg';
import ModernMiningLogo from '../../../../public/partners/modern-mining.jpg';
import MiningZimbabweLogo from '../../../../public/partners/mining-zimbabwe-logo-3.png';
import JeuneAfriqueLogo from '../../../../public/partners/jeune-afrique.jpg';
import MiningWeeklyLogo from '../../../../public/partners/200x100_miningweekly.jpg';
import MraLogo from '../../../../public/partners/300x100_mra_1.jpg';
import Mx20thRetLogo from '../../../../public/partners/mx-20th-ret.png';
import PaydirtMediaLogo from '../../../../public/partners/paydirt_media_web-(1).png';
import LevinSourcesLogo from '../../../../public/partners/levin-sources-logo.jpg';
import AamegLogo from '../../../../public/partners/200x100_aameg.jpg';
import WimsaLogo from '../../../../public/partners/wimsa-logo.png';
import MineralsCouncilLogo from '../../../../public/partners/minerals-council.png';
import CarbonTrustLogo from '../../../../public/partners/carbon-trust-logo.png';
import MiasaLogo from '../../../../public/partners/logo-miasa-(1).png';
import TdiSustainabilityLogo from '../../../../public/partners/tdi-sustainability_1.png';
import ImpactFacilityLogo from '../../../../public/partners/the-impact-facility-logo-1.jpg';
import FairColblatLogo from '../../../../public/partners/fair-colblat.jpg';
import IcmmLogo from '../../../../public/partners/icmm-logo-1.jpg';
import AwimaLogo from '../../../../public/partners/awima-logo2-resized.png';
import AfricaPracticeLogo from '../../../../public/partners/africa-practice-new-logo.jpg';
import FuturecoalLogo from '../../../../public/partners/futurecoal-logo.png';


const PartnersPage = () => {
  // Placeholder data - replace with actual data
  const premierPartners = [
    { id: 1, logo: AssayLogo, name: 'Assay Laboratories', type: 'PREMIER MEDIA PARTNER' },
  ];

  const strategicPartners = [
    { id: 1, logo: AfricanBusinessLogo, name: 'African Business', type: 'STRATEGIC PARTNER' },
    { id: 2, logo: SubSaharaMiningLogo, name: 'Sub-Sahara Mining', type: 'STRATEGIC PARTNER' },
    { id: 3, logo: ModernMiningLogo, name: 'Modern Mining', type: 'STRATEGIC PARTNER' },
    { id: 4, logo: MiningZimbabweLogo, name: 'Mining Zimbabwe', type: 'STRATEGIC PARTNER' },
    { id: 5, logo: JeuneAfriqueLogo, name: 'Jeune Afrique', type: 'STRATEGIC PARTNER' },
    { id: 6, logo: MiningWeeklyLogo, name: 'Mining Weekly', type: 'STRATEGIC PARTNER' },
    { id: 7, logo: MraLogo, name: 'MRA', type: 'STRATEGIC PARTNER' },
    { id: 8, logo: Mx20thRetLogo, name: 'MX 20th', type: 'STRATEGIC PARTNER' },
    { id: 9, logo: PaydirtMediaLogo, name: 'Paydirt Media', type: 'STRATEGIC PARTNER' },
    { id: 10, logo: LevinSourcesLogo, name: 'Levin Sources', type: 'STRATEGIC PARTNER' },
    { id: 11, logo: AamegLogo, name: 'AAMEG', type: 'STRATEGIC PARTNER' },
    { id: 12, logo: WimsaLogo, name: 'WIMSA', type: 'STRATEGIC PARTNER' },
    { id: 13, logo: MineralsCouncilLogo, name: 'Minerals Council', type: 'STRATEGIC PARTNER' },
  ];

  const goldPartners = [
    { id: 1, logo: CarbonTrustLogo, name: 'Carbon Trust', type: 'GOLD MEDIA PARTNER' },
    { id: 2, logo: MiasaLogo, name: 'MIASA', type: 'GOLD MEDIA PARTNER' },
    { id: 3, logo: TdiSustainabilityLogo, name: 'TDI Sustainability', type: 'GOLD MEDIA PARTNER' },
    { id: 4, logo: ImpactFacilityLogo, name: 'The Impact Facility', type: 'GOLD MEDIA PARTNER' },
  ];

  const silverPartners = [
    { id: 1, logo: FairColblatLogo, name: 'Fair Cobalt Alliance', type: 'SILVER MEDIA PARTNER' },
    { id: 2, logo: IcmmLogo, name: 'ICMM', type: 'SILVER MEDIA PARTNER' },
    { id: 3, logo: AwimaLogo, name: 'AWIMA', type: 'SILVER MEDIA PARTNER' },
    { id: 4, logo: AfricaPracticeLogo, name: 'Africa Practice', type: 'SILVER MEDIA PARTNER' },
    { id: 5, logo: FuturecoalLogo, name: 'FutureCoal', type: 'SILVER MEDIA PARTNER' },
    { id: 6, logo: AssayLogo, name: 'Assay Laboratories', type: 'SILVER MEDIA PARTNER' }, // Repeat for more if needed
    { id: 7, logo: AfricanBusinessLogo, name: 'African Business', type: 'SILVER MEDIA PARTNER' },
    { id: 8, logo: SubSaharaMiningLogo, name: 'Sub-Sahara Mining', type: 'SILVER MEDIA PARTNER' },
    { id: 9, logo: ModernMiningLogo, name: 'Modern Mining', type: 'SILVER MEDIA PARTNER' },
    { id: 10, logo: MiningZimbabweLogo, name: 'Mining Zimbabwe', type: 'SILVER MEDIA PARTNER' },
    { id: 11, logo: JeuneAfriqueLogo, name: 'Jeune Afrique', type: 'SILVER MEDIA PARTNER' },
    { id: 12, logo: MiningWeeklyLogo, name: 'Mining Weekly', type: 'SILVER MEDIA PARTNER' },
    { id: 13, logo: MraLogo, name: 'MRA', type: 'SILVER MEDIA PARTNER' },
    { id: 14, logo: Mx20thRetLogo, name: 'MX 20th', type: 'SILVER MEDIA PARTNER' },
    { id: 15, logo: PaydirtMediaLogo, name: 'Paydirt Media', type: 'SILVER MEDIA PARTNER' },
    { id: 16, logo: LevinSourcesLogo, name: 'Levin Sources', type: 'SILVER MEDIA PARTNER' },
    { id: 17, logo: AamegLogo, name: 'AAMEG', type: 'SILVER MEDIA PARTNER' },
    { id: 18, logo: WimsaLogo, name: 'WIMSA', type: 'SILVER MEDIA PARTNER' },
  ];


  return (
    <div>
      <PartnersHeroSection />
      <div className="container mx-5 py-12">
         <div className="flex justify-end mb-8">
           {/* Placeholder for search bar */}
           <input type="text" placeholder="Search..." className="border rounded-3xl py-2 px-4 bg-[#f0f0f0]" />
         </div>
         <div className='items-center justify-center'>
        <PartnerListSection title="Premier Media Partner" partners={premierPartners} />
        <PartnerListSection title="Strategic Partner" partners={strategicPartners} />
        <PartnerListSection title="Gold Media Partner" partners={goldPartners} />
        <PartnerListSection title="Silver Media Partner" partners={silverPartners} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnersPage; 