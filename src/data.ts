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

export const skills = [
  "Python",
  "Java",
  "Kotlin",
  "React Native",
  "FastAPI",
  "Firebase",
  "MySQL",
  "OpenCV",
  "Transformers",
  "Pandas / NumPy",
  "Android",
  "Git",
];

export const experience = {
  role: "Web Development Intern",
  company: "Jabsz Gaming Studios",
  period: "May — Jul 2025",
  bullets: [
    "Built the core loop of Dice Duel, a turn-based, probability-driven multiplayer game: betting mechanics, dice-roll prediction and 2×/4× multiplier payouts",
    "Implemented real-time state management across local and AI multiplayer sessions",
    "Integrated Firebase Firestore for persistent sessions and backend sync, so a dropped connection never loses a game",
    "Worked cross-functionally to ship a responsive UI on a scalable code architecture",
  ],
  tech: ["React Native", "Expo", "Firebase Firestore"],
};

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  label?: string;
};

export const featuredProjects: Project[] = [
  {
    label: "Final-year project · Dec 2025 — Apr 2026",
    title: "Context-aware support chatbot",
    blurb:
      "A multi-turn customer-support chatbot that actually remembers the conversation. Intent recognition, entity extraction and dialogue-state tracking keep follow-up questions in context; fine-tuned Hugging Face transformer models handle the language, and a FastAPI backend serves them in real time behind a Chainlit chat UI.",
    tech: ["Python", "Transformers", "FastAPI", "Chainlit"],
  },
  {
    label: "Computer vision · Dec 2024 — Jan 2025",
    title: "Real-time emotion detection",
    blurb:
      "Facial-emotion recognition on live video: OpenCV handles face detection and preprocessing, a CNN classifies the emotion. The interesting work was in the pipeline — squeezing inference latency down until predictions keep up with the camera frame rate.",
    tech: ["Python", "OpenCV", "CNN", "Deep learning"],
  },
];

export const moreProjects: Project[] = [
  {
    title: "Healthcare management system",
    blurb:
      "Patient registration, appointment scheduling and doctor lookup backed by MySQL, with strict data validation throughout.",
    tech: ["Python", "MySQL"],
  },
  {
    title: "Food ordering app",
    blurb:
      "Android app with user authentication, multi-order handling and cash payments — my first end-to-end mobile product.",
    tech: ["Kotlin", "XML", "SQL"],
  },
  {
    title: "This website",
    blurb:
      "The site you're looking at — designed and built from scratch, deployed to GitHub Pages through a CI workflow.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "Amity University",
  period: "2022 — 2026",
  note: "CGPA 8.16",
};

export const involvement = [
  "Contributor — GirlScript Summer of Code (2024)",
  "Top 5% — Python for Data Science, IIT Madras (2023)",
  "Volunteer intern — Kind Beings NGO (2025)",
];

export const certifications = [
  { name: "Microsoft Azure AI Fundamentals (AI-900)", year: "2025" },
  { name: "Microsoft Azure Data Fundamentals (DP-900)", year: "2025" },
  { name: "Oracle OCI Generative AI Certified Professional", year: "2024" },
  { name: "TATA Forage — Data Visualization", year: "2025" },
  { name: "Python for Data Science — IIT Madras", year: "2023" },
];
