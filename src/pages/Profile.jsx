import React from "react";

const Profile = () => {
    return(
        <div className="h-screen relative p-5 bg-[#F8F9FA]">
            <div className="relative flex h-full w-full bg-black rounded-[32px] overflow-hidden">
                {/* Background Video */}
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="absolute h-full w-full object-cover opacity-40"
                    src="/star.mp4"
                ></video>

                {/* Content Container */}
                <div className="relative z-10 flex items-center justify-between w-full px-8">
                    {/* Left Section - Profile Image */}
                    <div className="w-1/3 flex justify-center">
                        <div className="relative group">
                            <img 
                                src="/myImage.jpg" 
                                alt="Sanju's Profile" 
                                className="rounded-full h-[45vh] border-4 border-white/70 transition-all duration-300 group-hover:scale-105 group-hover:border-white" 
                            />
                            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className="w-2/3 text-white space-y-6 pl-8">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold uppercase tracking-wider">
                                Hi, I'm <span className="text-white group-hover:text-gray-200 transition-colors">Sanju</span>
                            </h1>
                            <p className="text-2xl text-gray-300 group-hover:text-white transition-colors">Passionate MERN Stack Developer</p>
                        </div>

                        <div className="space-y-4 text-lg">
                            <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 group-hover:bg-gray-200 transition-all"></div>
                                <p className="text-gray-300 group-hover:text-white transition-colors">
                                    2022-26 - Pursuing B.Tech(CSE-AI) from OM STERLING GLOBAL UNIVERSITY (HISAR)
                                </p>
                            </div>
                            
                            <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 group-hover:bg-gray-200 transition-all"></div>
                                <p className="text-gray-300 group-hover:text-white transition-colors">
                                    2024 - Internship on web development at TCB-HISAR (Aug-Sep)
                                </p>
                            </div>
                            
                            <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 group-hover:bg-gray-200 transition-all"></div>
                                <p className="text-gray-300 group-hover:text-white transition-colors">
                                    2021-22 - Senior secondary education from L.B.S school(Hisar)
                                </p>
                            </div>
                            
                            <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 group-hover:bg-gray-200 transition-all"></div>
                                <p className="text-gray-300 group-hover:text-white transition-colors">
                                    2019-20 - Secondary education from L.B.S school(Hisar)
                                </p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="border-2 border-white/70 px-10 py-2 rounded-full uppercase 
                                hover:bg-white/20 hover:text-white hover:scale-105 hover:border-white
                                transition-all duration-300 font-semibold">
                                Place a Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;