"use client";

import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Languages } from "lucide-react";

const LanguageSection = () => {
  const languages = [
    {
      name: "English",
      level: 70,
      proficiency: "B2–C1",
      flagUrl: "https://flagcdn.com/120x90/gb.png",
      flag: null,
      description: "Professional working proficiency"
    },
    {
      name: "Urdu",
      level: 100,
      proficiency: "Native",
      flagUrl: "https://flagcdn.com/120x90/pk.png",
      flag: null,
      description: "Native speaker"
    },
    {
      name: "Hindko",
      level: 100,
      proficiency: "Native", 
      flag: "🏔️",
      description: "Regional native language"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 cyber-text">🌐 Language Skills</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">Multilingual communication capabilities</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-6 sm:p-8 neon-glow">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 rounded-xl bg-cyber-blue/20 flex-shrink-0">
                <Languages className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-blue" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold cyber-text">Language Proficiency</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {languages.map((language, index) => (
                <div 
                  key={index}
                  className="group p-4 sm:p-6 rounded-xl bg-steel-dark/30 border border-steel/30 hover:border-cyber-blue/50 transition-all duration-300 hover:transform hover:scale-105 active:scale-100 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    {language.flagUrl ? (
                      <img
                  src={language.flagUrl}
                   srcSet={`${language.flagUrl.replace("40x30", "80x60")} 2x,
                    ${language.flagUrl.replace("40x30", "120x90")} 3x`}
                     width="80"
                    height="60"
                   alt={`${language.name} flag`}
                    className="rounded-md shadow-md" />) : (
                   <span className="text-4xl sm:text-5xl md:text-6xl transition-all duration-300">
                    {language.flag}</span>)}</div>
                 <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{language.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{language.description}</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium">Proficiency</span>
                      <span className="text-xs sm:text-sm font-bold text-cyber-blue">{language.proficiency}</span>
                    </div>
                    
                    <Progress 
                      value={language.level} 
                      className="h-2 sm:h-3"
                    />
                    
                    <div className="text-center">
                      <span className="text-xl sm:text-2xl font-bold cyber-text">{language.level}%</span>
                    </div>
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

export default LanguageSection;