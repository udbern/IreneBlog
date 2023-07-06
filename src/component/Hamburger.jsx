import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className=''>
      <div className='md:hidden relative' ref={menuRef}>
        {isOpen ? (
          <HiMenuAlt3 className='cursor-pointer' onClick={handleClick} />
        ) : (
          <HiMenu className='cursor-pointer' onClick={handleClick} />
        )}
      </div>
      {isOpen && (
        <motion.div className='absolute w-full top-16 right-0 h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          initial={{ y: -250 }}
          animate={{ y: 0 }}>
          <ul className='grid items-center justify-center mt-20 p-5 space-y-5 rounded text-white'>
            <li
              className={`font-body cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute('/') ? 'text-white !border-b-gray-100' : ''
                }`}
              onClick={() => {
                navigate('/');
                handleLinkClick();
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer font-semibold text-gray-100 border-b-2 b border-b-transparent ${pathMatchRoute('/Blog') ? '!text-white !border-b-gray-100' : ''
                }`}
              onClick={() => {
                navigate('/Blog');
                handleLinkClick();
              }}
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
