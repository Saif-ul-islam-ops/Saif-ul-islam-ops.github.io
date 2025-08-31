import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import LanguageSection from "@/components/LanguageSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
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
