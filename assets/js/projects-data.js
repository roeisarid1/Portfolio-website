// Projects data array
const projects = [
  {
    id: 1,
    title: "Teamgle",
    subtitle: "Workforce Management Platform — in production at Eventact",
    description:
      "Developed and deployed a production workforce management system currently in active use by Eventact, a conference software company. Features employee management, project & event tracking, shift scheduling, customer CRM, and real-time team chat.",
    techStack: [
      "C#",
      "ASP.NET Core 6.0",
      "SQL Server",
      "Firebase Auth",
      "Firestore",
      "Vanilla JS",
      "REST API",
      "HTML/CSS",
    ],
    highlights: [
      "In active production use at Eventact",
      "Role-based access: separate manager & employee dashboards",
      "Real-time chat powered by Firestore",
      "Staff scheduling, shifts & project assignment logic",
      "Customer & contact person management",
      "Firebase token auth verified server-side on every request",
    ],
    demonstrates:
      "Full-stack development | Production deployment | Firebase integration | REST API | Multi-tenant design",
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
