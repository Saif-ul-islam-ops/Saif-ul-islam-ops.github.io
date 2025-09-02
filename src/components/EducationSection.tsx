"use client";

import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { GraduationCap, Star } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "BS in Cybersecurity",
      institution: "Pak Austria Fachhochschule Institute of Applied Sciences and Technology",
      gpa: "CGPA 3.57",
      status: "Current",
      subjects: ["Programming Fundamentals", "Calculus", "OOP", "Applied Physics", "ICT"]
    },
    {
      degree: "HSSC",
      institution: "Sir Syed Model School and College Haripur",
      gpa: "Marks 86.3%",
      subjects: ["Physics", "Computer", "Mathematics"],
      status: "Completed"
    },
    {
      degree: "SSC",
      institution: "Government High School Alooli",
       gpa: "Marks 86.3%",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 cyber-text">🎓 Education</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">Academic journey in technology and cybersecurity</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue to-accent"></div>
            
            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start gap-4 sm:gap-6 md:gap-8 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cyber-blue/20 rounded-full border-2 sm:border-4 border-cyber-blue flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-cyber-blue" />
                    </div>
                    {/* Floating sphere animation */}
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-accent/60 rounded-full animate-float" style={{ animationDelay: `${index * 0.5}s` }}></div>
                  </div>

                  {/* Education card */}
                  <Card className="glass-card p-4 sm:p-6 md:p-8 flex-1 neon-glow group hover:transform hover:scale-105 active:scale-100 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold cyber-text mb-2 leading-tight">{edu.degree}</h3>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{edu.institution}</p>
                      </div>
                      
                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                        <Badge 
                          variant={edu.status === "Current" ? "default" : "secondary"}
                          className={`text-xs sm:text-sm ${edu.status === "Current" ? "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50" : ""}`}
                        >
                          {edu.status}
                        </Badge>
                        
                        {edu.gpa && (
                          <div className="flex items-center gap-1 sm:gap-2 bg-accent/20 px-2 sm:px-3 py-1 rounded-full">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                            <span className="text-xs sm:text-sm font-semibold text-accent">{edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, subIndex) => (
                        <Badge 
                          key={subIndex} 
                          variant="outline" 
                          className="border-steel/50 text-muted-foreground hover:border-cyber-blue/50 hover:text-cyber-blue transition-colors text-xs sm:text-sm"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;