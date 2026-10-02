# Tulas International School (TIS) – Homepage Redesign

A production-quality, agency-grade redesign of the **Tulas International School (TIS)** homepage ([https://tis.edu.in/](https://tis.edu.in/)). Built as a high-converting, modern, animated, and fully responsive web application preserving TIS's authentic brand identity, heritage ("The Modern Gurukul"), and verified institutional achievements.

---

## 🌟 Live Demo & Repository
- **Live Demo:** [https://tis-redesign.vercel.app](https://tis-redesign.vercel.app) *(Deployment-ready on Vercel)*
- **GitHub Repository:** [https://github.com/your-username/tulas-international-school-redesign](https://github.com/your-username/tulas-international-school-redesign)

---

## 🎯 Project Overview & Design Philosophy

Tulas International School, established in 2012 by the **Rishabh Educational Trust** in Dehradun, Uttarakhand, is celebrated as "The Modern Gurukul" — seamlessly blending traditional Indian values with world-class CBSE education from Class IV to XII.

This redesign transforms the web presence into a clean, editorial, and dynamic experience with:
- **Visual Prestige:** A refined palette of TIS Crimson (`#b90124`), Himalayan Gold (`#c09d59`), and Alpine Mint (`#60bab1`) over warm cream ivory (`#faf9f6`).
- **Verified Facts Only:** Strict fidelity to the official reference website — no fabricated statistics, phone numbers, rankings, or testimonials.
- **Micro-Interactions & Fluidity:** Ultra-smooth spring physics, scroll-linked animations, and tailored micro-animations without visual clutter.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI composition with functional components and clean state separation |
| **Vite 8** | High-speed build tooling and dev server with instant HMR |
| **Tailwind CSS v4** | Utility-first styling engine with `@theme` design tokens and custom typography |
| **Framer Motion 13** | Physics-based scroll animations, staggered reveals, and responsive transitions |
| **React Icons** | Accessible icons from Feather, Remix, and Game Icons |
| **Vanilla CSS** | Glassmorphism, smooth typography styling, and custom scrollbar enhancements |

---

## ✨ Key Features & Architecture

### 1. Sticky Blurred Navigation (`Navbar.jsx`)
- Dynamic scroll state switching from transparent glass (`backdrop-blur-md`) to subtle shadowed surface (`glass-nav-scrolled`).
- Admissions alert top-bar with direct helpline call action.
- Accessible Framer Motion mobile drawer with keyboard and screen reader support.

### 2. Visually Dominant Hero (`Hero.jsx`)
- Single `<h1>` for SEO excellence: *"The Modern Gurukul for Future Leaders"*.
- Authentic aerial perspective of the 22-acre campus nestled in the Dehradun foothills.
- Floating metric badges featuring official Education Today rankings and 16+ sports disciplines.
- Smooth scroll-down chevron trigger.

### 3. Editorial About Section (`About.jsx`)
- Editorial asymmetric layout pairing authentic student life imagery with verified history.
- Verified animated statistic counters:
  - **22 Acres** Pollution-Free Foothill Campus
  - **6:1** Student-to-Teacher Ratio
  - **16+** Olympic Sports Disciplines
  - **24/7** Medical Infirmary & Pastoral Care

### 4. Dynamic Academic Programs (`Academics.jsx`)
- Reusable modular cards generated via `.map()` from structured JavaScript data.
- Covers **Primary School (IV–V)**, **Middle School (VI–VIII)**, **Secondary School (IX–X)**, and **Senior Secondary (XI–XII)**.
- Hover lift interactions, image zoom transitions, and curriculum enquiry triggers.

### 5. Campus Bento-Grid (`Facilities.jsx`)
- Asymmetrical bento grid highlighting:
  - 22-Acre Serene Green Campus (large featured card)
  - Olympic Sports Complex (archery, squash, riding, shooting)
  - Smart Classrooms & High-Speed Tech Labs
  - Advanced STEM & Science Experimentation Suites
  - Air-Conditioned Residential Hostels
  - Nutritious Chef-Prepared Multi-Cuisine Dining
- Integrated links to the official TIS 360° Virtual Campus Tour.

### 6. Why Choose TIS (`WhyTIS.jsx`)
- Structured cards articulating verified institutional differentiators:
  - The Modern Gurukul Philosophy
  - Personalized 6:1 Mentorship
  - 16+ Olympic Sports
  - Resident Faculty Mentors
  - Holistic Character & Performing Arts
  - 12+ Global University Collaborations

### 7. Student Life & Sports Gallery (`Activities.jsx`)
- Filterable gallery with tabs (*All*, *Olympic Sports*, *Aquatics & Field*, *Racquet & Precision*, *Campus Luminaries*).
- Showcases real campus visits and masterclasses by Olympic Medalist **Sakshi Malik** and Basketball Captain **Vishesh Bhriguvanshi**.

### 8. Trustworthy Parent Testimonials (`Testimonials.jsx`)
- Interactive carousel displaying real verified Google reviews from parents:
  - **Tashi Tsering** (Father of Jigmet Skaldon)
  - **Namita Agarwal** (Mother of Krishna Agarwal)
  - **Sandeep Kumar** (Father of Aryan)
  - **Pinky Sharma** (Mother of Swastik Sharma)
  - **Suresh Kumar** (Father of Aditya Kumar)
  - **Ashu Arora** (Mother of Manisha Changrani)
- Displays 5-star ratings, quotes, and parent avatars.

### 9. High-Converting Admissions CTA (`AdmissionsCTA.jsx`)
- Visually powerful crimson-to-burgundy gradient backdrop with ambient golden illumination.
- Three clear conversion actions:
  - **Apply Now 2026-27** (Direct portal link)
  - **Enquire Now** (Anchor to enquiry form)
  - **Schedule a Visit** (Campus tour booking)

### 10. Modern Contact & Client-Validated Form (`Contact.jsx`)
- Verified TIS address (Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun), helpline numbers (`+91-9837983791`, `+91-9458319102`), and email (`info@tis.edu.in`).
- Client-side validation:
  - Name (min 2 characters)
  - Email (regex pattern matching)
  - Mobile Number (valid 10-digit format)
  - Grade selector
  - Message query
- Inline error states with accessible ARIA attributes.
- Smooth transition to a green confirmation message upon successful submission.

### 11. Complete Responsive Footer (`Footer.jsx`)
- Multi-column desktop layout collapsing to stacked columns on mobile.
- Official TIS emblem, social media links (Facebook, Instagram, YouTube, Twitter, LinkedIn), mandatory CBSE disclosure links, safety policies, and an interactive back-to-top button.

---

## 🚀 Mandatory Advanced Features

### Feature 1: Custom Desktop Cursor (`CustomCursor.jsx`)
- Minimalist center dot with an outer tracking ring animated via spring physics.
- Smooth scale-up and accent color shifts when hovering over buttons, links, and form elements.
- **Mobile Safeguard:** Evaluates `(pointer: fine)` to automatically disable on mobile devices, ensuring zero touch interference.

### Feature 2: Scroll-Triggered Animations (`src/utils/animations.js`)
- Reusable Framer Motion variants:
  - `fadeUp`: smooth fade and vertical rise
  - `fadeLeft` / `fadeRight`: horizontal slide-in for editorial layouts
  - `scaleIn`: subtle card zoom
  - `staggerContainer`: coordinated staggered reveals for grids and lists

### Feature 3: Scroll Progress Indicator (`ScrollProgress.jsx`)
- Ultra-thin top progress bar (0% → 100%) driven by Framer Motion's `useScroll` and `useSpring`.
- Features an elegant crimson-to-gold gradient across the top viewport boundary.

---

## 📱 Responsive Breakpoint Verification

The application is thoroughly engineered and tested across all standard viewport widths:
- **Desktop Extra Large (1440px):** Expansive container padding, generous whitespace, bento grid layout.
- **Desktop Large (1280px):** Proportional typography and aligned grid gutters.
- **Desktop Standard (1024px):** Refined navigation link spacing and balanced card ratios.
- **Tablet (768px):** 2-column card layouts, stacked editorial content, accessible touch targets.
- **Mobile Large (425px):** Single-column stacked cards, full-width touch buttons, drawer menu.
- **Mobile Small (375px):** Zero horizontal scroll, wrap-around typography, optimized image aspect ratios.

---

## 📂 Project Structure

```
frontend/
├── public/
│   ├── schoolLogo.png               # Official TIS emblem
│   ├── footer-logo.png              # Official TIS footer insignia
│   └── tis-assets/                  # Verified TIS campus photography & parent avatars
│       ├── schoolTopView.6e263e02.webp
│       ├── AtTIS.59351600.png
│       ├── archery.7a805345.png
│       ├── swimming.d4285534.png
│       ├── horseRiding.8f259127.png
│       ├── football.ca61e5d0.png
│       ├── shooting.b0b11d74.png
│       ├── basketball.fa70909d.png
│       ├── lawnTennis.7b3b894a.png
│       ├── badminton.a314ff00.png
│       ├── Cricket.b06b18ca.png
│       ├── squash.ffa0360a.png
│       ├── SakshiMalik.91174bf4.webp
│       ├── VisheshBhriguvanshi.52af8bfd.webp
│       ├── tashi.3807cb3c.png
│       ├── namita.86a0f799.png
│       ├── sandeep.1b22b59e.png
│       ├── pinky.8d7145b0.png
│       ├── suresh.80d60e49.png
│       └── ashu.9d447126.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky blurred navigation & mobile drawer
│   │   ├── Hero.jsx                 # Single H1, floating metrics & CTA buttons
│   │   ├── About.jsx                # Editorial about & verified animated statistics
│   │   ├── Academics.jsx            # Reusable academic program cards (.map())
│   │   ├── Facilities.jsx           # Bento-grid campus infrastructure showcase
│   │   ├── WhyTIS.jsx               # 6 verified advantage feature cards
│   │   ├── Activities.jsx           # Sports & campus luminary filterable gallery
│   │   ├── Testimonials.jsx         # Parent feedback interactive carousel
│   │   ├── AdmissionsCTA.jsx        # High-impact admissions call-to-action
│   │   ├── Contact.jsx              # Verified details & validated enquiry form
│   │   ├── Footer.jsx               # Multi-column footer & policies
│   │   ├── CustomCursor.jsx         # Spring-based desktop cursor with mobile safeguard
│   │   ├── ScrollProgress.jsx       # Viewport top scroll progress bar
│   │   └── SectionHeading.jsx       # Reusable heading with eyebrow & H2
│   ├── data/
│   │   └── tisData.js               # Verified institutional content, stats & testimonials
│   ├── utils/
│   │   └── animations.js            # Reusable Framer Motion variants
│   ├── App.jsx                      # Main application orchestrator
│   ├── main.jsx                     # React DOM root entry
│   └── index.css                    # Tailwind CSS v4, theme tokens & typography
├── index.html                       # Verified SEO title, meta tags & Google fonts
├── package.json                     # Scripts & production dependencies
├── vercel.json                      # Vercel deployment configuration
└── vite.config.js                   # Vite config with React & Tailwind CSS plugins
```

---

## 💻 Installation & Local Development

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates a minified, tree-shaken, production-ready build in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```
Runs Vite's preview server at [http://localhost:4173](http://localhost:4173).

### 5. Linting & Code Quality
```bash
npm run lint
```
Runs `oxlint` across all files to ensure 0 lint errors and strict coding standards.

---

## ☁️ Deployment Instructions (Vercel)

The project includes `vercel.json` and is ready for 1-click deployment:

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import this repository.
4. Set the Root Directory to `./` (or `frontend` if deploying from a monorepo).
5. Framework Preset: **Vite**.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Click **Deploy**.

---

## 🔒 Verified Content & Attribution Notes

All branding, phone numbers, contact addresses, statistics, awards, rankings, sports disciplines, and testimonials in this project are strictly sourced from:
- **Official Website:** [https://tis.edu.in/](https://tis.edu.in/)
- **Campus Address:** Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011, Uttarakhand, India
- **Admissions Helpline:** +91-9837983791 / +91-9458319102
- **Affiliation:** Central Board of Secondary Education (CBSE), New Delhi
- **Founding Body:** Rishabh Educational Trust (Est. 2012)
