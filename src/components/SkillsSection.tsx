"use client";


import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Progress } from "../components/ui/progress";
import { Download, Award, Code, Shield, X } from "lucide-react";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "Python",
      level: 55,
      description: "Experienced in scripting, automation, data handling, and AI model development. Comfortable with libraries like pandas, numpy, and machine learning frameworks."
    },
    {
      name: "C++",
      level: 65,
      description: "Comfortable with Object-Oriented Programming, core logic implementation, and algorithm design. Strong foundation in data structures and problem-solving."
    },
    {
      name: "Cybersecurity Fundamentals",
      level: 63,
      description: "Understanding of threat modeling, safe browsing practices, Linux systems, digital hygiene, and hands-on knowledge of various cybersecurity tools and methodologies."
    }
  ];

  const certifications = [
    {
      title: "Certified Associate Penetration Teseter (CAPT)",
      provider: "Hackviser",
      description: "Proficiency in penetration testing methodologies, tools, and techniques through hands-on assessment.",
      downloadLink: "https://drive.google.com/file/d/1zrNjv2u6pZwGJGCxX__cpCyTWEnxLd-u/view?usp=sharing"
    },
    {
      title: "Python AI Development",
      provider: "Mimo",
      description: "Intro to Python AI model design and implementation",
      downloadLink: "https://drive.google.com/file/d/1Z9iXJUhoHFCcXtvOkYyAK3MvaroOHI8f/view?usp=sharing"
    },
    {
      title: "Python Programming",
      provider: "Mimo", 
      description: "Covers core syntax, data types, and function structures",
      downloadLink: "https://drive.google.com/file/d/1sTMWdfRcCjNgqLPSWnZ8qD0M1IksjRJS/view?usp=sharing"
    },
    {
      title: "Game Development with AI",
      provider: "Mimo",
      description: "Creating basic AI in gaming environments using Python",
      downloadLink: "https://drive.google.com/file/d/15684Q8jy9T1J0T6QOIvXK7EGgHhYfuJE/view?usp=sharing"
    },
    {
      title: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      description: "Essentials of digital security, online threats, and defense strategies",
      downloadLink: "https://drive.google.com/file/d/1_5XLhu2W1X-AUt9Shq0lB7Lm5gK-FGmQ/view?usp=sharing"
    }
  ];

  const downloadCertification = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 cyber-text">Skills & Certifications</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">Interactive exploration of my technical expertise</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Skills Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3 cyber-text">
              <Code className="h-6 w-6 sm:h-8 sm:w-8" />
              🔧 Technical Skills
            </h3>
            
            <div className="space-y-4 md:space-y-6">
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="glass-card p-4 sm:p-6 neon-glow cursor-pointer transition-all duration-300 hover:transform hover:scale-105 active:scale-100 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                >
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <h4 className="text-lg sm:text-xl font-semibold flex items-center gap-2 sm:gap-3 flex-wrap">
                      <span className="text-sm sm:text-lg">{skill.name}</span>
                      <Badge variant="outline" className="border-cyber-blue/50 text-cyber-blue text-xs sm:text-sm">
                        {skill.level}%
                      </Badge>
                    </h4>
                  </div>
                  
                  <Progress 
                    value={skill.level} 
                    className="h-2 sm:h-3 mb-3 sm:mb-4"
                  />
                  
                  {selectedSkill === skill.name && (
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-steel-dark/50 rounded-lg border border-cyber-blue/30 animate-slide-in-up">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3 cyber-text">
              <Award className="h-6 w-6 sm:h-8 sm:w-8" />
              📜 Certifications
            </h3>
            
            <div className="grid gap-4 md:gap-6">
              {certifications.map((cert, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="glass-card p-4 sm:p-6 neon-glow cursor-pointer transition-all duration-300 hover:transform hover:scale-105 active:scale-100 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg font-semibold mb-2 cyber-text leading-tight">{cert.title}</h4>
                          <Badge variant="secondary" className="mb-2 sm:mb-3 text-xs sm:text-sm">{cert.provider}</Badge>
                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{cert.description}</p>
                        </div>
                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-blue flex-shrink-0" />
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="glass-card border-cyber-blue/30 max-w-sm sm:max-w-md mx-4 sm:mx-auto">
                    <DialogHeader>
                      <DialogTitle className="cyber-text text-lg sm:text-xl leading-tight">{cert.title}</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <Badge variant="outline" className="border-cyber-blue/50 text-cyber-blue text-xs sm:text-sm">
                        {cert.provider}
                      </Badge>
                      
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{cert.description}</p>
                      
                      <Button 
                        onClick={() => downloadCertification(cert.downloadLink)}
                        className="btn-metallic w-full neon-glow text-sm sm:text-base py-3 sm:py-4"
                        variant="outline"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Certificate
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;