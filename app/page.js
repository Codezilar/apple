"use client"
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import ProductViewer from '@/components/ProductViewer'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default page