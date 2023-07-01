import React from 'react'

function Footer() {
  return (
    <footer className=" capitalize border-t-2  mt-5 border-purple-800 max-w-6xl mx-auto py-10 flex items-center justify-center text-center flex-col    ">
        <h3 className="text-xl ">share on social media</h3>
      <ul className='text-sm text-gray-800 mt-4   flex justify-center flex-wrap gap-4 '>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Whatsapp</li>
      </ul>
      
    </footer>
  )
}

export default Footer