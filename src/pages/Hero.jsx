import React, { useState, useEffect } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    Award,
} from 'lucide-react';

// Typing Effect Hook
const useTypingEffect = (texts, speed = 100, deleteSpeed = 50, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        const currentText = texts[textIndex];

        if (!isDeleting && displayText === currentText) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
            const updateSpeed = isDeleting ? deleteSpeed : speed;
            timeout = setTimeout(() => {
                setDisplayText((prev) => {
                    if (isDeleting) {
                        return currentText.substring(0, prev.length - 1);
                    } else {
                        return currentText.substring(0, prev.length + 1);
                    }
                });
            }, updateSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

    return displayText;
};

// Hero Section Component
export const HeroSection = () => {
    const roles = ['Software Developer', 'Full Stack Developer', 'Frontend Developer', 'React Developer'];
    const typedText = useTypingEffect(roles);

    return (
        <section id="home" className="md:min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-900 px-4 pt-20 sm:px-6 lg:px-8 text-white">

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 gap-12">
                {/* Left Side - Profile Image */}
                <div className="flex justify-center lg:justify-end md:ml-10 relative w-100 h-110">
                    {/* Multi-layered blurred blobs for depth */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-16 left-12 w-64 h-64 rounded-full bg-blue-700/30 blur-3xl animate-pulse"></div>
                        <div className="absolute top-28 left-36 w-44 h-44 rounded-full bg-cyan-600/20 blur-2xl animate-pulse delay-700"></div>
                        <div className="absolute bottom-16 right-0 w-80 h-80 rounded-full bg-purple-800/15 blur-3xl animate-pulse delay-1400"></div>
                    </div>
                    {/* Glowing profile image container */}
                    {/* <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 p-1 shadow-xl shadow-blue-900/75 transition-transform transform hover:scale-105">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0f1e43] to-[#145d68] flex items-center justify-center backdrop-blur-sm border border-blue-400/40 shadow-lg overflow-hidden">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div> */}
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-full h-full object-contain rounded-4xl md:border md:ml-25"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="text-center lg:text-left space-y-8 w-full">
                    <div className="space-y-4">
                        <p className="hidden md:block text-xl text-blue-400 font-medium">Hello, I'm</p>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white">Abhilash Patil</h1>
                        <div className="text-2xl lg:text-4xl font-semibold text-gray-300 h-16 flex items-center justify-center lg:justify-start">
                            <span>I'm a </span>
                            <span className="text-blue-400 ml-2">
                                {typedText}
                                <span className="animate-blink">|</span>
                            </span>
                        </div>
                        <div className="text-2xl text-gray-300 hidden  md:flex items-center justify-center lg:justify-start">
                            <span>I design and build websites that look great, work smoothly, and are easy for people to use.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social & Experience Row */}
            <div className="min-w-7xl  md:mx-auto md:mt-14 flex flex-row lg:flex-row items-center justify-center gap-10 md:gap-20 text-gray-300 md:pt-8 pb-10 md:pb-0 px-4 sm:px-6 lg:px-8">
                {/* Experience */}
                <div className="hidden md:flex items-center space-x-3">
                    <Award className="text-blue-400" size={40} />
                    <div className=''>
                        <div className="text-white font-semibold text-lg">1+ Year</div>
                        <div className="text-lg">Experience</div>
                    </div>
                </div>

                <div className="hidden lg:block w-px h-10 bg-slate-600"></div>

                {/* Github */}
                <div className="flex items-center space-x-3">
                    <Github className="text-blue-400" size={40} />
                    <a
                        href="https://github.com/abhi-patil-06"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-xl hover:text-blue-400"
                    >
                        Github
                    </a>
                </div>

                <div className="hidden lg:block w-px h-10 bg-slate-600"></div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-3">
                    <Linkedin className="text-blue-400" size={40} />
                    <a
                        href="https://www.linkedin.com/in/abhilash-patil-285a0825b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-xl hover:text-blue-400"
                    >
                        LinkedIn
                    </a>
                </div>

                <div className="hidden lg:block w-px h-10 bg-slate-600"></div>

                {/* Email */}
                <div className="hidden md:flex items-center space-x-3">
                    <Mail className="text-blue-400" size={40} />
                    <a
                        href="mailto:patilabhilash06@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-xl hover:text-blue-400"
                    >
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
};
