import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  department: string;
  description: string;
  imageUrl: string;
}

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-3xl w-full mx-auto relative flex">
        <div className="w-1/3 pr-6 flex-shrink-0">
          <div className="rounded-lg overflow-hidden">
            <img src={member.imageUrl} alt={member.name} className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="w-2/3">
          <h3 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">{member.name}</h3>
          <p className="text-gray-700 mb-1 text-lg">{member.title}</p>
          <p className="text-gray-600 text-base mb-4">{member.department}</p>
          <p className="text-gray-800 text-base leading-relaxed">{member.description}</p>
          <div className="mt-6 text-right">
            <button onClick={onClose} className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal; 