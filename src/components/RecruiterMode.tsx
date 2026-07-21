import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import {
  certifications,
  email,
  githubUrl,
  linkedinUrl,
  resume,
} from "../data";
import { useResume } from "./ResumeProvider";
import ModeToggle from "./ModeToggle";
import ThemeToggle from "./ThemeToggle";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.section variants={rise} className="mt-11">
      <h2 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-mint">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function EntryHead({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 className="font-display text-lg font-semibold text-bright">{left}</h3>
      <span className="shrink-0 font-mono text-xs text-fog">{right}</span>
    </div>
  );
}

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="mt-2.5 space-y-2">
      {points.map((point) => (
        <li key={point} className="flex gap-3 leading-relaxed">
          <span aria-hidden className="mt-0.5 text-mint">
            ▹
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RecruiterMode() {
  const { open: openResume } = useResume();

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3.5">
          <span className="font-mono text-lg font-medium text-mint">
            ar<span className="text-bright">.</span>
          </span>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-6 py-14 sm:py-16"
      >
        <motion.h1
          variants={rise}
          className="font-display text-4xl font-bold tracking-tight text-bright sm:text-5xl"
        >
          {resume.name}
        </motion.h1>
        <motion.p
          variants={rise}
          className="mt-2 font-display text-xl font-semibold text-mint"
        >
          {resume.title}
        </motion.p>
        <motion.p
          variants={rise}
          className="mt-5 max-w-2xl leading-relaxed text-fog"
        >
          {resume.summary}
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm"
        >
          <a href={`mailto:${email}`} className="text-mint hover:underline">
            {email}
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-bright transition-colors hover:text-mint"
          >
            GitHub
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-bright transition-colors hover:text-mint"
          >
            LinkedIn
          </a>
          <button
            onClick={openResume}
            className="text-mint transition-colors hover:underline"
          >
            View Resume (PDF)
          </button>
        </motion.div>

        <div className="mt-8 h-px w-full bg-line" />

        <Block title="Experience">
          <div className="space-y-7">
            {resume.experience.map((job) => (
              <div key={job.org}>
                <EntryHead
                  left={`${job.org} - ${job.role}`}
                  right={job.period}
                />
                <Bullets points={job.points} />
              </div>
            ))}
          </div>
        </Block>

        <Block title="Projects">
          <div className="space-y-7">
            {resume.resumeProjects.map((project) => (
              <div key={project.name}>
                <EntryHead left={project.name} right={project.period} />
                <Bullets points={project.points} />
              </div>
            ))}
          </div>
        </Block>

        <Block title="Education">
          <div className="space-y-4">
            {resume.educationList.map((edu) => (
              <div key={`${edu.school}-${edu.period}`}>
                <EntryHead left={edu.school} right={edu.period} />
                <p className="mt-1 text-fog">{edu.detail}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Skills">
          <div className="space-y-3">
            {resume.skillGroups.map((group) => (
              <div
                key={group.group}
                className="flex flex-col gap-1 sm:flex-row sm:gap-4"
              >
                <span className="w-52 shrink-0 font-semibold text-bright">
                  {group.group}
                </span>
                <span className="text-fog">{group.items.join(", ")}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Certifications">
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-baseline justify-between gap-4"
              >
                <span>{cert.name}</span>
                <span className="shrink-0 font-mono text-xs text-mint">
                  {cert.year}
                </span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Awards & Volunteering">
          <ul className="space-y-3">
            {resume.awards.map((award) => (
              <li
                key={award.title}
                className="flex items-baseline justify-between gap-4"
              >
                <span>{award.title}</span>
                <span className="shrink-0 font-mono text-xs text-fog">
                  {award.period}
                </span>
              </li>
            ))}
          </ul>
        </Block>

        <p className="mt-14 border-t border-line pt-6 font-mono text-xs text-fog">
          Prefer the full experience? Switch to Cinematic mode using the toggle
          above.
        </p>
      </motion.main>
    </div>
  );
}
