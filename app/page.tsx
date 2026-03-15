import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Subtle background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <Nav />
      <Hero />

      <div className="border-t border-[#1e1e2e]" />
      <Projects />

      <div className="border-t border-[#1e1e2e]" />
      <Experience />

      <div className="border-t border-[#1e1e2e]" />
      <Skills />

      <div className="border-t border-[#1e1e2e]" />
      <Contact />

      <Footer />
    </main>
  );
}
