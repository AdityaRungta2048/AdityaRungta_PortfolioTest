import {
  Bot,
  Globe,
  HeartPulse,
  ScanFace,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import {
  siAndroid,
  siExpo,
  siFastapi,
  siFirebase,
  siGit,
  siHuggingface,
  siKotlin,
  siMysql,
  siNumpy,
  siOpencv,
  siOpenjdk,
  siPandas,
  siPython,
  siReact,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export const email = "adityarungta2048@gmail.com";
export const githubUrl = "https://github.com/AdityaRungta2048";
export const linkedinUrl = "https://www.linkedin.com/in/aditya-rungta2048";
export const repoUrl =
  "https://github.com/AdityaRungta2048/AdityaRungta_PortfolioTest";

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export const heroRoles = [
  "backend systems.",
  "mobile apps.",
  "ML-powered tools.",
  "real-time games.",
];

export type Skill = { name: string; icon: SimpleIcon };

export const skills: Skill[] = [
  { name: "Python", icon: siPython },
  { name: "Java", icon: siOpenjdk },
  { name: "Kotlin", icon: siKotlin },
  { name: "React Native", icon: siReact },
  { name: "FastAPI", icon: siFastapi },
  { name: "Firebase", icon: siFirebase },
  { name: "MySQL", icon: siMysql },
  { name: "OpenCV", icon: siOpencv },
  { name: "Hugging Face", icon: siHuggingface },
  { name: "Pandas", icon: siPandas },
  { name: "NumPy", icon: siNumpy },
  { name: "Android", icon: siAndroid },
  { name: "Expo", icon: siExpo },
  { name: "TypeScript", icon: siTypescript },
  { name: "Git", icon: siGit },
];

export const stats = [
  { value: 5, suffix: "+", label: "Projects built" },
  { value: 6, suffix: "", label: "Certifications earned" },
  { value: 8.16, decimals: 2, label: "CGPA · Amity University" },
  { value: 5, prefix: "Top ", suffix: "%", label: "Python for DS · IIT Madras" },
];

export type TimelineEntry = {
  title: string;
  org: string;
  period: string;
  points: string[];
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    title: "Web Development Intern",
    org: "Jabsz Gaming Studios",
    period: "May - Jul 2025",
    points: [
      "Built the core loop of Dice Duel, a turn-based, probability-driven multiplayer game: betting mechanics, dice-roll prediction and 2×/4× multiplier payouts",
      "Implemented real-time state management across local and AI multiplayer sessions",
      "Integrated Firebase Firestore for persistent sessions and backend sync, so a dropped connection never loses a game",
      "Worked cross-functionally to ship a responsive UI on a scalable code architecture",
    ],
    tags: ["React Native", "Expo", "Firebase Firestore"],
  },
  {
    title: "Volunteer Intern",
    org: "Kind Beings NGO",
    period: "Jan - Mar 2025",
    points: [
      "Volunteered with a non-profit, contributing time and skills to community initiatives",
    ],
    tags: [],
  },
  {
    title: "Open-source Contributor",
    org: "GirlScript Summer of Code",
    period: "May 2024",
    points: [
      "Contributed to open-source projects through one of India's largest summer-of-code programs",
    ],
    tags: ["Open source", "Git"],
  },
];

export type Accent = "teal" | "violet" | "amber" | "rose" | "sky";

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  accent: Accent;
  icon: LucideIcon;
  label?: string;
};

export const featuredProjects: Project[] = [
  {
    label: "Final-year project · Dec 2025 - Apr 2026",
    title: "Context-aware support chatbot",
    blurb:
      "A multi-turn customer-support chatbot that actually remembers the conversation. Intent recognition, entity extraction and dialogue-state tracking keep follow-up questions in context; fine-tuned Hugging Face transformer models handle the language, and a FastAPI backend serves them in real time behind a Chainlit chat UI.",
    tech: ["Python", "Transformers", "FastAPI", "Chainlit"],
    accent: "teal",
    icon: Bot,
  },
  {
    label: "Computer vision · Dec 2024 - Jan 2025",
    title: "Real-time emotion detection",
    blurb:
      "Facial-emotion recognition on live video: OpenCV handles face detection and preprocessing, a CNN classifies the emotion. The interesting work was in the pipeline - squeezing inference latency down until predictions keep up with the camera frame rate.",
    tech: ["Python", "OpenCV", "CNN", "Deep learning"],
    accent: "violet",
    icon: ScanFace,
  },
];

export const moreProjects: Project[] = [
  {
    title: "Healthcare management system",
    blurb:
      "Patient registration, appointment scheduling and doctor lookup backed by MySQL, with strict data validation throughout.",
    tech: ["Python", "MySQL"],
    accent: "rose",
    icon: HeartPulse,
  },
  {
    title: "Food ordering app",
    blurb:
      "Android app with user authentication, multi-order handling and cash payments - my first end-to-end mobile product.",
    tech: ["Kotlin", "XML", "SQL"],
    accent: "amber",
    icon: UtensilsCrossed,
  },
  {
    title: "This website",
    blurb:
      "The site you're looking at - designed and built from scratch, deployed through a CI workflow.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "sky",
    icon: Globe,
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Amity University",
  period: "2022 - 2026",
  note: "CGPA 8.16",
};

export const certifications = [
  { name: "Microsoft Azure AI Fundamentals (AI-900)", year: "2025" },
  { name: "Microsoft Azure Data Fundamentals (DP-900)", year: "2025" },
  { name: "Oracle OCI Generative AI Certified Professional", year: "2024" },
  { name: "TATA Forage - Data Visualization", year: "2025" },
  { name: "Body Language (IIT Roorkee)", year: "2024" },
  { name: "Python for Data Science - IIT Madras", year: "2023" },
];
