import { useGSAP } from "@gsap/react";
import React, { use } from "react";
import gsap from "gsap";

const Page1Bottom = () => {
    useGSAP(function(){
        gsap.to("#banner", {
            rotation: 360,
            duration: 5,
            ease: "none",
            repeat: -1,
            transformOrigin: "center center"
        });
    })
    return(
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            <div className="flex items-end justify-between">
                <div className="space-y-1 sm:space-y-2 md:space-y-3">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-[anzo3] text-white">FULL STACK DEV | WEB DESIGN</h2>
                    <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-[anzo1] text-gray-300">FREELANCE DEVELOPER</h3>
                </div>
                <div className="flex flex-col items-end gap-2 sm:gap-3 md:gap-4">
                    <img 
                        id="banner" 
                        className="h-[8vh] sm:h-[10vh] md:h-[12vh] lg:h-[14vh] xl:h-[16vh] w-auto hover:scale-110 transition-transform duration-300" 
                        src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" 
                        alt="" 
                    />
                    <img 
                        id="banner" 
                        className="h-[8vh] sm:h-[10vh] md:h-[12vh] lg:h-[14vh] xl:h-[16vh] w-auto hover:scale-110 transition-transform duration-300" 
                        src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" 
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )}

export default Page1Bottom;