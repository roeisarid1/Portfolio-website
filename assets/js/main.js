// ===== NAVIGATION MENU =====
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Close menu when clicking on nav links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// ===== SMOOTH SCROLLING =====
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerHeight = document.querySelector(".header").offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===== ACTIVE LINK ON SCROLL =====
function highlightActiveLink() {
  const sections = document.querySelectorAll(".section");
  const scrollY = window.pageYOffset;
  const headerHeight = document.querySelector(".header").offsetHeight;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active-link"));
      if (navLink) {
        navLink.classList.add("active-link");
      }
    }
  });
}

window.addEventListener("scroll", highlightActiveLink);

// ===== HEADER SHADOW ON SCROLL =====
function addHeaderShadow() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  }
}

window.addEventListener("scroll", addHeaderShadow);

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".skills__category, .project__card, .timeline__item, .about__container"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

// Add hidden class initially
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".skills__category, .project__card, .timeline__item"
  );
  elements.forEach((element) => {
    element.classList.add("hidden");
  });

  // Trigger reveal on load
  revealOnScroll();
});

window.addEventListener("scroll", revealOnScroll);

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".skills__category, .project__card, .timeline__item"
  );
  animatedElements.forEach((el) => observer.observe(el));
});

// ===== GENERATE PROJECTS DYNAMICALLY =====
function generateProjects() {
  const projectsContainer = document.getElementById("projects-container");

  if (!projectsContainer) return;

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project__card hidden";

    // Create tech badges HTML
    const techBadges = project.techStack
      .map((tech) => `<span class="tech__badge">${tech}</span>`)
      .join("");

    // Create buttons HTML
    let buttonsHTML = `
            <a href="${project.githubUrl}" class="button button--secondary project__button" target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        `;

    if (project.liveUrl) {
      buttonsHTML += `
                <a href="${project.liveUrl}" class="button button--primary project__button" target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            `;
    }

    projectCard.innerHTML = `
            <h3 class="project__title">${project.title}</h3>
            <p class="project__description">${project.description}</p>
            <div class="project__tech">
                ${techBadges}
            </div>
            <div class="project__buttons">
                ${buttonsHTML}
            </div>
        `;

    projectsContainer.appendChild(projectCard);

    // Observe the newly created project card
    observer.observe(projectCard);
  });
}

// Generate projects when DOM is loaded
document.addEventListener("DOMContentLoaded", generateProjects);

// ===== UPDATE FOOTER YEAR =====
function updateFooterYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", updateFooterYear);

// ===== SCROLL TO TOP FUNCTIONALITY (Optional Enhancement) =====
function createScrollToTop() {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "↑";
  scrollBtn.className = "scroll-to-top";
  scrollBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 99;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;

  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.visibility = "hidden";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollBtn.addEventListener("mouseenter", () => {
    scrollBtn.style.transform = "scale(1.1)";
  });

  scrollBtn.addEventListener("mouseleave", () => {
    scrollBtn.style.transform = "scale(1)";
  });
}

document.addEventListener("DOMContentLoaded", createScrollToTop);

// ===== TYPING EFFECT FOR HOME SECTION (Optional Enhancement) =====
function createTypingEffect() {
  const subtitle = document.querySelector(".home__subtitle");
  if (!subtitle) return;

  const text = subtitle.textContent;
  subtitle.textContent = "";
  subtitle.style.borderRight = "2px solid var(--primary-color)";

  let index = 0;

  function type() {
    if (index < text.length) {
      subtitle.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        subtitle.style.borderRight = "none";
      }, 500);
    }
  }

  // Start typing effect after a short delay
  setTimeout(type, 500);
}

// Uncomment the line below to enable typing effect
// document.addEventListener('DOMContentLoaded', createTypingEffect);

// ===== FORM VALIDATION (If contact form is added later) =====
function setupContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // If validation passes, you can send the form data
    console.log("Form submitted:", { name, email, message });
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", setupContactForm);

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightActiveLink, 10);
const debouncedReveal = debounce(revealOnScroll, 10);
const debouncedShadow = debounce(addHeaderShadow, 10);

window.addEventListener("scroll", debouncedHighlight);
window.addEventListener("scroll", debouncedReveal);
window.addEventListener("scroll", debouncedShadow);

// ===== CONSOLE MESSAGE =====
console.log(
  "%c👋 Welcome to Roei Sarid's Portfolio!",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cInterested in the code? Check out the GitHub repository!",
  "color: #6b7280; font-size: 14px;"
);
