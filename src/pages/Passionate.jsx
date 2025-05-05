import React from "react";

const Passionate = () => {
    return(
        <div className="h-screen relative p-5 bg-white">
            <div className="relative h-full bg-black rounded-[32px] overflow-hidden border-4 border-cyan-400/20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40"></div>

                {/* Content Section */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-[6vw] font-[anzo3] text-white tracking-tight">
                                        PASSIONATE
                                    </h1>
                                    <div className="flex items-center gap-4">
                                        <div className="h-1 w-12 bg-white/70"></div>
                                        <p className="text-xl font-[anzo2] text-gray-300">
                                            LEARNER | INNOVATOR | DEVELOPER
                                        </p>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                    As a B.Tech student, I'm eager to bridge the gap between academic knowledge and real-world applications. I believe in continuous learning and hands-on experience to develop practical solutions that make a difference.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="group p-4 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black/60 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                                        <h3 className="text-white font-[anzo2] mb-2 group-hover:text-white transition-colors duration-300">Education</h3>
                                        <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">B.Tech in Computer Science, pursuing practical excellence</p>
                                    </div>
                                    <div className="group p-4 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-black/60 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                                        <h3 className="text-white font-[anzo2] mb-2 group-hover:text-white transition-colors duration-300">Goals</h3>
                                        <p className="text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">Seeking opportunities to grow and contribute meaningfully</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Call to Action */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="space-y-8 text-center lg:text-right">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-[anzo2] text-white">Ready to Collaborate?</h2>
                                        <p className="text-gray-300">Let's work together on exciting projects and create impactful solutions</p>
                                    </div>
                                    
                                    <button className="group relative px-8 py-4 text-white font-[anzo2] rounded-full border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                        <span className="flex items-center gap-3">
                                            Let's Connect
                                            <span className="text-white transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passionate;