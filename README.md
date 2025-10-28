# Pailot Landing Page

A marketing site for **Pailot — Your AI Business Pilot.** Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and HeroUI.

## ✨ Features

- Animated hero with parallax gradients and floating orb
- Feature grid with motion reveals and hover tilt
- Curved flight-path timeline with animated plane
- Framer Motion testimonial carousel with gradient glow
- Final CTA with gradient border buttons
- Responsive layout, smooth scrolling navigation, and light/dark theme toggle

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the development server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the landing page.

### 3. Build for production

```bash
pnpm build
pnpm start
```

## 🛠️ Customization

- Update content in components within `components/` (Hero, Features, HowItWorks, Testimonials, CTA, Navbar, Footer).
- Adjust brand colors and gradients in `tailwind.config.ts`.
- Modify animations inside each component powered by Framer Motion.
- Replace SVG assets (`public/logo.svg`, `public/plane-bg.svg`) with your own branding.
- Configure metadata and OG tags in `app/layout.tsx`.

## 📁 Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  CTA.tsx
  Features.tsx
  Footer.tsx
  Hero.tsx
  HowItWorks.tsx
  Layout.tsx
  Navbar.tsx
  Testimonials.tsx
hooks/
  useScrollReveal.ts
public/
  logo.svg
  plane-bg.svg
```

## 🧪 Testing

Run linting with:

```bash
pnpm lint
```

## 📄 License

MIT © 2025 Pailot
