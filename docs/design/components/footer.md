# Footer Component

> Site-wide footer with navigation, contact info, and social links

---

## Overview

The footer provides secondary navigation, contact information, and social media links. It uses a dark navy background to create visual closure and contrast with the main content.

## Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                 │   │
│  │  [LOGO]           Quick Links    Programs     Contact Us       │   │
│  │                   • Home         • Early      123 Education    │   │
│  │  Empowering       • About          Years      Avenue           │   │
│  │  future           • Academics    • Primary    City, State      │   │
│  │  leaders          • Admissions   • Secondary  12345            │   │
│  │  through          • Campus       • Sixth      +1 (555) 123     │   │
│  │  excellence       • Contact        Form       info@school.edu  │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                         │
│    © 2026 SchoolHub Academy. All rights reserved.                      │
│                                                                         │
│    Privacy Policy  •  Terms of Use  •  Cookie Settings                 │
│                                                                         │
│                    [f] [tw] [in] [yt]                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Main Footer Section

### Container

| Property | Value |
|----------|-------|
| Background | Navy-900 |
| Padding top | 64px (desktop), 48px (mobile) |
| Padding bottom | 32px |

### Content Grid

```css
.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
}
```

---

## Brand Column

### Logo

| Property | Value |
|----------|-------|
| Max height | 48px |
| Filter | Brightness for white version |
| Margin bottom | 20px |

### Tagline

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 15px |
| Weight | 400 |
| Color | Navy-300 |
| Line height | 1.6 |
| Max width | 280px |

### Newsletter Signup (Optional)

```
┌─────────────────────────────────────────┐
│  Stay Updated                           │
│                                         │
│  ┌─────────────────────────┐ ┌──────┐  │
│  │ Enter your email        │ │  →   │  │
│  └─────────────────────────┘ └──────┘  │
└─────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Input bg | Navy-800 |
| Input border | 1px solid Navy-700 |
| Input text | White |
| Input placeholder | Navy-400 |
| Button bg | Gold-500 |
| Button icon | Arrow right, Navy-900 |
| Border radius | 6px |

---

## Navigation Columns

### Column Header

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 14px |
| Weight | 600 |
| Color | Gold-500 |
| Text transform | Uppercase |
| Letter spacing | 0.1em |
| Margin bottom | 20px |

### Navigation Links

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 15px |
| Weight | 400 |
| Color | Navy-200 |
| Line height | 1.4 |
| Margin bottom | 12px |
| Text decoration | None |

### Link Hover State

| Property | Value |
|----------|-------|
| Color | White |
| Text decoration | None |
| Transition | color 200ms ease |

### Link with Bullet (Optional)

```css
.footer-link::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background: var(--gold-500);
  border-radius: 50%;
  margin-right: 10px;
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.2s, transform 0.2s;
}

.footer-link:hover::before {
  opacity: 1;
  transform: translateX(0);
}
```

---

## Contact Column

### Address Block

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 15px |
| Color | Navy-200 |
| Line height | 1.7 |
| Margin bottom | 16px |

### Contact Items

```html
<div class="contact-item">
  <PhoneIcon /> +1 (555) 123-4567
</div>
<div class="contact-item">
  <EmailIcon /> admissions@schoolhub.edu
