# Gregory Garcia's Portfolio

Next.js 14 portfolio with TypeScript, Tailwind CSS, and Framer Motion animations.

**Live:** [gregorygarcia.dev](https://www.gregorygarcia.dev/)

## Tech Stack

- **Next.js 14.0.4** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3.3.0** - Utility-first styling
- **Framer Motion** - Animations and scroll effects
- **@tsparticles** - Particle background
- **react-vertical-timeline-component** - Timeline visualization
- **@heroicons/react** + **FontAwesome** - Icons
- **Node 24.x**

## Project Structure

```
src/app/
├── Components/
│   ├── Header.tsx           # Navigation
│   ├── Presentation.tsx     # Hero section
│   ├── About.tsx            # About & skills
│   ├── CurrentWork.tsx      # Current position highlight
│   ├── Experience.tsx       # Work history
│   ├── TimelineElement.tsx  # Timeline cards with collapse
│   ├── Projects.tsx         # Project showcase
│   ├── Contact.tsx          # Contact + footer
│   ├── PageLoader.tsx       # Loading screen
│   └── ParticlesBackground.tsx
├── layout.tsx
├── page.tsx
├── globals.css
└── particles-config.ts
```

## Key Components

### TimelineElement
- Collapse/expand animation (height: 3rem → auto)
- "See more/less" toggle with chevron icons
- `triggerOnce: false` for re-triggering scroll animations
- Responsive titles: `text-xl md:text-2xl`

### Skills
- Conditional background: only NextJS logo has `bg-white`
- 20 technologies including AI tools (ChatGPT, Claude Code, Gemini, Copilot)
- Hover tooltip with category

### Contact
- Fully responsive with mobile-first design
- Icon sizes: `h-5 w-5 md:h-6 md:w-6`
- Text overflow: `truncate` + `min-w-0`

## Development Patterns

### Animations
```tsx
// Scroll-triggered (most sections)
const { ref, inView } = useInView({ once: true });
const mainControls = useAnimation();

// Height collapse (TimelineElement)
<motion.div
  initial={false}
  animate={{ height: isExpanded ? "auto" : "3rem" }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className="overflow-hidden"
/>

// Interactive buttons
<motion.button
  whileHover={{ scale: 1.05, x: 3 }}
  whileTap={{ scale: 0.95 }}
/>
```

### Responsive Design
```tsx
// Mobile-first pattern
className="p-6 md:p-12"                    // Padding
className="text-base md:text-lg lg:text-xl" // Text
className="h-5 w-5 md:h-6 md:w-6"          // Icons

// Overflow prevention
className="min-w-0 truncate"  // Text
className="flex-shrink-0"     // Images/icons
```

### Conditional Styling
```tsx
className={`base-classes ${condition ? 'extra-class' : ''}`}
```

## Design System

- **Colors:** Violet/purple theme (`violet-900`, `violet-700`, `violet-600`, `violet-400`)
- **Font:** Roboto (400, 700, 900)
- **Z-Index:** Particles (-1), Content (10), Header (20)

## Development Preferences

### Animations
- Use `easeInOut` timing (0.3-0.5s duration)
- Most sections: `triggerOnce: true`
- TimelineElement: `triggerOnce: false`
- Height animations: `initial={false}` to prevent mount animation

### Responsive
- Mobile-first: base styles → `md:` (768px+) → `lg:` (1024px+)
- Touch targets: minimum 44x44px
- Always handle text overflow
- Scale icons and spacing proportionally

### Styling
- Conditional classes with template literals
- Subtle transparency backgrounds
- Maintain violet/purple color consistency
- Avoid overpowering title sizes

### Code
- Use `"use client"` for interactive components
- Define TypeScript interfaces for props
- Hardcoded content (no CMS)
- Extract reusable components

## SEO Optimization

Portfolio is optimized for recruiter searches with:

### Meta Tags & Keywords
- **Title:** "Hire Gregory Garcia | Senior Front-End Developer & React Expert - Dublin"
- **Keywords:** All common recruiter search terms:
  - Job titles: "frontend developer", "react developer", "web developer", "full stack developer"
  - Technologies: React, Next.js, TypeScript, JavaScript, etc.
  - Location-based: "developer Dublin", "frontend developer Ireland"
  - Experience: "senior developer", "experienced developer"

### Structured Data (JSON-LD)
- Person schema with complete profile
- Occupation schema with SOC code (15-1254.00)
- Job-seeking intent with preferred roles
- 35+ skills listed for search indexing
- Location, contact, and social profiles

### SEO Files
- **robots.txt:** Allows all crawlers, references sitemap
- **sitemap.ts:** Auto-generated XML sitemap with all sections
- **Canonical URL:** Set to https://www.gregorygarcia.dev
- **Open Graph & Twitter Cards:** Optimized for social sharing

### Search Engine Features
- Google Knowledge Graph eligible
- Rich results with Person schema
- Location-aware (Dublin, Ireland)
- Skills and occupation indexing
- "Available for hire" signal

## Scripts

```bash
npm install      # Install dependencies
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm start        # Production server
```

## Contact

- **Email:** gregory.barros@hotmail.com
- **Phone:** +353 83 432 9851
- **LinkedIn:** [Gregory Garcia](https://www.linkedin.com/in/gregory-barros-garcia-4160b2157)
- **GitHub:** [gregorybgarcia](https://github.com/gregorybgarcia)
