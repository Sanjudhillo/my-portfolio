import React from 'react';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="relative bg-black text-white py-16">
            {/* Grid Background Overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>


            <div className="relative z-10 max-w-7xl mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">About Me</h3>
                        <p className="text-gray-400">A passionate MERN-stack developer focused on creating innovative and user-friendly applications.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#ems" className="hover:text-white transition-colors">EMS System</a></li>
                            <li><a href="https://stone-paper-game-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stone Paper Scissors</a></li>
                            <li><a href="https://ochi-design-2vlu.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">OchiDesign</a></li>
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-800 bg-clip-text text-transparent">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Sanjudhillo" target="_blank" rel="noopener noreferrer" 
                               className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/sanju-dhillon-94906a287/" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="mailto:sanjudhillo98@gmail.com"
                               className="text-gray-400 hover:text-white transition-colors">
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                        <p className="text-gray-400">Email: sanjudhillo98@gmail.com</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Sanju Dhillon. All rights reserved.</p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Footer;
