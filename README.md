# Roei Sarid — Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as an IT & Operations Analyst.

**Live site:** [roeisarid1.github.io/Portfoliowebsite](https://roeisarid1.github.io/Portfoliowebsite)

---

## Features

- Responsive layout (desktop, tablet, mobile)
- Dynamic project cards rendered from `projects-data.js`
- Scroll-reveal animations with Intersection Observer
- Mobile hamburger navigation
- Debounced scroll events for performance
- Scroll-to-top button

---

## Project Structure

```
Portfolio website/
├── index.html                  # All sections: hero, skills, projects, experience, contact
├── README.md
│
├── assets/
│   ├── css/
│   │   └── styles.css          # All styling — layout, animations, responsive breakpoints
│   ├── js/
│   │   ├── main.js             # Navigation, scroll animations, project rendering
│   │   └── projects-data.js    # Projects array — edit this to add/remove projects
│   └── img/
│       └── *.jpeg              # Profile photo
│
└── cv/
    └── Roei_Sarid_CV.pdf       # Downloadable CV
```

---

## Projects

| Project | Tech | GitHub |
|---|---|---|
| **Teamgle** — Full-stack workforce management SaaS | ASP.NET Core 8, SQL Server, Firebase, Vanilla JS | [repo](https://github.com/roeisarid1/Teamgle) |
| **Salary Calculator** — Automated payroll processing | Python, FastAPI, Pandas | [repo](https://github.com/roeisarid1/salary-calculator) |
| **Operational Monitoring Dashboard** — ELK Stack | Elasticsearch, Kibana | internal |
| **Fantasy Surf League** — WSL 2026 prediction app | Vanilla JS, localStorage, GitHub Pages | [repo](https://github.com/roeisarid1/surfing-fantasy-2026) |

---

## Local Development

```bash
# Python
python -m http.server 8000

# Node
npx serve .

# VS Code
Right-click index.html → "Open with Live Server"
```

Navigate to `http://localhost:8000`.

---

## Adding / Editing Projects

Edit `assets/js/projects-data.js`:

```javascript
{
  id: 5,
  title: "Project Title",
  subtitle: "Short descriptor",
  description: "What it does and why it matters.",
  techStack: ["Tech1", "Tech2"],
  highlights: ["Feature 1", "Feature 2"],
  demonstrates: "Skill A | Skill B | Skill C",
  githubUrl: "https://github.com/roeisarid1/repo",
  liveUrl: "",   // optional
  icon: "🔧",
}
```

---

## Deploying to GitHub Pages

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Then: **Settings → Pages → Branch: main → / (root) → Save**

---

## Skills Covered

- **Front-End**: HTML, CSS, JavaScript
- **Backend**: C#, ASP.NET Core, Python, FastAPI, REST API, SQL, NoSQL
- **Systems & Tools**: Linux, Git, Grafana, Elastic/Kibana, Qlik, Oracle ERP, Excel, Jira
- **AI & Developer Tools**: Claude Code, MCP Servers, AI-assisted Development, Prompt Engineering

---

## Contact

**Roei Sarid** — roies1738@gmail.com
[LinkedIn](https://www.linkedin.com/in/roeisarid/) · [GitHub](https://github.com/roeisarid1)
