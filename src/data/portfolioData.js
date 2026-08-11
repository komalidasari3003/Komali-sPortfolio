// ============================================================
// portfolioData.js — Centralized configuration for Dasari Komali's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Dasari Komali",
  firstName: "Dasari Komali",
  brandName: "Dasari Komali",
  title: "AI & GenAI Engineer",
  location: "Andhra Pradesh, India",
  phone: "+91 8332899948",
  emails: {
    primary: "komalidasari2004@gmail.com",
    secondary: "komalidasari2004@gmail.com",
  },
  summary:
    "AI/GenAI Engineer (CGPA: 9.2) specializing in Agentic AI, multi-agent systems, and RAG pipelines using Python, FastAPI, and LangChain/LangGraph. Experienced building workflow automation and data quality automation solutions on GCP, with a strong CI/CD and API-engineering foundation.",
  resumeUrl: "/Dasari_Komali_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/komalidasari3003/Komali-sPortfolio",
  linkedin: "https://linkedin.com/in/komalidasari",
  instagram: "https://www.instagram.com/komali_dasari_30/",
};

export const heroContent = {
  greeting: "Hi, I'm Dasari Komali",
  titleHighlight: "AI & GenAI Engineer",
  subtitle:
    "Specializing in Agentic AI, Multi-Agent Systems, RAG Pipelines, FastAPI, and Cloud (GCP) Automation.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:komalidasari2004@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Dasari Komali,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Dasari_Komali_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Dasari Komali</span>, an AI & GenAI Engineer based in Andhra Pradesh, India (CGPA: 9.2). I specialize in building autonomous Agentic AI systems, multi-agent workflows, and RAG pipelines with Python, FastAPI, LangChain/LangGraph, and Google Cloud Platform.`,
  techStack: ["Agentic AI", "Python & FastAPI", "GCP & RAG"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn complex AI challenges into scalable systems",
  description:
    "I follow a structured, research-backed engineering workflow to design agentic systems, RAG pipelines, and cloud automation.",
  cards: [
    {
      number: "01",
      title: "Problem & Architecture",
      text: "Defining workflow goals, agent capabilities, guardrails, and data schemas to architect robust multi-agent systems.",
    },
    {
      number: "02",
      title: "RAG & Pipeline Design",
      text: "Building context-aware retrieval mechanisms, vector indexes, prompt strategies, and structured API endpoints.",
    },
    {
      number: "03",
      title: "Agentic Development",
      text: "Orchestrating autonomous agents with LangChain/LangGraph, FastAPI backends, and GCP cloud-native ETL integration.",
    },
    {
      number: "04",
      title: "Evaluation & Deployment",
      text: "Iterative prompt tuning, testing against evaluation guardrails, CI/CD pipeline automation, and production deployment.",
    },
  ],
  endText: "Ready to deploy!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Agentic AI & LLMs",
      skills: [
        { name: "LangChain", level: 95 },
        { name: "LangGraph", level: 92 },
        { name: "MCP (Model Context Protocol)", level: 90 },
        { name: "RAG Pipelines", level: 95 },
        { name: "Prompt Engineering", level: 92 }
      ]
    },
    {
      title: "Python & APIs",
      skills: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 90 },
        { name: "REST APIs", level: 92 },
        { name: "Git & GitHub", level: 90 }
      ]
    },
    {
      title: "Automation & Data",
      skills: [
        { name: "Workflow Automation", level: 92 },
        { name: "Data Quality Automation", level: 88 },
        { name: "ETL Pipelines", level: 88 },
        { name: "SQL & Data Cleaning", level: 85 }
      ]
    },
    {
      title: "Cloud & Dev Tools",
      skills: [
        { name: "GCP (Google Cloud)", level: 88 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "GitHub Copilot", level: 90 },
        { name: "Claude Code", level: 90 },
        { name: "Cursor AI", level: 90 }
      ]
    },
    {
      title: "AI Frameworks & ML",
      skills: [
        { name: "TensorFlow", level: 82 },
        { name: "YOLOv8 & Computer Vision", level: 85 },
        { name: "Vertex AI", level: 84 },
        { name: "Power BI", level: 80 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures & Algo", level: 90 },
        { name: "DBMS & SQL", level: 88 },
        { name: "OOP Principles", level: 92 },
        { name: "Software Engineering", level: 90 }
      ]
    }
  ]
};

