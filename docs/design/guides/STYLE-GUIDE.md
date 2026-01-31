# SchoolHub Design System — Style Guide

> A refined, academic design system for educational institutions
> Version 1.0 | January 2026

---

## Design Philosophy

SchoolHub's design language balances **scholarly tradition** with **modern clarity**. The aesthetic draws from academic institutions' timeless elegance—think library interiors, leather-bound books, and brass fixtures—while maintaining the accessibility and usability expected of contemporary digital experiences.

### Core Principles

1. **Authoritative Trust** — Deep navy and warm gold convey credibility and tradition
2. **Approachable Warmth** — Despite formality, the design feels welcoming to families
3. **Clear Hierarchy** — Information architecture guides users naturally
4. **Refined Details** — Small touches (gold underlines, serif headings) elevate perception
5. **Responsive Excellence** — Equally polished on desktop and mobile

---

## Color System

### Primary Palette: Academic Navy

The navy palette represents knowledge, trust, and academic excellence.

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-900` | `#0D1B2A` | **Primary brand**, headers, footer background |
| `navy-800` | `#233B58` | Secondary backgrounds, cards on dark |
| `navy-700` | `#2D4A6A` | Hover states on dark backgrounds |
| `navy-600` | `#385A7D` | Secondary text on light |
| `navy-500` | `#416589` | Muted text, icons |
| `navy-100` | `#C5CDD9` | Borders, dividers |
| `navy-50` | `#E8EBF0` | Light backgrounds |

### Accent Palette: Scholarly Gold

Gold represents achievement, excellence, and the warmth of academic tradition.

| Token | Hex | Usage |
|-------|-----|-------|
| `gold-500` | `#F4B41A` | **Primary accent**, CTAs, highlights |
| `gold-600` | `#DCA016` | Hover state for gold elements |
| `gold-700` | `#B88312` | Active/pressed states |
| `gold-400` | `#F6D455` | Light accents |
| `gold-100` | `#FCF0C3` | Background tints |
| `gold-50` | `#FEF9E7` | Subtle backgrounds |

### Usage Guidelines

```
DO:
✓ Use navy-900 for primary headings and footer
✓ Use gold-500 for primary action buttons
✓ Use gold underlines for emphasis
✓ Maintain 4.5:1 contrast ratio minimum

DON'T:
✗ Use gold for body text (poor contrast)
✗ Combine navy-800 with navy-900 (too similar)
✗ Use more than 20% gold on any page
✗ Apply gold backgrounds to large areas
```

### Color Combinations

| Combination | Context | Contrast |
|-------------|---------|----------|
| White on Navy-900 | Hero text, footer | 15.1:1 ✓ |
| Navy-900 on White | Headings, body text | 15.1:1 ✓ |
| Gold-500 on Navy-900 | Accent elements | 7.2:1 ✓ |
| Navy-900 on Gold-500 | Buttons, badges | 7.2:1 ✓ |
| Navy-600 on White | Secondary text | 7.4:1 ✓ |

---

## Typography

### Font Families

**Display & Headings:** Playfair Display
A refined serif typeface that evokes scholarly tradition and timeless elegance.

**Body & UI:** Source Sans 3
A humanist sans-serif optimized for readability across all screen sizes.

**Code:** JetBrains Mono
A monospace font for technical content (schedules, IDs, codes).

### Type Scale

| Style | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| Display Large | Playfair | 72px | Bold | 1.1 | Hero headlines |
| Display Medium | Playfair | 60px | Bold | 1.15 | Section heroes |
| Display Small | Playfair | 48px | SemiBold | 1.2 | Page titles |
| H1 | Playfair | 36px | Bold | 1.2 | Main headings |
| H2 | Playfair | 30px | SemiBold | 1.25 | Section headings |
| H3 | Playfair | 24px | SemiBold | 1.3 | Subsections |
| H4 | Source Sans | 20px | SemiBold | 1.35 | Card titles |
| H5 | Source Sans | 18px | SemiBold | 1.4 | Small headings |
| Body Large | Source Sans | 18px | Regular | 1.6 | Lead paragraphs |
| Body | Source Sans | 16px | Regular | 1.5 | Default text |
| Body Small | Source Sans | 14px | Regular | 1.5 | Secondary text |
| Caption | Source Sans | 12px | Regular | 1.4 | Labels, metadata |
| Overline | Source Sans | 12px | SemiBold | 1.4 | Section labels |
| Button | Source Sans | 15px | SemiBold | 1 | Button text |

### Typography Guidelines

```css
/* Heading treatment */
.heading-accent {
  position: relative;
}
.heading-accent::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--gold-500);
}

/* Gold keyword highlight */
.text-highlight {
  color: var(--gold-500);
}
```

### Responsive Typography

| Breakpoint | Display Large | H1 | Body |
|------------|---------------|-----|------|
| Desktop (1280px+) | 72px | 36px | 16px |
| Tablet (768px) | 56px | 30px | 16px |
| Mobile (< 768px) | 40px | 26px | 15px |

---

## Spacing System

Based on a 4px base unit, our spacing system ensures consistent rhythm throughout the interface.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Minimal gaps, icon padding |
| `space-2` | 8px | Tight spacing, inline elements |
| `space-3` | 12px | Default icon margins |
| `space-4` | 16px | Standard component padding |
| `space-6` | 24px | Card padding (compact) |
| `space-8` | 32px | Card padding (default) |
| `space-10` | 40px | Section padding (mobile) |
| `space-12` | 48px | Component spacing |
| `space-16` | 64px | Section padding (tablet) |
| `space-20` | 80px | Section padding (desktop) |
| `space-24` | 96px | Large section spacing |

