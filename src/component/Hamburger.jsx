import React, { useState } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

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
        <div className='absolute w-[60%]  top-16 right-0 h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <ul className='grid p-5 space-y-5 text-white mt-20'>
            <li
              className={`font-body cursor-pointer font-semibold text-gray-100   ${pathMatchRoute("/") && "text-white "}`}
              onClick={() => {
                navigate("/");
                handleClick(); // Close menu after clicking
              }}
            >
              Home
            </li>
            <li
              className={`cursor-pointer font-semibold text-gray-100  ${pathMatchRoute("/Blog") && "!text-white "}`}
              onClick={() => {
                navigate("/Blog");
                handleClick(); // Close menu after clicking
              }}
            >
              Blog
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
