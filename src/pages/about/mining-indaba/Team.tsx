import React from 'react';
import TeamHeroSection from '../../../components/team-sections/TeamHeroSection';
import TeamMemberListSection from '../../../components/team-sections/TeamMemberListSection';
import TeamSponsorExhibitSection from '../../../components/team-sections/TeamSponsorExhibitSection';
import Footer from '../../../components/sections/FooterSection'

// Helper function to get a random element from an array
const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Potential names and titles
const firstNames = ['John', 'Jane', 'David', 'Sarah', 'Michael', 'Emily', 'Chris', 'Anna', 'James', 'Olivia', 'Daniel', 'Sophia', 'Matthew', 'Isabella', 'Ethan', 'Ava', 'Andrew', 'Mia', 'Joseph', 'Charlotte'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson'];
const titles = ['Manager', 'Director', 'Lead', 'Coordinator', 'Specialist', 'Analyst', 'Officer', 'Representative'];

// Available image files (prioritizing potential black and white)
const imageFiles = [
  '/advisor team/Sonwabo-Modimoeng.jpg',
  '/advisor team/IMG_2463.jpg',
  '/advisor team/Raj-Ray.JPG',
  '/advisor team/DSCF3270-(2).jpg',
  '/advisor team/Phoevos-Pouroulis-CEO-Tharisa-plc-326-(1).jpg',
  '/advisor team/DDG-Ntokozo-Nzimande.jpg',
  '/advisor team/nere-emiko.jpg',
  '/advisor team/IMG_5284.jpg',
  '/advisor team/Photo-2.jpg',
  '/advisor team/mecktilder-mchomvu2.jpg',
  '/advisor team/240206-MarnaC_164-scaled.jpg',
  '/advisor team/Marie_Chantal-(2).jpg',
  '/advisor team/Kenny-Ives.jpg',
  '/advisor team/k2-mapasa.jpg',
  '/advisor team/joseph-starwood.jpg',
  '/advisor team/jill-cooper.jpg',
  '/advisor team/fabiana-di-lorenzo_1.jpg',
  '/advisor team/400x-estelle.jpg',
  '/advisor team/dsc_0507.jpg',
  '/advisor team/Stacy-Hope.jpg',
  '/advisor team/David-Sturmes-New-Image-2025.jpg',
  '/advisor team/clive-govender_1.jpg',
  '/advisor team/bronwyn-barn.jpg',
  '/advisor team/bothale-s-infra.jpg',
  '/advisor team/Bongi-Ntsoelengoe-Headshot.jpg',
  '/advisor team/Bokang-Kelepa-(2).JPG',
  '/advisor team/Indaba-Profile-pic.jpg',
  '/advisor team/Tim-o-connor-headshot.jpg',
  '/advisor team/thabani-mlilo-(1).jpg',
  // Potentially color images, added after potential black and white ones
  '/advisor team/sinead-kaufman.png',
  '/advisor team/rokhaya.png',
  '/advisor team/miguel.png',
  '/advisor team/marcus.png',
  '/advisor team/jonathan.png',
  '/advisor team/ime.png',
  '/advisor team/heidi.png',
  '/advisor team/Deshan-Naidoo.png',
  '/advisor team/ben-400.png',
  '/advisor team/alison.png',
  '/advisor team/veston.png',
];

let imageIndex = 0; // To cycle through images

const Team = () => {
  // Placeholder data for team members (replace with actual data later)
  const advisoryBoardMembers = [
    { image: '/advisor team/placeholder-advisory-1.png', name: 'Frans Baleni', title: 'Former General Secretary NUM' },
    { image: '/advisor team/placeholder-advisory-2.png', name: 'Dr. Marit Kitaw', title: 'Interim Director African Union-\nAfrican Minerals Development\nCenter (AMDC)' },
    { image: '/advisor team/placeholder-advisory-3.png', name: 'Kwasi Ampofo', title: 'Head of Metals and Mining\nBloombergNEF' },
  ];

  // Generate random data for executive team, only replacing placeholders
  const executiveTeamMembers = [
    { image: '/advisor team/placeholder-executive-1.png', name: 'Laura Cornish', title: 'Content and Communities Director' },
    { image: '/advisor team/placeholder-executive-2.png', name: 'Zeinab El-Sayed', title: 'Head of Government Partnerships' },
    { image: '/advisor team/placeholder-executive-3.png', name: 'Collen Dlamini', title: 'Head of Public Affairs South Africa' },
    ...Array(7).fill(null).map(() => ({
      image: imageFiles[imageIndex++ % imageFiles.length],
      name: `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`,
      title: `${getRandomElement(titles)}`,
    })),
  ];

  const governmentPartnershipsMembers = [
    { image: '/advisor team/placeholder-govt-1.png', name: 'Zeinab El-Sayed', title: 'Head of Government Partnerships' },
    { image: '/advisor team/placeholder-govt-2.png', name: 'Susan Chifundo Maliya', title: 'Government Relations Lead' },
  ];

  // Generate random data for content team, only replacing placeholders
  const contentTeamMembers = [
    { image: '/advisor team/placeholder-content-1.png', name: 'Laura Cornish', title: 'Content and Communities Director' },
    { image: '/advisor team/placeholder-content-2.png', name: 'Ahmed Ouguenoune', title: 'Senior Content Producer' },
    { image: '/advisor team/placeholder-content-3.png', name: 'Chanel Burke', title: 'Senior Comms Manager' },
    ...Array(2).fill(null).map(() => ({
      image: imageFiles[imageIndex++ % imageFiles.length],
      name: `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`,
      title: `${getRandomElement(titles)}`,
    })),
  ];

  // Generate random data for commercial team, only replacing placeholders
  const commercialTeamMembers = [
    { image: '/advisor team/placeholder-commercial-1.png', name: 'Fred Noce', title: 'VP of Commercial & Business\nDevelopment' },
    { image: '/advisor team/placeholder-commercial-2.png', name: 'Alfonso Jugo', title: 'Key Account Director\nWest Africa, East Africa, Central Africa,\nNorth Africa, Americas & Asia' },
    { image: '/advisor team/placeholder-commercial-3.png', name: 'Nathan Hirsch', title: 'Key Account Director\nSouth Africa' },
    ...Array(1).fill(null).map(() => ({
      image: imageFiles[imageIndex++ % imageFiles.length],
      name: `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`,
      title: `${getRandomElement(titles)}`,
    })),
  ];

  return (
    <div>
      <TeamHeroSection />
      <div className="pt-40">
        <TeamMemberListSection title="Advisory Board" members={advisoryBoardMembers} />
        <TeamMemberListSection title="Executive team" members={executiveTeamMembers} />
        <TeamMemberListSection title="Government Partnerships" members={governmentPartnershipsMembers} />
        <TeamMemberListSection title="Content Team" members={contentTeamMembers} />
        <TeamMemberListSection title="Commercial team" members={commercialTeamMembers} />
        <TeamSponsorExhibitSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Team; 