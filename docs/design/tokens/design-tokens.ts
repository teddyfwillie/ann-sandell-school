/**
 * SchoolHub Design System - Design Tokens
 *
 * A comprehensive token system for an educational institution website
 * featuring a refined academic aesthetic with navy blue and gold accents.
 *
 * Typography: Playfair Display (serif) for headings, Source Sans 3 for body
 * Color Philosophy: Deep scholarly navy with warm gold highlights
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Primary Palette - Academic Navy
  primary: {
    50: '#E8EBF0',
    100: '#C5CDD9',
    200: '#9FAFC2',
    300: '#7991AB',
    400: '#5D7B9A',
    500: '#416589',
    600: '#385A7D',
    700: '#2D4A6A',
    800: '#233B58',
    900: '#0D1B2A', // Primary brand color
    950: '#080F18',
  },

  // Accent Palette - Scholarly Gold
  accent: {
    50: '#FEF9E7',
    100: '#FCF0C3',
    200: '#FAE69B',
    300: '#F8DC73',
    400: '#F6D455',
    500: '#F4B41A', // Primary accent
    600: '#DCA016',
    700: '#B88312',
    800: '#94670E',
    900: '#6B4A0A',
    950: '#3D2A06',
  },

  // Neutral Palette - Warm Grays
  neutral: {
    0: '#FFFFFF',
    50: '#FAFBFC',
    100: '#F4F6F8',
    200: '#E9EDF2',
    300: '#D5DCE4',
    400: '#B8C4D1',
    500: '#8C9BAD',
    600: '#64748B',
    700: '#475569',
    800: '#334155',
    900: '#1E293B',
    950: '#0F172A',
  },

  // Semantic Colors
  semantic: {
    success: {
      light: '#D1FAE5',
      main: '#10B981',
      dark: '#047857',
    },
    warning: {
      light: '#FEF3C7',
      main: '#F59E0B',
      dark: '#B45309',
    },
    error: {
      light: '#FEE2E2',
      main: '#EF4444',
      dark: '#B91C1C',
    },
    info: {
      light: '#DBEAFE',
      main: '#3B82F6',
      dark: '#1D4ED8',
    },
  },

  // Overlay Colors
  overlay: {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(13, 27, 42, 0.85)',
    gold: 'rgba(244, 180, 26, 0.15)',
  },
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    display: '"Playfair Display", Georgia, "Times New Roman", serif',
    body: '"Source Sans 3", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  },

  // Font Sizes (rem-based for accessibility)
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
  },

  // Font Weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.15,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.625,
    loose: 1.8,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.15em',
  },

  // Predefined Text Styles
  textStyles: {
    // Display headings (for heroes and large sections)
    displayLarge: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '4.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    displayMedium: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3.75rem',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.015em',
    },
    displaySmall: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },

    // Headings
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.005em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.45,
    },

    // Body text
    bodyLarge: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    bodyBase: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    bodySmall: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },

    // UI text
    label: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
    caption: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    overline: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: '0.9375rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '0.02em',
    },
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export const spacing = {
  // Base spacing scale (4px base unit)
  0: '0',
  px: '1px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px

  // Semantic spacing
  section: {
    xs: '3rem',     // 48px - compact sections
    sm: '4rem',     // 64px - small sections
    md: '6rem',     // 96px - medium sections
    lg: '8rem',     // 128px - large sections
    xl: '10rem',    // 160px - extra large sections
  },

  // Container padding
  container: {
    xs: '1rem',     // 16px
    sm: '1.5rem',   // 24px
    md: '2rem',     // 32px
    lg: '3rem',     // 48px
    xl: '4rem',     // 64px
  },

  // Component internal spacing
  component: {
    xs: '0.5rem',   // 8px
    sm: '0.75rem',  // 12px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
  },
} as const;

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export const layout = {
  // Container max widths
  container: {
    xs: '20rem',    // 320px
    sm: '24rem',    // 384px
    md: '28rem',    // 448px
    lg: '32rem',    // 512px
    xl: '36rem',    // 576px
    '2xl': '42rem', // 672px
    '3xl': '48rem', // 768px
    '4xl': '56rem', // 896px
    '5xl': '64rem', // 1024px
    '6xl': '72rem', // 1152px
    '7xl': '80rem', // 1280px
    full: '100%',
    prose: '65ch',
  },

  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index scale
  zIndex: {
    behind: -1,
    base: 0,
    raised: 10,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    popover: 500,
    toast: 600,
    tooltip: 700,
  },

  // Grid
  grid: {
    columns: 12,
    gutter: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
    },
  },
} as const;

// ============================================================================
// BORDER TOKENS
// ============================================================================

export const borders = {
  // Border widths
  width: {
    none: '0',
    thin: '1px',
    medium: '2px',
    thick: '3px',
    heavy: '4px',
    accent: '5px',
  },

  // Border radius
  radius: {
    none: '0',
    xs: '0.125rem',   // 2px
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Border styles (commonly used combinations)
  styles: {
    default: '1px solid',
    accent: '3px solid',
    decorative: '5px solid',
  },
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadows = {
  // Elevation shadows
  none: 'none',
  xs: '0 1px 2px 0 rgba(13, 27, 42, 0.05)',
  sm: '0 1px 3px 0 rgba(13, 27, 42, 0.1), 0 1px 2px -1px rgba(13, 27, 42, 0.1)',
  md: '0 4px 6px -1px rgba(13, 27, 42, 0.1), 0 2px 4px -2px rgba(13, 27, 42, 0.1)',
  lg: '0 10px 15px -3px rgba(13, 27, 42, 0.1), 0 4px 6px -4px rgba(13, 27, 42, 0.1)',
  xl: '0 20px 25px -5px rgba(13, 27, 42, 0.1), 0 8px 10px -6px rgba(13, 27, 42, 0.1)',
  '2xl': '0 25px 50px -12px rgba(13, 27, 42, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(13, 27, 42, 0.06)',

  // Card shadows
  card: {
    rest: '0 1px 3px rgba(13, 27, 42, 0.08), 0 4px 12px rgba(13, 27, 42, 0.05)',
    hover: '0 4px 12px rgba(13, 27, 42, 0.12), 0 8px 24px rgba(13, 27, 42, 0.08)',
    active: '0 2px 8px rgba(13, 27, 42, 0.1)',
  },

  // Button shadows
  button: {
    primary: '0 4px 14px rgba(13, 27, 42, 0.25)',
    accent: '0 4px 14px rgba(244, 180, 26, 0.35)',
  },

  // Special effects
  glow: {
    gold: '0 0 20px rgba(244, 180, 26, 0.3)',
    navy: '0 0 20px rgba(13, 27, 42, 0.2)',
  },

  // Text shadows
  text: {
    subtle: '0 1px 2px rgba(13, 27, 42, 0.1)',
    onImage: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
} as const;

// ============================================================================
// TRANSITION TOKENS
// ============================================================================

export const transitions = {
  // Durations
  duration: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    moderate: '300ms',
    slow: '400ms',
    slower: '500ms',
    deliberate: '700ms',
  },

  // Easing functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Custom refined easings
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elegant: 'cubic-bezier(0.23, 1, 0.32, 1)',
    snappy: 'cubic-bezier(0.5, 0, 0.1, 1)',
  },

  // Predefined transitions
  presets: {
    default: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: '300ms cubic-bezier(0.23, 1, 0.32, 1)',
    fade: '200ms ease-out',
    slide: '300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
    scale: '200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animations = {
  // Keyframe definitions (for use with CSS @keyframes)
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeInUp: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInDown: {
      from: { opacity: 0, transform: 'translateY(-20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    slideInLeft: {
      from: { opacity: 0, transform: 'translateX(-30px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    slideInRight: {
      from: { opacity: 0, transform: 'translateX(30px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
      from: { opacity: 0, transform: 'scale(0.95)' },
      to: { opacity: 1, transform: 'scale(1)' },
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },

  // Animation presets
  presets: {
    fadeIn: 'fadeIn 0.3s ease-out forwards',
    fadeInUp: 'fadeInUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    fadeInDown: 'fadeInDown 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    slideInLeft: 'slideInLeft 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    slideInRight: 'slideInRight 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    scaleIn: 'scaleIn 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards',
  },

  // Stagger delays for sequential animations
  stagger: {
    fast: '50ms',
    normal: '100ms',
    slow: '150ms',
  },
} as const;

// ============================================================================
// EFFECTS TOKENS
// ============================================================================

export const effects = {
  // Blur values
  blur: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '40px',
  },

  // Backdrop blur
  backdropBlur: {
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
    xl: 'blur(24px)',
  },

  // Gradients
  gradients: {
    // Primary gradients
    navyToBlack: 'linear-gradient(180deg, #0D1B2A 0%, #080F18 100%)',
    goldShimmer: 'linear-gradient(90deg, #DCA016 0%, #F4B41A 50%, #DCA016 100%)',

    // Hero overlays
    heroOverlay: 'linear-gradient(180deg, rgba(13, 27, 42, 0.4) 0%, rgba(13, 27, 42, 0.8) 100%)',
    heroRadial: 'radial-gradient(ellipse at center top, rgba(244, 180, 26, 0.15) 0%, transparent 60%)',

    // Background gradients
    subtleWarm: 'linear-gradient(180deg, #FAFBFC 0%, #F4F6F8 100%)',
    subtleCool: 'linear-gradient(180deg, #F4F6F8 0%, #E9EDF2 100%)',

    // Card gradients
    cardShine: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',

    // Text gradients (for special headings)
    goldText: 'linear-gradient(90deg, #B88312 0%, #F4B41A 50%, #B88312 100%)',
  },

  // Glass morphism
  glass: {
    light: {
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    dark: {
      background: 'rgba(13, 27, 42, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

export const components = {
  // Button variants
  button: {
    sizes: {
      sm: { height: '2rem', padding: '0 0.75rem', fontSize: '0.8125rem' },
      md: { height: '2.5rem', padding: '0 1rem', fontSize: '0.875rem' },
      lg: { height: '3rem', padding: '0 1.5rem', fontSize: '0.9375rem' },
      xl: { height: '3.5rem', padding: '0 2rem', fontSize: '1rem' },
    },
    iconSizes: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
  },

  // Card variants
  card: {
    padding: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
    radius: '0.75rem',
  },

  // Input/Form elements
  input: {
    height: {
      sm: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
    padding: {
      sm: '0 0.5rem',
      md: '0 0.75rem',
      lg: '0 1rem',
    },
    radius: '0.375rem',
  },

  // Navigation
  nav: {
    height: {
      desktop: '5rem',
      mobile: '4rem',
    },
    itemPadding: '0.75rem 1rem',
  },

  // Hero sections
  hero: {
    minHeight: {
      sm: '400px',
      md: '500px',
      lg: '600px',
      xl: '700px',
      full: '100vh',
    },
    contentMaxWidth: '800px',
  },

  // Footer
  footer: {
    padding: {
      desktop: '4rem 0 2rem',
      mobile: '3rem 0 1.5rem',
    },
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const designTokens = {
  colors,
  typography,
  spacing,
  layout,
  borders,
  shadows,
  transitions,
  animations,
  effects,
  components,
} as const;

export type DesignTokens = typeof designTokens;
export default designTokens;
