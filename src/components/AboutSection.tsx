"use client";

import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { User, MapPin, Mail, Calendar, Brain, MessageCircle, Shield, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const personalInfo = [
    { icon: User, label: "Name", value: "Saif ul Islam" },
    { icon: Calendar, label: "Date of Birth", value: "Jan 4, 2006" },
    { icon: MapPin, label: "Location", value: "Haripur, Pakistan" },
    { icon: Mail, label: "Email", value: "saifulislam54956@gmail.com" },
  ];

  const softSkills = [
    { icon: Brain, name: "Adaptability", description: "Quick to adjust to new technologies and environments" },
    { icon: Lightbulb, name: "Critical Thinking", description: "Analytical approach to problem-solving" },
    { icon: Shield, name: "Resilience", description: "Persistent in overcoming challenges" },
    { icon: MessageCircle, name: "Communication", description: "Clear and effective information sharing" },
    { icon: Users, name: "Interpersonal Skills", description: "Building strong professional relationships" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 cyber-text">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            "Evolving in the digital age through curiosity, consistency, and cybersecurity."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Personal Information */}
          <Card className="glass-card p-6 sm:p-8 neon-glow animate-slide-in-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 cyber-text">
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
              Personal Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-steel-dark/30 border border-steel/30">
                  <div className="p-2 rounded-lg bg-cyber-blue/20 flex-shrink-0">
                    <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyber-blue" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">{info.label}</p>
                    <p className="text-sm sm:text-lg font-semibold break-words">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-card p-6 sm:p-8 neon-glow animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 cyber-text">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6" />
              Soft Skills
            </h3>
            
            <div className="grid gap-3 sm:gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-steel-dark/30 border border-steel/30 hover:border-cyber-blue/50 transition-all duration-300 hover:transform hover:scale-105 active:scale-100"
                >
                  <div className="p-2 rounded-lg bg-cyber-blue/20 group-hover:bg-cyber-blue/30 transition-colors flex-shrink-0">
                    <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyber-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="outline" className="mb-2 border-cyber-blue/50 text-cyber-blue text-xs sm:text-sm">
                      {skill.name}
                    </Badge>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;