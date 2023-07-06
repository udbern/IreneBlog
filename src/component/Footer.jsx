import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" sticky bott0m-0 capitalize border-t-2  mt-5 border-indigo-500   max-w-6xl mx-auto py-5 flex items-center justify-center text-center flex-col    ">
        <h3 className="text-xl ">share on social media</h3>
      <ul className='  text-gray-800 mt-4    flex justify-center flex-wrap gap-4 '>
        <Link>
          <li className='text-[12px] md:text-[20px]  hover:text-black transition-all duration-300 ease-in-out '>Facebook</li>
        </Link>
        <Link>
          <li className='text-[12px] md:text-[20px]  hover:text-black transition-all duration-300 ease-in-out '>Instagram</li>
        </Link>
        <Link>
          <li className='text-[12px] md:text-[20px]  hover:text-black transition-all duration-300 ease-in-out '>Twitter</li>
        </Link>
        <Link>
          <li className='text-[12px] md:text-[20px] hover:text-black transition-all duration-300 ease-in-out '>Whatsapp</li>
        </Link>
      </ul>
      
    </footer>
  )
}

export default Footer