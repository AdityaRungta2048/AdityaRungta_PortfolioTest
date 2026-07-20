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

export type PipelineStep = { title: string; sub?: string; active?: boolean };

export type CaseStudy = {
  problem: string;
  solution: string;
  insight: string;
  today: string;
  future: string;
  pipeline: PipelineStep[];
  caption?: string;
};

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  accent: Accent;
  icon: LucideIcon;
  label?: string;
  study?: CaseStudy;
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
    study: {
      problem:
        "Support chatbots usually forget what you just said. Every message is treated in isolation, so users repeat themselves and get generic, out-of-context replies.",
      solution:
        "A multi-turn assistant that tracks dialogue state across the conversation, recognises intent and extracts entities, so each answer builds on everything said before it.",
      insight:
        "Most of the answer quality came from state tracking, not model size - reliably remembering context matters more than a bigger network.",
      today:
        "Fine-tuned Hugging Face transformers for intent and entity extraction, a FastAPI backend, and a Chainlit chat UI handling live multi-turn conversations.",
      future:
        "Retrieval over a company knowledge base for grounded answers, and automatic handoff to a human agent when the model's confidence drops.",
      caption:
        "The core loop today: context-aware, multi-turn answers over a support domain.",
      pipeline: [
        { title: "User message", sub: "chat input", active: true },
        { title: "Intent recognition", sub: "classifier", active: true },
        { title: "Entity extraction", sub: "NER", active: true },
        { title: "Dialogue state", sub: "context memory", active: true },
        { title: "Transformer", sub: "FastAPI serving", active: true },
        { title: "Chainlit reply", sub: "grounded answer", active: true },
        { title: "KB retrieval", sub: "roadmap" },
        { title: "Human handoff", sub: "roadmap" },
      ],
    },
  },
  {
    label: "Computer vision · Dec 2024 - Jan 2025",
    title: "Real-time emotion detection",
    blurb:
      "Facial-emotion recognition on live video: OpenCV handles face detection and preprocessing, a CNN classifies the emotion. The interesting work was in the pipeline - squeezing inference latency down until predictions keep up with the camera frame rate.",
    tech: ["Python", "OpenCV", "CNN", "Deep learning"],
    accent: "violet",
    icon: ScanFace,
    study: {
      problem:
        "Most emotion-recognition demos can't keep up with live video - inference lags behind the camera, so the label is always a few frames late.",
      solution:
        "A tight OpenCV + CNN pipeline that detects a face, preprocesses it and classifies the emotion fast enough to stay in sync with the frame rate.",
      insight:
        "The bottleneck was the pipeline, not the model. Most latency hid in resizing, colour conversion and per-frame allocations - fixing those beat a faster network.",
      today:
        "Real-time face detection, preprocessing and CNN classification with a live on-screen overlay of the predicted emotion.",
      future:
        "On-device mobile deployment, more emotion classes, and temporal smoothing so predictions stay stable across frames instead of flickering.",
      caption:
        "The core loop today: low-latency emotion inference that keeps pace with a live webcam.",
      pipeline: [
        { title: "Camera frame", sub: "live video", active: true },
        { title: "Face detection", sub: "OpenCV", active: true },
        { title: "Preprocess", sub: "crop + normalise", active: true },
        { title: "CNN classify", sub: "emotion model", active: true },
        { title: "Emotion label", sub: "prediction", active: true },
        { title: "Live overlay", sub: "on-screen", active: true },
        { title: "On-device", sub: "roadmap" },
      ],
    },
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
    study: {
      problem:
        "Small clinics track patients, appointments and doctor availability across paper and spreadsheets - slow, duplicated and easy to get wrong.",
      solution:
        "A MySQL-backed system for patient registration, appointment scheduling and doctor lookup, with strict validation at every entry point.",
      insight:
        "In healthcare, predictable data integrity beats clever features - the validation rules and clear workflows are the product.",
      today:
        "Patient registration, appointment scheduling, doctor access and robust data validation running on a normalised MySQL schema.",
      future:
        "Role-based access control, a web front end, and reporting on clinic operations like patient load and no-show rates.",
      caption:
        "The core loop today: validated patient data flowing cleanly from intake to the doctor.",
      pipeline: [
        { title: "Registration", sub: "patient intake", active: true },
        { title: "Validation", sub: "data rules", active: true },
        { title: "MySQL store", sub: "normalised", active: true },
        { title: "Scheduling", sub: "appointments", active: true },
        { title: "Doctor lookup", sub: "access", active: true },
        { title: "Reporting", sub: "roadmap" },
      ],
    },
  },
  {
    title: "Food ordering app",
    blurb:
      "Android app with user authentication, multi-order handling and cash payments - my first end-to-end mobile product.",
    tech: ["Kotlin", "XML", "SQL"],
    accent: "amber",
    icon: UtensilsCrossed,
    study: {
      problem:
        "Small eateries want a simple way to take orders without the cost and overhead of a full delivery platform.",
      solution:
        "A native Android app with user authentication, multi-order handling and cash-on-delivery, backed by local SQL storage.",
      insight:
        "Getting the fundamentals right - auth, cart and order state - matters far more than feature count for a first product.",
      today:
        "A Kotlin/XML app with accounts, multiple simultaneous orders, cash payments and reliable SQL-backed data.",
      future:
        "Online payments, live order tracking, and a restaurant-side dashboard to manage the incoming queue.",
      caption: "The core loop today: from sign-in to a placed, stored order.",
      pipeline: [
        { title: "Sign in", sub: "auth", active: true },
        { title: "Browse menu", sub: "catalogue", active: true },
        { title: "Cart", sub: "multi-order", active: true },
        { title: "Place order", sub: "checkout", active: true },
        { title: "Cash payment", sub: "on delivery", active: true },
        { title: "Order stored", sub: "SQL", active: true },
        { title: "Online pay", sub: "roadmap" },
        { title: "Order tracking", sub: "roadmap" },
      ],
    },
  },
  {
    title: "This website",
    blurb:
      "The site you're looking at - designed and built from scratch, deployed through a CI workflow.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "sky",
    icon: Globe,
    study: {
      problem:
        "A portfolio should feel engineered rather than templated - fast, accessible, theme-aware and easy to keep up to date.",
      solution:
        "A hand-built React + TypeScript site with a small design system, motion, and all page content centralised in a single data file.",
      insight:
        "Constraints make it feel polished: one accent colour, one type scale and reduced-motion support read as more considered than piling on effects.",
      today:
        "The site you're on - light/dark theming, scroll and hover motion, a projects carousel, and an automated CI deploy.",
      future:
        "A writing section and dedicated per-project case-study pages - much like this panel you're reading right now.",
      caption:
        "The core loop today: edit one data file, push, and the site rebuilds and ships itself.",
      pipeline: [
        { title: "Content", sub: "data.ts", active: true },
        { title: "Components", sub: "React + TS", active: true },
        { title: "Vite build", sub: "bundle", active: true },
        { title: "GitHub Actions", sub: "CI", active: true },
        { title: "Deploy", sub: "Vercel / Pages", active: true },
        { title: "This page", sub: "live", active: true },
        { title: "Blog", sub: "roadmap" },
      ],
    },
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
