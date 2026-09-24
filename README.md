<h1 align="center">
  Ahmed Muhtasim Labib — Personal Portfolio
</h1>

<p align="center">
  <strong>AI/ML Researcher · Full-Stack Developer · Competitive Programmer</strong><br/>
  CSE Student at Metropolitan University (MU)
</p>

<p align="center">
  <a href="https://github.com/muhhtasim/Portfolio-Website"><img src="https://img.shields.io/badge/GitHub-Portfolio--Website-181717?style=flat-square&logo=github" alt="GitHub Repo"></a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square" alt="Status">
</p>

---

## ✨ Overview

A modern, high-performance personal portfolio built from the ground up with **React 19** and **Vite 8**. Every section is hand-crafted to tell the story of an aspiring AI/ML researcher and full-stack developer — from a dynamic hero with a typewriter effect to an interactive constellation star map of skills.

---

## 🖥️ Live Sections

| Section | Description |
|---|---|
| **Hero** | Animated name entrance, typewriter role cycling, floating skill badges, and key stats |
| **About** | Personal narrative, research identity card, competitive programming profiles, and research focus grid |
| **Education** | Academic timeline at Metropolitan University |
| **Skills** | Interactive 28-node Canvas constellation star map — hover any node to highlight its connections |
| **Projects** | Featured project cards with gradient banners, tech stacks, and GitHub links |
| **Club Activities** | Extracurricular & community involvement |
| **Contact** | EmailJS-powered contact form + social links |
| **Resume** | Full inline resume viewer with a dedicated page route |

---

## 🚀 Features

- **Typewriter Effect** — Cycles through roles: AI/ML Researcher, NLP/LLM/VLM Explorer, Niryo Robot Explorer, Full-Stack Developer, Generative AI Builder, Competitive Programmer
- **Interactive Constellation Map** — 28 tech nodes drawn on an HTML5 Canvas with animated starfield background, constellation edges, and hover-to-highlight behavior
- **Dual Theme Engine** — Smooth light/dark toggle, persisted in `localStorage`
- **Scroll Reveal Animations** — `IntersectionObserver`-based animations: `reveal-on-scroll`, `reveal-left`, `reveal-right`, `reveal-scale`
- **Floating Badges** — Animated profile image surrounded by role badges (AI/ML, Full-Stack, Niryo Robot & ROS)
- **EmailJS Contact Form** — Real-time sending status (idle → sending → sent/error) with auto-reset
- **Scroll-to-Top Button** — Appears on scroll, smooth UX
- **Fully Responsive** — Mobile-first layouts across all sections
- **SEO Ready** — Meta tags, OG tags, semantic HTML, and descriptive alt text

---

## 🛠️ Tech Stack

### Core

| Tool | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI library |
| [Vite](https://vite.dev) | 8 | Build tool & dev server |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Icon sets (Si, Fa6) |
| [@emailjs/browser](https://www.emailjs.com) | 4 | Client-side email sending |

### Dev & Tooling

| Tool | Purpose |
|---|---|
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Fast JS/JSX linter |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | React HMR via Babel/Oxc |

### Typography (Google Fonts)

- **Inter** — UI body text
- **Space Grotesk** — Headings and display text
- **JetBrains Mono** — Code accents and badges

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Profile image, logos
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation + theme toggle
│   │   ├── Hero.jsx         # Typewriter hero, floating badges, stats
│   │   ├── About.jsx        # Narrative, identity card, research focus grid
│   │   ├── Education.jsx    # Academic timeline
│   │   ├── Skills.jsx       # Canvas constellation star map (28 nodes)
│   │   ├── Projects.jsx     # Featured project cards
│   │   ├── ClubActivities.jsx
│   │   ├── Contact.jsx      # EmailJS form + social links
│   │   ├── Footer.jsx
│   │   ├── Resume.jsx       # Inline resume page
│   │   └── ScrollTop.jsx    # Scroll-to-top button
│   ├── App.jsx              # Page routing, theme engine, scroll reveal observer
│   ├── App.css
│   ├── index.css            # Full design system — tokens, animations, components
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .oxlintrc.json
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/muhhtasim/Portfolio-Website.git
cd Portfolio-Website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder, ready to deploy on Vercel, Netlify, or any static host.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📧 Setting Up the Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send messages directly from the browser — no backend required.

1. Create a **free account** at [emailjs.com](https://www.emailjs.com)
2. Add a **Gmail service** and copy your **Service ID**
3. Create an **Email Template** using these variables:
   ```
   {{from_name}}   {{from_email}}   {{message}}
   ```
4. Open `src/components/Contact.jsx` and fill in your credentials:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'aBcDeFgHiJkLmNoP'
```

> **Tip:** Store these as environment variables (`import.meta.env.VITE_*`) for production deployments to avoid committing credentials.

---

## 🎨 Design System

All global styles, CSS custom properties, and component styles live in `src/index.css`.

Key design tokens:

```css
/* Theme-aware via [data-theme] attribute */
--bg-primary       /* Page background */
--text-primary     /* Body text */
--accent-purple    /* Primary brand accent */
--gradient-hero    /* Hero gradient (purple → indigo → blue) */
--glass-bg         /* Glassmorphism card background */
```

The active theme is set by toggling `data-theme="dark"` or `data-theme="light"` on the `<html>` element, and is persisted via `localStorage` under the key `portfolio-theme`.

---

## 🧑‍💻 Featured Projects

| Project | Stack | Description |
|---|---|---|
| **JudgeMate** ⚖️ | Laravel 12, PHP, MySQL | Self-hosted competitive programming judge with async queue, role-based access, live scoreboards |
| **FitConnectPro** 💪 | Python, React, ML | Fitness platform with ML-driven activity recognition and personalized workout recommendations |
| **CampusHive** 🏫 | React, Node.js, Socket.io | Academic management platform with real-time quizzes, lab grading, and three role-based portals |
| **Churn Prediction** 🧠 | TensorFlow, Keras, Python | ANN-based customer churn prediction with dropout regularization on real banking data |
| **Niryo Robot** 🤖 | Python, pyniryo, ROS, OpenCV | Pick-and-place control system for Niryo One/Ned robotic arm |
| **Tiny Computer** 💻 | Digital Logic, ALU | Miniature CPU built from NOT/AND/OR gates with Booth's multiplication algorithm |
| **GarmentGuard DB** 👔 | Laravel, MySQL | Database management system for garment industry inventory and production tracking |

---

## 🤝 Connect

| Platform | Link |
|---|---|
| 🌐 GitHub | [@muhhtasim](https://github.com/muhhtasim) |
| 💼 LinkedIn | [Nurul Absar Shadik](https://www.linkedin.com/in/nurul-absar-shadik-01143b373/) |
| 📊 Kaggle | [@nurulabsarshadik](https://www.kaggle.com/nurulabsarshadik) |
| 🏆 Codeforces | [failure_soul](https://codeforces.com/profile/failure_soul) |
| 🟠 CodeChef | [failure_soul](https://www.codechef.com/users/failure_soul) |
| 🟡 LeetCode | [ajolbelai_absar](https://leetcode.com/u/ajolbelai_absar/) |
| 🔵 AtCoder | [failure_soul](https://atcoder.jp/users/failure_soul) |
| ✉️ Email | [muhtasimlabib52@gmail.com](mailto:muhtasimlabib52@gmail.com) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <strong>Ahmed Muhtasim Labib</strong> &nbsp;·&nbsp; Metropolitan University, Sylhet, Bangladesh
</p>
