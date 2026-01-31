# SchoolHub Design System

> A refined, academic design system for educational institutions
> Built for Next.js 16 + React 19 + Tailwind CSS v4 + TypeScript

---

## Quick Start

### 1. Install Google Fonts

Add to your `app/layout.tsx`:

```tsx
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 2. Add Design Tokens to CSS

Copy the CSS variables from `tokens/variables.css` to your `app/globals.css`.

### 3. Configure Tailwind

Reference `tokens/tailwind-theme.ts` to extend your Tailwind configuration.

---

## Directory Structure

```
docs/design/
├── README.md                 # This file
├── tokens/
│   ├── design-tokens.ts      # TypeScript token definitions
│   ├── tailwind-theme.ts     # Tailwind CSS v4 theme config
│   └── variables.css         # CSS custom properties
├── guides/
│   └── STYLE-GUIDE.md        # Complete style guide documentation
└── components/
    ├── navigation.md         # Navigation component specs
    ├── hero-section.md       # Hero section specs
    ├── feature-cards.md      # Feature card variants
    ├── stats-section.md      # Stats/metrics section
    ├── image-gallery.md      # Gallery component specs
    └── footer.md             # Footer component specs
```

---

## Design Philosophy

SchoolHub's design balances **scholarly tradition** with **modern clarity**:

- **Academic Navy (#0D1B2A)** — Trust, knowledge, excellence
- **Scholarly Gold (#F4B41A)** — Achievement, warmth, distinction
- **Playfair Display** — Elegant serif for headings
- **Source Sans 3** — Readable sans-serif for body text

---

## Core Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--navy-900` | `#0D1B2A` | Primary brand, headings |
| `--gold-500` | `#F4B41A` | Accent, CTAs, highlights |
| `--navy-600` | `#385A7D` | Secondary text |
| `--navy-100` | `#C5CDD9` | Borders, dividers |

### Typography

| Style | Font | Size |
|-------|------|------|
| Display | Playfair Display | 48-72px |
| Heading | Playfair Display | 24-36px |
| Body | Source Sans 3 | 15-18px |
| Caption | Source Sans 3 | 12-14px |

### Spacing

Based on 4px grid: `4, 8, 12, 16, 24, 32, 48, 64, 96px`

---

## Components

### Navigation
Fixed header with logo, links, and gold CTA button.
→ [Full specs](./components/navigation.md)

### Hero Section
Full-bleed image with dark overlay, headline with gold accent.
→ [Full specs](./components/hero-section.md)

### Feature Cards
Icon cards, image cards, and stat cards for showcasing content.
→ [Full specs](./components/feature-cards.md)

### Stats Section
Large numbers with gold accents, animated counting on scroll.
→ [Full specs](./components/stats-section.md)

### Image Gallery
Grid, masonry, and carousel layouts with lightbox support.
→ [Full specs](./components/image-gallery.md)

### Footer
Dark navy footer with navigation, contact info, and social links.
→ [Full specs](./components/footer.md)

---

## Usage Examples

### Gold Accent Text

```tsx
<h1 className="font-display text-5xl font-bold text-navy-900">
  GLOBAL <span className="text-gold-500">INTERNATIONAL</span> SCHOOL
</h1>
```

### Primary Button

```tsx
<button className="bg-gold-500 text-navy-900 font-semibold px-6 py-3 rounded-md shadow-button-gold hover:bg-gold-600 transition-colors">
  Apply Now
</button>
```

### Card with Hover

```tsx
<div className="bg-white border border-navy-100 rounded-xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
```

---

## Accessibility

- WCAG AA compliant color contrast
- Focus states on all interactive elements
- Reduced motion support
- Semantic HTML landmarks
- Keyboard navigation

---

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

---

## Resources

- [Style Guide](./guides/STYLE-GUIDE.md) — Complete documentation
- [Design Tokens](./tokens/design-tokens.ts) — TypeScript definitions
- [Tailwind Theme](./tokens/tailwind-theme.ts) — Tailwind configuration

---

*SchoolHub Design System v1.0 — January 2026*
