import React, { useState } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className=''>
      <div className='md:hidden relative'>
        {isOpen ? (
          <HiMenuAlt3
            className='cursor-pointer'
            onClick={handleClick}
          />
        ) : (
          <HiMenu
            className='cursor-pointer'
            onClick={handleClick}
          />
        )}
      </div>
      {isOpen && (
        <motion.div className='absolute w-56 top-[68px] right-0 h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        initial={{y:-250}}
        animate={{y:0}}>
          <ul className='grid items-center justify-start mt-20 p-5 space-y-5 text-white'>
            <li
              className={`font-body cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute("/") && "text-white !border-b-gray-100"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute("/Blog") && "!text-white !border-b-gray-100"}`}
              onClick={() => navigate("/Blog")}
            >
              Blog
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Hamburger;
