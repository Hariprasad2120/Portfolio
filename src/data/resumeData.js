export const resumeData = {
  personal: {
    name: "Hariprasad V",
    wordmarkFirst: "HARI",
    wordmarkSecond: "PRASAD",
    role: {
      primary: "Software Engineer",
      secondary: "Full Stack Developer & AI Technologist",
    },
    location: "Chennai, India",
    phone: "+91 7708298600",
    email: "hariprasad.official.137@gmail.com",
    github: "https://github.com/Hariprasad2120",
    linkedin: "https://linkedin.com/in/hariprasad137",
    whatsapp: "https://wa.me/917708298600",
    status: "Available for Full-time Roles & Contracts",
    tagline: "Building high-performance production web platforms, modular ERP architectures, and conversion-optimized digital products.",
    summary: "Full stack software engineer building production web applications with React, Next.js, TypeScript, Node.js, and PostgreSQL. Shipped an end-to-end course enrollment platform with integrated Razorpay payments and LMS for an academy, and actively architecting a modular ERP covering CRM, HRMS, and customs logistics."
  },

  stats: [
    { label: "Production Platforms Shipped", value: "2+" },
    { label: "Core Tech Stacks", value: "10+" },
    { label: "Degree in Comp. Sci.", value: "2026" },
    { label: "Delivery Success Rate", value: "100%" }
  ],

  services: [
    {
      id: "01",
      title: "Full Stack Web & LMS Architecture",
      subtitle: "React • Next.js • Node.js • PostgreSQL",
      description: "End-to-end web engineering with server components, responsive interfaces, session auth, video streaming, and lesson progress tracking.",
      deliverables: [
        "Modern responsive SPAs & SSR apps with Next.js & React",
        "LMS architecture with progress tracking & certificate generation",
        "Type-safe backend REST APIs and Prisma database models",
        "Automated OTP email flows and authentication systems"
      ],
      icon: "Code"
    },
    {
      id: "02",
      title: "E-Commerce & Payment Funnels",
      subtitle: "Razorpay • Cart & Checkout • Invoicing",
      description: "Secure digital sales pipelines featuring server-side signature verification, seat-limited admission funnels, automated invoicing, and cart reminder flows.",
      deliverables: [
        "Seamless Razorpay checkout with webhook verification",
        "Automated PDF invoice generation and instant receipt delivery",
        "Seat-limited batch admission logic and reservation timers",
        "Abandoned cart reminders and discount coupon engines"
      ],
      icon: "CreditCard"
    },
    {
      id: "03",
      title: "Enterprise ERP & Logistics Systems",
      subtitle: "Neon PostgreSQL • Prisma • Modular CRM",
      description: "Modular enterprise management systems built for high-throughput business operations, compliance tracking, and automated reporting.",
      deliverables: [
        "Unified CRM pipeline for lead and client management",
        "HRMS modules covering employee attendance and appraisals",
        "Customs clearance tracking and document workflows",
        "Normalized relational database schemas with zero data loss"
      ],
      icon: "Layers"
    },
    {
      id: "04",
      title: "AI Tools & Marketing Automation",
      subtitle: "SEO • GA4 • GTM • Meta Pixel",
      description: "Growth-focused developer tooling integrating SEO prerendering, analytics tracking, automated email triggers, and AI workflow accelerators.",
      deliverables: [
        "Comprehensive GA4 & Meta Pixel conversion tracking",
        "SEO prerendering for fast indexing and high organic reach",
        "Automated transactional & lifecycle email campaigns",
        "Conversion funnel optimization and audit reporting"
      ],
      icon: "Sparkles"
    }
  ],

  projects: [
    {
      id: "dubash-exim",
      title: "Dubash Exim Academy – Learning & E-Commerce Platform",
      category: "Full Stack / E-Commerce",
      client: "Freelance Client",
      date: "Shipped Sep 2026",
      status: "In Production",
      summary: "End-to-end Next.js learning and commerce platform enabling students to browse and enroll in export-import courses with seat-limited batch admissions.",
      highlights: [
        "Built the full enrollment funnel: course catalog, cart & checkout, Razorpay payments, and student dashboard.",
        "Engineered an LMS with secure video streaming, lesson progress tracking, notes, Q&A, and verifiable public certificates.",
        "Integrated Razorpay payments with server-side signature verification, automated PDF invoices, and refund workflows.",
        "Implemented session-based authentication with email OTP password reset and automated transactional email flows.",
        "Configured SEO with prerendering, GA4, GTM, Meta Pixel conversion tracking, and automated Playwright end-to-end tests.",
        "Deployed to production infrastructure on Hostinger."
      ],
      tags: ["Next.js", "Neon PostgreSQL", "Razorpay", "Tailwind CSS", "GA4", "GTM", "Meta Pixel", "Playwright", "Hostinger"],
      liveUrl: "https://dubasheximacademy.com/",
      githubUrl: "https://github.com/Hariprasad2120/Dubash-Exim",
      featured: true,
      color: "from-amber-500/20 to-orange-600/10",
      stats: { metric1: "5-Step Funnel", metric2: "100% Automated", metric3: "Zero Downtime" }
    },
    {
      id: "monolith-engine",
      title: "Monolith Engine – Logistics & Enterprise ERP",
      category: "Enterprise ERP",
      client: "Shipping & Logistics Company",
      date: "Active Development",
      status: "In Progress",
      summary: "Modular, type-safe enterprise resource planning software architected for an international shipping and freight logistics provider.",
      highlights: [
        "Designed and developing a modular ERP covering CRM, HRMS, attendance management, employee appraisal, and customs clearance.",
        "Owning the entire product lifecycle: gathering business requirements, database schema design, and full-stack development.",
        "Engineered type-safe database architecture with Neon PostgreSQL and Prisma ORM for bulletproof relational integrity.",
        "Built customized role-based access control (RBAC) protecting sensitive financial and customs logistics information."
      ],
      tags: ["Next.js", "TypeScript", "Neon PostgreSQL", "Prisma ORM", "Tailwind CSS", "REST API"],
      liveUrl: null,
      githubUrl: "https://github.com/Hariprasad2120/monolith-engine",
      featured: true,
      color: "from-blue-500/20 to-cyan-600/10",
      stats: { metric1: "5 Core Modules", metric2: "Type-Safe Prisma", metric3: "Enterprise RBAC" }
    },
    {
      id: "gnoverse-ai",
      title: "Automated Content Creation using AI – Gnoverse",
      category: "AI & Marketing",
      client: "Gnoverse",
      date: "Personal Project",
      status: "Active",
      summary: "Autonomous AI-driven content generation engine designed to create, curate, and personalize multi-niche content across diverse topics under the Gnoverse brand.",
      highlights: [
        "Architected an automated multi-step AI pipeline to generate high-quality, topic-tailored articles, social media assets, and personalized media feeds.",
        "Implemented intelligent prompt engineering workflows and content personalization algorithms adapting tone, depth, and structure per niche.",
        "Integrated dynamic topic clustering and automated metadata tagging to streamline distribution and maximize reader engagement.",
        "Engineered end-to-end automation minimizing manual editorial overhead while maintaining strict content consistency and quality standards."
      ],
      tags: ["AI Content Automation", "LLMs / Prompt Engineering", "Personalization", "Full Stack", "Automated Workflows"],
      featured: true,
      color: "from-purple-500/20 to-pink-600/10",
      stats: { metric1: "Multi-Topic Engine", metric2: "AI Personalized", metric3: "Automated Pipeline" }
    },
    {
      id: "developer-portfolio",
      title: "Interactive Systems Engineer Portfolio",
      category: "Frontend & Corporate",
      client: "Personal Engineering Showcase",
      date: "Shipped Oct 2026",
      status: "In Production",
      summary: "A high-performance modern developer portfolio showcasing production architectures, kinetic typography, dynamic dark/light themes, and telemetry-backed systems engineering.",
      highlights: [
        "Engineered with React 18 and Vite for sub-second page loads, responsive CSS architectures, and zero bloated runtime dependencies.",
        "Designed an iconic Monolith theme toggle with seamless dark/light palette transitions and custom typography systems.",
        "Implemented character-rolling scroll reveal animations using IntersectionObserver with viewport exit resets.",
        "Integrated direct FormSubmit transmission with automated mailto fallback and interactive live system simulators."
      ],
      tags: ["React", "Vite", "Responsive Design", "CSS3 Animations", "IntersectionObserver", "FormSubmit"],
      liveUrl: null,
      githubUrl: "https://github.com/Hariprasad2120/Portfolio",
      featured: true,
      color: "from-emerald-500/20 to-teal-600/10",
      stats: { metric1: "100 Lighthouse", metric2: "60fps Motion", metric3: "Zero Dependency CSS" }
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Baptist Digitek Pvt. Ltd.",
      location: "Chennai, India",
      period: "Oct 2025 – Nov 2025",
      type: "Internship",
      description: "Rebuilt the corporate website of parent company Baptist Healthcare as a full stack developer, modernizing its design, structure, and codebase. Developed responsive pages and reusable UI components, and deployed the updated website to production.",
      skills: ["React", "JavaScript", "UI Architecture", "Component Systems", "Production Deployment"]
    },
    {
      role: "Freelance Full Stack Engineer",
      company: "Independent Contractor",
      location: "Chennai, India",
      period: "2025 – Present",
      type: "Freelance",
      description: "Engineering bespoke production web applications, educational platforms, and enterprise ERP systems for diverse commercial clients, managing the full development lifecycle from client requirements to database design, deployment, and analytics.",
      skills: ["Next.js", "Prisma", "PostgreSQL", "Razorpay", "GA4 / GTM", "Playwright"]
    }
  ],

  education: [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Jeppiaar Engineering College (Anna University)",
      period: "Expected May 2026",
      location: "Chennai, India",
      details: "Comprehensive coursework in Data Structures, Algorithms, Database Management Systems, Object-Oriented Design, Computer Networks, and Software Engineering Principles."
    }
  ],

  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3 / Modern CSS"],
    frontend: ["React", "Next.js (App Router)", "Vite", "Tailwind CSS", "Responsive UI", "State Management", "Component Systems"],
    backend: ["Node.js", "Express", "RESTful APIs", "Prisma ORM", "PostgreSQL (Neon)", "Session Auth & JWT", "Razorpay Integration"],
    marketingAnalytics: ["SEO & Prerendering", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Meta Pixel", "Conversion Tracking", "Automated Email Flows"],
    toolsPlatforms: ["Git & GitHub", "Playwright E2E", "Vercel", "Hostinger", "Postman", "Figma", "VS Code"]
  }
};
