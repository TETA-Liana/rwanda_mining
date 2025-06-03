import React, { useState, useEffect } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import TeamMemberModal from './TeamMemberModal';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  department: string;
  description: string;
  imageUrl: string;
}

// Lists for generating random names
const firstNames = [
    'Sinead', 'Sonwabo', 'Thabani', 'Tim', 'Allison', 'Ben', 'Bokang', 'Bongi', 'Kenny', 'Veston', 'Zenzi', 'Deshan', 'Raj', 'Rokhaya', 'Nere', 'Miguel', 'Mecktilder', 'Marna', 'Marie', 'Marcus', 'Joseph', 'Jonathan', 'Jill', 'Ime', 'Heidi', 'Fabiana', 'Estelle', 'David', 'Clive', 'Bronwyn', 'Bothale', 'Indaba', 'Stacy',
];
const lastNames = [
    'Kaufman', 'Modimoeng', 'Mlilo', 'O\'Connor', 'George', 'Magara', 'Kelepa', 'Ntsoelengoe', 'Ives', 'Malango', 'Awases', 'Naidoo', 'Ray', 'Sekmokotleng', 'Emiko', 'Cabello', 'Mchomvu', 'Claassen', 'Chantal', 'Ford', 'Starwood', 'Wood', 'Cooper', 'Ekwere', 'Van Der Merwe', 'Di Lorenzo', 'de Bruyn', 'Sturmes', 'Govender', 'Barn', 'Infra', 'Profile', 'Hope',
];

// Lists for generating random titles, departments, and descriptions
const titles = [
    'CEO', 'CTO', 'COO', 'Head of Marketing', 'Head of Sales', 'Senior Advisor', 'Technical Lead', 'Project Manager', 'Consultant', 'Analyst',
];
const departments = [
    'Executive', 'Technology', 'Operations', 'Marketing', 'Sales', 'Advisory', 'Engineering', 'Project Management', 'Consulting', 'Research',
];
const descriptions = [
    'A highly experienced professional with a strong background in the mining industry.',
    'Expert in strategic planning and operational efficiency.',
    'Passionate about driving innovation and sustainable practices.',
    'Proven track record in building strong partnerships and leading successful teams.',
    'Dedicated to fostering growth and development within the sector.',
    'Specializing in [mention a random area, e.g., resource management, financial analysis].',
    'Committed to excellence and achieving impactful results.',
];

// Placeholder data for 44 team members using actual image names and random names
const imageNames = [
    'Sonwabo-Modimoeng.jpg',
    'sinead-kaufman.png',
    'rokhaya.png',
    'IMG_2463.jpg',
    'Raj-Ray.JPG',
    'DSCF3270-(2).jpg',
    'Phoevos-Pouroulis-CEO-Tharisa-plc-326-(1).jpg',
    'DDG-Ntokozo-Nzimande.jpg',
    'nere-emiko.jpg',
    'IMG_5284.jpg',
    'Photo-2.jpg',
    'miguel.png',
    'mecktilder-mchomvu2.jpg',
    '240206-MarnaC_164-scaled.jpg',
    'Marie_Chantal-(2).jpg',
    'marcus.png',
    'Kenny-Ives.jpg',
    'k2-mapasa.jpg',
    'joseph-starwood.jpg',
    'jonathan.png',
    'jill-cooper.jpg',
    'ime.png',
    'heidi.png',
    'fabiana-di-lorenzo_1.jpg',
    '400x-estelle.jpg',
    'dsc_0507.jpg',
    'Stacy-Hope.jpg',
    'Deshan-Naidoo.png',
    'David-Sturmes-New-Image-2025.jpg',
    'clive-govender_1.jpg',
    'bronwyn-barn.jpg',
    'bothale-s-infra.jpg',
    'Bongi-Ntsoelengoe-Headshot.jpg',
    'Bokang-Kelepa-(2).JPG',
    'ben-400.png',
    'alison.png',
    'Indaba-Profile-pic.jpg',
    'veston.png',
    'Tim-o-connor-headshot.jpg',
    'thabani-mlilo-(1).jpg',
];

const teamMembers: TeamMember[] = Array.from({ length: 44 }).map((_, index) => ({
  id: index + 1,
  name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
  title: titles[Math.floor(Math.random() * titles.length)],
  department: departments[Math.floor(Math.random() * departments.length)],
  description: Array.from({ length: 2 }).map(() => descriptions[Math.floor(Math.random() * descriptions.length)]).join(' '),
  imageUrl: `/advisor team/${imageNames[index % imageNames.length]}`, // Use local images
}));

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg shadow-md p-6 text-center cursor-pointer flex flex-col items-center border border-gray-300 w-64 flex-shrink-0 transition-colors duration-300 ${
        isHovered ? 'bg-[#5cb030]' : 'bg-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(member)}
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow">
        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
        {isHovered && (
           <div className="absolute inset-0 bg-[#5cb030] bg-opacity-70 flex flex-col items-center justify-center text-white text-sm font-semibold p-2 leading-tight">
             <p>{member.title}</p>
             <p>{member.department}</p>
           </div>
        )}
        {/* Info icon positioned outside the image */}
        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-200 rounded-full p-1 shadow-md z-10">
             <InformationCircleIcon className="h-5 w-5 text-gray-600" />
        </div>
      </div>
      <h3 className={`text-sm font-semibold mt-2 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-green-600'}`}>{member.name}</h3>
    </div>
  );
};

const AdvisoryTeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const membersPerPage = 4;
  const totalSlides = Math.ceil(teamMembers.length / membersPerPage);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalSlides]); // Re-run effect if totalSlides changes

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  // Calculate the transform value based on card width and gap
  // Assuming card width is 256px (w-64) and gap is 24px (gap-x-6)
  const cardWidth = 256; // w-64 in Tailwind default config
  const gapWidth = 24; // gap-x-6 in Tailwind default config
  const slideDistance = cardWidth + gapWidth; // Distance for a single card including gap

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-gray text-center">Meet the Minds Shaping Mining Indaba 2026</h2>
        <div className="flex items-center justify-center gap-8">
          <button onClick={prevSlide} className="p-2 rounded-full text-[#5cb030] hover:text-[#55952c] focus:outline-none bg-transparent">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          {/* Slideshow container */}
          <div className="flex overflow-hidden w-full">
            {/* Inner container holding all cards with horizontal gap */}
            <div
              className="flex transition-transform duration-500 ease-in-out gap-x-6"
              style={{ transform: `translateX(${-currentIndex * (cardWidth + gapWidth)}px)` }}
            >
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} onClick={handleCardClick} />
              ))}
            </div>
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full text-[#5cb030] hover: text-[#55952c] focus:outline-none bg-transparent">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className="mx-1 focus:outline-none bg-transparent border-none p-0"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-4 w-4 rounded-full border-2 border-[#5cb030] ${
                  currentIndex === index ? 'bg-[#5cb030]' : 'bg-transparent'
                }`}
              ></div>
            </button>
          ))}
        </div>

                {/* Meet the Advisory Board Button */}
                <div className="flex justify-center mt-8">
          <button className="bg-[#5cb030] hover:bg-[#55952c] bg-[#5cb030] hover:bg-[#55952c] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-widetext-white 4 py-2 rounded-md font-semibold uppercase tracking-wide transition-colors">
            MEET THE ADVISORY BOARD
          </button>
        </div>

      </div>

      {/* Modal will be placed here */}
      {selectedMember && <TeamMemberModal member={selectedMember} onClose={handleCloseModal} />}
    </section>
  );
};

export default AdvisoryTeamSection;