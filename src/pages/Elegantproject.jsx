import React from "react";

const Elegantproject = () => {
    return(
        <div className="h-screen p-5 bg-white relative">
            <div className="relative h-full w-full bg-black rounded-[32px] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 z-0"></div>
                <div className="absolute inset-0 bg-[url(src/assets/lady.avif)] bg-cover bg-center "></div>
                
                {/* Content Section */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    {/* Top Content */}
                    <div className="space-y-6 pl-6">
                        {/* Enhanced Heading Section */}
                        <div className="group">
                            <h1 className="text-[8vw] font-[anzo3] text-white tracking-tight transform transition-all duration-500 group-hover:translate-x-2">[ ELEGANT ]</h1>
                            <p className="text-xl font-[anzo2] text-gray-300 transform transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">ELEGANT | ANIMATED | USER-FOCUSED</p>
                        </div>
                        
                        {/* Enhanced Paragraph Section */}
                        <div className="group relative">
                            <div className="absolute -left-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <p className="text-gray-300 w-[30vw] leading-relaxed transform transition-all duration-500 group-hover:translate-x-4 group-hover:text-white">
                                Ochi Design needed a sleek, modern web experience that reflected their bold identity — a balance of striking visuals and refined functionality. The goal: create an immersive, high-performance design site that feels powerful yet effortless.
                            </p>
                            <div className="absolute -right-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-200"></div>
                        </div>

                        {/* Enhanced Button Section */}
                        <div className="group relative ">
                            <div className="absolute -left-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <button className="rounded-3xl bg-transparent border-2 border-white px-20 py-2 uppercase font-[anzo2] 
                                text-white hover:bg-white hover:text-black transition-all duration-300 
                                hover:scale-105 hover:border-black transform group-hover:translate-x-4">
                                <span className="relative z-10">ochi design</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></div>
                            </button>
                            <div className="absolute -right-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-200"></div>
                        </div>
                    </div>

                    {/* Device Images - Original Positioning */}
                    <div className="absolute bottom-[10vh] right-[34vh] z-10 transform transition-transform duration-300 hover:scale-105">
                        <img 
                            className="h-[34vh]" 
                            src="https://static.wixstatic.com/media/f1c650_bbfc02bc3d9e46a99a60a2ae2857e656~mv2.png/v1/fill/w_410,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/I%20PAD%20(3).png" 
                            alt="iPad Design" 
                        />
                    </div>
                    <div className="absolute bottom-[22vh] right-[6vh] transform transition-transform duration-300 hover:scale-105">
                        <img 
                            className="h-[55vh]" 
                            src="https://static.wixstatic.com/media/f1c650_291a9a552504490c8842a00ea0cbedaa~mv2.png/v1/fill/w_597,h_447,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AIR%20V.png" 
                            alt="Air Design" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elegantproject;