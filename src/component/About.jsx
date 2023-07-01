import React from 'react';
import Irene from "../Irene.png";
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

function About() {
  return (
    <section className='mx-5 ' >
      <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center justify-center gap-8 bg-gray-100 rounded-lg  md:place-items-center overflow-hidden shadow-md shadow-indigo-300'>
        <div className="" id="about">
          <img className="md:h-72 md:object-cover " src={Irene} alt="author.png"
            loading="lazy" />
        </div>
        <div>
          <h1 className=" text-2xl px-2   mb-4   tracking-wide font-Montaga  ">
            I'm Irene Fabian Ekpo , from Akwa Ibom State Nigeria , a fascinating individual with a wealth of life experience
            and a passion for writing.
          </h1>
          <ul className='flex items-center justify-start gap-4 mt-4 mb-4  px-2 '>
            <li> <AiFillFacebook className='text-2xl text-blue-gray-800 hover:text-[#4267B2] transition-all  duration-200' /> </li>
            <li><AiFillInstagram className='text-2xl text-blue-gray-800 hover:text-[#E1306C]  transition-all  duration-200 ' /></li>
            <li><AiFillTwitterCircle className='text-2xl text-blue-gray-800 hover:text-[#1DA1F2] transition-all  duration-200' /></li>
            <li>< FaWhatsappSquare className='text-2xl text-blue-gray-800 hover:text-[#25D366] transition-all  duration-200' /></li>
          </ul>
        </div>
      </div>
      
      
       
    </section>
  )
}

export default About