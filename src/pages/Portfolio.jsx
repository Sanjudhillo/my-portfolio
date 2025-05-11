import React from "react";

const Portfolio = () => {   
    return(
        <div className="min-h-screen relative p-2 sm:p-4 lg:p-6 bg-white">
            <div className="relative h-full w-full bg-black rounded-[20px] sm:rounded-[25px] lg:rounded-[32px] overflow-hidden border-2 sm:border-3 lg:border-4 border-cyan-400/20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
                
                {/* Animated Grid Overlay */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:20px_20px] lg:bg-[size:24px_24px]"></div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-20 sm:w-22 lg:w-24 h-20 sm:h-22 lg:h-24 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 h-full flex flex-col justify-center">
                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24">
                        {/* Main Heading */}
                        <div className="text-center py-8 sm:py-10 lg:py-12 px-2 sm:px-4 lg:px-[3vh]">
                            <h1 className="text-[8vw] sm:text-[9vw] lg:text-[10vw] font-[anzo3] text-white tracking-tight leading-none mb-4 sm:mb-6">
                                MY PORTFOLIO
                            </h1>
                            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4">
                                <div className="h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                                <p className="text-base sm:text-lg lg:text-xl font-[anzo2] text-gray-300">
                                    INNOVATIVE SOLUTIONS | REAL-WORLD IMPACT
                                </p>
                                <div className="h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                            </div>
                        </div>

                        {/* Project Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
                            {/* Project Card 1 */}
                            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative p-4 sm:p-6 backdrop-blur-sm">
                                    <h3 className="text-xl sm:text-2xl font-[anzo2] text-white mb-3 sm:mb-4">Academic Excellence</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Showcasing innovative academic projects that demonstrate strong foundation in computer science and problem-solving skills.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">System Design</span>
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">Research</span>
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">Innovation</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Card 2 */}
                            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative p-4 sm:p-6 backdrop-blur-sm">
                                    <h3 className="text-xl sm:text-2xl font-[anzo2] text-white mb-3 sm:mb-4">Web Development</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Personal projects and coursework demonstrating full-stack development skills and modern web technologies.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">React</span>
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">Node.js</span>
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">MongoDB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Card 3 */}
                            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative p-4 sm:p-6 backdrop-blur-sm">
                                    <h3 className="text-xl sm:text-2xl font-[anzo2] text-white mb-3 sm:mb-4">Learning Journey</h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Ongoing projects and experiments to expand knowledge and stay updated with latest technologies.</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">GitHub</span>
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">LeetCode</span>
                                        <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-gray-200 text-xs sm:text-sm">Hackathons</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* View More Button */}
                        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
                            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 text-white font-[anzo2] text-sm sm:text-base rounded-full border-2 border-white/20 hover:border-cyan-400/60 hover:bg-gradient-to-r from-cyan-400/10 to-purple-500/10 transition-all duration-300 backdrop-blur-sm">
                                <span className="flex items-center gap-2 sm:gap-3">
                                    Explore Projects
                                    <span className="text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;