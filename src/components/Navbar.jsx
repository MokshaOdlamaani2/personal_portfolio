import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const baseClass = 
    "px-5 py-3 text-lg font-semibold rounded-md transition-all duration-300 ease-in-out cursor-pointer select-none";

  const activeClass = 
    "bg-[#CA7842] text-[#4B352A] shadow-md scale-105";

  const inactiveClass = 
    "text-[#F0F2BD] hover:bg-[#00879E] hover:text-white";

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#4F1C51] bg-opacity-95 backdrop-blur-md shadow-xl z-50 flex justify-center space-x-8 py-4 font-serif tracking-wide">
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
    </nav>
  );
};

export default Navbar;
