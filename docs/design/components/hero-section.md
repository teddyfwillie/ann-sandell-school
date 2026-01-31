# Hero Section Component

> Full-width banner with background image, overlay, headline, and CTA

---

## Overview

The hero section creates a powerful first impression with immersive photography, a dark overlay for text contrast, a compelling headline with gold accent text, and clear call-to-action buttons.

## Variants

1. **Primary Hero** — Full viewport height, homepage
2. **Secondary Hero** — 50-60vh, interior pages
3. **Compact Hero** — Fixed height, sub-pages

---

## Primary Hero (Homepage)

### Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░             │
│            ░░░░░░░░░░  BACKGROUND IMAGE  ░░░░░░░░░░░░░░░░░             │
│            ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░             │
│                                                                         │
│                    GLOBAL INTERNATIONAL SCHOOL                          │
│                   (with "INTERNATIONAL" in gold)                        │
│                                                                         │
│                 Shaping tomorrow's leaders through                      │
│               excellence in education & beyond                          │
│                                                                         │
│              [ Explore Programs ]  [ Schedule Visit ]                   │
│                                                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                    ↑
              Scroll indicator (optional)
```

### Specifications

| Property | Value |
|----------|-------|
| Min height | 100vh (primary), 60vh (secondary) |
| Background | Image with overlay |
| Overlay | `linear-gradient(180deg, rgba(13, 27, 42, 0.4) 0%, rgba(13, 27, 42, 0.8) 100%)` |
| Content max-width | 800px |
| Content alignment | Center |
| Padding | 120px 24px (accounts for nav) |

### Typography

**Headline:**
| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 72px (desktop), 48px (tablet), 36px (mobile) |
| Weight | 700 (Bold) |
| Color | White |
| Line height | 1.1 |
| Letter spacing | -0.02em |
| Accent word | Gold-500 |

**Subheadline:**
| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 20px (desktop), 18px (mobile) |
| Weight | 400 |
| Color | White @ 90% opacity |
| Line height | 1.6 |
| Max width | 600px |
| Margin top | 24px |

### Headline Gold Accent

```html
<h1>
  GLOBAL <span class="text-gold-500">INTERNATIONAL</span> SCHOOL
</h1>
```

### CTA Buttons

**Primary Button:**
| Property | Value |
|----------|-------|
| Background | Gold-500 |
| Text | Navy-900 |
| Font | Source Sans 3, 16px, SemiBold |
| Padding | 16px 32px |
| Border radius | 6px |
| Shadow | 0 4px 14px rgba(244, 180, 26, 0.35) |

**Secondary Button:**
| Property | Value |
|----------|-------|
| Background | Transparent |
| Border | 2px solid White |
| Text | White |
| Font | Source Sans 3, 16px, SemiBold |
| Padding | 14px 30px (adjust for border) |
| Border radius | 6px |

**Button Container:**
| Property | Value |
|----------|-------|
| Display | Flex, row |
| Gap | 16px |
| Margin top | 40px |
| Wrap | Yes (mobile stacks) |

---

## Secondary Hero (Interior Pages)

For pages like "About", "Academics", "Admissions"

| Property | Value |
|----------|-------|
| Min height | 400px (desktop), 300px (mobile) |
| Content alignment | Left or Center |
| Overlay | Slightly lighter: 60-70% opacity |

### Breadcrumb Integration

```
Home / Academics / Programs
```

| Property | Value |
|----------|-------|
| Font | Source Sans 3, 14px |
| Color | White @ 70% |
| Separator | " / " |
| Current page | White @ 100% |
| Margin bottom | 16px |

---

## Compact Hero

For sub-pages, listing pages

| Property | Value |
|----------|-------|
| Height | 250px fixed |
| Background | Navy-900 solid (or subtle pattern) |
| Title only | No subheadline |

---

## Background Treatment

### Image Requirements

- **Minimum resolution:** 1920×1080px
- **Aspect ratio:** 16:9 preferred
- **Format:** WebP with JPEG fallback
- **Focal point:** Center or face-aware
- **Object-fit:** Cover
- **Object-position:** Center center (adjustable)

### Overlay Options

```css
/* Standard dark overlay */
.hero-overlay-dark {
  background: linear-gradient(
    180deg,
    rgba(13, 27, 42, 0.4) 0%,
    rgba(13, 27, 42, 0.8) 100%
  );
}

/* Radial gold accent (subtle) */
.hero-overlay-accent {
  background:
    radial-gradient(
      ellipse at center top,
      rgba(244, 180, 26, 0.1) 0%,
      transparent 50%
    ),
    linear-gradient(
      180deg,
      rgba(13, 27, 42, 0.4) 0%,
      rgba(13, 27, 42, 0.8) 100%
    );
}
```

---

## Animation

### Initial Load

```css
/* Headline */
.hero-headline {
  animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

/* Subheadline */
.hero-subheadline {
  animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

/* Buttons */
.hero-cta {
  animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  animation-delay: 0.6s;
  opacity: 0;
}
```

### Scroll Indicator (Optional)

```css
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  animation: float 2s ease-in-out infinite;
}
```

---

## Responsive Behavior

| Breakpoint | Min Height | Headline | Subheadline | Buttons |
|------------|------------|----------|-------------|---------|
| Desktop (1280px+) | 100vh | 72px | 20px | Row |
| Large tablet (1024px) | 80vh | 60px | 18px | Row |
| Tablet (768px) | 70vh | 48px | 17px | Stack |
| Mobile (< 640px) | 90vh | 36px | 16px | Stack, full-width |

---

## Accessibility

- Background image has `role="img"` and `aria-label`
- Text contrast meets WCAG AAA (>7:1) with overlay
- Buttons have focus states (gold outline)
- Reduced motion: disable animations
- Video backgrounds: provide pause control

---

## Component API (React)

```typescript
interface HeroSectionProps {
  variant?: 'primary' | 'secondary' | 'compact';
  backgroundImage: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  headline: string;
  highlightWord?: string; // Word to highlight in gold
  subheadline?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  overlay?: 'dark' | 'accent' | 'none';
  alignment?: 'center' | 'left';
  showScrollIndicator?: boolean;
  className?: string;
}
```

---

## Usage Example

```tsx
<HeroSection
  variant="primary"
  backgroundImage={{
    src: "/images/campus-hero.jpg",
    alt: "Students collaborating in modern classroom"
  }}
  headline="GLOBAL INTERNATIONAL SCHOOL"
  highlightWord="INTERNATIONAL"
  subheadline="Shaping tomorrow's leaders through excellence in education and beyond"
  primaryCta={{
    label: "Explore Programs",
    href: "/programs"
  }}
  secondaryCta={{
    label: "Schedule Visit",
    href: "/visit"
  }}
  overlay="accent"
  showScrollIndicator
/>
```

---

## CSS Variables

```css
/* Hero Section Variables */
--hero-min-height: 100vh;
--hero-padding-top: 120px;
--hero-padding-bottom: 80px;
--hero-content-max-width: 800px;
--hero-overlay-start: rgba(13, 27, 42, 0.4);
--hero-overlay-end: rgba(13, 27, 42, 0.8);
--hero-text-color: white;
--hero-accent-color: var(--gold-500);
```