// Content Creation / Demos Data
export const contentCreation = {
  badge: "AI Demos & Innovation",
  heading: "Agentic AI Demos & Hackathon Projects",
  description: "Beyond core engineering, I build interactive AI agent demos, hackathon prototypes, and automated presentation workflows.",
  categories: [
    {
      title: "Autonomous Agent Workflows",
      description: "Multi-agent orchestration systems built with LangGraph and FastAPI for multi-step reasoning and execution.",
      stats: "Agentic AI",
      icon: "🤖"
    },
    {
      title: "RAG & Knowledge Assistants",
      description: "Context-aware document retrieval and multi-turn dialogue chatbots integrated with guardrails.",
      stats: "LangChain / RAG",
      icon: "🧠"
    },
    {
      title: "Computer Vision & Analytics",
      description: "Real-time crowd density detection and plant disease classification with multilingual remediation.",
      stats: "YOLOv8 / TensorFlow",
      icon: "👁️"
    },
    {
      title: "Automated Data & Slide Pipelines",
      description: "AI-powered PowerPoint slide generation transforming Excel datasets into executive insights.",
      stats: "ETL / LLM Insights",
      icon: "⚡"
    }
  ]
};

// Leadership & Hackathons Data
export const leadershipList = [
  {
    title: "Google Cloud India Guinness World Record Agentic AI Hackathon",
    description: "Shortlisted among 9,500+ teams nationwide in Google Cloud India's flagship Agentic AI hackathon, demonstrating autonomous multi-agent systems.",
    role: "Finalist & Team Lead",
    badge: "Guinness World Record"
  },
  {
    title: "Google Cloud Agentic AI Day — 30-Hour Challenge",
    description: "Successfully built and presented an agentic AI solution during an intensive 30-hour live challenge, earning a Certificate of Appreciation as a Finalist.",
    role: "Hackathon Finalist",
    badge: "Google Cloud"
  },
  {
    title: "Samsung Innovation Campus — Coding & Programming",
    description: "Completed comprehensive training in advanced coding, algorithm design, and software development practices.",
    role: "Graduate",
    badge: "Samsung"
  },
  {
    title: "NSIC Technical Services Centre — Computer Vision",
    description: "Completed specialized training in Concepts of Computer Vision under ATI Scheme, securing top Grade A1 evaluation.",
    role: "Technical Trainee (Grade A1)",
    badge: "NSIC Government"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Affine Analytics",
    role: "Data Science Intern (AI Practices)",
    duration: "Jan 2026 – Aug 2026",
    skills: [
      "Built AI/ML automation ETL pipelines in Python & SQL for GCP datasets.",
      "Developed AI-powered PowerPoint automation workflow converting Excel into LLM-driven slides.",
      "Designed multi-agent RAG workflows with guardrails & built Power BI dashboards."
    ],
    tech: ["Python", "SQL", "GCP", "LangChain", "RAG", "Power BI"]
  },
  {
    organization: "Evolve Robot Lab",
    role: "Python & GenAI Intern",
    duration: "Jun 2024 – Aug 2024",
    skills: [
      "Built context-aware GenAI chatbot using Python & NLP with multi-turn dialogue.",
      "Integrated NLP pipelines in a Git-based Agile team environment.",
      "Resolved model performance issues through iterative evaluation & testing."
    ],
    tech: ["Generative AI", "Python", "NLP", "Git", "Agile"]
  },
  {
    organization: "Google for Developers / EduSkills",
    role: "AI-ML Virtual Intern",
    duration: "July 2024 – Sept 2024",
    skills: [
      "Completed 10-week intensive AI-ML virtual internship program.",
      "Applied machine learning algorithms, model training, and evaluation techniques."
    ],
    tech: ["AI", "Machine Learning", "Python", "Google Tools"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Agentic Reasoning", icon: "🧠", desc: "Designing multi-agent decision trees, planning loops, and execution guardrails." },
  { name: "Problem Solving", icon: "🧩", desc: "Deconstructing complex ETL, data quality, and NLP pipelines into modular services." },
  { name: "Agile Collaboration", icon: "🤝", desc: "Thriving in Git-based, iterative team environments with continuous delivery." },
  { name: "Prompt Engineering", icon: "✍️", desc: "Crafting precise system prompts and structured output schemas for LLM accuracy." },
  { name: "Adaptability", icon: "🌟", desc: "Rapidly mastering emerging frameworks like LangGraph, MCP, FastAPI, and Cursor AI." },
  { name: "Technical Communication", icon: "💬", desc: "Translating AI insights into Power BI dashboards and executive slide decks." },
  { name: "Data Quality Focus", icon: "🔍", desc: "Enforcing validation rules and automated tests across cloud-native datasets." },
  { name: "Time Management", icon: "⏰", desc: "Balancing high-CGPA B.Tech studies (9.2), dual internships, and hackathons." }
];

// Key Projects Data
export const projects = [
  {
    id: "ai-job-assistant",
    number: "01",
    badge: "🚀 Flagship AI Project",
    title: "AI Job Assistant",
    description:
      "An autonomous Agent Orchestration Platform where multi-agent systems reason, plan, and coordinate workflows using LangChain, LangGraph, and RAG pipelines. Features high-performance FastAPI REST APIs for intelligent resume analysis, skill extraction, and automated job matching with guardrails.",
    techTags: [
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "FastAPI",
      "Python",
      "REST APIs",
      "MCP"
    ],
    links: {
      github: socialLinks.github,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "crowd-density-detection",
    number: "02",
    badge: "👁️ Computer Vision & Cloud",
    title: "Crowd Density Detection Dashboard",
    description:
      "A real-time computer vision and cloud analytics system for crowd density monitoring and bottleneck prediction. Powered by YOLOv8, Google Cloud Vertex AI, and GCP for video processing, integrated with interactive Power BI dashboards for cross-functional stakeholders.",
    techTags: ["YOLOv8", "Vertex AI", "GCP", "Power BI", "Python", "Computer Vision"],
    links: {
      github: socialLinks.github,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "krushak-app",
    number: "03",
    badge: "🌱 AI for Agriculture",
    title: "Krushak App — Plant Disease Detection",
    description:
      "A deep learning computer vision model for automated plant disease classification and remedy recommendation. Built using TensorFlow, GCP cloud services, and a responsive React.js frontend providing localized, multilingual remedies to farmers.",
    techTags: ["TensorFlow", "React.js", "GCP", "Deep Learning", "Python", "Computer Vision"],
    links: {
      github: socialLinks.github,
      demo: null,
    },
    isFlagship: false,
  },
];

// Certificates Data
export const certificates = {
  featured: [
    {
      name: "Data Science - AI Practices Intern",
      issuer: "Affine Analytics",
      icon: "📊",
    },
    {
      name: "Guinness World Record Agentic AI Finalist",
      issuer: "Google Cloud India",
      icon: "🏆",
    },
    {
      name: "Google Cloud Agentic AI Day Finalist",
      issuer: "Google Cloud / Hack2skill",
      icon: "☁️",
    },
    {
      name: "Gen-AI Internship Certificate",
      issuer: "Evolve Robot Lab",
      icon: "🤖",
    },
    {
      name: "AI-ML Virtual Internship",
      issuer: "Google for Developers / EduSkills",
      icon: "🎓",
    },
    {
      name: "Concepts of Computer Vision (Grade A1)",
      issuer: "NSIC Technical Services",
      icon: "👁️",
    },
  ],
  viewAllUrl: "/Certificates.pdf",
};

// Education Data
export const education = {
  degree: "B.Tech. Computer Science & Engineering",
  institution: "Bharath Institute of Higher Education and Research",
  cgpa: "9.2",
  graduation: "2022 – 2026",
  twelfth: "Senior Secondary (XII) — Sri Chaitanya Junior College (89.7%, 2020–2022)",
  tenth: "Secondary (X) — Sasi English Medium High School (GPA 9.2, 2020)",
};

// Footer Data
export const footerContent = {
  taglines: [
    "AI & GenAI Engineering",
    "Agentic AI · LangGraph · FastAPI · GCP",
    "Multi-Agent Workflows & RAG Pipelines",
  ],
  credential: "B.Tech CSE · CGPA 9.2",
  copyright: `© ${new Date().getFullYear()} Dasari Komali | AI & GenAI Engineer`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

