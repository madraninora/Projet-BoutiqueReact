import React from 'react';
import { Link } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "STORE" },
  { label: "ACCESSORIES" },
  { label: "BRAND" },
  { label: "PAGES" },
  { label: "ABOUT US", to: "/about" },
  { label: "NEWS" },
  { label: "CONTACT US", to: "/contact" }
];

const NavigationBar = () => {
  return (
    <nav className="w-full bg-navbar">
      {/* Navigation Menu */}
      <div className="flex items-center justify-center py-4">
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.to ? (
                <Link
                  to={item.to}
                  className="text-navbar-foreground font-bold text-sm hover:text-navbar-accent transition-colors duration-200 hover:bg-navbar-hover px-3 py-2 rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-navbar-foreground font-bold text-sm px-3 py-2 rounded cursor-default">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Separator line 90% width */}
      <div className="flex justify-center">
        <div className="w-[90%] h-px bg-navbar-border border-t-1 my-1 border-gray-500 "></div>
      </div>
    </nav>
  );
};

export default NavigationBar;