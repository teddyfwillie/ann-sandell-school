# Stats Section Component

> Showcase key metrics and achievements with impactful number displays

---

## Overview

The stats section displays quantitative achievements to build credibility and trust. Large, bold numbers with gold accents create visual impact, while concise labels provide context.

## Variants

1. **Light Background** — Navy numbers on white/gray background
2. **Dark Background** — Gold/white numbers on navy background
3. **Mixed** — Alternating navy and gold stat cards

---

## Section Layout

### Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                      ━━━━ OVERLINE LABEL ━━━━                          │
│                                                                         │
│                     Academic Excellence                                 │
│             Our track record speaks for itself                          │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │             │  │             │  │             │  │             │   │
│  │    150+     │  │    98%      │  │    25:1     │  │    50+      │   │
│  │             │  │             │  │             │  │             │   │
│  │   Years     │  │ University  │  │  Student    │  │   Extra-    │   │
│  │             │  │ Acceptance  │  │  Teacher    │  │  curricular │   │
│  │             │  │    Rate     │  │   Ratio     │  │  Activities │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Section Container

| Property | Value |
|----------|-------|
| Padding | 96px 0 (desktop), 64px 0 (mobile) |
| Background (light) | Navy-50 or White |
| Background (dark) | Navy-900 |

### Section Header

| Property | Value |
|----------|-------|
| Overline | Source Sans 3, 12px, SemiBold, Gold-500, uppercase, tracking-widest |
| Title | Playfair Display, 36px, Bold, Navy-900 (light) or White (dark) |
| Subtitle | Source Sans 3, 18px, Navy-600 (light) or Navy-200 (dark) |
| Alignment | Center |
| Max width | 600px |
| Margin bottom | 64px |

### Gold Underline Accent

```css
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--gold-500);
  margin: 16px auto 0;
}
```

---

## Stat Item (Light Background)

### Specifications

| Property | Value |
|----------|-------|
| Display | Flex, column, center |
| Padding | 32px 24px |
| Background | White |
| Border | 1px solid Navy-100 |
| Border radius | 12px |
| Shadow | shadow-sm |

### Number

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 56px (desktop), 44px (tablet), 36px (mobile) |
| Weight | 700 |
| Color | Navy-900 |
| Line height | 1.1 |

### Number with Suffix

```html
<span class="stat-number">
  150<span class="stat-suffix">+</span>
</span>
```

| Element | Style |
|---------|-------|
| Suffix (+, %, etc.) | Gold-500, same font/weight |

### Label

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 16px |
| Weight | 500 |
| Color | Navy-600 |
| Margin top | 8px |
| Text align | Center |
| Max width | 150px |

---

## Stat Item (Dark Background)

### Specifications

| Property | Value |
|----------|-------|
| Background | Navy-800 or transparent |
| Border | 1px solid Navy-700 (if boxed) |

### Number (Dark)

| Property | Value |
|----------|-------|
| Color | Gold-500 |
| Suffix | Gold-400 |

### Label (Dark)

| Property | Value |
|----------|-------|
| Color | Navy-200 |

---

## Inline Stats (Alternative)

For embedding stats within content sections:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│    ━━━━━━━━━━━    ━━━━━━━━━━━    ━━━━━━━━━━━    ━━━━━━━━━━━            │
│       150+           98%            25:1           50+                  │
│      Years        University      Student       Activities              │
│    ━━━━━━━━━━━    ━━━━━━━━━━━    ━━━━━━━━━━━    ━━━━━━━━━━━            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Layout | Flex, row, space-evenly |
| Dividers | 1px solid Navy-200 (between items) |
| Item padding | 0 40px |

---

## Animated Counting

Numbers animate from 0 to final value on scroll-into-view.

### Animation Specifications

| Property | Value |
|----------|-------|
| Duration | 2000ms |
| Easing | ease-out |
| Trigger | IntersectionObserver at 20% visibility |
| Suffix | Appears immediately |

### Implementation Notes

```typescript
// Use a counting animation library or custom hook
// Animate only when section enters viewport
// Preserve suffix (+, %, etc.) during animation
// Round to nearest integer during count
// Respect reduced motion preferences
```

---

## Responsive Grid

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .stat-number {
    font-size: 32px;
  }
}
```

---

## Decorative Elements

### Gold Accent Bar (Optional)

```css
.stat-item::before {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--gold-500);
  margin: 0 auto 20px;
}
```

### Icon Integration (Optional)

```
┌─────────────────┐
│       🎓        │  ← Small icon above number
│     150+        │
│     Years       │
└─────────────────┘
```

| Property | Value |
|----------|-------|
| Icon size | 32px |
| Icon color | Gold-500 |
| Margin bottom | 12px |

---

## Component API (React)

```typescript
interface Stat {
  value: string | number;
  suffix?: string; // +, %, etc.
  label: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  overline?: string;
  title: string;
  subtitle?: string;
  stats: Stat[];
  variant?: 'light' | 'dark' | 'inline';
  animated?: boolean;
  className?: string;
}
```

---

## Usage Example

```tsx
<StatsSection
  overline="By the Numbers"
  title="Academic Excellence"
  subtitle="Our track record speaks for itself"
  variant="dark"
  animated
  stats={[
    { value: 150, suffix: "+", label: "Years of Excellence" },
    { value: 98, suffix: "%", label: "University Acceptance Rate" },
    { value: "25:1", label: "Student-Teacher Ratio" },
    { value: 50, suffix: "+", label: "Extracurricular Activities" },
  ]}
/>
```

---

## Accessibility

- Numbers use `aria-label` with full text (e.g., "150 plus years")
- Animated counting respects `prefers-reduced-motion`
- If animated, final value is visible in DOM immediately
- Labels are properly associated with values

---

## CSS Variables

```css
/* Stats Section Variables */
--stats-section-bg-light: var(--navy-50);
--stats-section-bg-dark: var(--navy-900);
--stats-padding: 96px 0;
--stats-gap: 24px;

--stat-number-size: 56px;
--stat-number-color-light: var(--navy-900);
--stat-number-color-dark: var(--gold-500);
--stat-suffix-color: var(--gold-500);

--stat-label-size: 16px;
--stat-label-color-light: var(--navy-600);
--stat-label-color-dark: var(--navy-200);

--stat-item-bg: white;
--stat-item-border: var(--navy-100);
--stat-item-radius: 12px;
--stat-item-padding: 32px 24px;
```
