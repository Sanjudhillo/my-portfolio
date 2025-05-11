import React from "react";

const TiltText = (props) => {
    return(
        <div 
            id='tiltdiv' 
            ref={props.abc} 
            className="transform-gpu"
        >
            <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-[2vw] uppercase font-[anzo3] text-white tracking-wide">
                    Creating <span className="text-cyan-400">Digital</span> Magic
                </h1>
            </div>
            
            <div className="relative mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-[5vw] font-[anzo2] text-white tracking-tight">
                    FULL STACK
                </h1>
                <div className="absolute -right-1 sm:-right-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-cyan-400 font-[anzo1]">™</div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-6">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-[2vw] font-[anzo3] text-gray-300">
                    <span className="text-cyan-400">&lt;</span>
                    Code
                    <span className="text-cyan-400">/&gt;</span>
                </h1>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-[2vw] font-[anzo3] text-white">
                    With Style
                </h1>
            </div>
        </div>
    )
}

export default TiltText;