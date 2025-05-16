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
      className='h-screen bg-black p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 overflow-hidden'
    >
      <div 
        id='page-in' 
        className='relative shadow-xl sm:pb-4 md:pb-6 shadow-gray-700 h-[calc(100vh-0.5rem)] sm:h-[calc(100vh-1rem)] md:h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] xl:h-[calc(100vh-4rem)] w-full rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[40px] overflow-hidden'
      >
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-[url('/profile img.jpg')] bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1)',
            width: '100%',
            height: '100%'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Content Container */}
        <div className="relative z-50 h-full w-full flex flex-col">
          {/* Logo */}
          <div className="flex-none">
            <img 
              className='h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 w-auto ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-12 hover:scale-105 transition-transform duration-300' 
              src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f1c650_35a00b1fe6ce403eb237970ec8d34f79%7Emv2.png" 
              alt="logo" 
            />
          </div>

          {/* Main Content - Split Layout */}
          <div className="flex-grow flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            {/* Left Side - Text Content */}
            <div className="transform-gpu perspective-1000 w-1/2">
              <TiltText abc={tiltRef} />
            </div>

            {/* Right Side - Profile Image */}
            <div className="w-1/2 flex justify-center items-center">
              <div className="relative group h-[60vh] w-[80%] flex items-center justify-center border-2 border-gray-700/50 rounded-[30px] overflow-hidden">
                <img 
                  src="/profile img.jpg" 
                  alt="Sanju's Profile" 
                  className="h-full w-full object-cover rounded-[25px] border-2 border-gray-600/30 transform transition-all duration-500 group-hover:scale-[1.02] group-hover:border-gray-500/50"
                />
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex-none sm:mt-10 md:mt-12 xl:mt-16">
            <Page1Bottom />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
