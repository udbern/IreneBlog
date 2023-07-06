import React from 'react'
import { motion } from "framer-motion"

function Hello() {
  return (
    <section className='max-w-7xl mx-auto px-4 font-Montaga'>
      <motion.h1
        className=" text-4xl md:text-6xl tracking-wide  py-10    "
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}>
        Welcome to my blog, 
        an exciting place 
        to read all your  Stories and 
        articles in just one click
      </motion.h1>
    </section>
  )
}

export default Hello
