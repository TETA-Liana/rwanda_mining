import React from 'react';
import PartnersHeroSection from '../../../components/partners-sections/PartnersHeroSection';
import PartnerListSection from '../../../components/partners-sections/PartnerListSection';
import Footer from '../../../components/sections/FooterSection';

const PartnersPage = () => {
  // Placeholder data - replace with actual data
  const premierPartners = [
    { id: 1, logo: '/placeholder-logo.png', name: 'Premier Partner 1', type: 'PREMIER MEDIA PARTNER' },
  ];

  const strategicPartners = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1, logo: '/placeholder-logo.png', name: `Strategic Partner ${i + 1}`, type: 'STRATEGIC PARTNER'
  }));

  const goldPartners = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1, logo: '/placeholder-logo.png', name: `Gold Partner ${i + 1}`, type: 'GOLD MEDIA PARTNER'
  }));

  const silverPartners = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1, logo: '/placeholder-logo.png', name: `Silver Partner ${i + 1}`, type: 'SILVER MEDIA PARTNER'
  }));


  return (
    <div>
      <PartnersHeroSection />
      <div className="container mx-auto py-12 px-4">
         <div className="flex justify-end mb-8">
           {/* Placeholder for search bar */}
           <input type="text" placeholder="Search..." className="border rounded-3xl py-2 px-4 bg-[#]" />
         </div>
        <PartnerListSection title="Premier Media Partner" partners={premierPartners} />
        <PartnerListSection title="Strategic Partner" partners={strategicPartners} />
        <PartnerListSection title="Gold Media Partner" partners={goldPartners} />
        <PartnerListSection title="Silver Media Partner" partners={silverPartners} />
      </div>
      <Footer />
    </div>
  );
};

export default PartnersPage; 