import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import TimelineSection from "@/components/timeline/TimelineSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TechStackSection from "@/components/tech-stack/TechStackSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <TechStackSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}