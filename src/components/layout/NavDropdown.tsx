import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface NavItem {
  label: string;
  to?: string;
  children?: NavItem[];
}

interface NavDropdownProps {
  item: NavItem;
  depth?: number;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const dropdownPosition = depth === 0 ? "left-0 top-full" : "left-full top-0";

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={
          item.label === "Exhibitor or Sponsor"
            ? "/exhibit-or-sponsor-why"
            : item.to || "#"
        }
        className={`flex items-center px-3 py-2 rounded text-base font-medium transition-colors ${
          hasChildren ? "cursor-pointer" : ""
        } text-gray-700 group-hover:text-[#2563eb]`}
      >
        {item.label}
        {hasChildren && (
          <ChevronRightIcon
            className={`ml-1 h-4 w-4 transition-transform group-hover:rotate-90`}
            aria-hidden="true"
          />
        )}
      </Link>
      {hasChildren && (
        <div
          className={`absolute ${dropdownPosition} mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-opacity duration-200 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-1">
            {item.children!.map((child) => (
              <div key={child.label} className="relative group">
                {Array.isArray(child.children) && child.children.length > 0 ? (
                  <NavDropdown item={child} depth={depth + 1} />
                ) : (
                  <Link
                    to={child.to || "#"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#2563eb] hover:text-white"
                  >
                    {child.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
