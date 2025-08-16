import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";


const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            const yOffset = -70; // height of your fixed navbar
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };


    return (
        <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-700">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About or Brand */}
                <div>
                    <h3 onClick={() => scrollToSection("#home")} className="text-white cursor-pointer hover:text-blue-400 text-xl font-bold mb-4">Abhilash Patil</h3>
                    <p className="max-w-xs leading-relaxed">
                        Passionate software developer focused on creating smooth, scalable, and beautiful web experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <a onClick={() => scrollToSection("#about")} className="hover:text-blue-400 cursor-pointer transition-colors">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("#experience")} className="hover:text-blue-400 cursor-pointer transition-colors">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("#skills")} className="hover:text-blue-400 cursor-pointer transition-colors">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection("#contact")} className="hover:text-blue-400 cursor-pointer transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center space-x-2">
                            <MapPin className="text-blue-400" size={18} />
                            <span>Pune, India</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Mail className="text-blue-400" size={18} />
                            <a href="mailto:patilabhilash06@gmail.com" className="hover:text-blue-400 transition-colors">
                                patilabhilash06@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Phone className="text-blue-400" size={18} />
                            <a href="tel:+919405012040" className="hover:text-blue-400 transition-colors">
                                +91 9405012040
                            </a>
                        </li>
                        <li className="flex space-x-4 mt-4">
                            <a href="https://github.com/abhi-patil-06" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/abhilash-patil-285a0825b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:patilabhilash06@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email">
                                <Mail size={24} />
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mt-10 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Abhilash Patil. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