</div>
```

| Property | Value |
|----------|-------|
| Icon size | 18px |
| Icon color | Gold-500 |
| Icon margin right | 10px |
| Text color | Navy-200 |
| Hover text | White |

---

## Bottom Bar

### Separator

| Property | Value |
|----------|-------|
| Border top | 1px solid Navy-700 |
| Margin top | 48px |
| Padding top | 32px |

### Layout

```css
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
```

### Copyright

| Property | Value |
|----------|-------|
| Font | Source Sans 3 |
| Size | 14px |
| Weight | 400 |
| Color | Navy-400 |

### Legal Links

| Property | Value |
|----------|-------|
| Display | Flex, gap 24px |
| Font | Source Sans 3, 14px |
| Color | Navy-400 |
| Separator | " • " or "|" |
| Hover | Navy-200 |

---

## Social Links

### Container

| Property | Value |
|----------|-------|
| Display | Flex |
| Gap | 12px |
| Align items | Center |

### Social Icon Button

| Property | Value |
|----------|-------|
| Size | 40px × 40px |
| Background | Navy-800 |
| Border | 1px solid Navy-700 |
| Border radius | 50% |
| Icon size | 18px |
| Icon color | Navy-200 |
| Transition | all 200ms ease |

### Hover State

| Property | Value |
|----------|-------|
| Background | Gold-500 |
| Border color | Gold-500 |
| Icon color | Navy-900 |
| Transform | translateY(-2px) |

---

## Dark Mode Variant

If implementing dark mode toggle, footer remains largely unchanged but may need:

| Element | Adjustment |
|---------|------------|
| Borders | Navy-600 instead of Navy-700 |
| Subtle text | Navy-350 instead of Navy-400 |

---

## Sticky Footer Layout

Ensure footer stays at bottom on short pages:

```css
html, body {
  height: 100%;
}

#__next {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

main {
  flex: 1;
}

footer {
  flex-shrink: 0;
}
```

---

## Component API (React)

```typescript
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  address: string[];
  phone?: string;
  email?: string;
}

interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';
  href: string;
}

interface FooterProps {
  logo: {
    src: string;
    alt: string;
    href?: string;
  };
  tagline?: string;
  columns: FooterColumn[];
  contact?: ContactInfo;
  socialLinks?: SocialLink[];
  legalLinks?: FooterLink[];
  copyright?: string;
  newsletter?: {
    title: string;
    placeholder: string;
    onSubmit: (email: string) => void;
  };
  className?: string;
}
```

---

## Usage Example

```tsx
<Footer
  logo={{
    src: "/logo-white.svg",
    alt: "SchoolHub Academy"
  }}
  tagline="Empowering future leaders through academic excellence and holistic development since 1874."
  columns={[
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Academics", href: "/academics" },
        { label: "Admissions", href: "/admissions" },
        { label: "Campus Life", href: "/campus" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Programs",
      links: [
        { label: "Early Years", href: "/programs/early-years" },
        { label: "Primary School", href: "/programs/primary" },
        { label: "Secondary School", href: "/programs/secondary" },
        { label: "Sixth Form", href: "/programs/sixth-form" },
      ]
    }
  ]}
  contact={{
    address: [
      "123 Education Avenue",
      "Academic City, AC 12345",
      "United States"
    ],
    phone: "+1 (555) 123-4567",
    email: "admissions@schoolhub.edu"
  }}
  socialLinks={[
    { platform: "facebook", href: "https://facebook.com/schoolhub" },
    { platform: "twitter", href: "https://twitter.com/schoolhub" },
    { platform: "instagram", href: "https://instagram.com/schoolhub" },
    { platform: "linkedin", href: "https://linkedin.com/school/schoolhub" },
    { platform: "youtube", href: "https://youtube.com/schoolhub" },
  ]}
  legalLinks={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Settings", href: "#cookie-settings" },
  ]}
  copyright="© 2026 SchoolHub Academy. All rights reserved."
/>
```

---

## Accessibility

- Footer wrapped in `<footer>` landmark
- Navigation sections use `<nav>` with `aria-label`
- Social links have screen reader text
- Color contrast meets WCAG AA on dark background
- Focus states visible on all interactive elements

---

## CSS Variables

```css
/* Footer Variables */
--footer-bg: var(--navy-900);
--footer-padding-top: 64px;
--footer-padding-bottom: 32px;

--footer-heading-color: var(--gold-500);
--footer-text-color: var(--navy-200);
--footer-text-muted: var(--navy-400);
--footer-link-hover: white;

--footer-border-color: var(--navy-700);
--footer-input-bg: var(--navy-800);

--footer-social-size: 40px;
--footer-social-bg: var(--navy-800);
--footer-social-bg-hover: var(--gold-500);
--footer-social-color: var(--navy-200);
--footer-social-color-hover: var(--navy-900);

--footer-column-gap: 48px;
--footer-link-gap: 12px;
```
