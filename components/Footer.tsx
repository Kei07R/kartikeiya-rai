import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[#6b7280] text-xs">
          © {new Date().getFullYear()} {personalInfo.name}
        </span>
        <span className="font-mono text-[#6b7280] text-xs">
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
