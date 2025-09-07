"use client";

import { Button } from "../components/ui/button";
import { Mail, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1imwX9uyTsKNGL2khxm2SZPlHbjXY_dCU/view?usp=sharing', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-cyber-blue/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-16 right-4 md:bottom-32 md:right-32 w-12 h-12 md:w-24 md:h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 bg-steel-light/30 rounded-full blur-md animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl max-w-4xl mx-auto neon-glow animate-slide-in-up">
          {/* Animated intro text */}
          <div className="mb-6 md:mb-8">
       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
  <span className="font-medium">Hi, I'm</span><br />
  <span className="font-black cyber-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl animate-pulse-neon">
    Saif ul Islam
  </span>
</h1>

            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              — a passionate tech enthusiast & security learner building sleek, responsive digital interfaces and learning the art of digital defense.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="btn-metallic text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl neon-glow group w-full sm:w-auto min-h-[3rem] sm:min-h-[3.5rem]"
              variant="outline"
            >
              <Mail className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-cyber-blue transition-colors" />
               Hire Me
            </Button>
            
            <Button 
              onClick={downloadCV}
              className="btn-metallic text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl neon-glow group w-full sm:w-auto min-h-[3rem] sm:min-h-[3.5rem]"
              variant="outline"
            >
              <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:text-cyber-blue transition-colors" />
               Download My CV
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;