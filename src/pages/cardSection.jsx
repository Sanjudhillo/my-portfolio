import React from "react";

const CardSection = () => {
    return(
        <div className="h-screen relative p-5 bg-white">
            <div className="relative h-full w-full bg-black rounded-[32px] overflow-hidden">  
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95"></div>
                
                {/* Animated Grid Overlay */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                {/* Floating Code Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="flex items-center text-center itmes-center flex-row h-full w-full justify-between p-[10vh] relative z-10">
                    {/* EMS Project */}
                    <div className="group h-[30vh] w-[28vw] border-[3px] border-white/70 bg-black/20 rounded-[5vw] backdrop-blur-sm transition-all duration-800 hover:border-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:h-[80vh]"> 
                        <div className="p-[5vh] h-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="transition-all duration-800">
                                    <p className="text-lg text-white">React Project</p>
                                    <h4 className="text-2xl text-white mt-2">EMS SYSTEM</h4>
                                    <p className="text-gray-300 mt-2">Employee Management System</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <h1 className="text-[3.5vw] font-semibold text-white mt-4">Features</h1>
                                    <ul className="mt-3 space-y-2 text-gray-300">
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all">• Employee Dashboard</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-75">• Performance Reviews</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-100">• Task Management</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-150">• Department Management</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-200">• Real-time Updates</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-800 transform translate-y-4 group-hover:translate-y-0">
                                <a 
                                    href="https://github.com/Sanjudhillo/EmployeeManagement" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="rounded-[5vw] text-lg px-6 py-2 border-2 border-white/70 bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300 text-white w-full text-center block"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Game Project */}
                    <div className="group h-[30vh] w-[28vw] border-[3px] border-white/70 bg-black/20 rounded-[5vw] backdrop-blur-sm transition-all duration-800 hover:border-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:h-[80vh]">
                        <div className="p-[5vh] h-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="transition-all duration-800">
                                    <p className="text-lg text-white">JavaScript Game</p>
                                    <h4 className="text-2xl text-white mt-2">STONE PAPER SCISSORS</h4>
                                    <p className="text-gray-300 mt-2">Classic Game Implementation</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <h1 className="text-[3.5vw] font-semibold text-white mt-4">Features</h1>
                                    <ul className="mt-3 space-y-2 text-gray-300">
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all">• Interactive Gameplay</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-75">• Score Tracking</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-100">• Responsive Design</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-150">• Smooth Animations</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-200">• User-Friendly Interface</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <a 
                                    href="https://github.com/Sanjudhillo/gameproject" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="rounded-[5vw] text-lg px-6 py-2 border-2 border-white/70 bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300 text-white w-full text-center block"
                                >
                                    Play Game
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Ochi Design Project */}
                    <div className="group h-[30vh] w-[28vw] border-[3px] border-white/70 bg-black/20 rounded-[5vw] backdrop-blur-sm transition-all duration-800 hover:border-white hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 hover:h-[80vh]">
                        <div className="p-[5vh] h-full flex flex-col justify-between">
                            <div className="flex-1">
                                <div className="transition-all duration-800">
                                    <p className="text-lg text-white">Animated Landing Page</p>
                                    <h4 className="text-2xl text-white mt-2">OCHIDESIGN</h4>
                                    <p className="text-gray-300 mt-2">Modern & Interactive Design</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <h1 className="text-[3.5vw] font-semibold text-white mt-4">Features</h1>
                                    <ul className="mt-3 space-y-2 text-gray-300">
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all">• Custom Cursor Effects</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-75">• Smooth Scroll Implementation</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-100">• Dynamic Color Schemes</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-150">• Interactive Image Galleries</li>
                                        <li className="group-hover:translate-x-2 group-hover:text-white transition-all delay-200">• Responsive Navigation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <a 
                                    href="https://github.com/Sanjudhillo/ochidesign" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="rounded-[5vw] text-lg px-6 py-2 border-2 border-white/70 bg-transparent hover:bg-white/10 hover:border-white transition-all duration-300 text-white w-full text-center block"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection;
