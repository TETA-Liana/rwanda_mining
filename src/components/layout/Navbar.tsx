import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'
import NavDropdown from './NavDropdown'

// Define the nested navigation structure
const navigation = [
  { label: 'About', children: [
    { label: 'About Mining Indaba', to: '/about/mining-indaba', children: [
      { label: 'Meet the team', to: '/about/mining-indaba/team' },
      // Add other nested items for 'About Mining Indaba' as needed based on screenshot
    ]},
    { label: 'Strategic & Media Partners', to: '/about/partners' },
    { label: 'PR & Media', to: '/about/media' },
    { label: 'Sustainability Initiatives', to: '/about/sustainability' },
    { label: '2025 Highlights', to: '/about/highlights', children: [
      { label: 'Thursday Highlights', to: '/about/highlights/thursday' },
      { label: 'Wednesday Highlights', to: '/about/highlights/wednesday' },
      { label: 'Tuesday Highlights', to: '/about/highlights/tuesday' },
      { label: 'Monday Highlights', to: '/about/highlights/monday' },
      { label: 'Sunday Highlights', to: '/about/highlights/sunday' },
    ]},
    { label: 'Contact Us', to: '/about/contact' },
  ]},
  { label: 'Attend', to: '/attend', children: [
    { label: 'Why Attend', to: '/attend/why-attend', children: [
      { label: 'Exploration & Junior Mining Companies', to: '/attend/why-attend/exploration-junior' },
      { label: 'Majors & Mid-tiers', to: '/attend/why-attend/majors-mid-tiers' },
      { label: 'Mining Service Providers', to: '/attend/why-attend/mining-service-providers' },
      { label: 'Governments', to: '/attend/why-attend/governments' },
      { label: 'Investors', to: '/attend/why-attend/investors' },
      { label: 'Downstream Buyers', to: '/attend/why-attend/downstream-buyers' },
    ]},
    { label: 'Testimonials', to: '/attend/testimonials' },
    { label: '2025 Post Event Report', to: '/attend/post-event-report' },
    { label: 'Register Interest', to: '/attend/register-interest' },
    { label: 'Who Attends', to: '/attend/who-attends' },
    { label: 'Attendee Handbook', to: '/attend/handbook' },
    { label: 'Visas & Travel', to: '/attend/visas' },
    { label: 'Accommodation', to: '/attend/accommodation' },
  ]},
  { label: 'Exhibit or Sponsor', to: '/exhibit-sponsor', children: [
    { label: 'Why Exhibit or Sponsor', to: '/exhibit-sponsor/why' },
    { label: 'Exhibitor & Sponsor Handbook', to: '/exhibit-sponsor/handbook' },
    { label: 'Become an Exhibitor', to: '/exhibit-sponsor/become-exhibitor' },
    { label: 'Become a Sponsor', to: '/exhibit-sponsor/become-sponsor' },
    { label: 'Networking Opportunities', to: '/exhibit-sponsor/networking' },
  ]},
  { label: '2026 Theme & Advisory Board', to: '/theme-advisory' },
  { label: 'Content Hub', to: '/content-hub' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40 mt-8">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between py-4 shadow-lg">
        {/* Left: Logo & Event Info */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-4">
            <img
              className="h-20 w-auto"
              src="/mining_indaba_logo_1.png"
              alt="Mining Indaba"
            />
          </div>
        </div>

        {/* Right: Buttons & Nav Links */}
        <div className="flex flex-col md:flex-col md:items-end gap-4 w-full md:w-auto">
          {/* Buttons */}
          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <button className="bg-[#64a63a] hover:bg-[#5cb030] text-white font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
              EXHIBIT OR SPONSOR
            </button>
            <button className="bg-[#d4ed31] hover:bg-[#d4ed31] text-black font-bold px-6 py-2 rounded text-sm shadow-md uppercase tracking-wide">
              REGISTER INTEREST
            </button>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex gap-2 items-center justify-center w-full md:w-auto">
            {/* Home Icon Link */}
            <Link to="/" className="flex items-center px-3 py-2 rounded text-base font-medium hover:text-primary transition-colors">
              <img src="/home-icon.svg" alt="Home" className="h-5 w-5" />
            </Link>

            {/* Other Nav Links using NavDropdown */}
            {navigation.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 