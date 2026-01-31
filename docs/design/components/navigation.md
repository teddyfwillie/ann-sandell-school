# Navigation Component

> Primary site navigation with logo, menu items, and CTA button

---

## Overview

The navigation component provides primary wayfinding across SchoolHub. It features a clean, scholarly aesthetic with the school logo, horizontal menu, and a prominent call-to-action button.

## Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Logo]     Home  Academics  Admissions  Campus  Contact   [Apply Now] │
└─────────────────────────────────────────────────────────────────────────┘
    ↑            ↑                                              ↑
  Logo       Nav Links                                      CTA Button
```

## Specifications

### Container

| Property | Value |
|----------|-------|
| Height | 80px (desktop), 64px (mobile) |
| Background | White |
| Border | 1px solid navy-100 (bottom) |
| Shadow | shadow-sm on scroll |
| Position | Sticky, top: 0 |
| Z-index | 200 (z-sticky) |
| Max-width | 1280px centered |
| Padding | 0 48px (desktop), 0 16px (mobile) |

### Logo

| Property | Value |
|----------|-------|
| Max height | 48px |
| Spacing right | 48px |
| Link target | Homepage |

### Nav Links

| Property | Value |
|----------|-------|
| Font | Source Sans 3, 15px, SemiBold |
| Color | Navy-700 |
| Spacing | 32px between items |
| Padding | 8px 0 |
| Text transform | None |

### Nav Link States

| State | Style |
|-------|-------|
| Default | Navy-700, no underline |
| Hover | Navy-900, gold-500 underline (3px, animate in) |
| Active/Current | Navy-900, gold-500 underline visible |
| Focus | 2px gold-500 outline, 2px offset |

### CTA Button

| Property | Value |
|----------|-------|
| Variant | Primary Gold |
| Size | Medium (40px height) |
| Font | Source Sans 3, 15px, SemiBold |
| Background | Gold-500 |
| Text | Navy-900 |
| Border radius | 6px |
| Padding | 0 24px |
| Shadow | shadow-button-gold |

---

## Responsive Behavior

### Desktop (1024px+)
- Full horizontal layout
- All links visible
- CTA button visible

### Tablet/Mobile (< 1024px)
- Logo + hamburger menu
- Slide-out drawer from right
- Links stack vertically
- CTA button at bottom of drawer

---

## Mobile Drawer

| Property | Value |
|----------|-------|
| Width | 100% (mobile), 320px (tablet) |
| Background | White |
| Animation | Slide in from right, 300ms |
| Overlay | Navy-900 @ 50% opacity |
| Padding | 24px |

### Drawer Links

| Property | Value |
|----------|-------|
| Font size | 18px |
| Padding | 16px 0 |
| Border bottom | 1px solid navy-100 |

---

## Scroll Behavior

```css
/* Add on scroll > 20px */
.nav-scrolled {
  box-shadow: 0 1px 3px rgba(13, 27, 42, 0.1);
  border-bottom-color: transparent;
}
```

---

## Interactive States

### Dropdown Menu (if needed)

```
┌─────────────┐
│ Menu Item   │
├─────────────┤
│ Submenu 1  →│
│ Submenu 2  →│
│ Submenu 3  →│
└─────────────┘
```

| Property | Value |
|----------|-------|
| Background | White |
| Border | 1px solid navy-100 |
| Shadow | shadow-lg |
| Border radius | 8px |
| Padding | 8px 0 |
| Min width | 200px |
| Item padding | 12px 16px |
| Item hover | Navy-50 background |

---

## Accessibility

- Navigation wrapped in `<nav>` landmark
- `aria-label="Main navigation"`
- Mobile menu: `aria-expanded` on trigger
- Current page: `aria-current="page"`
- Keyboard navigable with Tab
- Escape key closes mobile menu

---

## Component API (React)

```typescript
interface NavigationProps {
  logo: {
    src: string;
    alt: string;
    href?: string;
  };
  links: Array<{
    label: string;
    href: string;
    isActive?: boolean;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  cta?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
  };
  className?: string;
}
```

---

## Usage Example

```tsx
<Navigation
  logo={{
    src: "/logo.svg",
    alt: "SchoolHub Academy"
  }}
  links={[
    { label: "Home", href: "/", isActive: true },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Campus", href: "/campus" },
    { label: "Contact", href: "/contact" },
  ]}
  cta={{
    label: "Apply Now",
    href: "/apply"
  }}
/>
```

---

## Figma/Design Tokens

```css
/* Navigation CSS Variables */
--nav-height-desktop: 80px;
--nav-height-mobile: 64px;
--nav-bg: var(--white);
--nav-border: var(--navy-100);
--nav-link-color: var(--navy-700);
--nav-link-hover: var(--navy-900);
--nav-link-accent: var(--gold-500);
--nav-link-gap: 32px;
--nav-cta-bg: var(--gold-500);
--nav-cta-color: var(--navy-900);
```
