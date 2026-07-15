import { Github, Linkedin, Mail } from "lucide-react";
import { email, githubUrl, linkedinUrl, repoUrl } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6 text-center">
      <div className="mb-6 flex items-center justify-center gap-6 xl:hidden">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-fog transition-colors hover:text-mint"
        >
          <Github size={20} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-fog transition-colors hover:text-mint"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${email}`}
          aria-label="Email"
          className="text-fog transition-colors hover:text-mint"
        >
          <Mail size={20} />
        </a>
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-xs text-fog transition-colors hover:text-mint"
      >
        Designed &amp; built by Aditya Rungta
      </a>
      <p className="mt-2 font-mono text-[11px] text-fog/60">
        React · TypeScript · Tailwind CSS · Framer Motion
      </p>
    </footer>
  );
}
