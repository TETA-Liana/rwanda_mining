import React from 'react';
import PartnerCard from './PartnerCard';

interface Partner {
  id: number;
  logo: string;
  name: string;
  type: string;
}

interface PartnerListSectionProps {
  title: string;
  partners: Partner[];
}

const PartnerListSection: React.FC<PartnerListSectionProps> = ({ title, partners }) => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{title}</h2>
      {/* Grid for partner cards, max 6 per row on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} {...partner} />
        ))}
      </div>
    </section>
  );
};

export default PartnerListSection; 