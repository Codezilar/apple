import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import ProductViewer from '@/components/ProductViewer'
import React from 'react'

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