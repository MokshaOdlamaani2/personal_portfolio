import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = "px-5 py-3 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out cursor-pointer select-none";
  const activeClass = "bg-[#CA7842] text-[#4B352A] shadow-md scale-105";
  const inactiveClass = "text-[#F0F2BD] hover:bg-[#00879E] hover:text-white";

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#4F1C51] bg-opacity-95 backdrop-blur-md shadow-xl z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <div className="text-2xl font-bold text-[#F0F2BD] font-serif">Portfolio</div>

        <div className="md:hidden text-[#F0F2BD] text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <div className="hidden md:flex space-x-6">
          {routes.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center space-y-3 pb-4 md:hidden">
          {routes.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseClass} w-full text-center ${isActive ? activeClass : inactiveClass}`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
