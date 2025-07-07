<<<<<<< HEAD
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
>>>>>>> 62931182f38edd52392a50aeb38651255909b2a4

interface NavItem {
  label: string;
  to?: string;
  dropdown?: boolean;
  children?: NavItem[];
}

interface NavDropdownProps {
  item: NavItem;
  depth?: number;
}

<<<<<<< HEAD
const NavDropdown: React.FC<NavDropdownProps> = ({ item }) => {
  return (
    <div className="relative group">
      <Link
        to={item.to}
        className={`flex items-center px-3 py-2 rounded text-base font-medium transition-colors ${item.children ? 'cursor-pointer' : ''} text-gray-700 group-hover:text-primary`}
      >
        {item.label}
        {item.children && (
          <ChevronRightIcon
            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-90`}
            aria-hidden="true"
          />
        )}
      </Link>
=======
const NavDropdown: React.FC<NavDropdownProps> = ({ item, depth = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dropdownPosition = depth === 0 ? "left-0 top-full" : "left-full top-0";

  const renderItemContent = () => {
    if (item.children) {
      return (
        <Link
          to={item.to || "#"}
          className={`flex items-center justify-between px-4 py-2 text-sm font-medium ${
            isHovered ? "bg-[#64a63a] text-white" : "text-gray-800"
          }`}
        >
          {item.label}
          <ChevronRightIcon
            className={`ml-2 h-4 w-4 text-gray-400 transition-transform ${
              isHovered ? "rotate-90 text-white" : "text-gray-400"
            }`}
          />
        </Link>
      );
    } else {
      return (
        <Link
          to={item.to || "#"}
          className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#64a63a] hover:text-white"
        >
          {item.label}
        </Link>
      );
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderItemContent()}
>>>>>>> 62931182f38edd52392a50aeb38651255909b2a4

      {item.children && (
        <div
          className={`absolute ${dropdownPosition} mt-0 w-60 bg-white shadow-lg rounded-md z-50 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none border border-gray-300`}
        >
          <div className="py-1">
<<<<<<< HEAD
            {item.children.map((childItem) => (
              // Render as a link if no children, otherwise recurse
              <div key={childItem.label} className="relative group">
                {childItem.children ? (
                  <NavDropdown item={childItem} />
                ) : (
                  <Link
                    to={childItem.to}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                  >
                    {childItem.label}
                  </Link>
                )}
=======
            {item.children.map((child, index) => (
              <div key={child.label}>
                {child.children ? (
                  <NavDropdown
                    key={child.label}
                    item={child}
                    depth={depth + 1}
                  />
                ) : (
                  <Link
                    key={child.label}
                    to={child.to || "#"}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#64a63a] hover:text-white"
                  >
                    {child.label}
                  </Link>
                )}
                {index < item.children!.length - 1 && (
                  <div className="h-px bg-gray-200"></div>
                )}
>>>>>>> 62931182f38edd52392a50aeb38651255909b2a4
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
