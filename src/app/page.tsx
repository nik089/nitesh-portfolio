import dynamic from "next/dynamic";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";

// Dynamically import heavy visual components without SSR to unblock main thread
const AnimatedBackground = dynamic(() => import("@/components/background/AnimatedBackground"), { ssr: false });

// Dynamically import below-the-fold components to reduce initial JS execution time
const StatsSection = dynamic(() => import("@/components/stats/StatsSection"));
const AboutSection = dynamic(() => import("@/components/about/AboutSection"));
const SkillsSection = dynamic(() => import("@/components/skills/SkillsSection"));
const ExperienceSection = dynamic(() => import("@/components/experience/ExperienceSection"));
const EducationSection = dynamic(() => import("@/components/education/EducationSection"));
const ProjectsSection = dynamic(() => import("@/components/projects/ProjectsSection"));
const AchievementsSection = dynamic(() => import("@/components/achievements/AchievementsSection"));
const ContactSection = dynamic(() => import("@/components/contact/ContactSection"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
