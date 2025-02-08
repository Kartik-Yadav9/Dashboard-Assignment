import React, { useState } from "react";
import {
  FaSuitcase,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUser,
  FaBullhorn,
  FaVideo,
  FaCode,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-red-600 text-white w-60 h-screen py-4 px-[7px]">
      <ul>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaHome className="mr-2 text-xl" />
            <span>Dashboard</span>
          </div>
        </li>
        <li className="mb-2">
          <div
            className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaSuitcase className="mr-2" />
            <span>Product Management</span>
            {isOpen ? <FaAngleUp className="ml-auto" /> : <FaAngleDown className="ml-auto" />}
          </div>
          {isOpen && (
            <ul className="ml-4 text-sm">
              <li className="mb-1 p-2 rounded hover:bg-red-700 cursor-pointer">
                Products
              </li>
              <li className="mb-1 p-2 rounded hover:bg-red-700 cursor-pointer">
                Create Product
              </li>
              <li className="mb-1 p-2 rounded hover:bg-red-700 cursor-pointer">
                Categories
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaShoppingCart className="mr-2" />
            <span>Merchant Management</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaUsers className="mr-2" />
            <span>Lead Management</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaUser className="mr-2" />
            <span>User Management</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaBullhorn className="mr-2" />
            <span>Banners</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaVideo className="mr-2" />
            <span>Training Management</span>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex items-center p-2 rounded hover:bg-red-700 cursor-pointer">
            <FaCode className="mr-2" />
            <span>Code Upload Management</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
