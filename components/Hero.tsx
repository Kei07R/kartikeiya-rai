"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/lib/data";
import { MapPin, Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    let visible = true;
    const id = setInterval(() => {
      visible = !visible;
      el.style.opacity = visible ? "1" : "0";
    }, 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-5xl mx-auto"
    >
      <div className="max-w-2xl">
        {/* Location badge */}
        <div className="flex items-center gap-2 mb-8 text-[#6b7280] text-sm">
          <MapPin size={14} className="text-[#00d4ff]" />
          <span>{personalInfo.location}</span>
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-none">
          <span className="text-[#e8e8f0]">{personalInfo.name.split(" ")[0]}</span>
          <br />
          <span className="text-[#00d4ff]">{personalInfo.name.split(" ")[1]}</span>
          <span ref={cursorRef} className="text-[#00d4ff] ml-1 transition-opacity">_</span>
        </h1>

        {/* Role */}
        <p className="font-mono text-[#6b7280] text-lg sm:text-xl mb-6 tracking-wide">
          &lt; {personalInfo.role} /&gt;
        </p>

        {/* Tagline */}
        <p className="text-[#e8e8f0]/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00d4ff] text-[#0a0a0f] text-sm font-semibold rounded-sm hover:bg-[#00d4ff]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e1e2e] text-[#e8e8f0] text-sm font-medium rounded-sm hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#6b7280] text-sm hover:text-[#00d4ff] transition-colors duration-200"
          >
            <Github size={16} />
            <span>Kei07R</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#6b7280] text-sm hover:text-[#00d4ff] transition-colors duration-200"
          >
            <Linkedin size={16} />
            <span>kartikeiya-rai</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b7280] text-xs animate-bounce">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
