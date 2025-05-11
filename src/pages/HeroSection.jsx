import React, { useRef } from 'react'
import { useState } from 'react';
import Page1Bottom from '../components/Page1Bottom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TiltText from '../components/TiltText';

const HeroSection = () => {
  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    if (tiltRef.current) {
      const rect = tiltRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation values based on mouse position relative to center
      const xRotation = ((y - rect.height / 2) / rect.height) * 15; // Reduced to 15 degrees max
      const yRotation = ((x - rect.width / 2) / rect.width) * 15; // Reduced to 15 degrees max
      
      setXVal(-xRotation); // Inverted for natural movement
      setYVal(yRotation);
    }
  }

  useGSAP(function() {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        transform: `perspective(1000px) rotateX(${xVal}deg) rotateY(${yVal}deg)`,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
  }, [xVal, yVal])

  const handleMouseLeave = () => {
    setXVal(0);
    setYVal(0);
  }

  return (
    <div 
      id='Page1' 
      onMouseMove={mouseMoving}
      onMouseLeave={handleMouseLeave}
      className='h-screen bg-white p-2 sm:p-4 lg:p-6 xl:p-8 overflow-hidden'
    >
      <div 
        id='page-in' 
        className='relative shadow-xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-gray-700 h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] xl:h-[calc(100vh-4rem)] w-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] xl:rounded-[40px] overflow-hidden'
      >
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1338,h_860,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1)',
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
        
        {/* Content Container */}
        <div className="relative z-50 h-full w-full flex flex-col">
          {/* Logo */}
          <div className="flex-none">
            <img 
              className='h-12 sm:h-14 lg:h-16 xl:h-20 w-auto ml-4 sm:ml-6 lg:ml-8 xl:ml-12 mt-4 sm:mt-6 lg:mt-8 xl:mt-12 hover:scale-105 transition-transform duration-300' 
              src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f1c650_35a00b1fe6ce403eb237970ec8d34f79%7Emv2.png" 
              alt="logo" 
            />
          </div>

          {/* Main Content - Left Aligned */}
          <div className="flex-grow flex items-center">
            <div className="transform-gpu ml-4 sm:ml-6 lg:ml-8 xl:ml-12 perspective-1000 mt-[5vh] sm:mt-[6vh] lg:mt-[8vh] xl:mt-[10vh]">
              <TiltText abc={tiltRef} />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex-none">
            <Page1Bottom />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
