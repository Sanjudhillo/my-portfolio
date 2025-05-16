import React from "react";

const Elegantproject = () => {
    return(
        <div className="min-h-screen p-1 sm:p-2 md:p-4 lg:p-6 bg-white relative">
            <div className="relative h-[90vh] w-full bg-black rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[32px] overflow-hidden border-2 sm:border-3 lg:border-4 border-cyan-400/20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 z-0"></div>
                <div className="absolute inset-0 bg-[url(/lady.avif)] bg-cover bg-center bg-no-repeat"></div>
                
                {/* Content Section */}
                <div className="relative z-10 h-full flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-8">
                    {/* Top Content */}
                    <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 pl-1 sm:pl-2 md:pl-4 lg:pl-6">
                        {/* Enhanced Heading Section */}
                        <div className="group">
                            <h1 className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] font-[anzo3] text-white tracking-tight transform transition-all duration-500 group-hover:translate-x-2">[ ELEGANT ]</h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[anzo2] text-gray-300 transform transition-all duration-500 group-hover:translate-x-2 group-hover:text-white">ELEGANT | ANIMATED | USER-FOCUSED</p>
                        </div>
                        
                        {/* Enhanced Paragraph Section */}
                        <div className="group relative">
                            <div className="absolute -left-1 sm:-left-2 md:-left-3 lg:-left-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <p className="text-gray-300 w-full sm:w-[80%] md:w-[60%] lg:w-[45%] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed transform transition-all duration-500 group-hover:translate-x-4 group-hover:text-white">
                                Ochi Design needed a sleek, modern web experience that reflected their bold identity — a balance of striking visuals and refined functionality. The goal: create an immersive, high-performance design site that feels powerful yet effortless.
                            </p>
                            <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-200"></div>
                        </div>

                        {/* Enhanced Button Section */}
                        <div className="group relative">
                            <div className="absolute -left-1 sm:-left-2 md:-left-3 lg:-left-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                            <a 
                                href="https://ochi-design-2vlu.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-3xl bg-transparent border-2 border-white px-4 sm:px-6 md:px-8 lg:px-20 py-1 sm:py-2 md:py-2 lg:py-2 uppercase font-[anzo2] text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:border-black transform group-hover:translate-x-4 text-xs sm:text-sm md:text-base lg:text-lg inline-block"
                            >
                                <span className="relative z-10">ochi design</span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></div>
                            </a>
                            <div className="absolute -right-1 sm:-right-2 md:-right-3 lg:-right-4 top-0 h-full w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom delay-200"></div>
                        </div>
                    </div>

                    {/* Device Images - Responsive Positioning */}
                    <div className="relative h-full">
                        <div className="absolute bottom-[2vh] right-[5vw] sm:right-[8vw] md:right-[10vw] lg:right-[13vw] transform transition-transform duration-300 hover:scale-105 z-50">
                            <img 
                                className="h-[15vh] sm:h-[18vh] md:h-[22vh] lg:h-[28vh] object-contain" 
                                src="https://static.wixstatic.com/media/f1c650_bbfc02bc3d9e46a99a60a2ae2857e656~mv2.png/v1/fill/w_410,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/I%20PAD%20(3).png" 
                                alt="iPad Design" 
                            />
                        </div>
                        <div className="absolute bottom-[8vh] right-[2vw] sm:right-[3vw] md:right-[4vw] lg:right-[4vw] transform transition-transform duration-300 hover:scale-105 z-10">
                            <img 
                                className="h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] object-contain" 
                                src="https://static.wixstatic.com/media/f1c650_291a9a552504490c8842a00ea0cbedaa~mv2.png/v1/fill/w_597,h_447,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AIR%20V.png" 
                                alt="Air Design" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elegantproject;