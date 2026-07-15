import { Github, Linkedin, Mail } from "lucide-react";
import { email, githubUrl, linkedinUrl } from "../data";

export default function Sidebars() {
  return (
    <>
      <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-5 xl:flex">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-fog transition-all hover:-translate-y-1 hover:text-mint"
        >
          <Github size={20} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-fog transition-all hover:-translate-y-1 hover:text-mint"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${email}`}
          aria-label="Email"
          className="text-fog transition-all hover:-translate-y-1 hover:text-mint"
        >
          <Mail size={20} />
        </a>
        <span aria-hidden className="mt-1 h-24 w-px bg-line" />
      </div>

      <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-6 xl:flex">
        <a
          href={`mailto:${email}`}
          className="font-mono text-xs tracking-widest text-fog transition-colors hover:text-mint"
          style={{ writingMode: "vertical-rl" }}
        >
          {email}
        </a>
        <span aria-hidden className="h-24 w-px bg-line" />
      </div>
    </>
  );
}
