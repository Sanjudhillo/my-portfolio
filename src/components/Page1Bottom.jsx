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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10 xl:py-12">
            <div className="flex items-end justify-between">
                <div className="space-y-2 sm:space-y-3">
                    <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-[anzo3] text-white">FULL STACK DEV | WEB DESIGN</h2>
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-[anzo1] text-gray-300">FREELANCE DEVELOPER</h3>
                </div>
                <div className="flex flex-col items-end gap-3 sm:gap-4">
                    <img 
                        id="banner" 
                        className="h-[10vh] sm:h-[12vh] lg:h-[14vh] xl:h-[16vh] w-auto hover:scale-110 transition-transform duration-300" 
                        src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" 
                        alt="" 
                    />
                    <img 
                        id="banner" 
                        className="h-[10vh] sm:h-[12vh] lg:h-[14vh] xl:h-[16vh] w-auto hover:scale-110 transition-transform duration-300" 
                        src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" 
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )}

export default Page1Bottom;