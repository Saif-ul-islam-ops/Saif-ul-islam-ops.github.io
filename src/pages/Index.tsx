import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import LanguageSection from "@/components/LanguageSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectSection";
import ClickSpark from '@/components/ClickSpark';

const Index = () => {
  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={12}
      sparkRadius={25}
      sparkCount={12}
      duration={600}
      easing="ease-out"
      extraScale={1.2}
      className="interactive-area"
    >
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <LanguageSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 text-center border-t border-steel/30">
          <p className="text-muted-foreground">
            Built with passion for technology and digital innovation
          </p>
        </footer>
      </div>
    </ClickSpark>
  );
};

export default Index;
