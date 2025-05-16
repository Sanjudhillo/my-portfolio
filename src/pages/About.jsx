import React from "react";

const About = () => {   
    return(
        <div className="min-h-screen w-full relative p-1 sm:p-2 md:p-4 lg:p-6 bg-black">
            <div className="relative h-[90vh] w-full bg-black rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[32px] overflow-hidden border-2 sm:border-3 lg:border-4 border-cyan-400/20">
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10"></div>
                <div className="absolute inset-0 bg-[url(/about.jpg)] bg-cover bg-center bg-fixed"></div>
                
                {/* Content Section */}
                <div className="relative z-20 h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="max-w-3xl text-center">
                        <h1 className="font-[anzo2] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white tracking-tight mb-4 sm:mb-6 md:mb-8 animate-fadeIn">
                            About
                        </h1>
                        
                        <div className="w-20 sm:w-24 md:w-32 h-1 bg-cyan-400 mx-auto mb-6 sm:mb-8 md:mb-10"></div>
                        
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wide leading-relaxed">
                            Passionate MERN-stack developer crafting impactful digital experiences that transcend ordinary design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;