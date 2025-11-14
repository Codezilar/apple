"use client"
import React, { useEffect, useRef } from 'react'

const Hero = () => {

    const videoref = useRef();
    useEffect(() => {
        if(videoref.current) videoref.current.playbackRate = 2;
    }, [])
  return (
    <section id='hero'>
        <div>
            <h1>Macbook Pro</h1>
            <img src='/title.png' alt='title' />
        </div>
        <video ref={videoref} src="/videos/hero.mp4" autoPlay muted playsInline></video>
        <button>
            Buy
        </button>
        <p>From $1559 or $133/Mo for months</p>
    </section>
  )
}

export default Hero