import React from 'react';

interface TeamMemberCardProps {
  image: string;
  name: string;
  title: string;
  department?: string;
}
<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, title, department }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover mb-4" />
<<<<<<< HEAD
      <h3 className="text-lg font-semibold text-[#004F71]">{name}</h3>
=======
      <h3 className="text-lg font-semibold text-[#64a63a]">{name}</h3>
>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
      <p className="text-sm text-gray-700">{title}</p>
      {department && <p className="text-sm text-gray-600">{department}</p>}
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> c7593b0773fdf9c1ec2f23aecd9991d801ee29dd
export default TeamMemberCard; 