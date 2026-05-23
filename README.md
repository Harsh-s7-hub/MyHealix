# Healix Landing Page

Premium marketing website for **Healix** — an AI-powered healthcare Android application.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── background/   # Aurora, grid, particles
│   ├── effects/      # Dashboard mockup, ECG, neural network
│   ├── layout/       # Navbar, footer
│   ├── providers/    # Lenis, GSAP, mouse glow
│   ├── sections/   # All landing page sections
│   └── ui/           # Reusable UI primitives
├── hooks/
└── lib/              # Utils and content data
```

## Sections

1. Hero with animated dashboard mockup
2. QR code download
3. Features grid
4. How it works timeline
5. AI intelligence section
6. App preview carousel
7. Animated stats
8. Testimonials
9. Final CTA
10. Footer
