"use client";

import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Code, Github, Link as LinkIcon } from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      title: "Portfolio Website",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "HTML", "JavaScript"],
      description: "A cyber-themed personal portfolio with animations, hosted on GitHub Pages.",
      github: "https://github.com/saif-ul-islam-ops/portfolio",
      live: "https://saif-ul-islam-ops.github.io/",
    },
    {
      title: "Inventory Management System",
      tech: ["Python", "Tkinter", "Excel"],
      description: "Desktop application for stationery shop: invoicing, stock alerts, barcode scanning.",
      github: "https://github.com/saif-ul-islam-ops/inventory-system",
      live: "",
    },
     {
      title: "Laser Security System",
      tech: ["Arduino", "HC-05 Blutooth Module", "C Language"],
      description: "Laser security system for anti-theft purpose, a small project.",
      github: "",
      live: "",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 cyber-text">
            🚀 Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
            A showcase of my technical creations and experiments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card
                  className="glass-card p-6 neon-glow cursor-pointer transition-all duration-300 hover:transform hover:scale-105 active:scale-100 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold cyber-text leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-cyber-blue/50 text-cyber-blue text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </DialogTrigger>

              <DialogContent className="glass-card border-cyber-blue/30 max-w-sm sm:max-w-md mx-4 sm:mx-auto">
                <DialogHeader>
                  <DialogTitle className="cyber-text text-lg sm:text-xl leading-tight">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-cyber-blue/50 text-cyber-blue text-xs"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        onClick={() => window.open(project.github, "_blank")}
                        className="btn-metallic neon-glow text-sm sm:text-base"
                        variant="outline"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        onClick={() => window.open(project.live, "_blank")}
                        className="btn-metallic neon-glow text-sm sm:text-base"
                        variant="outline"
                      >
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
