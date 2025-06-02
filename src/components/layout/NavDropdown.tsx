import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

interface NavItem {
  label: string;
  to: string;
  dropdown?: boolean;
  children?: NavItem[];
}

interface NavDropdownProps {
  item: NavItem;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle dropdown toggle on hover for desktop
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (item.children) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Keep dropdown open if still hovering over the dropdown content
    // This is handled by Tailwind's group-hover classes on the parent div
  };

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        to={item.to}
        className={`flex items-center px-3 py-2 rounded text-base font-medium transition-colors ${item.children ? 'cursor-pointer' : ''} ${isHovered ? 'text-primary' : 'text-gray-700'}`}
      >
        {item.label}
        {item.children && (
          <ChevronRightIcon
            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-90`}
            aria-hidden="true"
          />
        )}
      </Link>

      {/* Dropdown menu */}
      {item.children && (
        <div className="absolute left-0 top-full mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
          <div className="py-1">
            {item.children.map((childItem) => (
              // Render as a link if no children, otherwise recurse
              childItem.children ? (
                <NavDropdown key={childItem.label} item={childItem} />
              ) : (
                <Link
                  key={childItem.label}
                  to={childItem.to}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                >
                  {childItem.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown; 