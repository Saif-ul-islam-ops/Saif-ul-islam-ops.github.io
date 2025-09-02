import Navbar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import LanguageSection from "@/components/LanguageSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectSection";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection/>
      <EducationSection />
      <LanguageSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-steel/30">
        <p className="text-muted-foreground">
          Built with passion for technology and digital innovation
        </p>
      </footer>
    </div>
  );
};

export default Index;
