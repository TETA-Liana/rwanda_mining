import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'
const TopBar = () => (
  <div className="bg-[#004F71] text-white text-sm py-2 px-4 sm:px-6 lg:px-16 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
    <span className="font-medium tracking-wide">
      Driving sustainable investment in African Mining
    </span>
    <div className="flex space-x-4 text-white text-lg">
      <a href="#" aria-label="Facebook" className="hover:text-gray-200 !text-white"><FaFacebookF /></a>
      <a href="#" aria-label="Instagram" className="hover:text-gray-200 !text-white"><FaInstagram /></a>
      <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 !text-white"><FaLinkedinIn /></a>
      <a href="#" aria-label="X" className="hover:text-gray-200 !text-white"><FaXTwitter /></a>
      <a href="#" aria-label="YouTube" className="hover:text-gray-200 !text-white"><FaYoutube /></a>
    </div>
  </div>
)
export default TopBar 