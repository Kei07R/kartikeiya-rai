"use client";

import { experiences } from "@/lib/data";
import { SectionHeader } from "./Projects";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

export default function Experience() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div
        ref={ref}
        className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <SectionHeader label="02" title="Experience" />

        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {/* Company tabs */}
          <div className="flex md:flex-col gap-1 shrink-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActive(i)}
                className={`px-4 py-2.5 text-sm font-mono text-left whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all duration-200
                  ${
                    active === i
                      ? "border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/5"
                      : "border-[#1e1e2e] text-[#6b7280] hover:text-[#e8e8f0] hover:border-[#e8e8f0]/20"
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 min-w-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`transition-all duration-300 ${active === i ? "block" : "hidden"}`}
              >
                <div className="mb-6">
                  <h3 className="text-[#e8e8f0] text-xl font-semibold">
                    {exp.role}{" "}
                    <span className="text-[#00d4ff]">@ {exp.company}</span>
                  </h3>
                  <p className="font-mono text-[#6b7280] text-sm mt-1">
                    {exp.period} · {exp.location}
                  </p>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[#e8e8f0]/70 leading-relaxed">
                      <span className="text-[#00d4ff] mt-1.5 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-[#00d4ff]/70 bg-[#00d4ff]/5 border border-[#00d4ff]/15 px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
