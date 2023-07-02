import React from 'react'

export default function Newsletter() {
  return (
    <>
      <section className=' py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 md:gap-16 items-center ">
          <div>
            <h2 className=' text-white text-3xl mb-4 lg:text-4xl '>Sign up for newsletter</h2>
            <p className=' text-gray-300'>Receive the latest updates, No spam, unsubscribe anytime!</p>
          </div>
          <div>
            <form>
              <input type="email" name="email" id="email" placeholder='example@gmail.com' required className='w-full py-2 px-4 rounded shadow mb-4  bg-[#d6eafa]   text-gray-800 tracking-wide placeholder-gray-500 '/>
              <button className=' text-white border  border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-8 rounded shadow  tracking-wide w-full hover:opacity-75 transition-all duration-200 md:w-auto   ' type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
