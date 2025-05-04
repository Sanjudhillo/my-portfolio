import { useGSAP } from "@gsap/react";
import React, { use } from "react";
import gsap from "gsap";

const Page1Bottom = () => {
    useGSAP(function(){
        gsap.to("#banner", {
            rotation: 360,
            duration: 5,
            ease: "linear",
            repeat: -1,
        });
    })
    return(
        <div className="absolute left-0 p-17 flex items-end justify-between bottom-0 w-full ">
            <div>
                <h2 className="text-2xl font-[anzo3]">BRAND DESIGN | WEBSITE DESIGN </h2>
                   <h3 className="text-2xl font-[anzo1] text-gray-400">BESPOKE FREELANCE</h3>
            </div>
            <div>
                <img id="banner" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
                <img className="h-22 mt-2" id="banner" src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
            </div>
        </div>
    )}
export default Page1Bottom;