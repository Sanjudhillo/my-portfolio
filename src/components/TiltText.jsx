import React from "react";

const TiltText = (props) => {
    return(
        <div 
            id='tiltdiv' 
            ref={props.abc} 
            className="mt-[18vh] transform-gpu"
        >
            <div>
                <h1 className="text-[3vw] leading-[2vw] uppercase font-[anzo3] text-white tracking-wide">
                    Creating <span className="text-cyan-400">Digital</span> Magic
                </h1>
            </div>
            
            <div className="relative mt-3">
                <h1 className="text-[4.5vw] leading-[5vw] font-[anzo2] text-white tracking-tight">
                    FULL STACK
                </h1>
                <div className="absolute -right-2 -top-2 text-[1.2vw] text-cyan-400 font-[anzo1]">™</div>
            </div>

            <div className="flex items-center gap-3 mt-2">
                <h1 className="text-[2.8vw] leading-[2vw] font-[anzo3] text-gray-300">
                    <span className="text-cyan-400">&lt;</span>
                    Code
                    <span className="text-cyan-400">/&gt;</span>
                </h1>
                <h1 className="text-[2.8vw] leading-[2vw] font-[anzo3] text-white">
                    With Style
                </h1>
            </div>
        </div>
    )
}

export default TiltText;