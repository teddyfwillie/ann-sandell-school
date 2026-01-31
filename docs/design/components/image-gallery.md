# Image Gallery Component

> Showcase campus, events, and student life through curated photo collections

---

## Overview

The image gallery displays photos in visually dynamic layouts. It supports masonry, grid, and carousel formats, with lightbox functionality for full-screen viewing.

## Variants

1. **Grid Gallery** — Uniform grid of images
2. **Masonry Gallery** — Pinterest-style varied heights
3. **Featured Gallery** — Large hero + supporting images
4. **Carousel Gallery** — Horizontal scrolling slider

---

## Grid Gallery

### Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                      Our Campus Gallery                                 │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │             │  │             │  │             │  │             │   │
│  │   IMAGE 1   │  │   IMAGE 2   │  │   IMAGE 3   │  │   IMAGE 4   │   │
│  │             │  │             │  │             │  │             │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │             │  │             │  │             │  │             │   │
│  │   IMAGE 5   │  │   IMAGE 6   │  │   IMAGE 7   │  │   IMAGE 8   │   │
│  │             │  │             │  │             │  │             │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Grid | 4 columns (desktop), 3 (tablet), 2 (mobile) |
| Gap | 16px (desktop), 12px (mobile) |
| Aspect ratio | 4:3 or 1:1 (uniform) |
| Border radius | 8px |
| Overflow | Hidden |

### Image Item

| Property | Value |
|----------|-------|
| Object-fit | Cover |
| Object-position | Center |
| Cursor | Pointer (if lightbox enabled) |

### Hover State

```css
.gallery-item {
  position: relative;
  overflow: hidden;
}

.gallery-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(13, 27, 42, 0);
  transition: background 0.3s ease;
}

.gallery-item:hover::after {
  background: rgba(13, 27, 42, 0.3);
}

.gallery-item img {
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.gallery-item:hover img {
  transform: scale(1.05);
}
```

### Expand Icon (on hover)

```css
.gallery-item .expand-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
  color: white;
  font-size: 24px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10;
}

.gallery-item:hover .expand-icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
```

---

## Masonry Gallery

### Layout

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐             │
│  │           │  │           │  │           │             │
│  │   TALL    │  │   SHORT   │  │   MEDIUM  │             │
│  │   IMAGE   │  │           │  │   IMAGE   │             │
│  │           │  └───────────┘  │           │             │
│  │           │  ┌───────────┐  └───────────┘             │
│  │           │  │           │  ┌───────────┐             │
│  └───────────┘  │   MEDIUM  │  │           │             │
│  ┌───────────┐  │   IMAGE   │  │   TALL    │             │
│  │   SHORT   │  │           │  │   IMAGE   │             │
│  │           │  └───────────┘  │           │             │
│  └───────────┘                 │           │             │
│                                └───────────┘             │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

### CSS Grid Implementation

```css
.masonry-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 16px;
}

.masonry-item.tall {
  grid-row: span 2;
}

.masonry-item.wide {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .masonry-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
}
```

---

## Featured Gallery

### Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ┌─────────────────────────────────────┐  ┌─────────────┐              │
│  │                                     │  │             │              │
│  │                                     │  │   IMAGE 2   │              │
│  │                                     │  │             │              │
│  │          FEATURED IMAGE             │  └─────────────┘              │
│  │               (large)               │  ┌─────────────┐              │
│  │                                     │  │             │              │
│  │                                     │  │   IMAGE 3   │              │
│  │                                     │  │             │              │
│  └─────────────────────────────────────┘  └─────────────┘              │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │   IMAGE 4   │  │   IMAGE 5   │  │   IMAGE 6   │  │   IMAGE 7   │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Grid Structure

```css
.featured-gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr auto;
  gap: 16px;
}

.featured-gallery .main {
  grid-row: span 2;
}

.featured-gallery .secondary-row {
  grid-column: span 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
```

---

## Carousel Gallery

### Anatomy

