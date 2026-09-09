import React from "react";
import { FaCloud, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export const tokenBarImg =
  "https://raw.githubusercontent.com/token-bar/token-bar/main/.github/icon-cropped.png";
export const tokenBarScreenshot =
  "https://raw.githubusercontent.com/token-bar/token-bar/main/.github/screenshot.png";
export const cookGptImg =
  "https://raw.githubusercontent.com/cook-gpt/cook-gpt/main/.github/icon-cropped.png";
export const cookGptScreenshot =
  "https://raw.githubusercontent.com/cook-gpt/cook-gpt/main/.github/screenshot.png";
export const pocketAgentImg =
  "https://raw.githubusercontent.com/pocket-agent/pocket-agent/main/.github/icon-cropped.png";
export const pocketAgentScreenshot =
  "https://raw.githubusercontent.com/pocket-agent/pocket-agent/main/.github/screenshot.png";
export const dropafileImg =
  "https://raw.githubusercontent.com/dropafile/dropafile/main/.github/icon-cropped.png";
export const dropafileScreenshot =
  "https://raw.githubusercontent.com/dropafile/dropafile/main/.github/screenshot.png";
export const emailSignatureEditorImg =
  "https://raw.githubusercontent.com/xarlizard/email-signature-editor/main/.github/icon-cropped.png";
export const emailSignatureEditorScreenshot =
  "https://raw.githubusercontent.com/xarlizard/email-signature-editor/main/.github/screenshot.png";
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
    title: "Frontend Lead | Product Engineer (React / Next.js)",
    company: "Timbal AI",
    location: "Barcelona, Cataluña, España",
    date: "November 2025 - Present (8 months)",
    insights: [
      "Leading frontend development of a core AI product using React and Next.js.",
      "Defining the product's look, feel, and user experience directly in code.",
      "Collaborating with founders to shape product vision and strategy.",
      "Building impactful, high-performance interfaces with autonomy and ownership.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "AI"],
    icon: React.createElement(SiNextdotjs),
  },
  {
    title: "Frontend Lead Developer (React)",
    company: "Aplicaciones Web Mardo",
    location: "Mataró, Cataluña, España",
    date: "November 2024 - November 2025 (1 year 1 month)",
    insights: [
      "Development and maintenance of modern web applications using React 19, Node.js 23, React Router v7, React Bootstrap, Vite, and Axios.",
      "Creation and integration of RESTful APIs with CRUD architecture.",
      "Implementation of Server-Side Rendering (SSR) using Next.js and advanced React Router.",
      "Collaboration with multidisciplinary teams to deliver scalable, accessible, and high-performance solutions, applying WebSockets and the latest WCAG accessibility guidelines.",
    ],
    technologies: [
      "React 19",
      "Node.js",
      "React Router v7",
      "Next.js",
      "Vite",
      "Axios",
      "WebSockets",
      "WCAG",
    ],
    icon: React.createElement(FaReact),
  },
  {
    title: "Fullstack Developer & UI/UX Designer",
    company: "Pixelimperium",
    location: "Eivissa/Ibiza, Islas Baleares, España",
    date: "August 2023 - September 2024 (1 year 2 months)",
    insights: [
      "Full-stack development using React, Next.js, TypeScript, Node.js, Python, and Java.",
      "Design and deployment of eCommerce platforms on AWS, Vercel, Netlify, and Cloudflare Pages.",
      "Creation of UI/UX interfaces, custom APIs, and solutions with SQL databases.",
      "Experience in Blockchain and Web3 (Solidity, Ether.js) for decentralized applications.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Java",
      "Solidity",
      "Ether.js",
      "AWS",
      "Vercel",
      "Netlify",
      "Cloudflare",
      "SQL",
    ],
    icon: React.createElement(SiNextdotjs),
  },
  {
    title: "Senior Frontend Web Developer",
    company: "Pixelimperium",
    location: "Eivissa/Ibiza, Islas Baleares, España",
    date: "September 2022 - August 2023 (1 year)",
    insights: [
      "Architecting high-performance, accessible web applications with React, Next.js, and TypeScript for robust code quality.",
      "Led development of complex UI/UX interfaces and component libraries, ensuring WCAG accessibility compliance.",
      "Optimized frontend performance and state management by leveraging Vite for rapid bundling and defining efficient RESTful API consumption via Axios.",
      "Implemented WebSockets for real-time data flow, significantly enhancing application responsiveness and user experience.",
      "Managed seamless deployment and hosting of applications on platforms including Vercel, Netlify, and Cloudflare Pages.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Vite",
      "Axios",
      "WebSockets",
      "WCAG",
      "Vercel",
      "Netlify",
      "Cloudflare Pages",
    ],
    icon: React.createElement(FaReact),
  },
  {
    title: "IT Consultant & Web 3.0 / Apps Developer",
    company: "DR FINANTRUST",
    location: "Barcelona, Cataluña, España",
    date: "May 2022 - September 2022 (5 months)",
    insights: [
      "Development of trading software for currency and stock markets using React, React Native, Node.js, and Java.",
      "Work with AWS, Oracle Cloud, Cloudflare, and Ether.js to build secure and scalable systems.",
      "Training and mentorship of the junior team, improving productivity and adoption of internal tools.",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Java",
      "AWS",
      "Oracle Cloud",
      "Cloudflare",
      "Ether.js",
    ],
    icon: React.createElement(FaNodeJs),
  },
  {
    title: "IT Consultant & Web Developer",
    company: "Businessprinter, S.L.",
    location: "Barcelona, Cataluña, España",
    date: "November 2020 - May 2022 (1 year 7 months)",
    insights: [
      "Responsible for a 5-person IT team, managing client applications, websites, and systems using React, Angular, Node.js, PHP, Java, and Swift.",
      "Delivery of B2B solutions, strengthening client relationships and generating add-on sales for IT services.",
      "Full-stack development and management within cloud environments (AWS).",
    ],
    technologies: ["React", "Angular", "Node.js", "PHP", "Java", "Swift", "AWS"],
    icon: React.createElement(FaNodeJs),
  },
  {
    title: "Web Developer (Junior)",
    company: "Businessprinter, S.L.",
    location: "Barcelona, Cataluña, España",
    date: "June 2020 - November 2020 (6 months)",
    insights: [
      "Assisted in the development of client websites and applications using React, Angular, and Node.js under the guidance of senior developers.",
      "Focused on front-end feature implementation and bug resolution, contributing to the deployment of new B2B solutions.",
      "Maintained and updated legacy code in PHP, Java, and Swift to ensure system stability and cross-platform compatibility.",
      "Gained foundational experience in full-stack development principles and contributed to basic cloud environment tasks on AWS.",
    ],
    technologies: ["React", "Angular", "Node.js", "PHP", "Java", "Swift", "AWS"],
    icon: React.createElement(FaReact),
  },
  {
    title: "Software Engineer (Junior)",
    company: "Magnum Object, S.L.",
    location: "Cornellà de Llobregat, Cataluña, España",
    date: "July 2018 - June 2020 (2 years)",
    insights: [
      "Development and maintenance of websites, evolving toward React with strong foundations in JavaScript, HTML/CSS, and SQL.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "SQL"],
    icon: React.createElement(FaReact),
  },
  {
    title: "Systems & Networks Admin",
    company: "Magnum Object, S.L.",
    location: "Cornellà de Llobregat, Cataluña, España",
    date: "August 2017 - July 2018 (1 year)",
    insights: [
      "Comprehensive IT department support: system configuration, server/network management, hardware maintenance, SAP and RMA.",
      "Multi-platform support (Windows, macOS, Linux) for B2B clients.",
    ],
    technologies: ["Windows", "macOS", "Linux", "SAP", "Networking"],
    icon: React.createElement(FaServer),
  },
  {
    title: "Systems & Networks Admin (Junior)",
    company: "Magnum Object, S.L.",
    location: "Cornellà de Llobregat, Cataluña, España",
    date: "May 2017 - August 2017 (4 months)",
    insights: [
      "Supported systems, networks, and hardware maintenance for B2B clients while learning core IT infrastructure practices.",
    ],
    technologies: ["Windows", "macOS", "Linux", "Networking"],
    icon: React.createElement(FaCloud),
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
    githubUrl: "https://github.com/cook-gpt/cook-gpt",
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
    githubUrl: "https://github.com/token-bar/token-bar",
    accent: "from-amber-400/30 via-orange-500/20 to-rose-400/20",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    title: "Pocket Agent",
    description:
      "Open-source local AI assistant ecosystem — Python Pocket Node runs LLM routing, tools, memory, and Telegram on your machine; a macOS desktop app bundles the stack; a Cloudflare Worker API and React web UI handle chat, monitor, and settings.",
    tags: ["Python", "Cloudflare", "React", "macOS"],
    imageUrl: pocketAgentImg,
    screenshotUrl: pocketAgentScreenshot,
    url: "https://pocket-agent.pages.dev/",
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
    url: "https://dropafile.xarlizard.workers.dev/",
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
    githubUrl: "https://github.com/xarlizard/email-signature-editor",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Astro",
  "Express",
  "tRPC",
  "Python",
  "Shadcdn",
  "Framer Motion",
  "Swift"
] as const;

export const hostingProviders = [
  { name: "Cloudflare", logo: "/images/logo_cloudflare.png", link: "https://portfolio.xarlizard.workers.dev/" },
  { name: "Netlify", logo: "/images/logo_netlify.png", link: "https://europass.netlify.app/" },
  { name: "Github", logo: "/images/logo_github.png", link: "https://github.com/Xarlizard/xarlizard/tree/gh-pages" },
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