// Projects data array
const projects = [
  {
    id: 1,
    title: "Teamgle",
    subtitle: "Full-Stack Workforce Management SaaS",
    description:
      "A production-grade SaaS platform for managing event and project-based teams. Built with a clean separation between a C# ASP.NET Core REST API and a Vanilla JS frontend. Features company-scoped multi-tenancy, Firebase-powered real-time chat and file storage, role-based access control for managers and employees, and full CRUD for projects, shifts, customers, and staff assignments.",
    techStack: [
      "C#",
      "ASP.NET Core 8",
      "SQL Server",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "Vanilla JS",
      "REST API",
      "HTML/CSS",
    ],
    highlights: [
      "Role-based access: separate manager & employee dashboards",
      "Real-time chat powered by Firestore",
      "Staff scheduling, shifts & project assignment logic",
      "Customer & contact person management",
      "Firebase token auth verified server-side on every request",
      "Company-scoped queries — full multi-tenant isolation",
    ],
    demonstrates:
      "Full-stack architecture | Multi-tenancy design | Firebase integration | REST API | Security-first backend",
    githubUrl: "https://github.com/roeisarid1/Teamgle",
    liveUrl: "",
    icon: "👥",
  },
  {
    id: 2,
    title: "Salary Calculator",
    subtitle: "Automated Salary & Timesheet Processing System",
    description:
      "A backend-driven system that automates salary calculations based on working hours, overtime, bonuses, and deductions. Features Excel timesheet ingestion, data processing with Pandas, gross/net salary calculations, overtime logic implementation, and automated execution via API.",
    techStack: ["Python", "FastAPI", "Pandas", "Excel", "Uvicorn", "REST API"],
    highlights: [
      "Excel timesheet ingestion",
      "Data processing with Pandas",
      "Gross/Net salary calculations",
      "Overtime logic implementation",
      "Automated execution (API + Cron)",
    ],
    demonstrates:
      "Data processing | Backend logic | Automation | Structured workflow design",
    githubUrl: "https://github.com/roeisarid1/salary-calculator",
    liveUrl: "",
    icon: "📊",
  },
  {
    id: 3,
    title: "Operational Monitoring Dashboard",
    subtitle: "Elastic Stack (Elasticsearch + Kibana)",
    description:
      "Designed and implemented internal operational dashboards for monitoring system health and performance. Includes real-time system metrics visualization, error & anomaly tracking, SLA monitoring panels, and log-based performance insights.",
    techStack: [
      "Elasticsearch",
      "Kibana",
      "Data Visualization",
      "Log Analysis",
      "KPI Monitoring",
    ],
    highlights: [
      "Real-time system metrics visualization",
      "Error & anomaly tracking",
      "SLA monitoring panels",
      "Log-based performance insights",
    ],
    demonstrates:
      "Production monitoring | KPI definition | Log analysis | Data visualization | Operational impact",
    githubUrl: "",
    liveUrl: "",
    icon: "📈",
  },
  {
    id: 4,
    title: "Fantasy Surf League",
    subtitle: "WSL 2026 Season Prediction App",
    description:
      "A browser-based fantasy sports app for predicting WSL Championship Tour final standings. Users pick Men's Top 5 and Women's Top 3 surfers in order, then earn points as the real season unfolds.",
    techStack: [
      "Vanilla JS",
      "HTML/CSS",
      "Firebase Firestore",
      "GitHub Pages",
    ],
    highlights: [
      "Position-based scoring for Men's Top 5 & Women's Top 3 picks",
      "Real-time data sync across all users via Firebase Firestore",
      "1-hour edit window after submission — then picks lock automatically",
      "Admin panel for manual ranking overrides (stored in Firestore, instant for all users)",
      "Leaderboard hidden until the season begins",
      "Deployed on GitHub Pages — no server required",
    ],
    demonstrates:
      "Frontend architecture | Real-time shared state | Firebase integration | Sports scoring logic | Data-driven UI",
    githubUrl: "https://github.com/roeisarid1/surfing-fantasy-2026",
    liveUrl: "https://roeisarid1.github.io/surfing-fantasy-2026/",
    icon: "🏄",
  },
];
