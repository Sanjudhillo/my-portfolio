import React from "react";

const CardSection = () => {
    return(
        <div className="h-screen relative p-1 sm:p-4 lg:p-6 bg-white mb-8 sm:mb-24 lg:mb-32">
            <div className="relative h-[90vh] w-full bg-black rounded-[15px] sm:rounded-[25px] lg:rounded-[32px] overflow-hidden border-2 sm:border-3 lg:border-4 border-cyan-400/20">  
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"></div>
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

                <div className="flex flex-col md:flex-row items-center justify-between h-full w-full p-2 sm:p-6 lg:p-[8vh] relative z-10 gap-2 sm:gap-6 lg:gap-8">
                    {/* EMS Project */}
                    <div className="group w-full md:w-[30%] h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[38vh] border-[3px] border-white/70 bg-black/20 rounded-[15px] sm:rounded-[25px] lg:rounded-[32px] backdrop-blur-sm transition-all duration-800 hover:border-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:h-[80vh]"> 
                        <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="transition-all duration-800">
                                    <p className="text-base sm:text-lg lg:text-xl text-white">React Project</p>
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl text-white mt-2">EMS SYSTEM</h4>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">Employee Management System</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4">Features</h1>
                                    <ul className="mt-3 space-y-2 text-gray-300">
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all text-sm sm:text-base lg:text-lg">• Employee Dashboard</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-75 text-sm sm:text-base lg:text-lg">• Performance Reviews</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-100 text-sm sm:text-base lg:text-lg">• Task Management</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-150 text-sm sm:text-base lg:text-lg">• Department Management</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-200 text-sm sm:text-base lg:text-lg">• Real-time Updates</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-800 transform translate-y-4 group-hover:translate-y-0">
                                <a 
                                    href="https://github.com/Sanjudhillo/EmployeeManagement" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="rounded-full text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-2 border-2 border-white/70 bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300 text-white w-full text-center block"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Game Project */}
                    <div className="group w-full md:w-[30%] h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[38vh] border-[3px] border-white/70 bg-black/20 rounded-[15px] sm:rounded-[25px] lg:rounded-[32px] backdrop-blur-sm transition-all duration-800 hover:border-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:h-[80vh]">
                        <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="transition-all duration-800">
                                    <p className="text-base sm:text-lg lg:text-xl text-white">JavaScript Game</p>
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl text-white mt-2">STONE PAPER SCISSORS</h4>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">Classic Game Implementation</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4">Features</h1>
                                    <ul className="mt-3 space-y-2 text-gray-300">
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all text-sm sm:text-base lg:text-lg">• Interactive Gameplay</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-75 text-sm sm:text-base lg:text-lg">• Score Tracking</li>
                                        
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-150 text-sm sm:text-base lg:text-lg">• Smooth Animations</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-200 text-sm sm:text-base lg:text-lg">• User-Friendly Interface</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <div className="flex gap-4 mt-4">
                                    <a 
                                        href="https://stone-paper-game-one.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-cyan-400 text-cyan-400 font-[anzo2] hover:bg-cyan-400 hover:text-black transition-all duration-300"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                        href="https://github.com/Sanjudhillo/gameproject"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-cyan-400 text-black font-[anzo2] hover:bg-transparent hover:text-cyan-400 hover:border hover:border-cyan-400 transition-all duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ochi Design Project */}
                    <div className="group w-full md:w-[30%] h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[38vh] border-[3px] border-white/70 bg-black/20 rounded-[15px] sm:rounded-[25px] lg:rounded-[32px] backdrop-blur-sm transition-all duration-800 hover:border-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:h-[80vh]">
                        <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="transition-all duration-800">
                                    <p className="text-base sm:text-lg lg:text-xl text-white">Animated Landing Page</p>
                                    <h4 className="text-xl sm:text-2xl lg:text-3xl text-white mt-2">OCHIDESIGN</h4>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">Modern & Interactive Design</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mt-4">Features</h1>
                                    <ul className="mt-3 space-y-2 text-gray-300">
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all text-sm sm:text-base lg:text-lg">• Custom Cursor Effects</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-75 text-sm sm:text-base lg:text-lg">• Smooth Scroll Implementation</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-100 text-sm sm:text-base lg:text-lg">• Dynamic Color Schemes</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-150 text-sm sm:text-base lg:text-lg">• Interactive Image Galleries</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-200 text-sm sm:text-base lg:text-lg">• Responsive Navigation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <div className="flex gap-4 mt-4">
                                    <a 
                                        href="https://ochi-design-2vlu.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-cyan-400 text-cyan-400 font-[anzo2] hover:bg-cyan-400 hover:text-black transition-all duration-300"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                        href="https://github.com/Sanjudhillo/ochidesign"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-cyan-400 text-black font-[anzo2] hover:bg-transparent hover:text-cyan-400 hover:border hover:border-cyan-400 transition-all duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection;