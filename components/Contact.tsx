"use client";

import { personalInfo } from "@/lib/data";
import { SectionHeader } from "./Projects";
import { useInView } from "@/hooks/useInView";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionHeader label="04" title="Contact" />

        <div className="mt-12 max-w-xl">
          <p className="text-[#e8e8f0]/60 text-lg leading-relaxed mb-10">
            I&apos;m open to new opportunities, collaborations, or just a good conversation.
            Drop a message — I&apos;ll get back to you.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 p-4 bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm
                hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-[#1e1e2e] group-hover:border-[#00d4ff]/40 rounded-sm transition-colors">
                <Mail size={16} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[#6b7280] mb-0.5">Email</p>
                <p className="text-[#e8e8f0] text-sm group-hover:text-[#00d4ff] transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm
                hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-[#1e1e2e] group-hover:border-[#00d4ff]/40 rounded-sm transition-colors">
                <Linkedin size={16} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[#6b7280] mb-0.5">LinkedIn</p>
                <p className="text-[#e8e8f0] text-sm group-hover:text-[#00d4ff] transition-colors">
                  linkedin.com/in/kartikeiya-rai
                </p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm
                hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-[#1e1e2e] group-hover:border-[#00d4ff]/40 rounded-sm transition-colors">
                <Github size={16} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[#6b7280] mb-0.5">GitHub</p>
                <p className="text-[#e8e8f0] text-sm group-hover:text-[#00d4ff] transition-colors">
                  github.com/Kei07R
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm">
              <div className="w-9 h-9 flex items-center justify-center border border-[#1e1e2e] rounded-sm">
                <MapPin size={16} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="font-mono text-xs text-[#6b7280] mb-0.5">Location</p>
                <p className="text-[#e8e8f0] text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
