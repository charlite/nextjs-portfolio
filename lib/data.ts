import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export const tokenBarImg =
  "https://raw.githubusercontent.com/token-bar/.github/main/.github/icon-cropped.png";
export const tokenBarScreenshot =
  "https://raw.githubusercontent.com/token-bar/.github/main/.github/screenshot.png";
export const cookGptImg =
  "https://raw.githubusercontent.com/cook-gpt/.github/main/.github/icon-cropped.png";
export const cookGptScreenshot =
  "https://raw.githubusercontent.com/cook-gpt/.github/main/.github/screenshot.png";
export const pocketAgentImg =
  "https://raw.githubusercontent.com/pocket-agent/.github/main/.github/icon-cropped.png";
export const pocketAgentScreenshot =
  "https://raw.githubusercontent.com/pocket-agent/.github/main/.github/screenshot.png";
export const dropafileImg =
  "https://raw.githubusercontent.com/dropafile/dropafile/main/.github/icon-cropped.png";
export const dropafileScreenshot =
  "https://raw.githubusercontent.com/dropafile/dropafile/main/.github/screenshot.png";
export const emailSignatureEditorImg =
  "https://raw.githubusercontent.com/charlite/email-signature-editor/main/.github/icon-cropped.png";
export const emailSignatureEditorScreenshot =
  "https://raw.githubusercontent.com/charlite/email-signature-editor/main/.github/screenshot.png";
export const lizardUiImg =
  "https://raw.githubusercontent.com/lizard-ui/lizard-ui/main/.github/icon-cropped.png";
export const lizardUiScreenshot =
  "https://raw.githubusercontent.com/lizard-ui/lizard-ui/main/.github/screenshot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Lead & Product Engineer",
    company: "Timbal Tech, S.L. (Timbal AI)",
    location: "Barcelona (hybrid), Spain",
    date: "November 2025 - Present",
    insights: [
      "Architected AI-native user experiences and multi-agent workflows using an in-house framework to power asynchronous, real-time streaming interfaces for enterprise clients.",
      "Led end-to-end frontend architecture for a flagship AI-powered ERP, leveraging Next.js (App Router), React Server Components, TypeScript, and Shadcn UI.",
      "Orchestrated high-throughput data flows using TanStack Query/Table and FastAPI backends, optimizing client-side caching, optimistic UI updates, and payload efficiency.",
      "Defined frontend standards and design systems across client engagements to accelerate delivery while enforcing type safety, accessibility, and performance baselines.",
      "Bridged product engineering and AI core teams to translate LLM outputs, chain-of-thought processes, and structured data into intuitive human-in-the-loop interfaces.",
    ],
    technologies: [
      "Next.js",
      "React",
      "RSC",
      "TypeScript",
      "Shadcn UI",
      "TanStack Query",
      "FastAPI",
      "AI",
    ],
    icon: React.createElement(SiNextdotjs),
  },
  {
    title: "Frontend Lead (React)",
    company: "Aplicaciones Web Mardo, S.L. (CODETICKETS)",
    location: "Mataró (hybrid), Spain",
    date: "November 2024 - November 2025",
    insights: [
      "Spearheaded core application modernization, executing a full-stack migration to React 19, React Router v7, Vite, and Node.js 23 to eliminate legacy technical debt.",
      "Implemented hybrid rendering architectures (SSR/SSG) with Next.js and advanced routing protocols, significantly improving initial load times (FCP/LCP) and SEO performance.",
      "Built real-time event ticketing features utilizing WebSockets for live inventory state synchronization and seamless transactional flows.",
      "Enforced strict WCAG 2.2 AA accessibility standards and component modularity across high-traffic consumer touchpoints.",
    ],
    technologies: [
      "React 19",
      "React Router v7",
      "Next.js",
      "Node.js 23",
      "Vite",
      "WebSockets",
      "WCAG 2.2",
    ],
    icon: React.createElement(FaReact),
  },
  {
    title: "Senior Fullstack Developer & UI/UX Designer",
    company: "Pixelimperium, S.L. / Freelance",
    location: "Ibiza (remote), Spain",
    date: "November 2022 - September 2024",
    insights: [
      "Engineered edge-first API layers and web applications using Hono, Next.js, TypeScript, and Supabase, achieving sub-100ms response times globally.",
      "Designed and built scalable, accessible design systems from wireframes to production code, unifying brand identity across diverse multi-tenant web platforms.",
      "Automated CI/CD pipelines and multi-cloud deployments across Vercel, AWS, and Cloudflare Workers to deliver zero-downtime releases.",
    ],
    technologies: [
      "Hono",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vercel",
      "AWS",
      "Cloudflare Workers",
    ],
    icon: React.createElement(SiNextdotjs),
  },
  {
    title: "iOS Software Engineer",
    company: "DR Finantrust, S.L. (INBISA)",
    location: "Molins De Rei, Spain (hybrid)",
    date: "May 2022 - September 2022",
    insights: [
      "Developed real-time fintech applications for tracking market stocks and foreign exchange data using React Native, Swift, and Node.js.",
      "Integrated Web3 data providers and decentralized infrastructure using Ethers.js to stream live token pricing and smart contract telemetry.",
      "Managed cloud infrastructure and CI/CD pipelines on AWS and Oracle Cloud Infrastructure (OCI) with Cloudflare edge caching.",
    ],
    technologies: [
      "React Native",
      "Swift",
      "Node.js",
      "Ethers.js",
      "AWS",
      "OCI",
      "Cloudflare",
    ],
    icon: React.createElement(FaNodeJs),
  },
  {
    title: "Fullstack Developer | Software Engineer",
    company: "Businessprinter, S.L.",
    location: "Hospitalet de Llobregat, Spain (hybrid)",
    date: "June 2020 - May 2022",
    insights: [
      "Tech-led a 5-person engineering team, managing delivery schedules and architecting full-stack B2B platforms using React, Node.js, PHP, and Java.",
      "Provisioned and maintained cloud environments on AWS, implementing containerized workflows and monitoring for high-availability production services.",
    ],
    technologies: ["React", "Node.js", "PHP", "Java", "AWS"],
    icon: React.createElement(FaNodeJs),
  },
  {
    title: "Software Engineer (Junior)",
    company: "Magnum Object, S.L.",
    location: "Cornellà, Spain (on-site)",
    date: "May 2017 - June 2020",
    insights: [
      "Developed and maintained client websites and applications, building strong foundations in JavaScript, HTML/CSS, SQL, and evolving toward React-based frontends.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "SQL"],
    icon: React.createElement(FaReact),
  },
] as const;

