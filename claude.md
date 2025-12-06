# Gregory Garcia's Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Live at [gregorygarcia.dev](https://www.gregorygarcia.dev/)

## Project Overview

This is a single-page application (SPA) portfolio showcasing Gregory Garcia's experience as a Front-End Developer. The site features smooth animations, an interactive particle background, and a clean, professional design with a violet/purple theme.

## Tech Stack

### Core Technologies
- **Next.js 14.0.4** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Node 24.x** - Runtime environment

### UI & Animation Libraries
- **Framer Motion 10.17.12** - Advanced animations and scroll-triggered effects
- **@tsparticles/react & @tsparticles/slim** - Interactive particle background
- **@headlessui/react** - Unstyled, accessible UI components (mobile menu)
- **@heroicons/react** - Icon library
- **FontAwesome** - Brand, solid, and regular icons
- **react-typed** - Typing animation effect
- **react-vertical-timeline-component** - Timeline visualization

## Project Structure

```
next-portfolio/
├── src/app/
│   ├── Components/              # All React components
│   │   ├── Header.tsx          # Sticky navigation
│   │   ├── Presentation.tsx    # Hero section
│   │   ├── About.tsx           # About & tech stack
│   │   ├── Experience.tsx      # Work history timeline
│   │   ├── Projects.tsx        # Project showcase
│   │   ├── Contact.tsx         # Contact info
│   │   ├── Footer.tsx          # Footer (embedded in Contact)
│   │   ├── ParticlesBackground.tsx  # Particle effects
│   │   └── TimelineElement.tsx # Timeline wrapper component
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main home page
│   ├── globals.css             # Global styles & CSS variables
│   ├── particles-config.ts     # Particle configuration
│   └── favicon.ico
├── public/images/              # Static assets (logos, icons, profile)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Key Features

### 1. Single-Page Navigation
- Smooth scroll to section anchors (#about, #experience, #projects, #contact)
- Sticky header with responsive mobile menu
- Hash-based navigation without page reloads

### 2. Animated Components
All major sections use Framer Motion for scroll-triggered animations:
- Fade-in effects with vertical slide
- InView detection with `useInView` hook
- Consistent animation pattern across components

**Pattern used:**
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: false });
const mainControls = useAnimation();

useEffect(() => {
  if (isInView) {
    mainControls.start("visible");
  } else {
    mainControls.start("hidden");
  }
}, [isInView, mainControls]);
```

### 3. Interactive Particle Background
- Full-screen particle animation using tsparticles
- Color-changing rainbow effect
- Grab interaction on hover
- Positioned behind all content (z-index: -1)

### 4. Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Hamburger menu for mobile navigation
- Responsive grid layouts (1 → 4 → 8 columns)
- Typography scales with viewport size

### 5. Sections

#### Header ([Header.tsx](src/app/Components/Header.tsx))
- Fixed navigation with smooth scroll
- Logo and navigation items
- Mobile disclosure menu
- Links to: About, Experience, Projects, Contact, Resume (Google Docs)

#### Presentation ([Presentation.tsx](src/app/Components/Presentation.tsx))
- Hero section with profile picture
- Animated typing effect showing roles:
  - "I'm Front End Developer"
  - "I'm Full Stack Developer"
  - "I'm Web Developer"
- Social links (LinkedIn, GitHub)
- Call-to-action button

#### About ([About.tsx](src/app/Components/About.tsx))
- Personal introduction
- Technology stack grid showcasing 16 technologies:
  - HTML, CSS, Sass, JavaScript, TypeScript
  - React, NextJS, TailwindCSS, Material UI, Bootstrap
  - NodeJS, Figma, Redux, Jest, Storybook, Git
- Technology icons stored in `public/images/`

#### Experience ([Experience.tsx](src/app/Components/Experience.tsx))
- Vertical timeline component
- 4 positions documented (2019-2023):
  1. **Senior Front-End Developer** - Dexian (Feb 2023 - Sept 2023)
  2. **Front-End Developer** - QYON (Apr 2021 - Feb 2023)
  3. **Full Stack Developer** - Incentiv (Aug 2020 - Apr 2021)
  4. **Junior Full Stack Developer** - ESSystem (Aug 2019 - Aug 2020)
