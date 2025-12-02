# Roei Sarid - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as an IT & Operations Analyst.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Dynamic Projects**: Projects are dynamically generated from a data file for easy updates
- **Smooth Scrolling**: Smooth navigation between sections with active link highlighting
- **Interactive Elements**: Hover effects, scroll animations, and mobile-friendly hamburger menu
- **Performance Optimized**: Debounced scroll events and efficient animations

## 📁 Project Structure

```
portfolio-website/
│
├── index.html                      # Main HTML file with all sections
├── README.md                       # Project documentation
│
├── assets/
│   ├── css/
│   │   └── styles.css             # All styling (responsive, animations, etc.)
│   │
│   ├── js/
│   │   ├── main.js                # Main JavaScript (navigation, animations, etc.)
│   │   └── projects-data.js       # Projects data array
│   │
│   └── img/                       # Images and icons folder
│       └── avatar-placeholder.jpg # Profile image (add your photo here)
│
└── cv/
    └── Roei_Sarid_CV.pdf          # Your CV file (add your CV here)
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository to your local machine

2. **Add your images**:

   - Place your profile photo in `assets/img/` as `avatar-placeholder.jpg`
   - Recommended size: 300x300px or larger (square format)

3. **Add your CV**:

   - Create a `cv` folder in the root directory
   - Place your CV as `Roei_Sarid_CV.pdf`

4. **Update GitHub username**:

   - Open `index.html`
   - Replace all instances of `USERNAME` with your actual GitHub username
   - Also update in `assets/js/projects-data.js`

5. **Open the website**:

   - Simply double-click `index.html` to open in your browser
   - Or use a local server (recommended):

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server

     # Using VS Code Live Server extension
     Right-click index.html → "Open with Live Server"
     ```

6. **View in browser**:
   - Navigate to `http://localhost:8000` (or the port shown)

## 🌐 Deploying to GitHub Pages

1. **Create a GitHub repository**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be published at: `https://YOUR-USERNAME.github.io/portfolio/`

3. **Update links** (if needed):
   - If your repository name is different from "portfolio", update any absolute paths

## ✏️ Customization Guide

### Adding/Editing Projects

Edit `assets/js/projects-data.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Brief description of your project...",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-demo-url.com", // Optional
  },
  // Add more projects...
];
```

### Changing Colors

Edit CSS variables in `assets/css/styles.css`:

```css
:root {
  --primary-color: #2563eb; /* Main accent color */
  --secondary-color: #0ea5e9; /* Secondary accent */
  --text-color: #1f2937; /* Main text color */
  /* ... other variables ... */
}
```

### Updating Content

All content is in `index.html`. Search for the section you want to edit:

- **Hero Section**: Update name, titles, and description
- **About Section**: Modify your bio and background
- **Skills Section**: Add/remove skills in each category
- **Experience Section**: Update work history and education
- **Contact Section**: Update contact information

### Adding New Sections

1. Add HTML section in `index.html`
2. Add corresponding styles in `assets/css/styles.css`
3. Add navigation link in the header
4. Update `main.js` if interactive features are needed

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, animations, custom properties
- **JavaScript (ES6+)**: Modules, DOM manipulation, Intersection Observer
- **Google Fonts**: Inter font family

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do / Future Enhancements

- [ ] Add dark mode toggle
- [ ] Add contact form with backend integration
- [ ] Add blog section
- [ ] Add project filtering by technology
- [ ] Add testimonials section
- [ ] Implement i18n (Hebrew/English)
- [ ] Add loading animation
- [ ] Optimize images with lazy loading

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

## 📧 Contact

**Roei Sarid**

- Email: roies1738@gmail.com
- LinkedIn: [linkedin.com/in/roeisarid](https://www.linkedin.com/in/roeisarid/)
- GitHub: [github.com/USERNAME](https://github.com/USERNAME)

---

**Built with ❤️ by Roei Sarid**

_Monitoring systems by day, building them by night._
