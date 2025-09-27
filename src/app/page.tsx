import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Header from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import LiquidEther from "@/sections/ui/LiquidEther";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background LiquidEther - Interactive with initial visibility */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LiquidEther
          colors={['#6ee7b7', '#6ee7b7', '#B19EEF']}
          mouseForce={40}
          cursorSize={150}
          isViscous={false}
          viscous={10}
          iterationsViscous={22}
          iterationsPoisson={22}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={0.8}
          takeoverDuration={0.1}
          autoResumeDelay={2000}
          autoRampDuration={0.8}
        />
      </div>

      {/* Fixed Header */}
      <Header />

      {/* Main content with higher z-index - allow pointer events to pass through */}
      <div className="relative z-10 pointer-events-none">
        <section id="home">
          <HeroSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="tape">
          <TapeSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}
