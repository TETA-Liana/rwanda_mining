import React from 'react';

interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  department?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, title, department }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover mb-4" />
      <h3 className="text-lg font-semibold text-[#64a63a]">{name}</h3>
      <p className="text-sm text-gray-700">{title}</p>
      {department && <p className="text-sm text-gray-600">{department}</p>}
    </div>
  );
};

export default TeamMemberCard; 