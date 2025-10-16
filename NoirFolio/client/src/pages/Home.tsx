import { FileExplorer } from "@/components/FileExplorer";
import { FileSystemItem } from "@shared/schema";

const portfolioData: FileSystemItem[] = [
  {
    id: "home",
    name: "Home",
    type: "folder",
    children: [
      {
        id: "hero",
        name: "hero.md",
        type: "file",
        content: "Welcome to my portfolio",
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    type: "folder",
    children: [
      {
        id: "project1",
        name: "e-commerce-platform.md",
        type: "file",
        content: `# E-Commerce Platform

A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.

## Key Features
- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart and checkout process
- Payment integration with Stripe
- Admin dashboard for inventory management

## Technologies
React • TypeScript • Node.js • Express • PostgreSQL • Tailwind CSS

## Highlights
- Reduced page load time by 40% through code splitting
- Implemented real-time inventory updates
- Achieved 99.9% uptime in production

## Live Demo
Visit: demo.ecommerce-platform.dev

## Source Code
GitHub: github.com/yourprofile/ecommerce-platform`,
      },
      {
        id: "project2",
        name: "task-manager-app.md",
        type: "file",
        content: `# Task Manager App

A collaborative task management application with real-time updates.

## Key Features
- Create, assign, and track tasks
- Real-time collaboration with WebSocket
- Kanban board and list views
- Due date reminders and notifications
- Team analytics dashboard

## Technologies
React • Node.js • Socket.io • MongoDB • Redux • Material-UI

## Highlights
- Support for 1000+ concurrent users
- Sub-second real-time sync across devices
- Intuitive drag-and-drop interface
- Mobile-responsive design

## Live Demo
Visit: taskmanager.app

## Source Code
GitHub: github.com/yourprofile/task-manager`,
      },
      {
        id: "project3",
        name: "portfolio-builder.md",
        type: "file",
        content: `# Portfolio Builder

A no-code portfolio website builder with drag-and-drop interface.

## Key Features
- Drag-and-drop page builder
- Pre-designed templates
- Custom domain support
- SEO optimization tools
- Analytics dashboard

## Technologies
React • Next.js • TailwindCSS • Supabase • Vercel

## Highlights
- Used by 10,000+ creators
- Average build time: 15 minutes
- 98% customer satisfaction rating
- Featured on Product Hunt

## Live Demo
Visit: portfolio-builder.io`,
      },
    ],
  },
  {
    id: "experience",
    name: "Experience",
    type: "folder",
    children: [
      {
        id: "exp1",
        name: "senior-developer.md",
        type: "file",
        content: `# Senior Full Stack Developer
Tech Innovations Inc. | Jan 2021 - Present | San Francisco, CA

## Responsibilities
- Lead development of customer-facing web applications serving 500K+ users
- Mentor junior developers and conduct comprehensive code reviews
- Architect scalable solutions for high-traffic applications
- Collaborate with product and design teams on feature development
- Define technical standards and best practices

## Key Achievements
- Reduced application bundle size by 60% through code optimization
- Implemented CI/CD pipeline reducing deployment time by 75%
- Led team of 5 developers on flagship product launch
- Improved test coverage from 40% to 95%
- Migrated legacy codebase to modern tech stack with zero downtime

## Technologies
React • TypeScript • Node.js • PostgreSQL • AWS • Docker • Kubernetes`,
      },
      {
        id: "exp2",
        name: "frontend-developer.md",
        type: "file",
        content: `# Frontend Developer
Digital Solutions Ltd. | Mar 2019 - Dec 2020 | Remote

## Responsibilities
- Developed responsive web applications using React and Vue.js
- Implemented pixel-perfect UI from Figma designs
- Optimized performance and accessibility (WCAG 2.1 AA)
- Integrated REST APIs and GraphQL endpoints
- Maintained component library and documentation

## Key Achievements
- Built reusable component library used across 10+ projects
- Improved Lighthouse scores to 95+ across all metrics
- Reduced bug reports by 40% through comprehensive testing
- Implemented automated visual regression testing
- Decreased initial page load time by 3 seconds

## Technologies
React • Vue.js • JavaScript • SCSS • Webpack • Jest • Storybook`,
      },
      {
        id: "exp3",
        name: "junior-developer.md",
        type: "file",
        content: `# Junior Web Developer
StartUp Ventures | Jun 2017 - Feb 2019 | Austin, TX

## Responsibilities
- Developed and maintained company websites
- Fixed bugs and implemented new features
- Collaborated with design team on UI implementation
- Participated in agile development process
- Wrote technical documentation

## Key Achievements
- Successfully delivered 15+ client projects on time
- Improved code quality through peer review process
- Learned and adopted new technologies quickly
- Contributed to open-source projects

## Technologies
HTML • CSS • JavaScript • jQuery • PHP • MySQL • WordPress`,
      },
    ],
  },
  {
    id: "skills",
    name: "Skills",
    type: "folder",
    children: [
      {
        id: "skills-frontend",
        name: "frontend.md",
        type: "file",
        content: `# Frontend Development Skills

## Languages
- JavaScript (ES6+) ⭐⭐⭐⭐⭐
- TypeScript ⭐⭐⭐⭐⭐
- HTML5 ⭐⭐⭐⭐⭐
- CSS3/SCSS ⭐⭐⭐⭐⭐

## Frameworks & Libraries
- React ⭐⭐⭐⭐⭐
- Next.js ⭐⭐⭐⭐⭐
- Vue.js ⭐⭐⭐⭐
- Svelte ⭐⭐⭐
- Tailwind CSS ⭐⭐⭐⭐⭐
- Material-UI ⭐⭐⭐⭐
- Framer Motion ⭐⭐⭐⭐
- Redux ⭐⭐⭐⭐

## Tools & Build Systems
- Vite ⭐⭐⭐⭐⭐
- Webpack ⭐⭐⭐⭐
- npm/yarn/pnpm ⭐⭐⭐⭐⭐
- Git & GitHub ⭐⭐⭐⭐⭐
- VS Code ⭐⭐⭐⭐⭐

## Testing
- Jest ⭐⭐⭐⭐⭐
- React Testing Library ⭐⭐⭐⭐⭐
- Cypress ⭐⭐⭐⭐
- Playwright ⭐⭐⭐⭐
- Storybook ⭐⭐⭐⭐`,
      },
      {
        id: "skills-backend",
        name: "backend.md",
        type: "file",
        content: `# Backend Development Skills

## Languages
- Node.js ⭐⭐⭐⭐⭐
- Python ⭐⭐⭐⭐
- SQL ⭐⭐⭐⭐⭐

## Frameworks
- Express.js ⭐⭐⭐⭐⭐
- NestJS ⭐⭐⭐⭐
- FastAPI ⭐⭐⭐⭐

## Databases
- PostgreSQL ⭐⭐⭐⭐⭐
- MongoDB ⭐⭐⭐⭐
- Redis ⭐⭐⭐⭐
- MySQL ⭐⭐⭐⭐

## DevOps & Cloud
- Docker ⭐⭐⭐⭐⭐
- Kubernetes ⭐⭐⭐
- AWS (EC2, S3, Lambda) ⭐⭐⭐⭐
- Vercel ⭐⭐⭐⭐⭐
- GitHub Actions ⭐⭐⭐⭐⭐
- nginx ⭐⭐⭐⭐

## APIs
- REST ⭐⭐⭐⭐⭐
- GraphQL ⭐⭐⭐⭐
- WebSocket ⭐⭐⭐⭐`,
      },
      {
        id: "skills-design",
        name: "design.md",
        type: "file",
        content: `# Design & UI/UX Skills

## Design Tools
- Figma ⭐⭐⭐⭐⭐
- Adobe XD ⭐⭐⭐⭐
- Sketch ⭐⭐⭐
- Adobe Photoshop ⭐⭐⭐

## Design Principles
- Responsive Design ⭐⭐⭐⭐⭐
- Mobile-First Design ⭐⭐⭐⭐⭐
- Accessibility (WCAG) ⭐⭐⭐⭐⭐
- Design Systems ⭐⭐⭐⭐⭐
- Typography ⭐⭐⭐⭐
- Color Theory ⭐⭐⭐⭐

## UX Skills
- User Research ⭐⭐⭐⭐
- Wireframing ⭐⭐⭐⭐
- Prototyping ⭐⭐⭐⭐
- Usability Testing ⭐⭐⭐⭐`,
      },
      {
        id: "skills-other",
        name: "soft-skills.md",
        type: "file",
        content: `# Soft Skills & Methodologies

## Development Methodologies
- Agile/Scrum ⭐⭐⭐⭐⭐
- Test-Driven Development ⭐⭐⭐⭐⭐
- CI/CD ⭐⭐⭐⭐⭐
- Code Review ⭐⭐⭐⭐⭐
- Pair Programming ⭐⭐⭐⭐

## Leadership & Communication
- Team Leadership ⭐⭐⭐⭐⭐
- Mentoring ⭐⭐⭐⭐⭐
- Technical Writing ⭐⭐⭐⭐⭐
- Presentation Skills ⭐⭐⭐⭐
- Cross-functional Collaboration ⭐⭐⭐⭐⭐

## Problem Solving
- Algorithm Design ⭐⭐⭐⭐
- System Architecture ⭐⭐⭐⭐⭐
- Performance Optimization ⭐⭐⭐⭐⭐
- Debugging ⭐⭐⭐⭐⭐
- Critical Thinking ⭐⭐⭐⭐⭐`,
      },
    ],
  },
  {
    id: "contact",
    name: "Contact",
    type: "folder",
    children: [
      {
        id: "contact-info",
        name: "info.md",
        type: "file",
        content: `# Contact Information

## Email
hello@portfolio.dev
work@portfolio.dev

## Professional Profiles
LinkedIn: linkedin.com/in/yourprofile
GitHub: github.com/yourprofile
Twitter: twitter.com/yourhandle
Stack Overflow: stackoverflow.com/users/yourprofile

## Portfolio & Blog
Portfolio: www.yourportfolio.dev
Blog: blog.yourportfolio.dev
Medium: medium.com/@yourprofile

## Location
San Francisco, CA, United States
Open to remote opportunities worldwide

## Availability
Currently open to:
- Full-time positions
- Freelance projects
- Technical consulting
- Speaking engagements
- Open source collaboration

---

Feel free to reach out for collaboration opportunities, 
technical discussions, or just to connect!

Response time: Usually within 24 hours`,
      },
      {
        id: "contact-resume",
        name: "resume.md",
        type: "file",
        content: `# Resume

## Download Options

PDF Version: [Download Resume (PDF)]
Word Version: [Download Resume (DOCX)]
Plain Text: [Download Resume (TXT)]

## Quick Summary

Full Stack Developer with 6+ years of experience building 
scalable web applications. Specialized in React, TypeScript, 
and Node.js. Proven track record of leading teams and 
delivering high-impact projects.

---

For detailed work history and projects, please explore 
the Experience and Projects folders in this portfolio.

Last Updated: October 2025`,
      },
    ],
  },
];

export default function Home() {
  return <FileExplorer data={portfolioData} defaultFileId="hero" />;
}