export const projectsData = [
  {
    title: "CookGPT - Gourmet Plan & Taste",
    description:
      "iPhone/iPad native SwiftUI app — browse and edit recipes, plan meals by day or week, generate grocery lists from your schedule, and run step timers with Live Activities on the Lock Screen and Dynamic Island. Your recipes, meal plans, and shopping lists stay on device.",
    tags: ["Swift", "iOS", "iPadOS"],
    imageUrl: cookGptImg,
    screenshotUrl: cookGptScreenshot,
    url: "https://cook-gpt.pages.dev/",
    appStoreUrl: "https://apps.apple.com/app/id6805535867",
    githubUrl: "https://github.com/cook-gpt",
    accent: "from-red-400/30 via-orange-500/20 to-amber-400/20",
    glow: "group-hover:shadow-red-500/20",
  },
  {
    title: "Token Bar",
    description:
      "Native macOS menu bar app that unifies AI usage across Cursor, OpenAI, Anthropic, and more — track tokens, credits, spend, and burn rate without juggling provider dashboards. Includes Notification Center widgets, usage alerts, and privacy-first credential storage in the Keychain.",
    tags: ["Swift", "macOS"],
    imageUrl: tokenBarImg,
    screenshotUrl: tokenBarScreenshot,
    url: "https://token-bar.pages.dev/",
    appStoreUrl: "https://apps.apple.com/app/id6805913901",
    githubUrl: "https://github.com/token-bar",
    accent: "from-amber-400/30 via-orange-500/20 to-rose-400/20",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    title: "Pocket Agent",
    description:
      "Offline-first PocketAgent monorepo: an iOS client for chat UI and Mac node pairing, plus a macOS agent node host (Telegram, roles, tools) with a shared marketing site and OKF specs. Same bundle ID across iPhone, iPad, and Mac targets.",
    tags: ["Swift", "iOS", "macOS", "SwiftUI"],
    imageUrl: pocketAgentImg,
    screenshotUrl: pocketAgentScreenshot,
    url: "https://pocket-agent.pages.dev/",
    appStoreUrl:
      "https://apps.apple.com/us/app/pocketagent-chatbot/id6816867795",
    githubUrl: "https://github.com/pocket-agent",
    accent: "from-sky-400/30 via-blue-500/20 to-indigo-400/20",
    glow: "group-hover:shadow-sky-500/20",
  },
  {
    title: "dropafile",
    description:
      "Drop a file. Everyone gets it live. Ephemeral, live-session file sharing on Cloudflare Workers — spin up a room, share a link or QR code, and let connected peers download in real time. WebSocket signaling on the edge; file bytes flow peer-to-peer in the browser.",
    tags: ["Cloudflare", "Hono", "React", "TypeScript"],
    imageUrl: dropafileImg,
    screenshotUrl: dropafileScreenshot,
    url: "https://dropafile.charlite.workers.dev/",
    githubUrl: "https://github.com/dropafile/dropafile",
    accent: "from-orange-400/30 via-amber-500/20 to-yellow-400/20",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    title: "Email Signature Editor",
    description:
      "Schema-driven email signature builder with a guided template flow, live HTML preview, and one-click copy into Gmail. Import your profile from LinkedIn to pre-fill fields, then customize in the visual template editor.",
    tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
    imageUrl: emailSignatureEditorImg,
    screenshotUrl: emailSignatureEditorScreenshot,
    url: "https://email-signature-editor.pages.dev/",
    githubUrl: "https://github.com/charlite/email-signature-editor",
    accent: "from-violet-400/30 via-indigo-500/20 to-sky-400/20",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    title: "Lizard UI",
    description:
      "React component library with shadcn-style primitives and Tailwind-native glass styling — 23 runtime-swappable color themes, light/dark/system modes, and tree-shakeable ESM + CJS builds with full TypeScript declarations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "npm"],
    imageUrl: lizardUiImg,
    screenshotUrl: lizardUiScreenshot,
    url: "https://lizard-ui.pages.dev/",
    githubUrl: "https://github.com/lizard-ui/lizard-ui",
    accent: "from-emerald-400/30 via-teal-500/20 to-green-400/20",
    glow: "group-hover:shadow-emerald-500/20",
  },
] as const;

