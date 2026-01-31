# Component Specifications Index

> Quick reference for all SchoolHub design system components

---

## Component Library

| Component | Description | Status |
|-----------|-------------|--------|
| [Navigation](./navigation.md) | Primary site header with logo, links, and CTA | ✓ Specified |
| [Hero Section](./hero-section.md) | Full-width banner with image, overlay, and headlines | ✓ Specified |
| [Feature Cards](./feature-cards.md) | Icon cards, image cards, stat cards, program cards | ✓ Specified |
| [Stats Section](./stats-section.md) | Key metrics display with animated counting | ✓ Specified |
| [Image Gallery](./image-gallery.md) | Grid, masonry, carousel with lightbox | ✓ Specified |
| [Footer](./footer.md) | Site-wide footer with navigation and contact | ✓ Specified |

---

## Component Hierarchy

```
Page Layout
├── Navigation (sticky header)
├── Main Content
│   ├── Hero Section (page intro)
│   ├── Content Sections
│   │   ├── Feature Cards
│   │   ├── Stats Section
│   │   ├── Image Gallery
│   │   └── Custom content blocks
│   └── Call-to-Action Section
└── Footer
```

---

## Shared Patterns

### Card Elevation

All cards follow consistent shadow behavior:

```css
/* Rest state */
box-shadow: var(--shadow-card);

/* Hover state */
box-shadow: var(--shadow-card-hover);
transform: translateY(-4px);
transition: all 0.3s var(--ease-elegant);
```

### Section Padding

Consistent vertical rhythm for sections:

| Breakpoint | Padding |
|------------|---------|
| Mobile | 64px (4rem) |
| Tablet | 80px (5rem) |
| Desktop | 96px (6rem) |

### Section Headers

Standard section header pattern:

```html
<header class="section-header text-center max-w-xl mx-auto mb-16">
  <span class="overline text-gold-500 uppercase tracking-widest text-xs font-semibold">
    Overline Label
  </span>
  <h2 class="font-display text-4xl font-bold text-navy-900 mt-4 heading-accent-center">
    Section Title
  </h2>
  <p class="text-navy-600 text-lg mt-4">
    Optional subtitle or description text goes here.
  </p>
</header>
```

### Button Variants

| Variant | Use Case |
|---------|----------|
| Primary (Gold) | Main CTAs, form submissions |
| Secondary (Outline) | Secondary actions |
| Ghost | Tertiary actions, dark backgrounds |
| Text Link | Inline links, "Learn more" |

### Gold Accent Pattern

Used across components for visual consistency:

- **Underline:** 3px bar under headings, 60px wide
- **Highlight:** Gold text for emphasis words
- **Icon backgrounds:** Gold-50 circles
- **Hover states:** Gold-600 on links
- **Borders:** Gold-500 left border for quotes

---

## Animation Patterns

### Entrance Animations

Components animate in when scrolling into view:

1. **fadeInUp** — Primary entrance (cards, sections)
2. **fadeIn** — Subtle appearance (images, overlays)
3. **scaleIn** — Interactive elements (buttons, modals)

### Stagger Pattern

For lists and grids, stagger children:

```css
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 100ms; }
.item:nth-child(3) { animation-delay: 200ms; }
/* Continue pattern */
```

### Hover Transitions

Standard duration: `200-300ms`
Standard easing: `var(--ease-smooth)` or `var(--ease-elegant)`

---

## Responsive Breakpoints

| Name | Width | Target |
|------|-------|--------|
| `xs` | 475px | Large phones |
| `sm` | 640px | Tablets portrait |
| `md` | 768px | Tablets landscape |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large displays |

---

## Implementation Priority

Recommended build order:

1. **Design Tokens** — Set up CSS variables, Tailwind config
2. **Navigation** — Global component, needed for all pages
3. **Footer** — Global component, needed for all pages
4. **Hero Section** — Homepage and landing pages
5. **Feature Cards** — Reusable across many sections
6. **Stats Section** — Trust-building content
7. **Image Gallery** — Campus and event showcases

---

## Future Components

Components to specify as needed:

- [ ] Buttons (detailed variants)
- [ ] Form inputs and validation
- [ ] Modal / Dialog
- [ ] Tabs / Accordion
- [ ] Testimonials / Quotes
- [ ] Timeline / Process steps
- [ ] Team / Faculty grid
- [ ] Events calendar
- [ ] Blog / News cards
- [ ] Pricing / Tuition tables
- [ ] FAQ accordion
- [ ] Contact form
- [ ] Map integration

---

*Add component specifications as features are developed*
