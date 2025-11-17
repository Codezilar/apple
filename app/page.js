"use client"
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import ProductViewer from '@/components/ProductViewer'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'
import ShowCase from '@/components/ShowCase'
import Perfomance from '@/components/Perfomance'
import Features from '@/components/Features'
import HighLight from '@/components/HighLight'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Perfomance />
      <Features />
      <HighLight />
      <Footer />
    </main>
  )
}

export default page