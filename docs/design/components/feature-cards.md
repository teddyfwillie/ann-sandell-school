# Feature Cards Component

> Card-based layouts for showcasing programs, features, and services

---

## Overview

Feature cards present key information in scannable, visually appealing blocks. They support icons, images, titles, descriptions, and optional CTAs. The design emphasizes the gold accent for visual hierarchy.

## Variants

1. **Icon Card** — Icon + title + description
2. **Image Card** — Image + title + description + CTA
3. **Stat Card** — Large number + label
4. **Program Card** — Image + badge + title + meta

---

## Icon Feature Card

### Anatomy

```
┌─────────────────────────────┐
│                             │
│      ┌───────────────┐      │
│      │  🎓  (icon)   │      │
│      │   in gold     │      │
│      │   circle      │      │
│      └───────────────┘      │
│                             │
│       Academic Excellence   │
│                             │
│  Our curriculum prepares    │
│  students for success in    │
│  higher education...        │
│                             │
│        [ Learn More ]       │
│                             │
└─────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Background | White |
| Border | 1px solid navy-100 |
| Border radius | 12px |
| Padding | 32px (desktop), 24px (mobile) |
| Shadow | shadow-card |
| Shadow (hover) | shadow-card-hover |
| Transition | transform 200ms, shadow 200ms |
| Transform (hover) | translateY(-4px) |

### Icon Container

| Property | Value |
|----------|-------|
| Size | 64px × 64px |
| Background | Gold-50 |
| Border | 2px solid Gold-100 |
| Border radius | 50% (circle) |
| Icon size | 28px |
| Icon color | Gold-600 |
| Margin bottom | 24px |

### Title

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 20px |
| Weight | 600 (SemiBold) |
| Color | Navy-900 |
| Margin bottom | 12px |

### Description

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 15px |
| Weight | 400 |
| Color | Navy-600 |
| Line height | 1.6 |
| Margin bottom | 20px |

### Optional Link

| Property | Value |
|----------|-------|
| Font | Source Sans 3, 14px, SemiBold |
| Color | Gold-600 |
| Text decoration | None |
| Hover | Gold-700, underline |
| Icon | Arrow right, 16px |

---

## Image Feature Card

### Anatomy

```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │                       │  │
│  │     [ IMAGE ]         │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│     Primary School          │
│                             │
│  Building strong foundations │
│  through play-based...      │
│                             │
│     [ Explore → ]           │
│                             │
└─────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Background | White |
| Border radius | 12px |
| Shadow | shadow-card |
| Overflow | Hidden |

### Image

| Property | Value |
|----------|-------|
| Aspect ratio | 16:9 or 4:3 |
| Object-fit | Cover |
| Border radius | 12px 12px 0 0 (top only) |

### Content Area

| Property | Value |
|----------|-------|
| Padding | 24px |

### Badge (Optional)

| Property | Value |
|----------|-------|
| Position | Absolute, top-right of image |
| Background | Gold-500 |
| Color | Navy-900 |
| Font | Source Sans 3, 12px, SemiBold |
| Padding | 6px 12px |
| Border radius | 4px |
| Text transform | Uppercase |

---

## Stat Card

### Anatomy

```
┌─────────────────────────────┐
│                             │
│           150+              │
│                             │
│      Years of Excellence    │
│                             │
└─────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Background | Navy-900 or Gold-500 |
| Border radius | 12px |
| Padding | 40px 32px |
| Text align | Center |

### Number

| Property | Value |
|----------|-------|
| Font | Playfair Display |
| Size | 56px (desktop), 40px (mobile) |
| Weight | 700 |
| Color | Gold-500 (on navy) or Navy-900 (on gold) |
| Line height | 1 |

### Label

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 16px |
| Weight | 500 |
| Color | White (on navy) or Navy-800 (on gold) |
| Margin top | 12px |
| Text transform | None |

---

## Program Card (with Image)

### Anatomy

```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │                       │  │
│  │     [ IMAGE ]         │  │
│  │                       │  │
│  │  ┌──────────────┐     │  │
│  │  │ Ages 3-5     │     │  │
│  │  └──────────────┘     │  │
│  └───────────────────────┘  │
│                             │
│     Early Years Program     │
│                             │
│     ★ Play-based learning   │
│     ★ Social development    │
│     ★ Creative exploration  │
│                             │
│     [ Learn More → ]        │
│                             │
└─────────────────────────────┘
```

### Badge Positioning

| Property | Value |
|----------|-------|
| Position | Absolute |
| Bottom | 16px |
| Left | 16px |

### Feature List

| Property | Value |
|----------|-------|
| Style | None (custom bullet) |
| Bullet | Gold-500 circle, 6px |
| Gap | 8px between items |
| Font | Source Sans 3, 14px |
| Color | Navy-700 |

---

## Grid Layouts

### 3-Column Grid (Desktop)

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
```

### 4-Column Grid (Stats)

```css
.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
```

---

## Hover States

### Card Lift

```css
.feature-card {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
}
```

### Image Zoom

```css
.feature-card img {
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.feature-card:hover img {
  transform: scale(1.05);
}
```

---

## Animation (Scroll Reveal)

```css
.feature-card {
  opacity: 0;
  transform: translateY(30px);
}

.feature-card.in-view {
  animation: fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

/* Stagger children */
.feature-card:nth-child(1).in-view { animation-delay: 0ms; }
.feature-card:nth-child(2).in-view { animation-delay: 100ms; }
.feature-card:nth-child(3).in-view { animation-delay: 200ms; }
```

---

## Component API (React)

```typescript
// Icon Feature Card
interface IconFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
  className?: string;
}

// Image Feature Card
interface ImageFeatureCardProps {
  image: {
    src: string;
    alt: string;
  };
  badge?: string;
  title: string;
  description: string;
  features?: string[];
  link?: {
    label: string;
    href: string;
  };
  className?: string;
}

// Stat Card
interface StatCardProps {
  value: string;
  label: string;
  variant?: 'navy' | 'gold';
  className?: string;
}
```

---

## Usage Examples

```tsx
{/* Icon Feature Card */}
<IconFeatureCard
  icon={<GraduationCapIcon />}
  title="Academic Excellence"
  description="Our rigorous curriculum prepares students for success in higher education and beyond."
  link={{
    label: "Learn More",
    href: "/academics"
  }}
/>

{/* Image Feature Card */}
<ImageFeatureCard
  image={{
    src: "/images/primary-school.jpg",
    alt: "Primary school students learning"
  }}
  badge="Ages 5-11"
  title="Primary School"
  description="Building strong foundations through engaging, hands-on learning."
  features={[
    "Core curriculum subjects",
    "Specialist teaching",
    "Enrichment programs"
  ]}
  link={{
    label: "Explore Program",
    href: "/programs/primary"
  }}
/>

{/* Stat Card */}
<StatCard
  value="98%"
  label="University Acceptance Rate"
  variant="navy"
/>
```

---

## CSS Variables

```css
/* Feature Card Variables */
--card-bg: white;
--card-border: var(--navy-100);
--card-radius: 12px;
--card-padding: 32px;
--card-shadow: var(--shadow-card);
--card-shadow-hover: var(--shadow-card-hover);
--card-icon-size: 64px;
--card-icon-bg: var(--gold-50);
--card-icon-color: var(--gold-600);
--card-title-color: var(--navy-900);
--card-text-color: var(--navy-600);
--card-link-color: var(--gold-600);
```
