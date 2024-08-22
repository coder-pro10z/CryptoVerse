import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaInfo,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaBeer,
} from "react-icons/fa";
import { appname } from "../pages/Home";

interface SideBarProps {
  isExpanded: boolean;
  onToggle: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ isExpanded, onToggle }) => {

  const menuItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/profile", label: "Profile", icon: <FaUser /> },
    { to: "/settings", label: "Settings", icon: <FaCog /> },
    { to: "/about", label: "About", icon: <FaInfo /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <div
      className={`h-full fixed top-20 left-0 ${
        isExpanded ? "w-64" : "w-20"
      } bg-gray-800 text-white transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="font-bold text-xl">
          {isExpanded ?<>{appname}</> : <FaBeer />}{" "}
          {/* Replace FaBeer with your icon */}
        </span>
        <button onClick={onToggle} className="focus:outline-none">
          {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <span className="mr-2">{item.icon}</span>
            {isExpanded && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
