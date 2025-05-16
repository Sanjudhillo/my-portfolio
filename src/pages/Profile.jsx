import React from "react";

const Profile = () => {
    return(
        <div className="min-h-screen relative p-2 sm:p-4 lg:p-8 bg-black">
            <div className="relative h-[90vh] w-full bg-black rounded-[15px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[32px] overflow-hidden border-2 sm:border-3 lg:border-4 border-cyan-400/20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>
                
                {/* Content Section */}
                <div className="relative z-20 h-full w-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="max-w-3xl text-center">
                        <div className="mb-8">
                            <img 
                                src="/myImage.jpg" 
                                alt="Sanju's Profile" 
                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-cyan-400 mx-auto mb-6 object-cover"
                            />
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[anzo2] text-white tracking-tight mb-4">
                            Sanju Dhillon
                        </h1>
                        
                        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
                            MERN Stack Developer crafting digital experiences with clean code and creative solutions.
                        </p>
                        
                        <div className="flex justify-center gap-4">
                            <a 
                                href="https://github.com/Sanjudhillo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            >
                                GitHub
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/sanju-dhillon-94906a287/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-cyan-400 text-black hover:bg-transparent hover:text-cyan-400 hover:border hover:border-cyan-400 transition-all duration-300"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;