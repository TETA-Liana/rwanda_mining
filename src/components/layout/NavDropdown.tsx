import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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

const NavDropdown: React.FC<NavDropdownProps> = ({ item, depth = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const dropdownPosition = depth === 0 ? "left-0 top-full" : "left-full top-0";

  const renderItemContent = () => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;

    return hasChildren ? (
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
    ) : (
      <Link
        to={item.to || "#"}
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#64a63a] hover:text-white"
      >
        {item.label}
      </Link>
    );
  };

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderItemContent()}

      {hasChildren && (
        <div
          className={`absolute ${dropdownPosition} mt-0 w-60 bg-white shadow-lg rounded-md z-50 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none border border-gray-300`}
        >
          <div className="py-1">
            {item.children!.map((child, index) => (
              <div key={child.label} className="relative group">
                {Array.isArray(child.children) && child.children.length > 0 ? (
                  <NavDropdown item={child} depth={depth + 1} />
                ) : (
                  <Link
                    to={child.to || "#"}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#64a63a] hover:text-white"
                  >
                    {child.label}
                  </Link>
                )}
                {index < item.children!.length - 1 && (
                  <div className="h-px bg-gray-200"></div>
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
