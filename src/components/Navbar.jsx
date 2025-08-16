import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t * (2 - t),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "#home";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) { // Adjust offset for your fixed navbar height
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  // Scroll smoothly to section on click and close mobile menu
  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      // Use native smooth scrolling with offset for fixed navbar
      const yOffset = -70; // Adjust according to navbar height
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };


  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Path to public folder file
  link.download = "Abhilash_Patil_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 onClick={() => scrollToSection("#home")} className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Abhilash Patil
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                    activeSection === link.href ? "text-blue-400" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform transition-transform duration-300 ${
                      activeSection === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              ))}
              <button onClick={handleDownload} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white cursor-pointer px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25">
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <button onClick={handleDownload} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 mt-4">
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
