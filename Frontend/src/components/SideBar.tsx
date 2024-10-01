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
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import icon from "../assets/images/cryptoverse.png";

interface SideBarProps {
  isExpanded: boolean;
  onToggle: () => void;
}
const SideBar: React.FC<SideBarProps> = ({ isExpanded, onToggle }) => {
  const menuItems = [
    { to: "/", label: "Home", icon: <HomeOutlined /> },
    {
      to: "/cryptocurrencies",
      label: "Cryptocurrencies",
      icon: <FundOutlined />,
    },
    // { to: "/", label: "CryptoDetails", icon: < /> },
    // { to: "/exchanges", label: "Exchanges", icon: <MoneyCollectOutlined /> },
    { to: "/news", label: "News", icon: <BulbOutlined /> },
    // { to: "/profile", label: "Profile", icon: <FaUser /> },
    // { to: "/settings", label: "Settings", icon: <FaCog /> },
    // { to: "/about", label: "About", icon: <FaInfo /> },
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
          {isExpanded ? (
            // <div className="flex items-center text-white">
            //   <Avatar src={icon} />
            //   <Typography.Title level={2} className="logo text-white">
            //     {appname}
            //   </Typography.Title>
            // </div>
            <div className="flex items-center text-white">
              <Avatar
                src={icon}
                style={{ backgroundColor: "transparent", filter: "invert(1)" }}
              />
              <Typography.Title
                level={2}
                className="logo text-white"
                style={{ margin: 0, color: "white" }}
              >
                {appname}
              </Typography.Title>
            </div>
          ) : (
            // <FaBeer />
            <Avatar
              src={icon}
              style={{ backgroundColor: "transparent", filter: "invert(1)" }}
            />
          )}{" "}
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