```
           ←                                                    →
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────  │  │
│  │  │             │  │             │  │             │  │           │  │
│  │  │   IMAGE 1   │  │   IMAGE 2   │  │   IMAGE 3   │  │   IMAGE   │  │
│  │  │             │  │             │  │             │  │     4     │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────  │  │
│                                                                        │
│                          ● ○ ○ ○ ○                                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Overflow | Hidden, scroll-snap |
| Scroll behavior | Smooth |
| Snap type | x mandatory |
| Snap align | Start |
| Gap | 16px |
| Padding | 0 calc((100% - container) / 2) |

### Navigation Arrows

| Property | Value |
|----------|-------|
| Size | 48px × 48px |
| Background | White |
| Border | 1px solid Navy-100 |
| Border radius | 50% |
| Shadow | shadow-md |
| Position | Absolute, vertically centered |
| Icon | Chevron, 20px, Navy-700 |
| Hover | Navy-50 background |
| Disabled | 50% opacity |

### Pagination Dots

| Property | Value |
|----------|-------|
| Dot size | 8px |
| Dot gap | 8px |
| Active | Gold-500, 10px |
| Inactive | Navy-300 |
| Transition | 200ms ease |

---

## Lightbox Modal

### Overlay

| Property | Value |
|----------|-------|
| Background | Navy-900 @ 95% opacity |
| Backdrop filter | blur(4px) |
| Z-index | 500 |
| Animation | Fade in 200ms |

### Image Container

| Property | Value |
|----------|-------|
| Max width | 90vw |
| Max height | 85vh |
| Object-fit | Contain |
| Border radius | 8px |
| Animation | Scale from 0.9, fade in |

### Controls

| Property | Value |
|----------|-------|
| Close button | Top-right, 48px, X icon |
| Prev/Next | Side arrows, 48px |
| Counter | "3 / 12", bottom center |
| Color | White |
| Hover | Gold-500 |

### Keyboard Navigation

- **Escape**: Close lightbox
- **Left Arrow**: Previous image
- **Right Arrow**: Next image

---

## Filtering (Optional)

### Filter Pills

```
[ All ]  [ Campus ]  [ Events ]  [ Student Life ]  [ Athletics ]
   ↑
 Active
```

| Property | Value |
|----------|-------|
| Container | Flex, gap 12px, margin-bottom 32px |
| Pill padding | 8px 16px |
| Pill font | Source Sans 3, 14px, Medium |
| Inactive | Navy-100 bg, Navy-700 text |
| Active | Gold-500 bg, Navy-900 text |
| Hover | Navy-200 bg |
| Border radius | full (9999px) |
| Transition | 200ms ease |

---

## Animation

### Staggered Load

```css
.gallery-item {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-item.loaded {
  animation: fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.gallery-item:nth-child(1).loaded { animation-delay: 0ms; }
.gallery-item:nth-child(2).loaded { animation-delay: 50ms; }
.gallery-item:nth-child(3).loaded { animation-delay: 100ms; }
/* ... continue pattern */
```

### Filter Transition

```css
.gallery-item.filtering {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.gallery-item.hidden {
  opacity: 0;
  transform: scale(0.9);
  pointer-events: none;
}
```

---

## Component API (React)

```typescript
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  category?: string;
  caption?: string;
}

interface ImageGalleryProps {
  title?: string;
  subtitle?: string;
  images: GalleryImage[];
  variant: 'grid' | 'masonry' | 'featured' | 'carousel';
  columns?: 2 | 3 | 4;
  aspectRatio?: '1:1' | '4:3' | '16:9';
  enableLightbox?: boolean;
  enableFilters?: boolean;
  categories?: string[];
  className?: string;
}
```

---

## Usage Example

```tsx
<ImageGallery
  title="Campus Gallery"
  subtitle="Explore our beautiful facilities"
  variant="masonry"
  enableLightbox
  enableFilters
  categories={["All", "Campus", "Events", "Student Life"]}
  images={[
    {
      id: "1",
      src: "/images/gallery/campus-1.jpg",
      alt: "Main building exterior",
      category: "Campus"
    },
    {
      id: "2",
      src: "/images/gallery/event-1.jpg",
      alt: "Graduation ceremony",
      category: "Events"
    },
    // ... more images
  ]}
/>
```

---

## Performance Considerations

- Use `loading="lazy"` for images below fold
- Implement progressive image loading (blur-up)
- Use srcset for responsive images
- Consider WebP format with JPEG fallback
- Virtualize long galleries (>50 images)

---

## Accessibility

- All images have descriptive `alt` text
- Lightbox traps focus when open
- Escape closes lightbox
- Arrow keys navigate in lightbox
- Filter buttons use `aria-pressed`
- Announce filter results to screen readers

---

## CSS Variables

```css
/* Gallery Variables */
--gallery-gap: 16px;
--gallery-radius: 8px;
--gallery-columns-desktop: 4;
--gallery-columns-tablet: 3;
--gallery-columns-mobile: 2;

--gallery-overlay: rgba(13, 27, 42, 0.3);
--gallery-lightbox-bg: rgba(13, 27, 42, 0.95);

--gallery-nav-size: 48px;
--gallery-nav-bg: white;
--gallery-nav-border: var(--navy-100);

--gallery-dot-size: 8px;
--gallery-dot-active: var(--gold-500);
--gallery-dot-inactive: var(--navy-300);
```