- Company logos integrated into timeline

#### Projects ([Projects.tsx](src/app/Components/Projects.tsx))
- Showcase of 3 companies/projects:
  - Incentiv.me
  - Santander Getnet (PagoNxt)
  - QYON
- Interactive cards with company logos
- Links to company websites

#### Contact ([Contact.tsx](src/app/Components/Contact.tsx))
- Contact information (phone: +1 (754) 551-3369)
- Email: gregorygarcia.dev@gmail.com
- Social media links
- "Say Hello" mailto link
- Embedded footer

## Styling

### Tailwind CSS Configuration
- Custom gradient utilities (radial, conic)
- Scans `src/app/**/*.{js,ts,jsx,tsx,mdx}`
- No custom plugins

### Global Styles ([globals.css](src/app/globals.css))
- CSS custom properties for theming
- Dark mode support via media query
- Fixed body text color: `#F3F4F6`
- Tailwind base, components, and utilities

### Color Scheme
- **Primary:** Violet/Purple theme (`violet-900`, `violet-700`, `violet-600`)
- **Background:** Dark theme (`gray-900`, `black`)
- **Text:** Light gray (`#F3F4F6`)
- **Accents:** Rainbow particle effects

### Typography
- **Font:** Roboto (weights: 400, 700, 900) from Google Fonts
- Configured in [layout.tsx](src/app/layout.tsx)

## Data Management

All content is **hardcoded in components** as JavaScript objects:
- No CMS or database
- Navigation items in Header component
- Technologies array in About component
- Experience data array in Experience component
- Projects array in Projects component
- Contact info as strings in Contact component

**Images stored in `public/images/`:**
- Profile picture
- Company logos (dexian.png, qyon.jpg, essystem.jpg, incentiv.png, getnet.png)
- Technology icons (mostly SVG)
- Logo (logo.webp)

## Development Patterns

### Client Components
All interactive components use `"use client"` directive (required for):
- Framer Motion animations
- React hooks (useState, useEffect, useRef)
- Event handlers
- Third-party client-side libraries

### Smooth Scroll Implementation
```tsx
const scrollTo = (page: string) => {
  const element = document.getElementById(page);
  element?.scrollIntoView({ behavior: "smooth" });
};
```

### Image Optimization
- Next.js Image component used throughout
- Explicit width/height props for optimization
- WebP format for modern browsers

### TypeScript Patterns
- Interface definitions for props (e.g., `Iitem` in TimelineElement)
- Type safety for configuration objects
- Metadata typing from Next.js

### Z-Index Layering
- Particle background: `z-index: -1`
- Content sections: `z-10`
- Header: `z-20` (sticky)

## Getting Started

### Prerequisites
- Node.js 24.x or later
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## Key Files to Understand

1. **[page.tsx](src/app/page.tsx)** - Main page assembling all components
2. **[layout.tsx](src/app/layout.tsx)** - Root layout with metadata and font configuration
3. **[particles-config.ts](src/app/particles-config.ts)** - 541 lines of particle configuration
4. **[globals.css](src/app/globals.css)** - Global styles and CSS variables
5. **[tailwind.config.ts](tailwind.config.ts)** - Tailwind customization

## Metadata & SEO

Configured in [layout.tsx](src/app/layout.tsx):
- Title: "Gregory Garcia"
- Description: "This is my portfolio"
- Favicon configured

## Deployment

- Deployed on Node 24.x environment
- Production URL: https://www.gregorygarcia.dev/
- Git repository on master branch

## Browser Compatibility

- Modern browsers with ES6+ support
- Responsive design for mobile, tablet, desktop
- Dark mode optimized

## Future Enhancement Ideas

- Add CMS for easier content management
- Implement blog section
- Add project detail pages with routing
- Add contact form with backend integration
- Implement i18n for multiple languages
- Add analytics integration
- Create admin panel for content updates

## License

Personal portfolio project by Gregory Garcia

## Contact

- **Email:** gregorygarcia.dev@gmail.com
- **Phone:** +1 (754) 551-3369
- **LinkedIn:** [Gregory Garcia](https://www.linkedin.com/in/gregory-garcia-3ba7b5134/)
- **GitHub:** [gregoryperez777](https://github.com/gregoryperez777)