export const skillsData = [
  "AI",
  "Astro",
  "AWS",
  "CSS",
  "Cloudflare Workers",
  "Ethers.js",
  "Express",
  "FastAPI",
  "Framer Motion",
  "Git",
  "GraphQL",
  "Hono",
  "HTML",
  "Java",
  "JavaScript",
  "MongoDB",
  "Next.js",
  "Node.js",
  "OCI",
  "PHP",
  "Prisma",
  "Python",
  "React",
  "React Native",
  "React Router v7",
  "Redux",
  "RSC",
  "SQL",
  "Shadcn UI",
  "Supabase",
  "Swift",
  "Tailwind",
  "TanStack Query",
  "TypeScript",
  "tRPC",
  "Vercel",
  "Vite",
  "WCAG 2.2",
  "WebSockets",
] as const;

export const hostingProviders = [
  { name: "Cloudflare", logo: "/images/logo_cloudflare.png", link: "https://charlie.icu/" },
  { name: "Netlify", logo: "/images/logo_netlify.png", link: "https://europass.netlify.app/" },
  { name: "Github", logo: "/images/logo_github.png", link: "https://github.com/charlite/nextjs-portfolio" },
] as const;

export const certificatesData = [
  {
    name: "Smart Contracts with Applications in FSC",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_9.png",
    url: "https://trust-food.ubitech.eu/certificates/fc623567638f4d20a0b64a1f603591c2",
  },
  {
    name: "Advanced Blockchain Skills Certificate",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_10.png",
    url: "https://trust-food.ubitech.eu/certificates/ca861786c35e9605e0ae63c2fc3cadc6",
  },
  {
    name: "MiCA Regulation and CBDC's Certificate",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_11.png",
    url: "https://trust-food.ubitech.eu/certificates/350a6387a1989ee629d3405a6fa27f31",
  },
  {
    name: "Ethical & Governance in Blockchain FGC's",
    logo: "/images/icon-university-nicosia_grey.png",
    image: "/images/certificate_12.png",
    url: "https://trust-food.ubitech.eu/certificates/6be0ca94ae66f1d034e8ea433cf63a32/",
  },
  {
    name: "Google Ads Apps Certificate",
    logo: "/images/icon-google.svg",
    image: "/images/certificate_1.png",
    url: "https://skillshop.exceedlms.com/student/award/zKJHzMaUS4PS9deKMhTCrEUk?id=277115609",
  },
  {
    name: "Bitcoin101 Certificate",
    logo: "/images/icon-bccouncil.svg",
    image: "/images/certificate_2.png",
    url: "https://www.credential.net/7b011d83-3994-4ef5-9326-0c1904195941",
  },
  {
    name: "Mozilla's JavaScript Certificate",
    logo: "/images/icon-mozilla.png",
    image: "/images/certificate_3.png",
    url: "https://www.linkedin.com/learning/certificates/30df81127d966419845ad25db8d3b80bce960c35dd5acae2fca6b3c6e561bd29",
  },
  {
    name: "Digital Forensics Certificate",
    logo: "/images/icon-eccouncil.png",
    image: "/images/certificate_4.png",
    url: "https://codered.eccouncil.org/certificate/0e565d4d-12a8-4ba5-a9eb-7c4ee0913a70",
  },
  {
    name: "Diploma in Data Analytics",
    logo: "/images/icon-elearning.png",
    image: "/images/certificate_5.png",
    url: "https://www.linkedin.com/in/charlie-rios/details/certifications/1711731128232/single-media-viewer/?type=DOCUMENT&profileId=ACoAACSxPW8BiSbXrvOKN8pEP5dti-or4mgIDD0",
  },
  {
    name: "Oxford's Data Analytics",
    logo: "/images/icon-oxford.svg",
    image: "/images/certificate_7.png",
    url: "https://www.linkedin.com/in/charlie-rios/details/certifications/183373074/multiple-media-viewer/?profileId=ACoAACSxPW8BiSbXrvOKN8pEP5dti-or4mgIDD0&treasuryMediaId=1711728186408&type=DOCUMENT",
  },
  {
    name: "Blockchain Developer Training",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_6.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI4OTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl80OTkyMTk5XzE3MTE2MzM4NzIucG5nIiwidXNlcm5hbWUiOiJDaGFybGllIFJpb3MgUHVqYWRvIn0%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F3111%2FBlockchain-Certification-Training%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1362757859895180075&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVN8suTsnI8MjK8UyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAOb3IYBBAAAA",
  },
  {
    name: "Introduction to MERN Stack",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_8.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDk5MzM2NF8xNzExNjU1MjUxLnBuZyIsInVzZXJuYW1lIjoiQ2hhcmxpZSBSaW9zIFB1amFkbyJ9&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1362757859895180075&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd09xdqkqMc%2FK8UyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAGRdloVBAAAA",
  },
  {
    name: "Network Defense Certificate",
    logo: "/images/icon-eccouncil.png",
    image: "/images/certificate_13.png",
    url: "https://codered.eccouncil.org/certificate/595a000a-9b7b-4e3d-9399-bb2f03a87456",
  },
  {
    name: "Jira Advanced Certification",
    logo: "/images/icon-eccouncil.png",
    image: "/images/certificate_14.png",
    url: "https://codered.eccouncil.org/certificate/86d0552f-0f0d-462f-b116-4bb946ce7f03",
  },
  {
    name: "Advanced Web Analytics",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_16.png",
    url: "https://simpli-web.app.link/e/ui9AtiImqIb",
  },
  {
    name: "Advanced Content Marketing",
    logo: "/images/icon-simplelearn.jpeg",
    image: "/images/certificate_16.png",
    url: "https://simpli-web.app.link/e/smI3dHM9BIb",
  },
] as const;