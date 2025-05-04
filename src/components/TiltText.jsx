import React from "react";

const TiltText = (props) => {
    return(
        <div 
            id='tiltdiv' 
            ref={props.abc} 
            className="mt-20 transform-gpu"
        >
            <div>
                <h1 className="text-[4vw] leading-[2.5vw] uppercase font-[anzo3] text-black tracking-wider">
                    I am <span className="text-cyan-700">DARK MODE</span>™
                </h1>
            </div>
            
            <div className="relative mt-6">
                <h1 className="text-[6.5vw] leading-[7vw] font-[anzo2] text-black tracking-tight">
                    DESIGNER
                </h1>
                {/* <div className="absolute -bottom-1 left-0 w-24 h-[2px] bg-cyan-500"></div> */}
            </div>

            <div className="flex items-center gap-6 mt-2">
                <h1 className="text-[4vw] leading-[2.5vw] font-[anzo3] text-black">To</h1>
                <h1 className="text-[4vw] leading-[2.5vw] font-[anzo3] text-cyan-700">
                    Hire
                </h1>
            </div>
        </div>
    )
}

export default TiltText;