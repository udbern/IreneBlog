import React from 'react'
import Hello from "../component/Hello"
import About from "../component/About"
import Popular from "../component/Popular"
import Newsletter  from '../component/Newsletter'

export default function Home() {
  return (
    <>
      <Hello/>
      <About/>
      <Popular/>
      <Newsletter/>
    </>
  )
}

