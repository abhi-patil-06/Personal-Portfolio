import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./pages/Hero";
import { ExperienceSection } from "./pages/Experience";
import { ProjectsSection } from "./pages/Project";
import SkillsSection from "./pages/Skills";
import { AboutSection } from "./pages/About";
import CTASection from "./pages/CTA";
import Footer from "./components/Footer";
import CertificationSection from "./pages/Certification";

 
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationSection />
      <CTASection />
      <Footer />
    </>
  );
}
