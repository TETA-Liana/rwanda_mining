import React from 'react';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  image: string;
  name: string;
  title: string;
  department?: string;
}

interface TeamMemberListSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamMemberListSection: React.FC<TeamMemberListSectionProps> = ({ title, members }) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {members.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMemberListSection; 