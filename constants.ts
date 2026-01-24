import { PersonalInfo, SkillCategory, Experience, Education, Certification, Project } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Terugu Arun",
  title: "Software Developer",
  location: "Bangalore",
  email: "arunkumarterugu@gmail.com",
  phone: "6301503923",
  summary: "Software Developer with 3+ years of experience in building scalable backend applications using Python, FastAPI. Skilled in API development, asynchronous programming, SQL optimization, and CI/CD pipelines. Hands-on exposure to Generative AI concepts including LLM integration, Retrieval-Augmented Generation (RAG), and agent-based workflows. Adept at delivering proof-of-concepts and production-ready solutions in fast-paced environments.",
  summaryPoints: [
    "Backend Development Specialist using Python & FastAPI",
    "Expert in Asynchronous Programming & SQL Optimization",
    "Generative AI & LLM Integration (RAG, LangChain)",
    "CI/CD Implementation with Docker & Jenkins"
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend & Languages",
    icon: "code",
    skills: ["Python", "FastAPI", "Asyncio", "RESTful APIs", "SQL", "PL/SQL"]
  },
  {
    title: "AI & Data",
    icon: "cpu",
    skills: ["LangChain", "RAG Pipelines", "LLM Integration", "Pandas", "NumPy"]
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: ["Docker", "Jenkins", "AWS (EC2)", "Git", "CI/CD"]
  },
  {
    title: "Tools & Testing",
    icon: "settings",
    skills: ["Postman", "Pytest", "ServiceNow", "Jira", "Swagger"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Python Developer",
    company: "Tata Consultancy Services",
    location: "Bangalore",
    period: "July 2023 - Aug 2025",
    description: "Developed a scalable backend system to manage clinical trial data, including patient enrollment, trial protocols, and compliance reports for pharmaceutical research teams.",
    achievements: [
      "Designed and implemented RESTful APIs using FastAPI, handling patient enrollment, trial metadata, and reporting modules.",
      "Built asynchronous services (asyncio) to process large datasets, improving ingestion speed by 40%.",
      "Integrated JWT-based authentication and role-based access control (RBAC) for secure API access.",
      "Created optimized PostgreSQL schemas and indexes for high-volume trial data (~10M+ records).",
      "Containerized the application with Docker and deployed on AWS EC2, ensuring scalability.",
      "Wrote automated test suites with pytest, achieving 85%+ test coverage.",
      "Automated CI/CD using Jenkins, reducing manual deployments and downtime.",
      "Ensured regulatory compliance (21 CFR Part 11) for secure electronic records in pharma domain."
    ]
  },
  {
    role: "L2 Support",
    company: "Tata Consultancy Services",
    location: "Bangalore",
    period: "Aug 2022 - June 2023",
    description: "Provided L2 support for pharmaceutical applications ensuring 24/7 system availability and timely incident resolution.",
    achievements: [
      "Performed root cause analysis (RCA) for recurring incidents and collaborated with L3 teams for permanent fixes.",
      "Handled incident and service request tickets using ITSM tools like ServiceNow.",
      "Coordinated with business users, development, and QA teams to ensure smooth operations and SLA adherence.",
      "Investigated application and server logs to troubleshoot functional and technical issues.",
      "Performed SQL queries and basic scripting (Python/Shell) for data extraction and routine task automation."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Generative AI Chat Assistant (POC)",
    description: "Integrated OpenAI API with LangChain to build a contextual chatbot supporting knowledge base queries. Used ChromaDB for RAG."
  },
  {
    name: "Library Management Web Application (POC)",
    description: "Full-stack system with relational mappings, fine calculation, auth/authz. Implemented REST APIs, async processing, and DB optimizations."
  },
  {
    name: "Promptify",
    description: "Web app converting plain language into optimized AI prompts. Designed clean UI with HTML/CSS/JS, architected for FastAPI backend."
  },
  {
    name: "Flat Foot Pain Tracker",
    description: "Built using FastAPI with REST APIs to track daily foot pain data. Stored records in SQLite and used Swagger for documentation."
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Kuppam Engineering College",
    year: "2018-2022"
  }
];

export const CERTIFICATIONS: Certification[] = [
  /* No specific certifications listed in resume text, leaving empty or implied */
];
