"use client";

import { Card } from "../components/ui/card";
import { User, MapPin, Mail, Calendar } from "lucide-react";

const AboutSection = () => {
  const personalInfo = [
    { icon: User, label: "Name", value: "Saif ul Islam" },
  /*  { icon: Calendar, label: "Date of Birth", value: "Jan 4, 2006" },*/
    { icon: MapPin, label: "Location", value: "Haripur, Pakistan" },
    { icon: Mail, label: "Email", value: "saifulislam54956@gmail.com" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-0">
      {/* Decorative/animated background elements (optional, like Hero) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 bg-cyber-blue/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-16 right-4 md:bottom-32 md:right-32 w-12 h-12 md:w-24 md:h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 bg-steel-light/30 rounded-full blur-md animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <Card className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl max-w-4xl mx-auto neon-glow animate-slide-in-up">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 cyber-text">
              About Me
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              "Evolving in the digital age through curiosity, consistency, and cybersecurity."
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-steel-dark/30 border border-steel/30 "
              >
                <div className="p-2 rounded-lg bg-cyber-blue/20 flex-shrink-0">
                  <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyber-blue " />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium ">{info.label}</p>
                  <p className="text-sm sm:text-lg font-semibold break-words">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
