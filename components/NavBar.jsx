"use client"
import { nav } from '@/data'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src={'/logo.svg'} alt='logo' />
            <ul>
                {nav.map((link) => (
                    <Link href={''} key={link.label}>
                        {link.label}
                    </Link>
                ))}
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src='/search.svg' alt='search' />
                </button>
                <button> 
                    <img src='/cart.svg' alt='cart' />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
