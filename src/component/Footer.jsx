import React from 'react';
import {LInk} from 'react-router-dom'

function Footer() {
  return (
    <footer className=" sticky bott0m-0 capitalize border-t-2  mt-5 border-indigo-500   max-w-6xl mx-auto py-5 flex items-center justify-center text-center flex-col    ">
        <h3 className="text-xl ">share on social media</h3>
      <ul className='text-[12px] md:text-sm text-gray-800 mt-4    flex justify-center flex-wrap gap-4 '>
        <lInk to="https//www.facebook.com">
          <li className=' text-[12px]  cursor-pointer'>Facebook</li>
        </lInk>
        <li className=''>Facebook</li>
        <li className=''>Instagram</li>
        <li className=''>Twitter</li>
        <li className=''>Whatsapp</li>
      </ul>
      
    </footer>
  )
}

export default Footer