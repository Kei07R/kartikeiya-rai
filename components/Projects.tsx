"use client";

import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionHeader label="01" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`group relative bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm p-6 flex flex-col gap-4
        hover:border-[#00d4ff]/30 transition-all duration-300
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#00d4ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-[#e8e8f0] text-lg font-semibold group-hover:text-[#00d4ff] transition-colors duration-200">
          {project.name}
        </h3>
        <div className="flex items-center gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b7280] hover:text-[#00d4ff] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b7280] hover:text-[#00d4ff] transition-colors duration-200"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-[#6b7280] text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-[#00d4ff]/70 bg-[#00d4ff]/5 border border-[#00d4ff]/15 px-2 py-0.5 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[#00d4ff]/40 text-sm">{label} /</span>
      <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#e8e8f0] tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[#1e1e2e] max-w-xs" />
    </div>
  );
}