### Section Spacing

```
Section Padding:
- Mobile:  64px top/bottom
- Tablet:  80px top/bottom
- Desktop: 96px top/bottom

Component Gaps:
- Tight:   16px
- Default: 24px
- Relaxed: 32px
- Loose:   48px
```

---

## Layout

### Grid System

- **Columns:** 12-column fluid grid
- **Gutter:** 24px (tablet), 32px (desktop)
- **Max container:** 1280px centered
- **Side padding:** 16px (mobile), 24px (tablet), 48px (desktop)

### Breakpoints

| Name | Value | Target |
|------|-------|--------|
| `xs` | 475px | Large phones |
| `sm` | 640px | Tablets portrait |
| `md` | 768px | Tablets landscape |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large displays |

### Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | 0 | Default content |
| `z-raised` | 10 | Elevated cards |
| `z-dropdown` | 100 | Dropdown menus |
| `z-sticky` | 200 | Sticky headers |
| `z-overlay` | 300 | Modals backdrop |
| `z-modal` | 400 | Modal content |
| `z-popover` | 500 | Popovers, tooltips |
| `z-toast` | 600 | Toast notifications |

---

## Elevation & Shadows

### Shadow Scale

```css
/* Card at rest */
--shadow-card: 0 1px 3px rgba(13, 27, 42, 0.08),
               0 4px 12px rgba(13, 27, 42, 0.05);

/* Card on hover */
--shadow-card-hover: 0 4px 12px rgba(13, 27, 42, 0.12),
                     0 8px 24px rgba(13, 27, 42, 0.08);

/* Primary button */
--shadow-button: 0 4px 14px rgba(13, 27, 42, 0.25);

/* Gold button glow */
--shadow-gold: 0 4px 14px rgba(244, 180, 26, 0.35);

/* Elevated UI */
--shadow-lg: 0 10px 15px -3px rgba(13, 27, 42, 0.1),
             0 4px 6px -4px rgba(13, 27, 42, 0.1);
```

---

## Motion & Animation

### Timing Functions

| Name | Curve | Usage |
|------|-------|-------|
| `ease-smooth` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | General transitions |
| `ease-elegant` | `cubic-bezier(0.23, 1, 0.32, 1)` | Entrance animations |
| `ease-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful interactions |
| `ease-snappy` | `cubic-bezier(0.5, 0, 0.1, 1)` | Quick responses |

### Durations

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 100ms | Micro-interactions |
| `duration-normal` | 200ms | Standard transitions |
| `duration-moderate` | 300ms | Complex transitions |
| `duration-slow` | 400ms | Page transitions |

### Animation Patterns

**Fade In Up** — Primary entrance animation
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
```

**Staggered Entrance** — For lists and grids
```css
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 100ms; }
.stagger-item:nth-child(3) { animation-delay: 200ms; }
.stagger-item:nth-child(4) { animation-delay: 300ms; }
```

---

## Borders & Corners

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Inputs, small buttons |
| `radius-md` | 6px | Default buttons |
| `radius-lg` | 8px | Cards, large buttons |
| `radius-xl` | 12px | Modal corners |
| `radius-2xl` | 16px | Large cards |
| `radius-full` | 9999px | Pills, avatars |

### Border Widths

| Token | Value | Usage |
|-------|-------|-------|
| `border-thin` | 1px | Default borders |
| `border-medium` | 2px | Focus rings |
| `border-thick` | 3px | Accent underlines |
| `border-accent` | 5px | Decorative bars |

---

## Iconography

### Style Guidelines

- **Style:** Outlined icons (2px stroke)
- **Size scale:** 16px, 20px, 24px, 32px
- **Color:** Inherit from parent text
- **Touch target:** Minimum 44×44px

### Icon Grid

```
16px — Inline icons, small UI
20px — Default interface icons
24px — Card icons, navigation
32px — Feature icons, large UI
```

---

## Imagery

### Photography Style

1. **Authentic** — Real students, genuine moments
2. **Warm lighting** — Natural, golden-hour quality
3. **Diverse** — Representative of student body
4. **Active** — Learning in progress, engagement
5. **Environmental** — Show campus, facilities

### Image Treatments

**Hero Images:**
- Dark overlay gradient: `linear-gradient(180deg, rgba(13, 27, 42, 0.4) 0%, rgba(13, 27, 42, 0.8) 100%)`
- Text always white on overlay

**Card Images:**
- Aspect ratio: 16:9 or 4:3
- Border radius matches card: 8px top corners
- No overlay unless interactive

---

## Accessibility

### Requirements

- **Color contrast:** WCAG AA minimum (4.5:1 text, 3:1 UI)
- **Focus states:** Visible 2px outline with offset
- **Touch targets:** 44×44px minimum
- **Motion:** Respect `prefers-reduced-motion`

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--gold-500);
  outline-offset: 2px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Mode Considerations

While SchoolHub primarily uses a light theme, the navy footer and hero sections demonstrate dark-on-dark patterns:

| Element | Light Mode | Dark Section |
|---------|------------|--------------|
| Background | White / Navy-50 | Navy-900 |
| Primary text | Navy-900 | White |
| Secondary text | Navy-600 | Navy-200 |
| Accent | Gold-500 | Gold-500 |
| Borders | Navy-100 | Navy-700 |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2026 | Initial release |

---

*SchoolHub Design System — Crafted for educational excellence*
