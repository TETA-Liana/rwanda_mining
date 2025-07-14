import React from 'react';

interface PartnerCardProps {
  logo: string;
  name: string;
  type: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ logo, name, type }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
      <img src={logo} alt={name} className="h-20 w-auto object-contain mb-4" />
      <h3 className="text-md font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-[#64a63a] font-medium uppercase">{type}</p>
    </div>
  );
};

export default PartnerCard; 