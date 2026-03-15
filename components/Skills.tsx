"use client";

import { skills, education, extras } from "@/lib/data";
import { SectionHeader } from "./Projects";
import { useInView } from "@/hooks/useInView";
import { GraduationCap } from "lucide-react";

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionHeader label="03" title="Skills" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills grid */}
          <div className="lg:col-span-2 space-y-6">
            {skills.map((group, i) => (
              <div
                key={group.category}
                className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-mono text-[#00d4ff]/60 text-xs uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[#e8e8f0]/80 bg-[#0f0f1a] border border-[#1e1e2e] px-3 py-1.5 rounded-sm
                        hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education + extras */}
          <div className="space-y-6">
            <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-[#00d4ff]" />
                <span className="font-mono text-xs text-[#00d4ff]/60 uppercase tracking-widest">
                  Education
                </span>
              </div>
              <h4 className="text-[#e8e8f0] text-sm font-semibold leading-snug mb-1">
                {education.degree}
              </h4>
              <p className="text-[#00d4ff] text-sm font-mono">{education.institution}</p>
              <p className="text-[#6b7280] text-xs font-mono mt-1">{education.period}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[#6b7280] text-xs">CGPA</span>
                <span className="font-mono text-[#00d4ff] text-sm font-bold">{education.cgpa}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {education.courses.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[10px] text-[#6b7280] bg-[#1e1e2e]/60 px-1.5 py-0.5 rounded-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-sm p-5">
              <p className="font-mono text-xs text-[#00d4ff]/60 uppercase tracking-widest mb-4">
                Extra-Curricular
              </p>
              <ul className="space-y-3">
                {extras.map((e, i) => (
                  <li key={i} className="flex gap-2 text-xs text-[#e8e8f0]/60 leading-relaxed">
                    <span className="text-[#00d4ff] mt-0.5 shrink-0">▹</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
