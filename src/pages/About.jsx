import React from "react";

const About = () => {   
    return(
        <div className="h-screen w-full relative p-5 bg-white">
            <div className="relative h-full w-full bg-black rounded-[32px] overflow-hidden border-4 border-cyan-400/20">
                {/* Background with Fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80&sat=-100')] bg-cover bg-center grayscale contrast-125"></div>

                {/* Content Section */}
                <div className="relative z-10 h-full w-full flex flex-col justify-between overflow-y-auto">
                    {/* Main Heading */}
                    <div className="px-8 pt-8">
                        <h1 className="font-[anzo2] text-[10vw] uppercase text-white tracking-tight leading-none">
                            about
                        </h1>
                        <div className="space-y-4 mt-4">
                            <p className="text-xl text-gray-200 font-light tracking-wide">
                                Full Stack Developer | Creative Coder | Tech Enthusiast
                            </p>
                            <div className="w-20 h-1 bg-cyan-400"></div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-8">
                        <div className="group p-6 bg-black/40 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/40">
                            <h2 className="text-2xl text-white mb-4 font-[anzo2]">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-gray-200 text-sm border border-cyan-400/20">React.js</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-gray-200 text-sm border border-cyan-400/20">Node.js</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-gray-200 text-sm border border-cyan-400/20">MongoDB</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-gray-200 text-sm border border-cyan-400/20">Express</span>
                            </div>
                        </div>

                        <div className="group p-6 bg-black/40 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/40">
                            <h2 className="text-2xl text-white mb-4 font-[anzo2]">Experience</h2>
                            <p className="text-gray-200 leading-relaxed">
                                2+ years crafting modern web applications with a focus on user experience and performance.
                            </p>
                        </div>

                        <div className="group p-6 bg-black/40 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/40">
                            <h2 className="text-2xl text-white mb-4 font-[anzo2]">Projects</h2>
                            <div className="space-y-2">
                                <a 
                                    href="https://github.com/Sanjudhillo/EmployeeManagement" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block text-gray-200 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    EMS System
                                </a>
                                <a 
                                    href="https://github.com/Sanjudhillo/gameproject" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block text-gray-200 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    Game Development
                                </a>
                                <a 
                                    href="https://github.com/Sanjudhillo/ochidesign" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block text-gray-200 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    Portfolio Design
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <a 
                                href="https://github.com/Sanjudhillo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-6 py-3 text-2xl text-white font-[anzo2] hover:text-cyan-400 transition-all duration-300 group border-2 border-cyan-400/30 rounded-full hover:border-cyan-400/60 hover:bg-cyan-400/10 backdrop-blur-sm"
                            >
                                <span>Connect</span>
                                <span className="text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;